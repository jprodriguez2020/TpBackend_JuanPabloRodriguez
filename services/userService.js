const User = require('../models/user');
const authService = require('./authService');


const register = (email, password) => {
    return new Promise((resolve, reject) => {
        const newUser = new User({
            email,
            password,
        });
        User.findOne({email: newUser.email}, (error, user) => {
            if(error){
                reject({ status: 500,message:`Error registering user. ${error}` });
            }
            if(user){
                reject({ status: 403, message: `Email is already in use.` });            
            }
            newUser.save(error => {
                if(error){
                   reject({ status: 500,message:`Error registering user. ${error}` });
                }
                resolve({ status: 200, token: authService.createToken(newUser) });
            });
        });
    });
}

module.exports = {
    register,
}