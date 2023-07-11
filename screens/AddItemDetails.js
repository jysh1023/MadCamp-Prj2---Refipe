import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
// import ReactNativeModalDateTimePickerProps from 'react-native-modal-datetime-picker';
import axios from "axios";
import Fridge from './FridgeScreen';
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view';
import { error } from 'console';

const AddItemDetails = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [itemDate, setItemDate] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);
  const [itemCategory, setItemCategory] = useState('');
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = () => {
  //   hideDatePicker();
  // };

  // 식재료 추가하기 수정 부탁!
  const handleSubmit = async() => {
    if (itemName === '' || itemDate === '' || itemQuantity === 0 || itemCategory === '') {
      alert('All fields are required');
      return;
    } else {
      try{
        console.log("들어왔다");
        await axios.post('http://10.0.2.2:3000/ingredients',{
        name : itemName,
        date : itemDate,
        quantity : itemQuantity,
        category : itemCategory
      }).then(res => {
        console.log(res.data);})
        .catch(err => console.error(err));
          alert("Add item successful");
          
      } catch (error) {
        alert(error)
      }
    }
  };

  // 이건 아까 코드 합치기 전에 시도 해봤던것
  // const handleSubmit = async() => {
  //   if (itemName === '' || itemDate === '' || itemQuantity === 0 || itemCategory === '') {
  //     alert('All fields are required');
  //     return;
  //   } else {
  //     try{
  //       // console.log({itemName, itemDate, itemQuantity, itemCategory});
  //       const response = await axios.post('http://10.0.2.2:8000/api/create', {itemName, itemDate, itemQuantity, itemCategory});
  //       console.log(response.data);
  //       axios.post('http://10.0.2.2:8000/api/create',
  //       {itemName, itemDate, itemQuantity, itemCategory})
  //         .then(res => {console.log(res.data);})
  //         .catch(err => console.error(err));
  //         // alert("Add item successful");
  //       } catch (error) {
  //           if (error.response) {
  //             console.error("서버에서 오류 응답: ", error.response);
  //           } else if (error.request) {
  //             console.error("서버 응답 없음: ", error.request);
  //           } else {
  //             console.error("요청 생성 중 오류: ", error.message);
  //           }
  //           console.error('Error Config: ', error.config);
  //         }
  //       };
  //   }

  return (
    // <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 15, color: '#333'}}>식재료</Text>
          <TextInput
            style={styles.itemInput}
            value={itemName}
            onChangeText={text => setItemName(text)}
            autoComplete="off"
          />
        </View>

        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 15, color: '#333'}}>유통기한</Text>
          <TextInput
            style={styles.itemInput}
            value={itemDate}
            onChangeText={text => setItemDate(text)}
            autoComplete="off"
            keyboardType="numeric"
            placeholder="예: 2023-07-10"
          />
          {/* <ReactNativeModalDateTimePickerProps
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          /> */}
        </View>

        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 15, color: '#333'}}>개수</Text>
          <TextInput
            style={styles.itemInput}
            onChangeText={text => setItemQuantity(Number(text))}
            autoComplete="off"
            keyboardType="numeric"
          />
        </View>

        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 15, color: '#333'}}>분류</Text>
          <TextInput
            style={styles.itemInput}
            value={itemCategory}
            onChangeText={text => setItemCategory(text)}
            autoComplete="off"
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button style={styles.buttonStyle} title="취소" onPress={() => navigation.goBack()}/>
          <Button style={styles.buttonStyle} title="확인" onPress={async () => {
            await handleSubmit();
            navigation.goBack();
          }} />
        </View>
      </View>
    // </KeyboardAwareScrollView>

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
    flexDirection: 'row',
  },
  buttonStyle: {
    width: 100,
    margin: 10,
  },
});

export default AddItemDetails;
