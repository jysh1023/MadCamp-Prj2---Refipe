import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import UrgentTag from './UrgentTag';
import SafeTag from './SafeTag';
import selectedData from "../context/SelectedData";


const ItemSelectable = ({item}) => {

  const [selected, setSelect] = useState(false);

  const getDaysDifference = () => {
    const currentDate = new Date();
    const dueDate = new Date(item.date);

    // Calculate the difference in milliseconds
    const differenceMs = dueDate.getTime() - currentDate.getTime();

    // Convert the difference to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  };

  const handleSelect = () => {
    if (selected == true) {
      setSelect(false);
      let index = selectedData.indexOf(item.name);
      selectedData.splice(index);
    } else if (selected == false) {
      setSelect(true);
      selectedData.push(item.name)
    }
    console.log(selectedData);
  }

  if (getDaysDifference() <= 3) {
    return (
      <TouchableOpacity
        style={selected === false ? styles.container : styles.selectedContainer}
        activeOpacity={0.5}
        onPress={handleSelect}>
        <Image
          source={require('../assets/temp_icon.png')}
          style={styles.iconContainer}
        />
        <View style={{marginLeft: 15}}>
          <Text style={styles.nameText}> {item.name || '상품명'} </Text>
          <Text style={styles.dateText}>
            유통기한: {item.date || '유통기한'}{' '}
          </Text>
        </View>
        <UrgentTag />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity
        style={selected === false ? styles.container : styles.selectedContainer}
        activeOpacity={0.5}
        onPress={handleSelect}>
        <Image
          source={require('../assets/temp_icon.png')}
          style={styles.iconContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.nameText}> {item.name || '상품명'} </Text>
          <Text style={styles.dateText}>
            유통기한: {item.date || '유통기한'}{' '}
          </Text>
        </View>
        <SafeTag />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconContainer: {
    backgroundColor: '#36c1b9',
    borderRadius: 100,
    height: 46,
    width: 46,
    margin: 10,
  },
  textContainer: {
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 11,
  },
  selectedContainer: {
    height: 70,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#36c1b9',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  }
});

export default ItemSelectable;
