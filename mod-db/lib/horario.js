'use strict'
module.exports = function setupHorario (HorarioModel, PinesModel) {
  async function create (id, horario) {
    const pines = await PinesModel.findOne({
      where: { id }
    })

    if (pines) {
      Object.assign(horario, { pineId: pines.id })
      const result = await HorarioModel.create(horario)
      return result.toJSON()
    }
  }
  async function findOne (id) {
    return HorarioModel.findOne({
      where: {
        id
      }
    })
  }
  async function destroy(id){
    return await HorarioModel.destroy({
      where: {
        id
      }
    })
  }
  async function findAll(id){
    return await HorarioModel.findAll({
      where: {
        pineId: id
      },
      order:
        [
          ['horaInicio', 'ASC'],
        ]
      
      
    })
  }

  return {
    create,
    findOne,
    destroy, 
    findAll
    }
}