const sensorCOM = '/dev/ttyUSB1'
// var sensorCOM = 'COM3'
const Serialport = require('serialport')
// parsers ver lectura
const Readline = Serialport.parsers.Readline
const port = new Serialport(sensorCOM, { baudRate: 9600 })
const parser = port.pipe(new Readline({
  delimeter: '\r\n'
}))
parser.on('open ', function () {
  console.log('coneccion is opend')
})
parser.on('data', function (data) {
  console.log(data)
})
port.on('error', function (err) {
  console.log(err)
})
