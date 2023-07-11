const mongoose = require('mongoose');

const Refrigerator = require('./models/Refrigerator');
const Ingredient = require('./models/Ingredient');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('몽고DB 연결 성공'))
  .catch(err => console.error(err));

const myFridge = new Refrigerator({
  _id: new mongoose.Types.ObjectId(),
  name: '내 냉장고'
});

myFridge.save()
  .then(() => console.log('냉장고 저장 성공'))
  .catch(err => console.error(err));

const myIngredient = new Ingredient({
  _id: new mongoose.Types.ObjectId(),
  productName: '사과',
  expirationDate: new Date(2023, 11, 31),
  count: 10,
  memo: '맛있어요',
  refrigerator: myFridge._id,
  category: '과일'
});

myIngredient.save()
  .then(() => console.log('재료 저장 성공'))
  .catch(err => console.error(err));

const myUser = new User({
  _id: new mongoose.Types.ObjectId(),
  name: '홍길동',
  email: 'hong@example.com',
  username: 'hong',
  password: 'password',
  googleEmail: 'hong@gmail.com',
  refrigerator: myFridge._id
});

myUser.save()
  .then(() => console.log('유저 저장 성공'))
  .catch(err => console.error(err));
