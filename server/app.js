const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

// const Refrigerator = require('./models/Refrigerator');
const Ingredient = require('./models/Ingredient');

const app = express();
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://127.0.0.1:3000" }));

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('몽고DB 연결 성공'))
  .catch(err => console.error(err));


//Ingredients

app.post('/ingredients', async (req, res) => {
    const newIngredient = new Ingredient(req.body);
    await newIngredient.save();
    res.json(newIngredient);
    });

app.get('/ingredients', async (req, res) => {
    const ingredients = await Ingredient.find({});
    res.json(ingredients);
});

app.put('/ingredients/:id', async (req, res) => {
    const updatedIngredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(updatedIngredient);
    });

app.delete('/ingredients/:id', async (req, res) => {
    const result = await Ingredient.findByIdAndRemove(req.params.id);
    res.json(result);
    });

app.listen(3000, () => console.log('서버가 3000번 포트에서 실행 중입니다.'));