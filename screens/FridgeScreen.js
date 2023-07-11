import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Item from '../components/Item';
import axios from 'axios';

function Fridge({navigation}) {
  const [data, setData] = useState([]);

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
      <FlatList data={data} renderItem={({item}) => <Item item={item} />} />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('AddItem')}>
        <Image source={require('../assets/add.png')} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#36C1B9',
    borderRadius: 100,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
  },
});

export default Fridge;
