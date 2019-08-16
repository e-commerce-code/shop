const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('J4uoQpF2KX', 'J4uoQpF2KX', 'jcTTWEuHVB', {
  host: 'remotemysql.com',
  dialect: 'mysql'
});

module.exports = db;