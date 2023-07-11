import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Dimensions} from 'react-native';


 function IngredientDetail ({navigation}, input){

  const [itemName, setItemName] = useState(input.name);
  const [itemDate, setItemDate] = useState(input.date);
  const [itemQuantity, setItemQuantity] = useState(input.quantity);
  const [itemCategory, setItemCategory] = useState(input.category);

  // 지민님 부탁드립니다: 현재 item을 db에서 삭제해주세요
  const handleDelete = async () => {

  }

  // 지민님 부탁드립니다: 현재 item의 수정사항을 db에 저장해주세여
  // 각 필드의 최신 값은 item~ 에 저장되어 있습니다
  const handleEdit = async () => {

  }

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>식재료</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemName}
          onChangeText={text => setItemName(text)}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemDate}
          onChangeText={text => setItemDate(text)}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>개수</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemQuantity}
          onChangeText={text => setItemQuantity(Number(text))}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>분류</Text>
        <TextInput
          style={styles.itemInput}
          defaultValue={itemCategory}
          onChangeText={text => setItemCategory(text)}
          autoComplete="off"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          title="다 먹음"
          onPress={() => {
            handleDelete;
            navigation.goBack();
          }}/>
        <Button
          style={styles.buttonStyle}
          title="수정"
          onPress={() => {
            handleEdit;
            navigation.pop();
          }}/>
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
    width: Dimensions.get('window').width * 0.90,
  },
  buttonStyle: {
    margin: 10,
  },
});

export default IngredientDetail;