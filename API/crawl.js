const axios = require('axios');
const cheerio = require('cheerio');
const mongoose = require('mongoose');

const Recipe = mongoose.model('Recipe', new mongoose.Schema({
  keyword: String,
  title: String,
  materials: [String],
  url: String
}));

let total_count = 0;

const thumb_png_get = async (pic, keyword) => {
  const pic_url = pic.find("div").find("img").attr("src");
  const href_path = pic.find("div").find("a").attr("href");
  const title = pic.find("div", {"class": "common_sp_caption"}).find("div", {"class": "common_sp_caption_tit line2"}).text().trim();
  
  if (pic_url.includes("_m.jpg")) {
    const recipe = await create_json(href_path, keyword, title);
    if (recipe) {
      total_count += 1;
      return true;
    }
  } else {
    console.log("Not Thumb_png");
    return false;
  }
};

const create_json = async (href_path, keyword, title) => {
  const url_deep = `https://www.10000recipe.com/recipe/view.html?seq=${href_path.split('/')[2]}`;
  const { data } = await axios.get(url_deep);
  const $ = cheerio.load(data);
  
  const confirmed_material = $("#divConfirmedMaterialArea > ul:nth-child(1)");
  
  if (confirmed_material) {
    const material_list = confirmed_material.find("li").map((i, el) => $(el).text().split(" ")[0]).get();
    const recipe = new Recipe({ keyword, title, materials: material_list, url: url_deep });
    await recipe.save();
    return true;
  } else {
    console.log("Material not found: ", url_deep);
    return false;
  }
};

const search_with_keywords = async (keywords) => {
  for (let keyword of keywords) {
    if (total_count >= 10) break;

    let page = 1;
    let complete = 0;
    while (complete < 10) {
      try {
        if (total_count >= 10) break;

        const url = `https://www.10000recipe.com/recipe/list.html?q=${keyword}&order=date&page=${page}`;
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const total_pic = $("#contents_area_full > ul > ul");
        const list_pic = total_pic.find("li");
        if (list_pic.length === 0) break;

        for (let i = 0; i < list_pic.length; i++) {
          if (complete >= 10 || total_count >= 10) break;

          try {
            const pic = $(list_pic[i]);
            if (await thumb_png_get(pic, keyword)) {
              console.log("출력 thumb");
              complete += 1;
            }
          } catch (error) {
            console.error(error);
          }
        }

        page += 1;
      } catch {
        console.log("키워드 검색 끝");
        break;
      }
    }
  }
};

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017/mydatabase');

  const keywords = ["INPUT STRING"];
  for (let keyword of keywords) {
    const split_keywords = keyword.split(',').map(k => k.trim());
    for (let r = split_keywords.length; r > 0; r--) {
      const all_combinations = combinations(split_keywords, r).map(c => c.join(', '));
      for (let combination of all_combinations) {
        await search_with_keywords([combination]);
      }
    }
  }
};

const combinations = (elements, r) => {
  let result = [];
  const f = (prefix, elements) => {
    for (let i = 0; i < elements.length; i++) {
      result.push([...prefix, elements[i]]);
      f([...prefix, elements[i]], elements.slice(i + 1));
    }
  }
  f([], elements);
  return result.filter(c => c.length === r);
};

main().catch(console.error);
