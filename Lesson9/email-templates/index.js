const {emailActionEnum} = require('../constants')

module.exports = {
    [emailActionEnum.USER_REGISTER]: {
        subject: '[NUDE SHOP] Welcome',
        templateFileName: 'welcome'
    },
    [emailActionEnum.USER_FORGOT_PASS]: {
        subject: '[NUDE SHOP] Forgot pass',
        templateFileName: 'userForgotPass'
    }
}