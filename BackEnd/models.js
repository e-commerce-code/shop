
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