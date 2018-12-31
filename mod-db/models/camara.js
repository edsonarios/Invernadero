'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupAgentModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('camara', {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ip: {
      type: Sequelize.STRING,
      allowNull: false
    }
    })
}
