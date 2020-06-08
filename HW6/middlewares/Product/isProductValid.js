const Joi = require('joi');

const {
    responseStatusCodeEnum: {BAD_REQUEST},
    responseCustomErrorEnum: {NOT_VALID}
} = require('../../constants');
const {ErrorHandler} = require('../../errors');
const {productValidator: {newProductSchema}} = require('../../validators');


module.exports = async (req, res, next) => {
    try {
        const product = req.body;
        const {error} = Joi.validate(product, newProductSchema);

        if (error) return next(new ErrorHandler(error.details[0].message, BAD_REQUEST, NOT_VALID.customCode));

        next();
    } catch (e) {
        next(e);
    }
};