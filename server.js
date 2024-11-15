
const express = require('express');

const app = express();

const port =3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const uri = 'mongodb+srv://Huynv:Huy0409@cluster0.77mq5.mongodb.net/API_md19304';

const mongoose = require('mongoose');

const carModel = require('./carModel')

app.get('/', async (req, res) =>{
    await mongoose.connect(uri);

    let cars = await carModel.find();

    console.log(cars);
    res.send(cars);
    
})


app.get('/add_xe', async (req, res) =>{
    await mongoose.connect(uri);

    let car ={
        ten: 'xe 3',
        namSX: 2024,
        hang: 'Mitsubishi',
        gia: 7500
    }

    let kq =carModel.create(car);
    console.log(kq);
    let cars = await carModel.find();

    console.log(cars);
    res.send(cars);
})