const jwt = require('jsonwebtoken');

const {wordsEnum: {JTW_SECRET}} = require('../../constants');
const {authService} = require('../../service');
const ErrorHandler = require('../../errors/ErrorHandler');

module.exports =  async (req, res, next ) => {
try{
    const token =  req.get( 'Authorization');

    if(!token){
        return  next( new ErrorHandler( 'Not  token', 400, 4002));
    }

    jwt.verify(token, JTW_SECRET, err => {

        if(err){
            throw new ErrorHandler( 'Not valid token', 401, 4001);
        }

    });


    const  tokensFromDB =  await authService.getTokensByParams({access_token: token})

    if(!tokensFromDB){
        return  next( new ErrorHandler( 'Not valid token', 401, 4001));
    }

    req.user_id = tokensFromDB.userId
    next()
}   catch (e) {
           next(e)
        }


}