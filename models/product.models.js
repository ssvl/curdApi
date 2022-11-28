const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    name:{
        type:String,
        require:true
    },
    quntity:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    size:{
        type:String,
        require:true
    }
})

const productData = mongoose.model('productData',productShema);

module.exports = productData;