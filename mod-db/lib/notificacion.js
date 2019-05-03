'use strict'

module.exports = function setupNotificacion (NotificacionModel) {
  async function createOrUpdate (agent) {

    const result = await NotificacionModel.create(agent)
    return result.toJSON()
  }

  
}
