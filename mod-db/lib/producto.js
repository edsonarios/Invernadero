'use strict'

module.exports = function setupProducto (ProductoModel) {
  async function create(agent) {
    const result = await ProductoModel.create(agent)
    return result.toJSON()
  }
  async function findProd(id){
    return await ProductoModel.findOne({
      where: {
        id: id
      }
    })
  }
  async function findAll(){
    return await ProductoModel.findAll()
  }
  async function destroy (id){
    return await ProductoModel.destroy({
      where: {
        id }
    })
  }
   
  return {
    create,
    findProd,
    findAll,
    destroy
    
  }
}
