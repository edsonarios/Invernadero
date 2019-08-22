'use strict'

module.exports = function setupControlador (ControladorModel, InvernaderoModel) {

  async function updateCon (controlador) {
    const cond = {
      where: {
        uuid : controlador.uuid
      }
    }
    const existingAgent = await ControladorModel.findOne(cond)

    if(existingAgent){
    const updated = await ControladorModel.update(controlador, cond)
    return updated ? ControladorModel.findOne(cond) : existingAgent
    }
  }
  async function update (controlador) {
    const cond = {
      where: { 
        uuid: controlador.uuid
      }
    }

    const existingAgent = await ControladorModel.findOne(cond)

    if (existingAgent) {
      const updated = await ControladorModel.update(controlador, cond)
      return updated ? ControladorModel.findOne(cond) : existingAgent
    }

  }
  async function create (id, ojb) {
    const objs = await InvernaderoModel.findOne({
      where: { id }
    })

    if (objs) {
      Object.assign(ojb, { invernaderoId: objs.id })
      const result = await ControladorModel.create(ojb)
      return result.toJSON()
    }
  }

  function findById (id) {
    return ControladorModel.findById(id)
  }

  function findByUuid (uuid) {
    return ControladorModel.findOne({
      where: {
        uuid
      }
    })
  }
  
  function findAll () {
    return ControladorModel.findAll()
  }

  function findAllId (invernaderoId) {
    return ControladorModel.findAll({
      where:{
        invernaderoId
        
      },
      order: [[ 'id', 'ASC' ]]
    })
  }

  async function findConnected () {
    return ControladorModel.findAll({
      where: {
        connected: true
      }
    })
  }

  function findByUsername (username) {
    return ControladorModel.findAll({
      where: {
        //aca era username
        uuid,
        connected: true
      }
    })
  }
  function findOne (invernaderoId) {
    return ControladorModel.findOne({
      where: {
        invernaderoId
      }
    })
  }
  function findUno (id) {
    return ControladorModel.findOne({
      where: {
        id
      }
    })
  }
  async function deleteControlador (id) {
    return ControladorModel.destroy({
      where: {
        id
      }
    });
  }
  async function destroyAll(id){
    return await ControladorModel.destroy({
      where: {
        invernaderoId: id
      }
    }) 
  }

  async function destroy(id){
    return await ControladorModel.destroy({
      where: {
        id
      }
    }) 
  }
  async function findById2(id){
    return await ControladorModel.findAll({
      where: {
        invernaderoId: id
      }
    }) 
  }
  async function findInvbyContr(id){
    /*const controlador = await ControladorModel.findAll({
      where: uuid
    })*/
    
    return InvernaderoModel.findAll({
      where: id
    })
  }

  return {
    update,
    updateCon,
    create,
    findById,
    findByUuid,
    findAll,
    findConnected,
    findByUsername,
    findOne,
    findUno,
    deleteControlador,
    findAllId,
    destroyAll,
    destroy,
    findById2,
    findInvbyContr
  }
}
