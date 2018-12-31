'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupDispositivotoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('dispositivo', {
    
    modelo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nroDigitales: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    nroAnalogicos: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    
  })
}
