
const { parsePayload } = require('../mod-mqtt/utils')

var agentID="agenttt"
var idBomba=1
var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${idBomba},"value":0},"timestamp":1617522290000}`

payload = parsePayload(payload)

console.log(payload.actuador.type)