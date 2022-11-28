const router = require('express').Router();
const {addproduct,deleteProduct,updateproduct,getData,getDatabyId} = require ('../controllers/products.controllers');


router.post('/addProduct',addproduct);
router.delete('/deleteProduct/:id',deleteProduct);
router.patch('/updatedata/:id',updateproduct);
router.get('/getData',getData);
router.get('/getDatabyId/:id',getDatabyId);

module.exports = router;