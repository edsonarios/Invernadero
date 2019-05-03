'use strict'

module.exports = function setupHistorialProducto (HistorialProductoModel, InvernaderoModel, ProductoModel) {
  async function create (historialP) {

      const result = await HistorialProductoModel.create(historialP)
      return result.toJSON()
    
  }
  async function findProd(id){
    return await HistorialProductoModel.findAll({
      where: {
        invernaderoId: id
      }
    })
  }
  async function findPro(id){
    return await InvernaderoModel.findAll({
      where: {
        id: id
      }
    })
    //console.log(prod)
    
  }

  async function findPro2(id){
    return await ProductoModel.findAll({
        include: [ { model: HistorialProductoModel, where: {invernaderoId: id}}]
    })
    //console.log(prod)
    
  }
  async function destroy (id){
    return await productModel.destroy({
      where: {
        id }
    })
  }
  
  return {
    create,
    findProd,
    findPro,
    findPro2,
    destroy
  }
}
