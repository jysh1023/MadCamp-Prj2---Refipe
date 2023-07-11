import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import axios from 'axios';
import ItemSelectable from "../components/Item_selectable";
import selectedData from "../context/SelectedData";
import { Button } from "@react-native-material/core";

const AppContext = React.createContext()

const SelectIngredient = ({navigation}) =>  {

  const [data, setData] = useState([]);

  // 지민님 부탁드립니다: '메뉴 추천받기' 버튼을 누르면 selectedData에 있는 재료이름을 서버로 보내누세요~
  const handleSubmit = async() => {
    if (selectedData <= 0) {
      Alert('재료를 1개 이상으로 선택해주세요')
    } else {

    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/ingredients', {});
        console.log(response.data);
        setData(response.data);
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
      <Button
        title='메뉴 추천받기'
        style={styles.buttonStyle}
        onPress={() => {
          handleSumit;
          navigation.goBack();}
        }/>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonStyle: {
    width: Dimensions.get('window').width * 0.9
  }
})

export default SelectIngredient;
