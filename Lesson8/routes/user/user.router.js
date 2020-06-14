const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers')
const checkUserValidity = require('../../middlewares/User/check-is-user-valid.middleware')
const {fileMiddleware} = require('../../middlewares')


userRouter.post(
    '/',
    checkUserValidity,
    fileMiddleware.fileCheckedMiddleware,
    fileMiddleware.checkUserCountMiddleware,
    userController.createUser);

userRouter.get('/', userController.getAllUsers);


userRouter.delete('/:name', userController.deleteUser);


// userRouter.get('/profile', authMiddleware.checkAccessToken, userController.getUserProfile)


module.exports = userRouter;