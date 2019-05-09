'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupNotificacionModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('notificacion', {

    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuerpo: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
}
