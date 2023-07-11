/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';

const AddItem = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 10, fontStyle: 'italic'}}>
        식재료를 입력할 방식을 선택해주세요
      </Text>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.5}>
        <Image
          source={require('../assets/barcode_icon.png')}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}> 바코드 스캔하기 </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionContainer} activeOpacity={0.5}>
        <Image
          source={require('../assets/recipe_icon.png')}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}> 영수증 스캔하기 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.optionContainer}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('AddItemDetails')}>
        <Image
          source={require('../assets/input_icon.png')}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}> 직접 입력하기 </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  optionContainer: {
    height: 60,
    width: Dimensions.get('window').width * 0.9,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconStyle: {
    height: 35,
    width: 35,
    marginLeft: 15,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});

export default AddItem;
