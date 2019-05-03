'use strict'

module.exports = function setupDispositivo (DispositivoModel) {
    async function create(agent) {
        const result = await DispositivoModel.create(agent)
        return result.toJSON()
      }

    async function findAll(){
      return await DispositivoModel.findAll()
    }

    async function destroy(id){
        return await DispositivoModel.destroy({
            where: {
                id: id
            }
        })
    }
    return {
        create,
        findAll,
        destroy 
    }
}