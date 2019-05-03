'use strict'

const setupDatabase = require('./lib/db')

const setupAgent = require('./lib/agent')
const setupMetric = require('./lib/metric')
const setupControlador = require('./lib/controlador')
const setupHistorialProducto = require('./lib/historialProducto')
const setupHistorialSensor = require('./lib/historialSensor')
const setupInvernadero = require('./lib/invernadero')
const setupPines = require('./lib/pines')
const setupProducto = require('./lib/producto')
const setupUsuario = require('./lib/usuario')
const setupHorario = require('./lib/horario')
const setupDispositivo = require('./lib/dispositivo')
const setupCamara = require('./lib/camara')
const setupNotificacion = require('./lib/notificacion')
const setuptokenNotificacion = require('./lib/tokenNotificacion')

const defaults = require('defaults')

const setupAgentModel = require('./models/agent')
const setupMetricModel = require('./models/metric')
const setupPinesModel = require('./models/pines')
const setupControladorModel = require('./models/controlador')
const setupInvernaderoModel = require('./models/invernadero')
const setupProductoModel = require('./models/producto')
const setupHistorialProductoModel = require('./models/historialProducto')
const setupHistorialSensorModel = require('./models/historialSensor')
const setupUsuarioModel = require('./models/usuario')
const setupHorarioModel = require('./models/horario')
const setupDispositivoModel = require('./models/dispositivo')
const setupCamaraModel = require('./models/camara')
const setupNotificacionModel = require('./models/notificacion')
const setuptokenNotificacionModel = require('./models/tokenNotificacion')

module.exports = async function (config) {
  config = defaults(config, {
    dialect: 'sqlite',
    pool: {
      max: 10,
      min: 0,
      idle: 10000
    },
    query: {
      raw: true
    }
  })

  const sequelize = setupDatabase(config)

  const AgentModel = setupAgentModel(config)
  const MetricModel = setupMetricModel(config)

  const PinesModel = setupPinesModel(config)
  const ControladorModel = setupControladorModel(config)
  const HistorialProductoModel = setupHistorialProductoModel(config)
  const HistorialSensorModel = setupHistorialSensorModel(config)
  const InvernaderoModel = setupInvernaderoModel(config)
  const ProductoModel = setupProductoModel(config)
  const UsuarioModel = setupUsuarioModel(config)
  const HorarioModel = setupHorarioModel(config)
  const DispositivoModel = setupDispositivoModel(config)
  const CamaraModel = setupCamaraModel(config)
  const NotificacionModel = setupNotificacionModel(config)
  const TokenNotificacionModel = setuptokenNotificacionModel(config)

  AgentModel.hasMany(MetricModel)
  MetricModel.belongsTo(AgentModel, {onDelete: 'CASCADE'})

  UsuarioModel.hasMany(InvernaderoModel)
  InvernaderoModel.belongsTo(UsuarioModel, {onDelete: 'CASCADE'})

  // relacion entre invernadero y controlador
  InvernaderoModel.hasMany(ControladorModel)
  ControladorModel.belongsTo(InvernaderoModel, {onDelete: 'CASCADE'})

  // relacion entre controlador y pines
  ControladorModel.hasMany(PinesModel)
  PinesModel.belongsTo(ControladorModel, {onDelete: 'CASCADE'})

  // relacion entre controlador y historialSensor
  ControladorModel.hasMany(HistorialSensorModel)
  HistorialSensorModel.belongsTo(ControladorModel, {onDelete: 'CASCADE'})

  // relacion historialProducto - producto
  ProductoModel.hasMany(HistorialProductoModel)
  HistorialProductoModel.belongsTo(ProductoModel, {onDelete: 'CASCADE'})
  
  //relacion historialProducto - invernadero
  InvernaderoModel.hasMany(HistorialProductoModel)
  HistorialProductoModel.belongsTo(InvernaderoModel, {onDelete: 'CASCADE'})

  // relacion entre pines y horario
  PinesModel.hasMany(HorarioModel)
  HorarioModel.belongsTo(PinesModel)

    // relacion entre invernadero y camara
    InvernaderoModel.hasMany(CamaraModel)
    CamaraModel.belongsTo(InvernaderoModel, {onDelete: 'CASCADE'})

    //relacion usuario notficacion
    UsuarioModel.hasMany(NotificacionModel)
    NotificacionModel.belongsTo(UsuarioModel, {onDelete: 'CASCADE'})

     //relacion usuario tokens para notificaciones
     UsuarioModel.hasMany(TokenNotificacionModel)
     TokenNotificacionModel.belongsTo(UsuarioModel, {onDelete: 'CASCADE'})
 

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const Agent = setupAgent(AgentModel)
  const Metric = setupMetric(MetricModel, AgentModel)

  const Controlador = setupControlador(ControladorModel, InvernaderoModel)
  const HistorialProducto  = setupHistorialProducto(HistorialProductoModel, ProductoModel, InvernaderoModel)
  const HistorialSensor = setupHistorialSensor(HistorialSensorModel, ControladorModel)
  const Invernadero = setupInvernadero(InvernaderoModel, UsuarioModel)
  const Pines = setupPines(PinesModel, ControladorModel)
  const Producto = setupProducto(ProductoModel, HistorialProductoModel)
  const Usuario = setupUsuario(UsuarioModel)
  const Horario = setupHorario(HorarioModel, PinesModel)
  const Dispositivo = setupDispositivo(DispositivoModel)
  const Camara = setupCamara(CamaraModel, InvernaderoModel)
  const Notificacion = setupNotificacion(NotificacionModel, UsuarioModel)
  const TokenNotificacion = setuptokenNotificacion(TokenNotificacionModel, UsuarioModel)

  return {
    Agent,
    Metric,
    Pines,
    Controlador,
    Invernadero,
    Producto,
    HistorialProducto,
    HistorialSensor,
    Usuario,
    Horario,
    Dispositivo,
    Camara,
    Notificacion,
    TokenNotificacion
  }
}
