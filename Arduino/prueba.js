
 // incluimos la libreria j5
 const five = require("johnny-five")
 //configuramos nuestra placa arduino en una variable
 var board = new five.Board({
    port: "/dev/ttyUSB1"
 })
 
 // funcion que se ejecuta cuando la placa ya esta lista
 board.on("ready", function() {
// mensaje que se muestra por consola informandonos de que la placa esta lista
 console.log("Placa lista.")
////////////////////////////////////////////////////////////////////////////////////////
 var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 12
    });
    
      thermometer.on("change", function() {
        console.log(this.celsius + "°C");
        // console.log("0x" + this.address.toString(16));
      });
////////////////////////////////////////////////////////////////////////////////////////
      /*var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 12
        
      });
    
      proximity.on("data", function() {
        console.log("Proximity: ");
        console.log("  cm  : ", this.cm);
        console.log("-----------------");
      });
    
      proximity.on("change", function() {
        console.log("The obstruction has moved.");
      });*/
////////////////////////////////////////////////////////////////////////////////////////
})

// mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")

