'use strict'

module.exports = function setupNotificacion (NotificacionModel) {

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

}
