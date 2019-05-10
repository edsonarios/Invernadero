'use strict'

module.exports = function setuptokenNotificacion (TokenNotificacionModel,UsuarioModel) {

  async function create (id, tokenNotificacion) {
    const usuario = await UsuarioModel.findOne({
      where: { id }
    })

    if (usuario) {
      Object.assign(tokenNotificacion, { usuarioId: usuario.id })
      const result = await TokenNotificacionModel.create(tokenNotificacion)
      return result.toJSON()
    }
  }

  async function createOrUpdate (id ,tokenNotificacion) {
    const cond = {
      where: {
        token: tokenNotificacion.token
      }
    }
    const usuario = await UsuarioModel.findOne({
      where: { id }
    })
    const existingAgent = await TokenNotificacionModel.findOne(cond)

    if (existingAgent) {
      Object.assign(tokenNotificacion, { usuarioId: usuario.id })
      const updated = await TokenNotificacionModel.update(tokenNotificacion, cond)
      return updated ? TokenNotificacionModel.findOne(cond) : existingAgent
    }

    
    if(usuario){
      Object.assign(tokenNotificacion, { usuarioId: usuario.id })
      const result = await TokenNotificacionModel.create(tokenNotificacion)
      return result.toJSON()
    }
  }

  async function findOne(id,token){
    return TokenNotificacionModel.findOne({
      where: {
        usuarioId:id,
        token:token
      }
    })
  }
  async function findAll(usuarioId){
    return TokenNotificacionModel.findAll({
      where: {
        usuarioId
      }
    })
  }
  return {
    create,
    createOrUpdate,
    findOne,
    findAll
  }

}
