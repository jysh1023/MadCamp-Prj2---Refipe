const axios = require('axios');
const mongoose = require('mongoose');

// axios.post('http://localhost:3000/refrigerators', {
//   _id: new mongoose.Types.ObjectId(),
//   name: '지민이네 냉장고'
// }).then(res => {
//     refrigeratorID = res.data._id;
//     console.log(res.data);
//     }).catch(err => console.error(err));

axios.post('http://localhost:3000/ingredients', {
  _id: new mongoose.Types.ObjectId(),
  name: '오이',
  date: '2023-08-31',
  quantity: 1,
  // memo: '맛없어요',
  category: '채소'
}).then(res => {
    ingredientId = res.data._id;
    console.log(res.data);
    }).catch(err => console.error(err));


// axios.get('http://localhost:3000/ingredients', {
//   params: {
//     refrigerator: '64acd0e132c3c5fb80adec96'
//   }
// }).then(res => console.log(res.data))
//   .catch(err => console.error(err));

// axios.put(`http://localhost:3000/ingredients/${ingredientId}`, {
//   count: 15
// }).then(res => console.log(res.data))
//   .catch(err => console.error(err));

// axios.delete('http://localhost:3000/ingredients/${ingredientId}')
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));
