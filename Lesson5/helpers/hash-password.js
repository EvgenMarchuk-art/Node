const bcrypt = require('bcrypt');

module.exports = async (password) => {

    const hashedPass = await bcrypt.hash(password, 10)


};