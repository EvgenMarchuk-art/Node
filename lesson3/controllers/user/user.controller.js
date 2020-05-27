const {userService}= require('../../Services')

module.exports ={

    getAllUsers: async (req,res)=>{
        const users = await userService.getUsers()
        res.render('users', {users})
    },

    updateUser:(req,res)=>{

        console.log(req.body)
        res.json(' PUT users')
    },

    deleteUser:(req,res)=>{

        const params = req.params
        const query = req.query
        res.json({params, query})
    },

    createUser: async (req,res)=>{

        console.log(req.body)
        await  userService.createUser(req.body)
        res.redirect('/users')
    }

};
