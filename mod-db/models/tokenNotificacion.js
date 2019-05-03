'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setuptokenNotificacionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('tokenNotificacion', {
    token: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
