'use strict'
const Sequelize = require('sequelize')
const op = Sequelize.Op

module.exports = function setupControlador (PinesModel, ControladorModel) {
  async function create (id, pin) {
    const controlador = await ControladorModel.findOne({
      where: { id }
    })

    if (controlador) {
      Object.assign(pin, { controladorId: controlador.id })
      const result = await PinesModel.create(pin)
      return result.toJSON()
    }
  }

  async function updatePin (controladorId, pin) {
    const cond = {
      where: {
        nroPin:pin.nroPin,
        controladorId
        
      }
    }
    
    const updated = await PinesModel.update(pin, cond)

    return PinesModel.findOne({
      where: {
        nroPin:pin.nroPin,
        controladorId
      }
    })
    
  }
  async function desactivarPin (id, pin) {
    const cond = {
      where: {
        id
        
      }
    }
    
    const updated = await PinesModel.update(pin, cond)
    return updated
  }

  

  async function updateAccionPin (uuid, pin) {
    var ids = await PinesModel.findOne({
      include: [{
        attributes: [],
        model: ControladorModel,
        where: {
          uuid
        }
      }],
      raw: true
    })
    
    const cond = {
      where: {
        nroPin:pin.nroPin,
        controladorId:ids.controladorId
      }
    }
    
    const updated = await PinesModel.update(pin, cond)
    return ids
  }

  function findByAll (id) {
    return PinesModel.findOne({
      where: {
        controladorId:id
      }
    })
  }

  function findOnePin (id) {
    return PinesModel.findOne({
      where: {
        id
      }
    })
  }

  function findByAllDepende (id) {
    return PinesModel.findAll({
      where: {
        depende:id
      }
    })
  }

  async function findByAllActive (controladorId) {
    return PinesModel.findAll({
      where: {
        controladorId,
        estado:1
        //clasePin: 1 && 2
        //clasePin: 2
      }
    })
  }

  async function findByAllsensor (controladorId) {
    return PinesModel.findAll({
      where: {
        controladorId,
        clasePin:1,
        estado:1
      }
    })
  }
  
  async function findByPinUuid (uuid) {
    return PinesModel.findAll({
      attributes: [ 'id', 'nroPin','estado', 'clasePin', 'tipoPin', 'accionPin', 'descripcionPin', 'sensorId', 'depende','tiempoMotor'],
      
      
      order: [[ 'id', 'ASC' ]],
      include: [{
        attributes: [],
        model: ControladorModel,
        where: {
          uuid
        }
      }],
      raw: true
    })
  }
  async function findAllActive (estate, clas, uuid) {
    return PinesModel.findAll({
      attributes: [ 'nroPin', 'accionPin', 'descripcionPin' ],
      where: {
        estado:estate,
        clasePin:clas
      },
      order: [[ 'id', 'ASC' ]],
      include: [{
        attributes: [],
        model: ControladorModel,
        where: {
          uuid
        }
      }],
      raw: true
    })
  }
  async function deletePines(controladorId) {
    return PinesModel.destroy({
      where: {
        controladorId
        
      }
    });
  }
  async function findByAllPines(controladorId) {
    return PinesModel.findAll({
      where: {
        controladorId,
        estado:0
      },
      order: [[ 'id', 'ASC' ]],
    })
  }
  async function findByAllPinesOcupados(controladorId) {
    return PinesModel.findAll({
      where: {
        controladorId,
        estado:1
      },
      order: [[ 'id', 'ASC' ]],
    })
  }
  async function findByAllPinesAnalogicos(controladorId) {
    return PinesModel.findAll({
      where: {
        controladorId,
        estado:1,
        tipoPin:'analogico',
        clasePin:1
      },
      order: [[ 'id', 'ASC' ]],
    })
  }
  async function destroyAll(id){
    return await PinesModel.destroy({
      where: {
        controladorId: id
      }
    })
  }
  async function findBomba(id){
    return await PinesModel.findAll({
      where:{
        controladorId: id,
        descripcionPin: {[op.like]: 'bomba%'},
        estado:1
      },
      order: [[ 'id', 'ASC' ]],
    })
  }
  async function findActuadorActive(id,actuador){
    return await PinesModel.findAll({
      where:{
        controladorId: id,
        estado:1,
        clasePin:[2,4],
        descripcionPin: {[op.like]: actuador+'%'}
      },
      order: [[ 'id', 'ASC' ]],
    })
  }
  async function findFinalCarrera(id,descripcion){
    return await PinesModel.findAll({
      where:{
        estado:1,
        clasePin:3,
        depende:id,
        descripcionPin:descripcion
      }
    })
  }
  async function findNameSensorsUuid (uuid) {
    return PinesModel.findAll({
      attributes: [ 'descripcionPin'],
      where:{
        estado:1,
        descripcionPin: {[op.like]: 'sensor%'}
      },
      
      order: [[ 'id', 'ASC' ]],
      include: [{
        attributes: [],
        model: ControladorModel,
        where: {
          uuid
        }
      }],
      raw: true
    })
  }

  return {
    create,
    updatePin,
    findByAll,
    findByPinUuid,
    updateAccionPin,
    findAllActive,
    findByAllActive,
    deletePines,
    findByAllPines,
    findByAllPinesOcupados,
    findByAllPinesAnalogicos,
    findByAllsensor,
    destroyAll,
    desactivarPin,
    findBomba,
    findByAllDepende,
    findOnePin,
    findActuadorActive,
    findFinalCarrera,
    findNameSensorsUuid
  }
}