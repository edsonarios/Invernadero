
 // incluimos la libreria j5
 const five = require("johnny-five")
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

