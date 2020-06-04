const {userService} = require('../../Services');
const {hashPassword, checkHashPassword} = require('../../helpers');
const ErrorHandler = require('../../Errors/ErrorHandler')

module.exports = {
    getAllUsers: async (req, res) => {
        let users = await userService.getUsers();

        res.json(users)
        // res.render('users', {users})
    },

    updateUser: (req, res) => {
        res.end('PUT users')
    },

    deleteUser: (req, res) => {
        const params = req.params
        const query = req.query;

        res.json({params, query})
    },

    createUser: async (req, res) => {
        try {
            const user = req.body;

            const hashedPassword = await hashPassword(user.password);

            user.password = hashedPassword;


            await userService.createUser(user);
        } catch (e) {
            res.json(e)
        }

        res.end()
        // res.redirect('/users')
    },

    loginUser: async (req, res,next) => {


        const {email, password} = req.body

        const user = await userService.getUserByParams({email});

        if (!user) {
            return next (new ErrorHandler('User is not found', 404, 4041)) ;

        }

        await checkHashPassword(user.password, password);

        res.json(user);
    //    try {
    //
    //
    // } catch(e) {
    //
    //     next(e)
    //
    //     }
    }
};