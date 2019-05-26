'use strict'

const debug = require('debug')('mod:mqtt')
const mosca = require('mosca')
const redis = require('redis')
const chalk = require('chalk')
const db = require('mod-db')
const request = require('request-promise-native')

//Para notificacion
const IP = '3.16.149.141'
const Host = `http://${IP}:3000/`
 
const { parsePayload } = require('./utils')

const backend = {
  type: 'redis',
  redis,
  return_buffers: true
}

const settings = {
  port: 1883,
  backend
}

const config = {
  database: process.env.DB_NAME || 'patelecom',
  username: process.env.DB_USER || 'patelecom',
  password: process.env.DB_PASS || 'patelecom',
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging: s => debug(s)
}

const server = new mosca.Server(settings)
const clients = new Map()

let Agent, Metric, Controlador

server.on('clientConnected', client => {
  debug(`Client Connected: ${client.id}`)
  clients.set(client.id, null)
})

server.on('clientDisconnected', async (client) => {
  debug(`Client Disconnected: ${client.id}`)
  const agent = clients.get(client.id)

  if (agent) {
    // Mark Agent as Disconnected
    agent.connected = false
    //Enviando notificacion de dispositivo desconectado
    notificacion(agent.uuid,"Raspberry OFF","Precaucion Raspberry Desconectado")
    
    try {
      await Agent.createOrUpdate(agent.invernaderoId,agent)
    } catch (e) {
      return handleError(e)
    }
    
    // Delete Agent from Clients List
    clients.delete(client.id)

    server.publish({
      topic: 'agent/disconnected',
      payload: JSON.stringify({
        agent: {
          uuid: agent.uuid
        }
      })
    })
    debug(`Client (${client.id}) associated to Agent (${agent.uuid}) marked as disconnected`)
  }
})

server.on('published', async (packet, client) => {
  debug(`Received: ${packet.topic}`)

  switch (packet.topic) {
    case 'agent/connected':
    case 'agent/disconnected':
      debug(`Payload: ${packet.payload}`)
      break
    case 'agent/message':
      debug(`Payload: ${packet.payload}`)

      var payload = parsePayload(packet.payload)
      
      if (payload) {
        payload.agent.connected = true
        notificacion(payload.agent.uuid,"Raspberry ON","Raspberry en Funcionamiento")
        let agent
        try {
          
          agent = await Agent.createOrUpdate(payload.agent.invernaderoId ,payload.agent)
        } catch (e) {
          return handleError(e)
        }

        debug(`Agent ${agent.uuid} saved`)

        // Notify Agent is Connected
        if (!clients.get(client.id)) {
          
          clients.set(client.id, agent)
          
          server.publish({
            
            topic: 'agent/connected',
            payload: JSON.stringify({
              agent: {
                uuid: agent.uuid,
                //name: agent.name,
                hostname: agent.hostname,
                //pid: agent.pid,
                connected: agent.connected
              }
            })
          })
        }
        
        // Store Metrics
        for (let metric of payload.metrics) {
          
          let m

          try {
            m = await Metric.create(agent.uuid, metric)

            } catch (e) {
            return handleError(e)
          }

          debug(`Metric ${m.id} saved on agent ${agent.uuid}`)
        }
        
      }
      break
      case 'actuador':
      payload = parsePayload(packet.payload)
      
      if (payload) {
        
        try {
          
          let actuador = await Controlador.updateAccionPin(payload.agent.uuid, {
            nroPin:payload.actuador.type+"",  
            accionPin:payload.actuador.value 
            })
            

        } catch (e) {
          return handleError(e)
        }
        

        
      }
      break
      case 'actuador2':
      payload = parsePayload(packet.payload)
      
      if (payload) {
         
        try {
          //funcion especial para ventanas y puertas sin finales de carrera
          let actuador = await Controlador.updateAccionPin(payload.agent.uuid, {
            nroPin:payload.actuador.type+"",  
            accionPin:payload.actuador.value,
            sensorId:payload.timestamp
            })
            

        } catch (e) {
          return handleError(e)
        }
        

        
      }
      break
      case 'update':
      payload = parsePayload(packet.payload)
      
      if (payload) {
        
        try {
          
          let actuador = await Controlador.updateAccionPin(payload.agent.uuid, {
            nroPin:payload.actuador.type+"",  
            accionPin:payload.actuador.value 
            })
            

        } catch (e) {
          return handleError(e)
        }
        

        
      }
      break
  }
})

server.on('ready', async () => {
  const services = await db(config).catch(handleFatalError)

  Agent = services.Controlador
  Metric = services.HistorialSensor
  Controlador = services.Pines
  
})

server.on('error', handleFatalError)

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

function handleError (err) {
  console.error(`${chalk.red('[error]')} ${err.message}`)
  console.error(err.stack)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

//NOTIFICACION
async function notificacion(agentID, title, body){
  
  const options = {
    method: 'GET',
    url: Host+`api/postNotificacion/${agentID}/${title}/${body}`,
    //url: `http://173.212.235.89:3000/api/obtenerPines/${agentID}`,
    json: true
  }
  
  let result
  
  try {
    result = await request(options)
  } catch (e) {
    this.error = e.error.error
    return
  }
  console.log(result,title,body)


}