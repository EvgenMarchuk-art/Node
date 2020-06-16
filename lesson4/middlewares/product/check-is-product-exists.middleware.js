
const{productService} = require('../../Services')

module.exports =  async (req, res, next )=>{

    const{productId} = req.params;

    if(+productId < 0){
       return  res.status(400).json({message:'Wrong ID'})
    }

    const product = productService.getProductById(productId);

    if(!product){
        return  res.sendStatus(404)
    }

    req.product = product;

    next();

}