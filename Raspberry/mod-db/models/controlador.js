'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupControladorModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('controlador', {
    uuid: {
      type: Sequelize.STRING,
      allowNull: false
    },
    marcaC: {
      type: Sequelize.STRING,
      allowNull: false
    },
    modeloC: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nroPines: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    hostname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    connected: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
}
