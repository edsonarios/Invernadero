'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupHorarioModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('horario', {
    //cantidad a producir
    horaInicio: {
      type: Sequelize.TIME,
      allowNull: false
    },
    duracion: {
      type: Sequelize.TIME,
      allowNull: false
    }
    
  })
}
