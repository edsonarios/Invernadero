
 // incluimos la libreria j5
 const five = require("johnny-five")
 
 //const request = require('request-promise-native')
 //const mqtt = require('async-mqtt')
 //const { parsePayload } = require('../mod-mqtt/utils')

 var ports = [
  { id: "A", port: "COM4" },//MEGA
  { id: "B", port: "COM3" }, //DS
  { id: "C", port: "COM9" } //proximidad
];

//configuramos nuestra placa arduino en una variable
 var board = new five.Board({
  //port: "/dev/ttyACM0"
  port: "COM4"
  
 })
 

 
board.on("ready", function() {
  //var sensor = new five.Sensor("A0")
  /*var sensor = new five.Sensor.Digital({
    controller:"DHT22",
    pin:2
  });

  sensor.on("change", () => {
    console.log(sensor.value);
  });
  */
  /////////// SENSOR TEMPERATURA/////////////////////////////////////////////////////
  //StandarFirmData o ConfigurableFirmdata PUERTO SERIAL
  /*
  var thermometer = new five.Thermometer({
    controller: "DHT22_I2C_NANO_BACKPACK",
    pin:8
  });

    thermometer.on("change", function() {
      console.log("Thermometer");
      console.log("  celsius           : ", this.celsius);
      console.log("  fahrenheit        : ", this.fahrenheit);
      console.log("  kelvin            : ", this.kelvin);
      console.log("--------------------------------------");
    });
    */

  ////////////////////////////////////////////////////////////////////////////////////  
  
  /////// SENSOR PROXIMIDAD /////////////////////////////////////////////////////////////////////////////  
  //FirmadataProximity
  /*
  var proximity = new five.Proximity({
    controller: "HCSR04",
    pin: 6
  });

  proximity.on("data", function() {
    console.log("Proximity: ");
    console.log("  cm  : ", this.cm);
    console.log("-----------------");
  });

  proximity.on("change", function() {
    console.log("The obstruction has moved.");
  });
  */
  ////////////////////////////////////////////////////////////////////////////////////  


  //// GIROSCOPIO ////////////////////////////////////////////////////////////////////////////////  
  /*
    var accelerometer = new five.Accelerometer({
      controller: "MPU6050"
    });
  
    accelerometer.on("change", function() {
      console.log("accelerometer");
      console.log("  x            : ", this.x);
      console.log("  y            : ", this.y);
      console.log("  z            : ", this.z);
      console.log("  pitch        : ", this.pitch);
      console.log("  roll         : ", this.roll);
      console.log("  acceleration : ", this.acceleration);
      console.log("  inclination  : ", this.inclination);
      console.log("  orientation  : ", this.orientation);
      console.log("--------------------------------------");
    });
  */


  ////////////////////////////////////////////////////////////////////////////////////  


  ///// SENSOR DE TEMPERATURA DE AGUA ///////////////////////////////////////////////////////////////////////////////  
  //ConfigurableFirmData DS18
  /*
  var thermometer = new five.Thermometer({
    controller: "DS18B20",
    pin: 3
  });

  thermometer.on("change", function() {
    console.log(this.celsius + "°C");
    // console.log("0x" + this.address.toString(16));
  });
  */
  ////////////////////////////////////////////////////////////////////////////////////  

  //// PWM ////////////////////////////////////////////////////////////////////////////////  
  
  
  this.pinMode(8, five.Pin.PWM);
  //this.analogWrite(12, 100);
  var tiempo=5
  setInterval(() => {
    if(tiempo<=245){
      tiempo+=10
    }
    console.log(tiempo)
    this.analogWrite(8, tiempo);
    
    
    }, 500)
    
   this.digitalWrite(13, 1);
   //this.digitalWrite(12, 1);
   //var led = new five.Led(13);

   // "blink" the led in 500ms on-off phase periods
   //led.blink(1000);

});



 // mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")

