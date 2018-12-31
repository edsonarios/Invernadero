
 // incluimos la libreria j5
 const five = require("johnny-five")
 const mqtt = require('async-mqtt')

const client = mqtt.connect('mqtt://173.212.235.89')
 //const client = mqtt.connect('mqtt://localhost')
 //se suscribe para mandar un mensaje mqtt atraves del topic
 client.subscribe('arduino')
 //uuid del usuario
 const agentID = "arduino"

 //configuramos nuestra placa arduino en una variable
 var board = new five.Board(
    )
 
 // funcion que se ejecuta cuando la placa ya esta lista
 board.on("ready", function() {
// mensaje que se muestra por consola informandonos de que la placa esta lista
 console.log("Placa lista.")
 
//var D13 = new five.Pin(13)
//  this.digitalWrite(13, 1);
var A0 = new five.Pin("A0")

var BATCARG = 2     // declaramos las constantes con los pines donde conectamos los leds
var BATMEDCARG = 3  // donde la salida 2, 3, 4 seran indicadores de carga de bateria
var BATDESCARG = 4  // rojo amarillo verde , descargado media carga y cargado al 100%
var ANALOGBAT = 0   // pin analogico

// Variables
var analogValor = 0;   //declarar variables
var voltaje = 0.0;  
var ledDelay = 800;

var maximo = 3.5;    //definir unbrales maximo medio y minimo
var medio = 2.45;
var minimo = 0.7;

var Temp = 25;           // Parámetro  para el encendido de los ventiladores
var r_diaSemana;         // almacena el resultado del dia de la semana calculado
const RELE  = 13;    // rele1 ventilador
const RELE1 = 12;    // rele2 conecta a la bateria
const RELE2 = 11;    // rele3 conecta al motor dc


var h1_c1 = 1;    var m1_c1 = 0;   var s1_c1 = 0; // cambia la  hora  programada
var h3_c1 = 3;    var m3_c1 = 0;   var s3_c1 = 0;
var h4_c1 = 23;   var m4_c1 = 0;   var s4_c1 = 0;
var h5_c1 = 14;   var m5_c1 = 20;  var s5_c1 = 0;
var temperaturaCelsius
//this.digitalWrite(RELE2, 1);
//this.digitalWrite(11, 1);
    this.loop(60000, () => {

        var HoraYFecha = new Date()
        var Hora = HoraYFecha.getHours()
        var Minuto = HoraYFecha.getMinutes()
        var Segundos = HoraYFecha.getSeconds()

          // Dias de carga de la bateria  SE ACTIVA EL RELE
        
            //hora de carga de la bateria
            if (Hora >= h1_c1 && Minuto >= m1_c1 && Hora < h3_c1){
            this.digitalWrite(RELE, 1);
            this.digitalWrite(RELE1, 1);
            this.digitalWrite(RELE2, 0);
            //Serial.println("INICIO");
            console.log("INICIO")
            console.log(Hora+": "+Minuto+": "+Segundos+ "  CARGANDO BATERIA-------------------------------------")
            }
            if (Hora >= h3_c1 && Minuto >= m3_c1)
            {
            this.digitalWrite(RELE, 0);
            this.digitalWrite(RELE1, 0);
            this.digitalWrite(RELE2, 1);
            //Serial.println("CONECTAR MOTOR");
            console.log(Hora+": "+Minuto+": "+Segundos+ "  CONECTAR MOTOR-------------------------------")
            
            }
            
        
            if (Hora == h4_c1 && Minuto == m4_c1)
            {
            this.digitalWrite(RELE2, 0);
            //Serial.println("DESACTIVAR MOTOR");
            console.log("DESACTIVAR MOTOR----------------------------------------------------------")
            }
    })


    // Leemos valor de la entrada analógica
    A0.read(function(error, value) {
        
        analogValor = value
     
    })

    //PARA LA TEMPERATURA
    var temperature = new five.Thermometer({
        controller: "DHT11",
        pin: "A1"
      });
      temperature.on("data", function() {
        temperaturaCelsius = this.C
        // console.log("celsius: %d", this.C);
        // console.log("fahrenheit: %d", this.F);
        // console.log("kelvin: %d", this.K);
      });

    this.loop(5000, () => {
        var HoraYFecha = new Date()
        var Hora = HoraYFecha.getHours()
        var Minuto = HoraYFecha.getMinutes()
        var Segundos = HoraYFecha.getSeconds()
        
        //analogValor = analogRead(ANALOGBAT);
        // Obtenemos el voltaje
        voltaje = 0.0048 * analogValor;
        voltaje = voltaje.toFixed(2);

        // Serial.print("Voltaje: ");
        // Serial.println(voltaje);
        console.log(Hora+": "+Minuto+": "+Segundos+ "  Voltaje : "+voltaje)
        //Enviamos el valor al sistema con la hora

        // (valorVolataje - minimo) / (maximo - minimo) = porcentaje que deseamos
        //determina el porcentaje de carga que tiene la bateria y lo publica por mqtt
        var porcentaje = ((voltaje - minimo) / (maximo - minimo))*100
        porcentaje = porcentaje.toFixed(0)
        if(porcentaje>100){
            porcentaje=100
        }
        if(porcentaje<0){
            porcentaje=0
        }
        var payload = `{"agent":{"uuid":"${agentID}"},"bateria":"${porcentaje}","Hora":"${Hora}:${Minuto}:${Segundos}"}`
        client.publish("arduino", payload)
        console.log(" bateria cargada al : "+porcentaje +"%")


        // Dependiendo del voltaje mostramos un LED u otro
        if (voltaje >= maximo){
            this.digitalWrite(BATCARG, 1);
            
            setInterval(() => {
                this.digitalWrite(BATCARG, 0);
            }, ledDelay)
            
            // var payload = `{"agent":{"uuid":"${agentID}"},"bateria":"100","Hora":"${Hora}:${Minuto}:${Segundos}"}`
            // client.publish("arduino", payload)
            // console.log(" bateria cargada al 100% ")
        }
        else if (voltaje < maximo && voltaje > medio){
            this.digitalWrite(BATMEDCARG, 1);
            
            setInterval(() => {
                this.digitalWrite(BATMEDCARG, 0);
            }, ledDelay)
            
            // var payload = `{"agent":{"uuid":"${agentID}"},"bateria":"50","Hora":"${Hora}:${Minuto}:${Segundos}"}`
            // client.publish("arduino", payload)
            // console.log("bateria cargada al 50% ")
        }
        else if (voltaje < medio && voltaje > minimo){
            this.digitalWrite(BATDESCARG, 1);
            
            setInterval(() => {
                this.digitalWrite(BATDESCARG, 0);
            }, ledDelay);
              
            
            // var payload = `{"agent":{"uuid":"${agentID}"},"bateria":"5","Hora":"${Hora}:${Minuto}:${Segundos}"}`
            // client.publish("arduino", payload)
            // console.log("bateria cargada al 5% ")
        }
        // Apagamos todos los LEDs
        setInterval(() => {
            this.digitalWrite(BATCARG, 0);
            this.digitalWrite(BATMEDCARG, 0);
            this.digitalWrite(BATDESCARG, 0);    
        }, ledDelay)
        

        //PARA LA TEMPERATURA
        var t = temperaturaCelsius
        //console.log("temperatura : "+t)
        // if (t >= Temp) {
        //   this.digitalWrite(8, 1);
        //   this.digitalWrite(9, 1);
        //   this.digitalWrite(10, 0);
        //   console.log("temperatura maxima, Encendiendo ventilador")
        // }
        // if (t < Temp) {
        //     this.digitalWrite(8, 0);
        //     this.digitalWrite(9, 0);
        //     this.digitalWrite(10, 1);
        //     console.log("temperatura minima, Apagando ventilador")
        // }
    })

})

// mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")

