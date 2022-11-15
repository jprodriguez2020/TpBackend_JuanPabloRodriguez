const User = require('../models/user');
const { authService } = require('../services');
const { userService } = require('../services');
const { validationResult } = require('express-validator');


const register = async (req, res) => {
  try{
    const resultValidationReq = validationResult(req);
    const hasErrors = !resultValidationReq.isEmpty();
    const { email, password } = req.body;

    if(hasErrors){
      console.log("Error in the request.");
      return res.status(400).send(resultValidationReq);
    }
  
    const result = await userService.register(email, password).catch(error => error);
    res.status(result.status).send(result);
  }catch(error){
    res.status(500).send(error);
  }
}

const login = async (req, res) => {
    const email = req.body.email;
    if(!email){
      res.status(403).send({messsage:`Email is required.`})
    }
    User.findOne({email: email}, (error, user) => {
      if(error){
        res.status(500).send({messsage:`An error has occurred. ${error}`})
      }
      if(!user || !req.body.password || !user.comparePassword(req.body.password)){
        res.status(404).send({messsage:"The User does not exist or the Password is incorrect."})
      }
      req.user = user;
      res.status(200).send({message: "Successfully login.", token: authService.createToken(user)});
    });
  }

const sayHi = (req, res) => {
    res.status(200).send("Hi user with id " + req.user );
}

module.exports = {
    register,
    login,
    sayHi,
}