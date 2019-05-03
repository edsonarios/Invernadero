'use strict'

module.exports = function setupCamara (CamaraModel, InvernaderoModel) {

    async function create (id, nombre) {
        const invernadero = await InvernaderoModel.findOne({
          where: { id }
        })
    
        if (invernadero) {
          Object.assign(nombre, { invernaderoId: invernadero.id })
          const result = await CamaraModel.create(nombre)
          return result.toJSON()
        }
      }

  async function findCamar(id){
    return await CamaraModel.findOne({
      where: {
        id: id
      }
    })
  }

  function findAllId (invernaderoId) {
    return CamaraModel.findAll({
      where:{
        invernaderoId
        
      },
      order: [[ 'id', 'ASC' ]]
    })
  }

  async function destroy (id){
    return await CamaraModel.destroy({
      where: {
        id }
    })
  }
   
  return {
    create,
    findCamar,
    findAllId,
    destroy
    
  }
}
