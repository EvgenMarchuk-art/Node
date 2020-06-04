const router = require('express').Router();

const ProductRouter = require('./products/product.router')
const{notFoundController, } = require('../controllers');

router.use('/product', ProductRouter);
router.use('/',notFoundController);

router.use('*', (err,req,res,next) => res.status(err.status).json({
    message: err.message,
    code: err.customeCode,

})) ;


module.exports = router;