'use strict'

module.exports = function setuptokenNotificacion (TokenNotificacionModel) {

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

}
