require('dotenv').config();

const users = {
    validUser: {
        username: process.env.ORANGEHRM_USERNAME,
        password: process.env.ORANGEHRM_PASSWORD
    }
};

module.exports = { users };