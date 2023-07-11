import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const IngredientDetail = ({navigation, item}) => {

  const [itemName, setItemName] = useState(item.name);
  const [itemDate, setItemDate] = useState(item.date);
  const [itemQuantity, setItemQuantity] = useState(item.quantity);
  const [itemCategory, setItemCategory] = useState(item.category);


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
          title={itemName}
          onChangeText={text => setItemName(text)}
          autoComplete="off"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>유통기한</Text>
        <TextInput
          style={styles.itemInput}
          title={itemDate}
          onChangeText={text => setItemDate(text)}
          autoComplete="off"
          keyboardType="numeric"
          placeholder="예: 2023-07-10"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>개수</Text>
        <TextInput
          style={styles.itemInput}
          title={itemQuantity}
          onChangeText={text => setItemQuantity(Number(text))}
          autoComplete="off"
          keyboardType="numeric"
        />
      </View>

      <View style={{marginHorizontal: 24}}>
        <Text style={{fontSize: 15, color: '#333'}}>분류</Text>
        <TextInput
          style={styles.itemInput}
          title={itemCategory}
          onChangeText={text => setItemCategory(text)}
          autoComplete="off"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.buttonStyle}
          title="다 먹음"
          onPress={() => {
            navigation.goBack();
            handleDelete
          }}/>
        <Button
          style={styles.buttonStyle}
          title="수정"
          onPress={() => {
            navigation.goBack();
            handleEdit
          }}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {

  }
});

export default IngredientDetail;