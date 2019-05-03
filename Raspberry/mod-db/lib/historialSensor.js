'use strict'

module.exports = function setupMetric (HistorialSensorModel, ControladorModel) {
  async function create (uuid, metric) {
    const agent = await ControladorModel.findOne({
      where: { uuid }
    })

    if (agent) {
      Object.assign(metric, { controladorId: agent.id })
      const result = await HistorialSensorModel.create(metric)
      return result.toJSON()
    }
  }

  async function findByAgentUuid (uuid) {
    return HistorialSensorModel.findAll({
      attributes: [ 'type' ],
      group: [ 'type' ],
      
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

  async function findByTypeAgentUuid (type, uuid) {
    return HistorialSensorModel.findAll({
      attributes: [ 'id', 'type', 'value', 'createdAt' ],
      where: {
        type
      },
      limit: 10,
      order: [[ 'createdAt', 'DESC' ]],
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

  

  async function deleteSensor (type, controladorId) {
    return HistorialSensorModel.destroy({
      where: {
        type,
        controladorId
      }
    });
  }
  async function deleteSensorContr (controladorId) {
    return HistorialSensorModel.destroy({
      where: {
        controladorId
      }
    });
  }
  
  async function modifySensor (type, controladorId, historialSensor) {
   
    const cond = {
      where: {
        type,
        controladorId
      }
    }
    
    const updated = await HistorialSensorModel.update(historialSensor, cond)
    return updated
  }


  return {
    create,
    findByAgentUuid,
    findByTypeAgentUuid,
    deleteSensor,
    modifySensor,
    deleteSensorContr
  }
}
