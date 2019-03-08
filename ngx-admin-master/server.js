'use strict'

const debug = require('debug')('mod:web')
const http = require('http')
const path = require('path')
const express = require('express')
const asyncify = require('express-asyncify')
const socketio = require('socket.io')
const chalk = require('chalk')
const ModAgent = require('../mod-agent')
const mqtt = require('mqtt')

//const proxy = require('./proxy')
const { pipe } = require('../mod-web/utils')
const { mqttHost } = require('../mod-web/config')

const port = process.env.PORT || 8080
const app = asyncify(express())
const server = http.createServer(app)
const io = socketio(server)
const agent = new ModAgent()

const client = mqtt.connect('mqtt://localhost')



// Socket.io / WebSockets
io.on('connect', socket => {
  
  //recibe el mensaje de la pagina web
  socket.on('message', payload => {
    //publica mediante mqtt el objeto json
    client.publish("actuador", payload)
    
    //console.log(payload)
  })
   socket.on('actualizacion', payload => {
    //publica mediante mqtt el objeto json
    client.publish("actualizacion", payload)
    
    //console.log(payload)
  })

    socket.on('nuevoRiego', payload => {
    //publica mediante mqtt el objeto json
    client.publish("nuevoRiego", payload)
    
    //console.log(payload)
  })


  pipe(agent, socket)
})



// Express Error Handler
app.use((err, req, res, next) => {
  debug(`Error: ${err.message}`)

  if (err.message.match(/not found/)) {
    return res.status(404).send({ error: err.message })
  }

  res.status(500).send({ error: err.message })
})

function handleFatalError (err) {
  console.error(`${chalk.red('[fatal error]')} ${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

process.on('uncaughtException', handleFatalError)
process.on('unhandledRejection', handleFatalError)

server.listen(port, () => {
  console.log(`${chalk.green('[mod-socket]')} server listening on port ${port}`)
  agent.connect()
})
