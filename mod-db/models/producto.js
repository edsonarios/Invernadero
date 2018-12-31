'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupProductoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('producto', {
    nombreProducto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tiempoProduccion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    
    tempMaxRecomendada: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tempMinRecomendada: {
      type: Sequelize.STRING,
      allowNull: false
    },
    imagen: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
