import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from "axios";

function IngredientDetail ({navigation}){

  const route = useRoute()

  const [itemName, setItemName] = useState(route.params.name);
  const [itemDate, setItemDate] = useState(route.params.date);
  const [itemQuantity, setItemQuantity] = useState(route.params.quantity);
  const [itemCategory, setItemCategory] = useState(route.params.category);
  const [change, setChange] = useState(false);


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
          defaultValue={itemDate}
          onChangeText={text => {
            setItemDate(text)
            if (text != route.params.date) setChange(true)
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
        <TextInput
          style={styles.itemInput}
          defaultValue={itemCategory}
          onChangeText={text => {
            setItemCategory(text)
            if (text != route.params.category) setChange(true)
            else setChange(false)
          }}
          autoComplete="off"
        />
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