const {productService} = require('../../service')

module.exports = {
    getAllProducts: async (req, res) => {
        const products = await productService.getAllProducts();

        res.json(products)
    },

    getById: async (req,res) =>{
        res.json(req.product)
    },


    deleteProduct: async (req, res) => {
        const {productId} = req.params;

       await productService.deleteByParams({id:productId})

        res.sendStatus(204);
    },

    // createUser: async (req, res) => {
    //     try {
    //         await userService.createUser(req.body);
    //     } catch (e) {
    //         res.json(e)
    //     }
    //
    //     res.end()
    //     // res.redirect('/users')
    // }
};