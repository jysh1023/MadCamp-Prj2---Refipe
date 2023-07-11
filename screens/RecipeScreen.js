import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';

const Recipe = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://10.0.2.2:8000/api');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(data.name);
  const [items, setItems] = useState(data);

  return (
    <View style={styles.container} >
      <Button title="내 냉장고에서 재료 고르기" onPress={() => navigation.navigate("SelectIngredient")} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Recipe;
