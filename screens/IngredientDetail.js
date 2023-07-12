import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from "axios";
import { SelectList } from 'react-native-dropdown-select-list'

function IngredientDetail ({navigation}){

  const route = useRoute()

  const [itemName, setItemName] = useState(route.params.name);
  const [itemDate, setItemDate] = useState(route.params.date);
  const [itemQuantity, setItemQuantity] = useState(route.params.quantity);
  const [itemCategory, setItemCategory] = useState(route.params.category);
  const [change, setChange] = useState(false);

  const categories = [{key: '1', value:"과일" } ,
                      {key: '2', value:"채소" } ,
                      {key: '3', value: "쌀/잡곡" } ,
                      {key: '4', value: "견과/건과"} ,
                      {key: '5', value: "축산/계란" } ,
                      {key: '6', value: "수산물/건어물" } ,
                      {key: '7', value: "생수/음료"} ,
                      {key: '8', value: "커피/원두/차"} ,
                      {key: '9', value: "과자/초콜릿/시리얼" } ,
                      {key: '10', value: "면/통조림/가공식품"} ,
                      {key: '11', value: "찬/간편식/대용식"} ,
                      {key: '12', value: "냉장/냉동/간편요리"} ,
                      {key: '13', value: "유제품/아이스크림"} ,
                      {key: '14', value: "가루/조미료/오일"} ,
                      {key: '15', value: "장/소스/드레싱/식초"} ]

  const formatToDate = (input) => {
    const date = input.replace(/[^0-9]/g, '');

    let formattedDate = '';
    if (date.length > 0) {
      formattedDate += date.substr(0, 4);
    }
    if (date.length > 4) {
      formattedDate += '-' + date.substr(4, 2);
    }
    if (date.length > 6) {
      formattedDate += '-' + date.substr(6, 2);
    }
    return formattedDate;
  }

  const handleEdit = async () => {
    if (itemName === route.params.name && itemDate === route.params.date &&
      itemQuantity === route.params.quantity && itemCategory === route.params.category){
      alert('수정 사항이 없습니다!');
    } else {
      try{
        await axios.put(`http://172.10.5.72:80/ingredients/${route.params._id}`, {
          name : itemName,
          date : itemDate,
          quantity : itemQuantity,
          category : itemCategory
        }).then(res => {console.log(res.data);})
          .catch(err => console.error(err));
            alert("수정 완료");
            navigation.navigate('Home');

      } catch (error) {
        console.log(error)
      }
    }
  };

  const handleDelete = async() => {
    try{
      console.log(route.params._id);
      await axios.delete(`http://172.10.5.72:80/ingredients/${route.params._id}`)
        .then(res => {console.log(res.data);})
        .catch(err => console.error(err));
        alert("삭제 완료");
        navigation.navigate('Home');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={styles.container}>

      <View style={{marginHorizontal: 24}}>
        <Text style={styles.titleText}>식재료</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemName}
          onChangeText={text => {
            setItemName(text)
            if (text != route.params.name) setChange(true)
            else setChange(false)
          }}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={styles.titleText}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          value={itemDate}
          onChangeText={text => {
            const formattedDate = formatToDate(text);
            setItemDate(formattedDate)
            if (formattedDate != route.params.date) setChange(true)
            else setChange(false)
          }}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={styles.titleText}>개수</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemQuantity.toString()}
          onChangeText={text => {
            setItemQuantity(Number(text))
            if (text != route.params.quantity) setChange(true)
            else setChange(false)
          }}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={styles.titleText}>분류</Text>
        {/* <TextInput
          style={styles.itemInput}
          defaultValue={itemCategory}
          onChangeText={text => {
            setItemCategory(text)
            if (text != route.params.category) setChange(true)
            else setChange(false)
          }}
          autoComplete="off"
        /> */}
        <View style={{marginVertical: 15}}>
          <SelectList
            setSelected={(val) => {
              setItemCategory(val.value);
              setChange(true);
            }}
            data={categories}
            save="value"
            search={false}
            // defaultOption={categories[categories.findIndex(itemCategory)]}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.filledButton}
          activeOpacity={0.5}
          onPress={async() => await handleDelete()}>
          <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>다 먹음</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={change === false? styles.outlinedButton : styles.filledButton}
          activeOpacity={0.5}
          onPress={async() => await handleEdit()} >
          <Text style={change === false
            ? {color: '#46B2B2', fontSize: 15, fontWeight: 'bold'}
            : {color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'}}>
          수정</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

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
  titleText: {
    fontSize: 15,
    color: '#333'
  }
});

export default IngredientDetail;