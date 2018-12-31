'use strict'

const debug = require('debug')('mod:agent')
const os = require('os')
const util = require('util')
const mqtt = require('mqtt')
const defaults = require('defaults')
const uuid = require('uuid')
const EventEmitter = require('events')

const { parsePayload } = require('./utils')
var actuador;

const options = {
  interval: 5000,
  agentID: "admi",
  mqtt: {
    //host: 'mqtt://localhost'
    host: 'mqtt://52.15.147.23'
  }
}

class ModAgent extends EventEmitter {
  constructor (opts) {
    super()

    this._options = defaults(opts, options)
    this._started = false
    this._timer = null
    this._client = null
    this._agentId = null
    this._metrics = new Map()
    this._actuador = 0
  }

  addMetric (type, fn) {
    this._metrics.set(type, fn)
  }

  removeMetric (type) {
    this._metrics.delete(type)
  }

  connect () {
    if (!this._started) {
      const opts = this._options
      this._client = mqtt.connect(opts.mqtt.host)
      this._started = true

      this._client.subscribe('agent/message')
      this._client.subscribe('agent/connected')
      this._client.subscribe('agent/disconnected')
      this._client.subscribe('actuador')
      
      this._client.on('connect', () => {
        this._agentId = opts.agentID

        this.emit('connected', this._agentId)

        this._timer = setInterval(async () => {
          if (this._metrics.size > 0) {
            let message = {
              agent: {
                uuid: this._agentId,
                hostname: os.hostname() || 'localhost'
              },
              metrics: [],
              timestamp: new Date().getTime()
            }

            for (let [ metric, fn ] of this._metrics) {
              if (fn.length === 1) {
                fn = util.promisify(fn)
              }

              message.metrics.push({
                type: metric,
                value: await Promise.resolve(fn())
              })
            }
            
            debug('Sending', message)

            this._client.publish('agent/message', JSON.stringify(message))
            this.emit('message', message)
          }
        }, opts.interval)
      })


      this._client.on('message', (topic, payload) => {
        
        payload = parsePayload(payload)

        let broadcast = false
        switch (topic) {
          case 'agent/connected':
          case 'agent/disconnected':
          case 'agent/message':
            broadcast = payload && payload.agent && payload.agent.uuid !== this._agentId
            break
        }

        if (broadcast) {
          
          this.emit(topic, payload)
        }
      })

      this._client.on('error', () => this.disconnect())
    }
  }

  disconnect () {
    if (this._started) {
      clearInterval(this._timer)
      this._started = false
      this.emit('disconnected', this._agentId)
      this._client.end()
    }
  }

}

module.exports = ModAgent
