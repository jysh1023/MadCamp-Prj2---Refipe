import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import axios from "axios";
import Fridge from './FridgeScreen';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
import { error } from 'console';
import SelectDropdown from 'react-native-select-dropdown';

const AddItemDetails = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState('');

  const [filled, setFilled] = useState(false);
  const categories = ["과일", "채소", "쌀/잡곡", "견과/건과", "축산/계란", "수산물/건어물", "생수/음료", "커피/원두/차",
                      "과자/초콜릿/시리얼", "면/통조림/가공식품", "찬/간편식/대용식", "냉장/냉동/간편요리", "유제품/아이스크림",
                      "가루/조미료/오일", "장/소스/드레싱/식초"]

  // 식재료 추가하기 수정 부탁!
  const handleSubmit = async() => {
    if (itemName === '' || itemDate === '' || itemQuantity === 0 || itemCategory === '') {
      alert('All fields are required');
      return;
    } else {
      try{
        await axios.post('http://172.10.5.72:80/ingredients',{
        name : itemName,
        date : itemDate,
        quantity : itemQuantity,
        category : itemCategory
      }).then(res => {
        console.log(res.data);})
        .catch(err => console.error(err));
        alert("재료 추가 완료")
        navigation.navigate('Home');

      } catch (error) {
        alert(error)
      }
    }
  };

  return (

    <View style={styles.container}>
      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>식재료</Text>
        <TextInput
          style={styles.itemInput}
          value={itemName}
          onChangeText={text => {
            setItemName(text);
            setFilled(true)
          }}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          value={itemDate}
          onChangeText={text => {
            setItemDate(text);
            setFilled(true)
          }}
          autoComplete="off"
          keyboardType="numeric"
          placeholder="예: 2023-07-10"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>개수</Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={text => {
            setItemQuantity(Number(text));
            setFilled(true)
          }}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>분류</Text>
        <SelectDropdown
          data={categories}
          onSelect={(selectedItem, index) => {
            setItemCategory(selectedItem);
            setFilled(true)
          }}
          defaultButtonText={'식품목을 고르세요'}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          // renderDropdownIcon={isOpened => {
          //   return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
          // }}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
        {/* <TextInput
          style={styles.itemInput}
          value={itemCategory}
          onChangeText={text => {
            setItemCategory(text);
            setFilled(true)
          }}
          autoComplete="off"
        /> */}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.outlinedButton}
          activeOpacity={0.5}
          onPress={() => { navigation.pop()}}>
          <Text style={{color: '#46B2B2', fontSize: 15, fontWeight: 'bold'}}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={filled === false? styles.outlinedButton : styles.filledButton}
          activeOpacity={0.5}
          onPress={async() => await handleSubmit()} >
          <Text style={filled === false
            ? {color: '#46B2B2', fontSize: 15, fontWeight: 'bold'}
            : {color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>
          확인</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: '#8e93a1',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  filledButton: {
    height: 35,
    width: 170,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#46B2B2',
    borderRadius: 20,
    margin: 10,
  },
  outlinedButton: {
    height: 35,
    width: 170,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#fff',
    borderColor: '#46B2B2',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default AddItemDetails;
