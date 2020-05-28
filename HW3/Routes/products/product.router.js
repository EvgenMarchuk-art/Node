const productRouter = require('express').Router();

const {productController} = require('../../controllers');

const {isProductExist, isProductValid}= require('../../middlewar');

productRouter.get('/', productController.getProducts);


productRouter.get('/:id', isProductExist, productController.getProduct);
productRouter.post('/',isProductValid, productController.createProduct);
productRouter.put('/:id', isProductExist, isProductValid, productController.updateProduct);
productRouter.delete('/:id', isProductExist, productController.deleteProduct);




module.exports =  productRouter;
