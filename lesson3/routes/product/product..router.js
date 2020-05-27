const {Router} = require('express');

const productRouter = Router();

productRouter.post('/', (req,res)=>{
    console.log(req.body)
    res.json('POST products')
});


productRouter.get('/',(req,res)=>{
    res.json(' GET products')
});


productRouter.put('/',(req,res)=>{

    console.log(req.body)
    res.json(' PUT products')
});


productRouter.delete('/:name',(req,res)=>{

    const params = req.params
    const query = req.query
    res.json({params, query})
})


module.exports = productRouter;
