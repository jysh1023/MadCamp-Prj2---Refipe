import React from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";


const RecipeCard = ({item}) => {
  return (
    <View>
      {/* <Image source={require(item.path)} style={styles.imageStyle} />
      <Text style={styles.titleStyle}> {item.name} </Text>
      <Text style={styles.subtitleStyle}> {item.ingredients}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').width * 0.7,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageStyle: {
    width: 100,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitleStyle: {
    fontSize: 13
  }

})

export default RecipeCard;