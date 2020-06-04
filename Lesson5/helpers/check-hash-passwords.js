const bcrypt = require('bcrypt');

module.exports= async (hashedPassword, password)=>{

    const isPasswordEguals = await bcrypt.compare(password,hashedPassword);

    console.log('***********')
    console.log(isPasswordEguals)
    console.log('***********')

    if(!isPasswordEguals){

        throw new Error('User is not exists');


    }


}