import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import selectedData from '../context/SelectedData';
import { FlatList, GestureHandlerRootView} from 'react-native-gesture-handler';


function Recipe({navigation}) {

  const [recipes, setRecipes] = useState([])


  // 지민님 부탁드립니다: 메뉴 정보 받아와서 setRecipes(response.data) <-- 이런식으로 넣어주기
  // useEffect(() => {
  //   const getRecipe = async () => {

  //   }
  // })

  if (recipes.length == 0) {
    return (
      <View style={styles.container} >
        <Image source={require('../assets/background2.jpg')} style={{flex: 1, opacity: 0.4, width: 600}} />
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center', position:'absolute'}}>
          <Text style={{fontSize:19, fontWeight: 'bold', color:'#000'}}>유통기한이 임박한 재료로 요리를 해보아요!</Text>
          <TouchableOpacity
            style={styles.filledButton}
            activeOpacity={0.9}
            onPress={() => navigation.navigate('SelectIngredient')}>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>내 냉장고에서 재료 고르기 </Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  } else {
    return(
      <View style={styles.container} >
        <FlatList data={recipes} renderItem={({item})=> <RecipeCard item={item}/>} />
        <TouchableOpacity
          style={styles.filledButton}
          activeOpacity={0.9}
          onPress={async() => navigation.pop()}>
          <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>재료 다시 담기 </Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledButton: {
    height: 40,
    width: Dimensions.get('window').width * 0.7,
    justifyContent: 'center',
    alignItems:'center',
    elevation: 2,
    backgroundColor: '#46B2B2',
    borderRadius: 20,
    margin: 10,
  },

});

export default Recipe;
