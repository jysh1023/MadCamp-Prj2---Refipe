import React, {useState, useEffect} from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Item from "../components/Item";
import axios from 'axios';

const SelectIngredient = () =>  {

  const [data, setData] = useState([]);
  const selectedData = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:3000/ingredients', { });
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  const handleSelect = (item) => {
   selectedData.push(item)
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedContainer: {
    backgroundColor: '#36C1B9'
  }
})

export default SelectIngredient;
