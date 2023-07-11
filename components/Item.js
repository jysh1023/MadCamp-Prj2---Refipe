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
import { useNavigation } from '@react-navigation/native';

function Item ({item}) {

  const navigation = useNavigation()

  const getDaysDifference = () => {
    setImagePath();
    const currentDate = new Date();
    const dueDate = new Date(item.date);

    // Calculate the difference in milliseconds
    const differenceMs = dueDate.getTime() - currentDate.getTime();

    // Convert the difference to days
    const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

    return differenceDays;
  };

  function setImagePath() {
    if (item.category == '과일') {
      imgPath = require('../assets/category_icon/과일.png')
    } else if (item.category == '채소') {
      imgPath = require('../assets/category_icon/채소.png')
    } else if (item.category == '쌀/잡곡') {
      imgPath = require('../assets/category_icon/쌀_잡곡.png')
    } else if (item.category == '견과/건과') {
      imgPath = require('../assets/category_icon/견과_건과.png')
    } else if (item.category == '축산/계란') {
      imgPath = require('../assets/category_icon/축산_계란.png')
    } else if (item.category == '생수/음료') {
      imgPath = require('../assets/category_icon/생수_음료.png')
    } else if (item.category == '커피/원두/차') {
      imgPath = require('../assets/category_icon/커피_원두_차.png')
    } else if (item.category == '과자/초콜릿/시리얼') {
      imgPath = require('../assets/category_icon/과자_초콜릿_시리얼.png')
    } else if (item.category == '면/통조림/가공식품') {
      imgPath = require('../assets/category_icon/면_통조림_가공식품.png')
    } else if (item.category == '찬/간편식/대용식') {
      imgPath = require('../assets/category_icon/찬_간편식_대용식.png')
    } else if (item.category == '냉장/냉동/간편요리') {
      imgPath = require('../assets/category_icon/냉장_냉동_간편요리.png')
    } else if (item.category == '유제품/아이스크림') {
      imgPath = require('../assets/category_icon/유제품_아이스크림.png')
    } else if (item.category == '가루/조미료/오일') {
      imgPath = require('../assets/category_icon/가루_조미료_오일.png')
    } else if (item.category == '장/소스/드레싱/식초') {
      imgPath = require('../assets/category_icon/장_소스_드레싱_식초.png')
    } else {
      imgPath = require('../assets/temp_icon.png')
    }
  }

  if (getDaysDifference() <= 3) {
    return (
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.5}
        onPress={({navigation, item}) => navigation.navigate('IngredientDetail', item)}>
        <Image
          source={imgPath}
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
        style={styles.container}
        activeOpacity={0.5}
        onPress={({navigation, item}) => navigation.navigate('IngredientDetail', item)} >
        <Image
          source={imgPath}
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

  }
});

export default Item;
