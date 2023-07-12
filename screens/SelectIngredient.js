import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, Dimensions, TouchableOpacity, Text } from "react-native";
import axios from 'axios';
import ItemSelectable from "../components/Item_selectable";
import selectedData from "../context/SelectedData";
import { Button } from "@react-native-material/core";

const AppContext = React.createContext()

const SelectIngredient = ({navigation}) =>  {

  const [data, setData] = useState([]);

  // 지민님 부탁드립니다: '메뉴 추천받기' 버튼을 누르면 selectedData에 있는 재료이름을 서버로 보내누세요~
  const handleSubmit = async () => {
    if (selectedData.length <= 0) {
        alert('재료를 1개 이상으로 선택해주세요');
    } else {
        const keyword = selectedData;
        console.log(selectedData)
        
        try {
            const res = await axios.post('http://172.10.5.72:80/keywords', { keywords: keyword });
            if (res.data.message === 'Crawling Done') {
                console.log('Crawling and DB insertion successful.');
                const recipesRes = await axios.get(`http://172.10.5.72:80/recipes/${keyword}`);
                console.log(recipesRes.data);
            } else {
                console.error('Crawling and DB insertion failed.');
            }

        } catch (err) {
            console.error('An error occurred while sending the request:', err);
        }
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://172.10.5.72:80/ingredients', {});
        console.log(response.data);
        sortedData = response.data.sort((a, b) => new Date(a.date) - new Date(b.date));
        setData(sortedData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemSelectable item={item}/>} />
      <TouchableOpacity
        style={styles.filledButton}
        onPress={async() => await handleSubmit()}>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}> 레시피 추천받기 </Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  filledButton: {
    position:'absolute',
    bottom: 15,
    height: 40,
    width: '70%',
    justifyContent: 'center',
    alignItems:'center',
    elevation: 2,
    backgroundColor: '#46B2B2',
    borderRadius: 20,
    margin: 10,
  },
})

export default SelectIngredient;
