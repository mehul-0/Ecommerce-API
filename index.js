const bodyParser = require('body-parser');
const express= require('express');
const app= express();
const db=require('./config/mongoose');

app.use(bodyParser.urlencoded({extended:true}));

//
app.use('/products',require('./routes/products'));


app.listen(3000,()=>{
    console.log('API is running');
});