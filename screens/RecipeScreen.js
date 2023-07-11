import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import selectedData from '../context/SelectedData';
import { FlatList } from 'react-native-gesture-handler';

function Recipe({navigation}) {

  const [recipes, setRecipes] = useState([])


  // 지민님 부탁드립니다: 메뉴 정보 받아와서 setRecipes(response.data) <-- 이런식으로 넣어주기
  useEffect(() => {
    const getRecipe = async () => {

    }
  })

  if (selectedData == 0) {
    return (
      <View style={styles.container} >
        <Button title="내 냉장고에서 재료 고르기" onPress={() => navigation.navigate("SelectIngredient")} />
      </View>
    )
  } else {
      <View style={styles.container} >
        <FlatList data={recipes} renderItem={({item})=> <RecipeCard item={item}/>} />
        <Button
          title='재료 다시 담기'
          style={styles.buttonStyle}
          onPress={() => {
            selectedData.splice();
            navigation.navigate('SelectIngredient');
            }} />
      </View>

  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Recipe;
