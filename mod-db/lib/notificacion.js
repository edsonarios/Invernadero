'use strict'
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = function setupNotificacion (NotificacionModel, UsuarioModel) {
  async function create (id, notificacion) {
    const usuario = await UsuarioModel.findOne({
      where: { id }
    })

    if (usuario) {
      Object.assign(notificacion, { usuarioId: usuario.id })
      const result = await NotificacionModel.create(notificacion)
      return result.toJSON()
    }
  }
  async function updateNotificacion (id, notificacion) {
    const cond = {
      where: {
        id
      }
    }
    
    const updated = await NotificacionModel.update(notificacion, cond)
    return updated
  }

  
  async function findAll(usuarioId){
    return NotificacionModel.findAll({
      where: {
        usuarioId
      }
    })
  }
  async function findLastFive (usuarioId) {
    return NotificacionModel.findAll({
      where: {
        usuarioId,
        titulo:{
          [Op.notLike]:"funcionamiento"
        }
      },
      limit: 5,
      order: [[ 'createdAt', 'DESC' ]],
      raw: true
    })
  }
  async function findFuncionamiento(usuarioId){
    return NotificacionModel.findAll({
      where: {
        usuarioId,
        titulo:{
          [Op.like]:"funcionamiento"
        }
      },
      order: [[ 'createdAt', 'DESC' ]],
    })
  }
  async function findError(usuarioId){
    return NotificacionModel.findAll({
      where: {
        usuarioId,
        titulo:{
          [Op.notLike]:"funcionamiento"
        }
        
      },
      order: [[ 'createdAt', 'DESC' ]],
    })
  }
  
  async function destroyAll(id){
    return await NotificacionModel.destroy({
      where: {
        usuarioId: id
      }
    })
  }

  async function destroy(id){
    return await NotificacionModel.destroy({
      where: {
        id
      }
    })
  }
  return {
    create,
    updateNotificacion,
    findAll,
    findLastFive,
    findFuncionamiento,
    findError,
    destroyAll,
    destroy
  }
}