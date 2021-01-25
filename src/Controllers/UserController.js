const jwt = require('jsonwebtoken')
const Validator = require('validatorjs')
const config = require('../config')
class UserController {
    static async executQuery(FunctionName, db, data) {
      switch (FunctionName) {
        case "Index":
          return await UserController.Index(db, data);
        
        case "login":
          return await UserController.login(db, data);
      }
    }
  
    static async Index(db , data) {
      return await db.User.findAll();
    }


    static async login(db , data) {
        let rules = {
          username: 'required|alpha_num|min:6|max:32',
          password: 'required|min:3|max:32'
        }
        let val = new Validator(data, rules)
        if(val.fails()){
            return val.errors
        }
        var user = await db.User.findOne({
            where: {username : data.username}
        })
        if(!user || !user.password) return ({errors:{all:'invalid username or password'}}) 
        var valide = (data.password == user.password) ; 
        if(!valide) return ({errors:{all:'invalid username or password'}});
        const token = jwt.sign(
        {userId: user.id},
        config.secretToken,
        {expiresIn: config.sessionExpiration})
         return {userId: user.id, token}
    }
  
  }
  
  module.exports = UserController;
  
