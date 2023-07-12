import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Dimensions, Text } from "react-native";
import recipeData from "../context/RecipeData";
import selectedData from "../context/SelectedData";
import RecipeCard from "../components/RecipeCard";

function RecipeDataScreen({navigation}) {

  const recipes = recipeData[0]

  return(

    <View style={styles.container} >
      <FlatList data={recipes} renderItem={({item})=> <RecipeCard item={item}/>} />
      <TouchableOpacity
        style={styles.filledButton}
        activeOpacity={0.9}
        onPress={async() => {
          recipeData.pop();
          selectedData.splice();
          navigation.goBack()}}>
        <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold'}}>재료 다시 담기 </Text>
      </TouchableOpacity>
    </View>
  )
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

export default RecipeDataScreen;