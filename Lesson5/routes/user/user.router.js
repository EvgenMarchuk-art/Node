
const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const CheckUserValidity = require('../../middlewares/User/check-is-user-valid.middleware');



userRouter.post('/',
    CheckUserValidity ,
    userController.createUser);

userRouter.get('/',userController.getAllUsers );

userRouter.post('/auth', userController.loginUser);

userRouter.delete('/:name', userController.deleteUser)


module.exports = userRouter;
