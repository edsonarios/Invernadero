'use strict'

module.exports = function setupInvernadero (InvernaderoModel, UsuarioModel) {
  async function create (id, invernadero) {
    const usuario = await UsuarioModel.findOne({
      where: { id }
    })

    if (usuario) {
      Object.assign(invernadero, { usuarioId: usuario.id })
      const result = await InvernaderoModel.create(invernadero)
      return result.toJSON()
    }
  }
  async function updateInvernadero (id, invernadero) {
    const cond = {
      where: {
        id
      }
    }
    
    const updated = await InvernaderoModel.update(invernadero, cond)
    return updated
  }

  async function findById(usuarioId){
    return await InvernaderoModel.findAll({
      where: {
        usuarioId: usuarioId
      }
    }) 
  }
  async function findOne(id){
    return InvernaderoModel.findAll({
      where: {
        id
      }
    })
    
    
  }
  async function destroyAll(id){
    return await InvernaderoModel.destroy({
      where: {
        usuarioId: id
      }
    })
  }

  async function destroy(id){
    return await InvernaderoModel.destroy({
      where: {
        id
      }
    })
  }
  return {
    create,
    updateInvernadero,
    findById,
    findOne,
    destroyAll,
    destroy
  }
}