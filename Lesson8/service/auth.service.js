const db = require('../dataBase').getInstance();

module.exports = {
    getTokensByParams: (params) => {
        const TokenModel = db.getModel('Token');
        const UserModel = db.getModel('User');

        return TokenModel.findOne({
            where: params,
            include:[
                UserModel
            ]
        })
    },

    deleteByParams: (params) => {
        const TokenModel = db.getModel('Token');

        return TokenModel.destroy({
            where: params
        })
    },

    createTokenPair: (tokens) => {
        const TokenModel = db.getModel('Token');

        return TokenModel.create(tokens);
    }
};