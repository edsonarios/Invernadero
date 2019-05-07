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
  async function findOne(id,token){
    return TokenNotificacionModel.findOne({
      where: {
        usuarioId:id,
        token:token
      }
    })
    
    
  }
  return {
    create,
    findOne
  }

}
