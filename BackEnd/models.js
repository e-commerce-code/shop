// import { Sequelize } from "sequelize/types";

// const User = Sequelize.define('user', {
//     firstName : {
//         types: 
//     },
//     lastName: { 

//     }
// })
const Sequelize = require('sequelize')
const db = require('./sequelizeInstance')
const User = db.define('user', {
   // Attributes
   firstName: {
       type: Sequelize.STRING
   },
   lastName: {
       type: Sequelize.STRING
   },
})



module.exports = User;