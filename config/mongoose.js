const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://admin:test123@ecommerceapi.muntzhu.mongodb.net/ecommerce?retryWrites=true&w=majority');

const db= mongoose.connection;

db.on('error',console.error.bind(console,"Error in connecting"));

db.once('open', ()=>{
    console.log('Connected to Database');
});

module.exports=db;