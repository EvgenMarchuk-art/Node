const router = require('express').Router();

const ProductRouter = require('./products/product.router')
const{notFoundController, } = require('../controllers');

router.use('/product', ProductRouter);
router.use('/',notFoundController);


module.exports = router;