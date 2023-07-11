import React, {useState} from 'react';
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

const Item = ({item}) => {
  const getDaysDifference = () => {
    const currentDate = new Date();
    const dueDate = new Date(item.date);

    // Calculate the difference in milliseconds
    const differenceMs = dueDate.getTime() - currentDate.getTime();

    // Convert the difference to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  };

  if (getDaysDifference() <= 3) {
    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.5}>
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
      <TouchableOpacity style={styles.container} activeOpacity={0.5}>
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
});

export default Item;
