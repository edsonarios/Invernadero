'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupUsuarioModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('usuario', {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ap_paterno: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ap_materno: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    direccion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    telefono: {
      type: Sequelize.STRING,
      allowNull: false
    },
    correo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    conectado: {
      type: Sequelize.STRING,
      allowNull: false
    },
    change: {
      type: Sequelize.STRING,
      allowNull: false
    },
    token: {
      type: Sequelize.STRING,
      allowNull: false
    }

  })
}
