'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupInvernaderoModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('invernadero', {
    departamento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ubicacion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    provincia: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tempMaxima: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tempMedia:{
      type: Sequelize.STRING,
      allowNull: false
    },
    tempMinima: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tiempoIntermitencia: {
      type: Sequelize.TIME,
      allowNull: false
    },
    tiempoPausa: {
      type: Sequelize.TIME,
      allowNull: false
    },
    tiempoFuncionMotor: {
      type: Sequelize.TIME,
      allowNull: false
    },
    logo:{
      type: Sequelize.STRING,
      allowNull: false
    }

  })
}
