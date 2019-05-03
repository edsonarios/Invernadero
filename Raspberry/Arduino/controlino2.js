
 // incluimos la libreria j5
 const five = require("johnny-five")
 const mqtt = require('async-mqtt')

//const client = mqtt.connect('mqtt://173.212.235.89')
 //const client = mqtt.connect('mqtt://localhost')
 //se suscribe para mandar un mensaje mqtt atraves del topic
// client.subscribe('arduino')
 //uuid del usuario
 const agentID = "arduino"

 //configuramos nuestra placa arduino en una variable
 var board = new five.Board(
    )
 
 // funcion que se ejecuta cuando la placa ya esta lista
 board.on("ready", function() {
// mensaje que se muestra por consola informandonos de que la placa esta lista
 console.log("Placa lista.")
 
})

// mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")

