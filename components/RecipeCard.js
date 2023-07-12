import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text, Dimensions, TouchableOpacity, Linking} from "react-native";

const itemCard = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => Linking.openURL(item.url)}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: `http://172.10.5.72${decodeURIComponent(item.imagepath)}` }} style={styles.imageStyle} />
      </View>
      <Text style={styles.titleStyle}>{item.title}</Text>
      <Text style={styles.subtitleStyle}>{item.keyword}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 200,
    marginBottom: 10,
    elevation: 2,
    alignContent: 'center',
    margin:7,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  imageContainer: {
    flex: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10
  },
  subtitleStyle: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 10
  },
});

export default itemCard;