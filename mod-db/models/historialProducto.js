'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupHistorialProductoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('historialProducto', {
    //cantidad a producir
    cantidad: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    fechaCosecha: {
      type: Sequelize.DATE,
      allowNull: false
    }

    
  })
}
