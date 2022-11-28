require('dotenv').config();
const { findById } = require('../models/product.models');
const productShema = require('../models/product.models');
const AppError = require('../utils/appError');

const validateID = require('../utils/validateId');


exports.addproduct = async (req, res, next) => {
    const data = req.body;
    console.log(data);

    const productdata = await productShema.create(data);

    res.json({
        msg: 'data inseted succesfuly!!',
        status: 'success',
        result: productdata
    })
}


exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);


    if (!id) return (next(new ('No id is provided!!')));

    const deleteData = await productShema.findByIdAndDelete(id);
    if (!deleteData) return next(new ('no product found with us in id.', 404));

    res.json({
        msg: 'delete succesfuly!!',
        satus: 'success',
        result: deleteData
    })

}


exports.updateproduct = async (req,res,next)=>{
    const { id } = req.params;
    // console.log(id);
    const data = req.body;
    // console.log(data);

    if (!id) return (next(new ('No id is provided!!')));

    const updatedata = await productShema.findByIdAndUpdate(id,data,{ new: true, runValidators: true });
    if(!updatedata) return next(new ('no product found as id,'));

    res.json({
        msg: 'upadte succesfuly!!',
        satus: 'success',
        result: updatedata
    })
}

exports.getData = async(req,res,next)=>{


    const products = await productShema.find();
    // console.log(products)
    res.json({
        staus: 'success',
        message: 'Documents found.',
        result: products
    });
}

exports.getDatabyId = async (req, res,next) => {

    const post = await productShema.findById({ _id: req.params.id });


    res.json({  
        status: 'success',
        message: 'Dodument display successfully.',
        result: post
    });
   

}   


