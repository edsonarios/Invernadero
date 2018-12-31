'use strict'

const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')

module.exports = function setupPinesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('pines', {
    nroPin: {
      type: Sequelize.STRING,
      allowNull: false
    },
     // 1=habilitado - 0=deshabilitado
     estado: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    //1=sensor, 2=actuador, 3=final carrera
    clasePin: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    //analogico o digital
     tipoPin: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //accion que esta ejecutando el pin
    accionPin: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    //descripcion del pin (sensor: temperatura, humedad, etc; actuador: puerta, bomba, ventana,etc)
    descripcionPin: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //modelo del sensor o actuador
    modelo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    //respectiva marca del sensor o actuador
    marca: {
      type: Sequelize.STRING,
      allowNull: false
    },
    sensorId:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    depende:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    //tiempo funcionamiento de motor, para ventanas que no tienen finales de carrera
    tiempoMotor:{
      type: Sequelize.TIME,
      allowNull: false
    }

   })
}
