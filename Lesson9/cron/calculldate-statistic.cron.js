const{userService} = require('../service')


module.exports = async () => {

    const newVar = await userService.getUsers();

    console.log(
        newVar.length
    )


};