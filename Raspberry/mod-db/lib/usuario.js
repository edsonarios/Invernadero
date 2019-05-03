'use strict'

module.exports = function setupUsuario (UsuarioModel) {
  async function createOrUpdate (agent) {
    

    const result = await UsuarioModel.create(agent)
    return result.toJSON()
  }

  async function updateUsuarioPassword (id, usuario) {
    const cond = {
      where: {
        id
      }
    }
    
    const updated = await UsuarioModel.update(usuario, cond)
    return updated
  }
  
  async function updateUsuario (id, usuario) {
    const cond = {
      where: {
        id
      }
    }
    
    const updated = await UsuarioModel.update(usuario, cond)
    return updated
  }

 async function findOne (agent){
      return await UsuarioModel.findOne({
          where:{
              correo: agent
          }
      })
  }
  
  async function findUno (id){
    return await UsuarioModel.findOne({
        where:{
            id
        }
    })
}

  function findAll(){
    return UsuarioModel.findAll()
  }

  async function findUser(user){
    return await UsuarioModel.findAll({
      where: {
          tipo:user
      },
      order:[[
        'ap_paterno','ASC'
      ]]
    })
    
  }

  async function findUs(usuarioId){
    return await UsuarioModel.findAll({
      where: {
        id: usuarioId 
      }
    }) 
  }

  function eliminarUsu(usuarioId){ 
    const userid = UsuarioModel.findAll({
      where: {
        id: usuarioId
      }
    })
    
    user.destroy()
  }
  async function destroy(usuarioId){ 
    return await UsuarioModel.destroy({
      where:{ 
        id: usuarioId
      }
    })
 }
 
  
  return {
    createOrUpdate,
    updateUsuarioPassword,
    updateUsuario,
    findAll,
    findOne,
    findUno,
    findUser,
    eliminarUsu,
    findUs,
    destroy
  }
}
