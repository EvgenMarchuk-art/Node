const  Product = require('../module/Product')

module.exports = async (req,res, next)=>{
    try{
      const{id} = req.params;
      const product = await  Product.findById(id);

      if(!product) throw new Error('Product id not found');

      next();
    }
catch(e){
       res.json({error:true})
    }
};