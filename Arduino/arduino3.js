
 // incluimos la libreria j5
 const five = require("johnny-five")
 const request = require('request-promise-native')
 const mqtt = require('async-mqtt')
 const { parsePayload } = require('../mod-mqtt/utils')

 var ports = [
  /*{ id: "A", port: "COM5" },//MEGA
  { id: "B", port: "COM16" }, //Agua
  { id: "C", port: "COM6" } //Proximidad
  */
  { id: "A", port: "/dev/ttyUSB0" },//MEGA
  //{ id: "B", port: "/dev/ttyUSB3" }, //Agua
  //{ id: "C", port: "/dev/ttyUSB1" } //Proximidad
];

 //Entrada de variable para los sensores de temperatura
 var sensorCOM1 = '/dev/ttyUSB1'
 var sensorCOM2 = '/dev/ttyUSB2'
 //var sensorCOM = '/dev/ttyUSB3'

 //configuramos nuestra placa arduino en una variable
 var board = new five.Boards(ports)
 
 //Inicializamos el agente
 //const agentID = "arduino"
 const agentID = "alvaronuñezcastilloalvaro@user"
 const ModAgent = require('../mod-agent')
 const sendDatos = 4000
 const intervalAutomatization = sendDatos
 //const IP = '192.168.0.19'
 const IP = '173.212.204.188'
 //host para la api
 const Host = `http://${IP}:3000/`
 //const Host = `http://192.168.0.25:3000/`
 //const Host = `http://173.212.235.89:3000/`
 const agent = new ModAgent({
   interval: sendDatos,
   agentID: agentID,
 })


 //iniciamos cliente mqtt
 //const client = mqtt.connect('mqtt://173.212.235.89')
 const client = mqtt.connect(`mqtt://${IP}`)
 const clientLocal = mqtt.connect(`mqtt://${IP}`)
 //const client = mqtt.connect(`mqtt://192.168.0.25`)
 //const clientLocal = mqtt.connect(`mqtt://192.168.0.25`)

  client.subscribe('actuador')
  client.subscribe('actuador2')
  client.subscribe('update')
  client.subscribe('actualizacion')
  client.subscribe('nuevoRiego')
  client.subscribe('eliminarRiego')
  client.subscribe('control')
  
  clientLocal.subscribe('actuador')
  clientLocal.subscribe('update')
  clientLocal.subscribe('actualizacion')
  clientLocal.subscribe('nuevoRiego')
  clientLocal.subscribe('control')

  const totalPinesMega = 70
let pulsesFlow = []
let SensoresDTH = []
let SensoresDS = []
var potencia=0
var switchPWM=0
var pinPWM=0
var dth=0
var dthSw=1
//numero de posicion son los numeros de pines 
// 0 inactivo 1 activo
let estado = []
// 2=actuador, 3=final de carrera, 1=sensor
let clasePin =[]
// accion 
let accion =[]
//Descripcion
let descripcion =[]
//Varios
let tempMaxima, tempMedia, tempMinima, tiempoIntermitencia, temp=[], Auxtemp=[],sensorId=[],idPin=[],nroPin=[], descansoVentilador=[], estadoPuertas=[], depende=[],tiempoMotorAuxi=[],tiempoMotor=[],swPuertas=[],swMotor=[],swPuertas2=[]
let tiempoPausa, tiempoFuncionMotor, hId=[],hIni=[],hDur=[],hPinId=[],hAux=[],ObtPines
//se espera cada 30 segundos para la siguiente puerta o ventana
var TiempoPausa = 30000
//variable que determina en que tiempo se empezaran a abrir puertas y ventas, y en cada iteracion se va sumando 30 segundos
var TiempoApertura=0
var TiempoFuncionMotor=10000

//Tiempo de espera de inactividad para preguntar nuevamente sobre puertas y ventanas de abrir o cerrar [segundos]
var TiEsperaInactividad = 120

conf()
findInvbyContr()
horarios()

// funcion que se ejecuta cuando la placa ya esta lista
 board.on("ready", function() {
  
// mensaje que se muestra por consola informandonos de que la placa esta lista
 console.log("Placa lista.")

// SENSORES //////////////////////////////////////////////////////////////////////////////////
///Serial comunication

const Serialport1=require('serialport');
//parsers ver lectura
const Readline1=Serialport1.parsers.Readline;
const port1=new Serialport1(sensorCOM1,{baudRate:9600});
const parser1=port1.pipe(new Readline1({
    delimeter:'\r\n'
}));
parser1.on('open ',function(){
    console.log('coneccion is opend');
});
parser1.on('data',function(data){
  //console.log(data)
  var a=""
  var b=0
    if(dthSw==1){
      
      for (let i = 0; i < data.length; i++) {
        if(data.charCodeAt(i)==32 || data.charCodeAt(i)==13){
          b=parseFloat(a)
          if(!isNaN(b)){
            SensoresDTH.push(parseFloat(a))  
          }else{
            SensoresDTH.push(-1)
          }
          
          //console.log(parseFloat(a))
          a=""
        }else{
            a+=data.charAt(i)
        }
      }
      dthSw=0
    }else{
        var j=0
        for (let i = 0; i < data.length; i++) {
          
          if(data.charCodeAt(i)==32 || data.charCodeAt(i)==13){
            SensoresDTH[j]=parseFloat(a)
            //console.log(SensoresDTH[j])
            if(!isNaN(SensoresDTH[j])){
              temp[j+totalPinesMega] = SensoresDTH[j]
            }
            a=""
            j++
          }else{
              a+=data.charAt(i)
          }
        }
    }
    //console.log(SensoresDTH)
});
port1.on('error',function(err){
    console.log(err);
});

//////////////////////////////////////////////////////////////////////////////////////
const Serialport2=require('serialport');
//parsers ver lectura
const Readline2=Serialport2.parsers.Readline;
const port2=new Serialport2(sensorCOM2,{baudRate:9600});
const parser2=port2.pipe(new Readline2({
    delimeter:'\r\n'
}));
parser2.on('open ',function(){
    console.log('coneccion is opend');
});
parser2.on('data',function(data){
  //console.log(data)
  var a=""
  var b=0
  
    if(dthSw==1){
      
      for (let i = 0; i < data.length; i++) {
        if(data.charCodeAt(i)==32 || data.charCodeAt(i)==13){
          b=parseFloat(a)
          if(!isNaN(b)){
            SensoresDS.push(parseFloat(a))  
          }else{
            SensoresDS.push(-1)
          }
          
          //console.log(parseFloat(a))
          a=""
        }else{
            a+=data.charAt(i)
        }
      }
      dthSw=0
    }else{
        var j=0
        for (let i = 0; i < data.length; i++) {
          
          if(data.charCodeAt(i)==32 || data.charCodeAt(i)==13){
            SensoresDS[j]=parseFloat(a)
            //console.log(SensoresDTH[j])
            if(!isNaN(SensoresDS[j])){
              temp[j+totalPinesMega+SensoresDTH.length] = SensoresDS[j]
            }
            a=""
            j++
          }else{
              a+=data.charAt(i)
          }
        }
    }
    //console.log(SensoresDS)
  });
port2.on('error',function(err){
    console.log(err);
});


  ///////////////////////////////////////////////////////////////////////////////////
  //console.log("este es estado lc")
  //console.log(estado)
//se instancian solo sensores, y manda datos de inmediato
  for (let i = 1; i <= estado.length; i++) {
    
    if(estado[i-1]==1){
      if(clasePin[i-1]==1){
        
        switch(i){
/*          case 15:agent.addMetric(descripcion[i-1], function getRss () {
                    return temp[i-1]
                  })
                  A0.on("change", function() {
                    //temp[i-1] = A0.value
                    temp[i-1] = A0.value
                    })
                  break
*/
        }
      }
      if(clasePin[i-1]==3){
        
        /*switch(i){
          case 15:A0.on("change", function() {
                    //temp[i-1] = A0.value+20
                    
                    })
                  break
        }*/
      }
    }
    
  }

  //PARA SENSORES DTH, seran pines analogicos falsos ////////////////////////////////////////////////////////////////////////////////
  // En el sistema empieza en A16, y en arduino empieza en 70
  for (let i = 54; i < estado.length; i++) {
    if(estado[i]==1){
      if(clasePin[i]==1){
        agent.addMetric(descripcion[i], function getRss () {
          return temp[i]
        })
      }
    }
  }

  //AGENTE CONECTADO
    agent.connect()

    var ssww2=0
    var swww=0
    // MULTIPLE BOARD////////////////////////////////////////////////////////////////
    this.each(function(board) {
      if (board.id === "A") {
        
        //Se debe instanciar todos los pines del dispositivo
        this.pinMode(2, five.Pin.PWM);
        this.pinMode(3, five.Pin.PWM);
        this.pinMode(4, five.Pin.PWM);
        this.pinMode(5, five.Pin.PWM);
        this.pinMode(6, five.Pin.PWM);
        this.pinMode(7, five.Pin.PWM);
        this.pinMode(8, five.Pin.PWM);
        this.pinMode(9, five.Pin.PWM);
        this.pinMode(10, five.Pin.PWM);
        //this.pinMode(11, five.Pin.PWM);
        //this.pinMode(12, five.Pin.PWM);
//21
        ///FLUJO DE AGUA 1//////////////////////////////////////////////////////////////////////////////
        for (let i = 54; i < totalPinesMega; i++) {
          if(estado[i]==1){
             if(clasePin[i]==1){
                this.pinMode(i, five.Pin.INPUT);
                this.digitalRead(i, function(value) {
                // send the pin status to flowSignal helper
                flowSignal(i,value);
                //console.log(i,value);
                });
                //console.log(i)
             }
          }
        }
       function flowSignal (i,value) {
          if (value === 1) {
             pulsesFlow[i]++;
          }
       }

       setInterval(function() {
          for (let i = 53; i <totalPinesMega; i++) {
             if(estado[i]==1){
                if(clasePin[i]==1){
                   if(pulsesFlow[i]>10){
                      temp[i] = 1
                      //console.log("hay flujo : ",i,pulsesFlow[i])
                   }else{
                      temp[i] = 0
                      //console.log("no hay flujo : ",i,pulsesFlow[i])
                   }
                   pulsesFlow[i]=0
                }
                
              }

          }

        }, 1000);

        /////////////////////////////////////////////////////////////////////////////////

///VENTANA GIROS //////////////////////////////////////////////////////////////////////////////
        /* this.pinMode(21, five.Pin.INPUT);
         //para pin 7
         this.analogWrite(7, 80);
         var pulses2 = 0;
         this.digitalRead(21, function(value) {
           // send the pin status to flowSignal helper
           flowSignal2(value);
           //console.log(value);
         });
 
         setInterval(function() {
           var litres = 0;
           
           if(pulses2>5){
             litres=1
           }else{
             litres=0
           }
           
         }, 10000);
 
         function flowSignal2 (value) {
           if (value === 0) {
             return;
           }
           if (value === 1) {
             pulses2 ++;
             console.log("pulsos2",pulses2)
           }
           
         }
 */
/////////////////////////////////////////////////////////////////////////////////


        /////////////////////////////////////////////////////////////////////////////////
        this.loop(intervalAutomatization, () => {
    
      
          //console.log(temp)
          //console.log("\x1b[32m","Iniciando Automatizacion segun sensores")
          if(ssww2==0){
            var HoraYFecha = new Date()
            var Hora = HoraYFecha.getHours()
            var Minuto = HoraYFecha.getMinutes()
            var Segundos = HoraYFecha.getSeconds()
            
            console.log(Hora+":"+Minuto +":"+Segundos+" Actualiza la base de datos, con los finales de carrera")
            for (let i = 0; i < idPin.length; i++) {
              if(estado[i]==1){
                if(clasePin[i]==3){
                  if(temp[i]>=0 && temp[i]<300){
                    Auxtemp[i]=0
                    var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":0},"timestamp":1517522296902}`
                    client.publish("update", payload)
                    //console.log(payload)
                  }
                  if(temp[i]>400){
                    Auxtemp[i]=1
                    var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":1},"timestamp":1517522296902}`
                    client.publish("update", payload)
                    //console.log(payload)
                  }
        
                  //clientLocal.publish("update", payload)
                }
              }
            }
            ssww2=1
          }
          swww=1
          
    
          for (let i = 0; i < idPin.length; i++) {
            if(clasePin[i]==1){
    
              if(estado[i]==1 && descripcion[i].indexOf('temp')>=0){
                
                //abrir puertas
                if(!descansoVentilador[i] && !swPuertas[i]){
                  
                  if(temp[i]>=tempMedia){
                    var HoraYFecha = new Date()
                    var Hora = HoraYFecha.getHours()
                    var Minuto = HoraYFecha.getMinutes()
                    var Segundos = HoraYFecha.getSeconds()
                    
                    console.log("sensor "+temp[i]+" "+tempMedia)
                    console.log("\x1b[32m",Hora+":"+Minuto +":"+Segundos+"Funcion apertura puertas y ventanas para " + descripcion[i])
                    console.log("Antiguo loop abrir puerta")
                    
                    swPuertas[i]=true
                    swPuertas2[i]=1
                    abrirPuertas2(idPin[i],nroPin[i],i)
                    abrirPuertas(idPin[i],nroPin[i],i)
                    
                    
                  }
                  if(swPuertas2[i]==0){
                    if(temp[i]<tempMedia-10){
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      console.log("Antiguo loop primera cerrada de puerta")
                      console.log("sensor "+temp[i]+" "+tempMedia-10)
                      console.log("\x1b[32m",Hora+":"+Minuto +":"+Segundos+" Funcion cerrar puertas y ventanas "+ descripcion[i])
                      
                      swPuertas[i]=false  
                      swPuertas2[i]=1
    
                      cerrarPuertas2(idPin[i],nroPin[i],i)
                      cerrarPuertas(idPin[i],nroPin[i],i)
                      
                      
                    }
                  }
                  
                  
    
                  
                }
                //Ventilador
                if(descansoVentilador[i] && swPuertas[i]){
                  
                  if(temp[i]>=tempMaxima){
                    //Encender ventiladores
                    var HoraYFecha = new Date()
                    var Hora = HoraYFecha.getHours()
                    var Minuto = HoraYFecha.getMinutes()
                    var Segundos = HoraYFecha.getSeconds()
                    console.log("Antiguo loop ventilador")
                    console.log("sensor "+temp[i]+" "+tempMaxima)
                    console.log("\x1b[32m",Hora+":"+Minuto +":"+Segundos+" Funcion ventilador")
                    
                    encenderVentilador(idPin[i],nroPin[i],i)
                    //descanso para el sensor y sus dependientes ventiladores
                    descansoVentilador[i]=false
                  }
                  
                }
    
                //cerrar puertas
                if(swPuertas[i]){
                    
                    if(temp[i]<tempMedia-10){
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      console.log("Antiguo loop cerrar puerta")
                      console.log("sensor "+temp[i]+" "+tempMedia-10)
                      console.log("\x1b[32m",Hora+":"+Minuto +":"+Segundos+" Funcion cerrar puertas y ventanas "+ descripcion[i])
                      
                      swPuertas[i]=false  
                      cerrarPuertas2(idPin[i],nroPin[i],i)
                      cerrarPuertas(idPin[i],nroPin[i],i)
                      
                      
                    }
                }
                
              }
            }
    
          }
    
    
          TiempoApertura=0
        })
    
        //Este loop descuenta al tiempo de inactividad 5 segundos y si es 0 inicia acciones
        this.loop(6000, () => {
          TiEsperaInactividad=TiEsperaInactividad-6
          //console.log("Loop tiempo actividad :"+TiEsperaInactividad)
          if(TiEsperaInactividad<=0){
            
            for (let i = 0; i < idPin.length; i++) {
              if(clasePin[i]==1){
    
                if(estado[i]==1 && descripcion[i].indexOf('temp')>=0){
                  
                  //abrir puertas
                  if(temp[i]>=tempMedia){
                    TiEsperaInactividad=120
                    //  console.log("sensor "+temp[i]+" "+tempMedia)
                    //console.log("\x1b[32m","Terminando apertura puertas y ventanas para " + descripcion[i])
                    console.log("nuevo loop abrir")
                    console.log("sensor "+temp[i])
                      abrirPuertas(idPin[i],nroPin[i],i)
                      
                  }
                  
                  //cerrar puertas
                  if(temp[i]<tempMedia-10){
                    TiEsperaInactividad=120
                    //console.log("sensor "+temp[i]+" "+tempMedia-10)
                    //console.log("\x1b[32m","Terminando cerrar puertas y ventanas "+ descripcion[i])
                    console.log("nuevo loop cerrar")
                    console.log("sensor "+temp[i])
                    cerrarPuertas(idPin[i],nroPin[i],i)
                    
                  }
              
                  
                }
              }
    
            }
    
          }
        })
    
        //LOOP DE RIEGO pregunta cada 60 segundos
        this.loop(60000, () => {
          //console.log("\x1b[32m","Iniciando Automatizacion Riego")
          for (let i = 0; i < hId.length; i++) {
            var H=parseInt(hIni[i].substring(0,2))
            var M=parseInt(hIni[i].substring(3,5))
            var date = new Date()
            if(!hAux[i]){
              if(H==date.getHours() && M==date.getMinutes()){
                
                hAux[i]=true
    
                //convertir a milisegundos
                var duracion = parseInt(hDur[i].substring(3,5))*60000
                var idBomba =  ObtPines.find(m => m.id === hPinId[i])
    
                var HoraYFecha = new Date()
                var Hora = HoraYFecha.getHours()
                var Minuto = HoraYFecha.getMinutes()
                var Segundos = HoraYFecha.getSeconds()
                console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Encendiendo bomba : "+idBomba.descripcionPin)
                
                //encender bomba
                var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${idBomba.nroPin},"value":1},"timestamp":1517522296902}`
                client.publish("actuador", payload)
                clientLocal.publish("actuador", payload)
    
                setTimeout(function() {
                  hAux[i]=false
                  var idBomba =  ObtPines.find(m => m.id === hPinId[i])
                  var HoraYFecha = new Date()
                  var Hora = HoraYFecha.getHours()
                  var Minuto = HoraYFecha.getMinutes()
                  var Segundos = HoraYFecha.getSeconds()
                  
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Apagando bomba : "+idBomba.descripcionPin)
                  //apagar bomba
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${idBomba.nroPin},"value":0},"timestamp":1517522296902}`
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
    
                }, duracion)
    
              }
            }
            
    
            
            
          }
    
        })
    
        this.loop(400, () => {
          
          if(switchPWM==1){
            //console.log(potencia,switchPWM,pinPWM)  
            this.analogWrite(pinPWM, potencia);
            
            if(potencia<=250){
              potencia+=17
              //potencia.toFixed(2)
              console.log(potencia)
            }else{
              switchPWM=0
              potencia=0
            }
          }
        })

        client.on('message', (topic, payload) => {
        
          payload = parsePayload(payload)
          //console.log(payload)
          if(payload.agent.uuid==agentID){
            if(topic=="actuador"){
              TiEsperaInactividad = 120
              var HoraYFecha = new Date()
              var Hora = HoraYFecha.getHours()
              var Minuto = HoraYFecha.getMinutes()
              var Segundos = HoraYFecha.getSeconds()
              
              //Cambia el valor de string a entero
              payload.actuador.type = parseInt(payload.actuador.type)
              //ejecuta cambios en los numeros de pines si los requiera
              //payload.actuador.type = cambioPines(payload.actuador.type)
              
              console.log("\x1b[37m",Hora+":"+Minuto +":"+Segundos)
              console.log("\x1b[37m",payload)
              
              //ejecuta acciones en los pines
              if(payload.actuador.type >1 && payload.actuador.type <=10){
                
                if(payload.actuador.value==1){
                  if(switchPWM==1){
                    this.analogWrite(pinPWM, 255);
                  }
                  
                  potencia=0
                  switchPWM=1
                  pinPWM=payload.actuador.type
                }else{
                
                  switchPWM=0
                  potencia=0
                  this.analogWrite(payload.actuador.type, payload.actuador.value);
                }
                
                
              }
              if(payload.actuador.type >10){
                //this.analogWrite(payload.actuador.type, payload.actuador.value);
                this.digitalWrite(payload.actuador.type,payload.actuador.value)
              }
              
              
              
            }
            //if que sirve para detener el motor de una puerta o ventana si ya detecta el final de carrera
            if(swww==1){
              if(topic=="control"){
                if(payload.actuador.value==1 ){
                  for (let j = 14; j < idPin.length; j++) {
                    
                    if(payload.actuador.type+""==nroPin[j]+""){
                      for (let k = 0; k < idPin.length; k++) {
                        if(depende[j]==idPin[k] ){
                          var payload1 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296904}`
                            client.publish("actuador", payload1)
                            //clientLocal.publish("actuador", payload1)
                            //console.log(payload1)
                        }
                        if(depende[j]==depende[k] && descripcion[k].indexOf('finalOn')<0 && descripcion[k].indexOf('finalOff')<0){
                          var payload2 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296905}`
                            client.publish("actuador", payload2)
                            //clientLocal.publish("actuador", payload2)
                        }
                        
                      }
                      
                    }
       
                  }
                }
                
              }
              
            }
            //If que vuelve a mandar el valor de todos los finales de carrera al frontEnd
            if(topic=="actualizacion"){
              var HoraYFecha = new Date()
              var Hora = HoraYFecha.getHours()
              var Minuto = HoraYFecha.getMinutes()
              var Segundos = HoraYFecha.getSeconds()
              
              //imprime todos los horarios de riego
              for (let i = 0; i < hIni.length; i++) {
                console.log(i,hIni[i],hDur[i],hPinId[i],hId[i])
              }

              console.log(Hora+":"+Minuto +":"+Segundos+" Actualiza por peticion del front")
              for (let i = 54; i < idPin.length; i++) {
                if(clasePin[i]==3 && estado[i]==1){
                  if(temp[i]>600){
                    var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":1},"timestamp":1517522296903}`
                    client.publish("update", payload)
                    //clientLocal.publish("update", payload)
                    //console.log(payload)
                  }
                  if(temp[i]>=0 && temp[i]<400 ){
                    var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":0},"timestamp":1517522296904}`
                    client.publish("update", payload)
                    //clientLocal.publish("update", payload)
                    //console.log(payload)
                  }
                }
              }
            }
            //Se añade un nuevo horario de riego
            if(topic=="nuevoRiego"){
              console.log("NUEVO HORARIO DE RIEGO AÑADIDO")
              console.log(payload)
              
               hIni.push(payload.hora)
               hDur.push(payload.duracion)
               hPinId.push(parseInt(payload.bomba))
               hId.push(parseInt(payload.id))
               hAux.push(false)
            }
            if(topic=="eliminarRiego"){
              console.log("Se Elimino un horario de riego")
              console.log(payload)
              
              for (let i = 0; i < hIni.length; i++) {
                if(hIni[i]==payload.hora && hDur[i]==payload.duracion && hPinId[i]==parseInt(payload.bomba)){
                  console.log(hIni[i])
                  console.log(hDur[i])
                  console.log(hPinId[i])
                  console.log(hId[i])
                  hIni.splice(i,1)
                  hDur.splice(i,1)
                  hPinId.splice(i,1)
                  hId.splice(i,1)
                  
                }
                
              }
               
            }
          }
          
        
        })
/////////////////////////////////////////////////////////////////////////////////
      }
    });
    // MULTIPLE BOARD FIN ////////////////////////////////////////////////////////////////

// SENSOR DE AGUA //////////////////////////////////////////////////////////////////////////////
     //this.each(function(board) {
      //if (board.id === "B") {
      /////////////////////////////////////////////////////////////////////
/*
      var thermometer1 = new five.Thermometer({
        controller: "DS18B20",
        pin: 10,
        board:board
      });
    
      thermometer1.on("change", function() {
        //console.log(this.celsius + "°C");
        temp[74]=thermometer1.celsius;
        //temp[74]=this.celsius;
        // console.log("0x" + this.address.toString(16));
      });
*/
      /////////////////////////////////////////////////////////////////////
      //}
    //});
// SENSOR DE PROXIMIDAD //////////////////////////////////////////////////////////////////////////////
    //this.each(function(board) {
      //if (board.id === "C") {
      /////////////////////////////////////////////////////////////////////
      /*
      var proximity1 = new five.Proximity({
        controller: "HCSR04",
        pin: 12,
        board:board
      });
      
      //95 es 100% - 15 es 0%
      var proximidadDato1 = 0
      var proximidadMaximo1 = 95
      var proximidadMinimo1 = 15
      proximity1.on("change", function() {
        proximidadDato1 =this.cm
        proximidadDato1 -=proximidadMinimo1
        temp[77]=((proximidadDato1/(proximidadMaximo1-proximidadMinimo1))*100).toFixed(2)
        //temp[77]=this.cm
        //console.log("The obstruction has moved.");
      });

      var proximity2 = new five.Proximity({
        controller: "HCSR04",
        pin: 11,
        board:board
      });
      //95 es 100% - 15 es 0%
      var proximidadDato2 = 0
      var proximidadMaximo2 = 95
      var proximidadMinimo2 = 15
      proximity2.on("change", function() {
        proximidadDato2 =this.cm
        proximidadDato2 -=proximidadMinimo2
        temp[78]=((proximidadDato2/(proximidadMaximo2-proximidadMinimo2))*100).toFixed(2)
        //temp[78]=this.cm
        //console.log("The obstruction has moved.");
      });

      var proximity3 = new five.Proximity({
        controller: "HCSR04",
        pin: 10,
        board:board
      });

      //95 es 100% - 15 es 0%
      var proximidadDato3 = 0
      var proximidadMaximo3 = 95
      var proximidadMinimo3 = 15
      proximity3.on("change", function() {
        proximidadDato3 =this.cm
        proximidadDato3 -=proximidadMinimo3
        temp[79]=((proximidadDato3/(proximidadMaximo3-proximidadMinimo3))*100).toFixed(2)
        //temp[79]=this.cm
        //console.log("The obstruction has moved.");
      });*/
      /////////////////////////////////////////////////////////////////////
      //}
    //});

    
    //Funcion que cambia el numero de pin si lo requiera (Controlino si requiere cambio de pin)
    function cambioPines(pin){
      
      if(pin==12){return pin=13}
      
      return pin 
            
    }

    
})
//Funcion de Configuracion Inicial
async function conf(){
 
  const options = {
    method: 'GET',
    url: Host+`api/obtenerPines/${agentID}`,
    //url: `http://173.212.235.89:3000/api/obtenerPines/${agentID}`,
    json: true
  }
  
  try {
    ObtPines = await request(options)
  } catch (e) {
    this.error = e.error.error
    return
  }
  //console.log(ObtPines)
  
  //itera sobre todo el json para colocar cada valor del pin en un array diferente
  if (Array.isArray(ObtPines)) {
    ObtPines.forEach(m => {
      idPin.push(m.id)
      estado.push(m.estado)
      clasePin.push(m.clasePin)
      accion.push(m.accionPin)
      descripcion.push(m.descripcionPin)
      temp.push(-1)
      Auxtemp.push(-1)
      sensorId.push(m.sensorId)
      descansoVentilador.push(false)
      nroPin.push(m.nroPin)
      estadoPuertas.push(false)
      depende.push(m.depende)
      tiempoMotorAuxi.push(m.tiempoMotor)
      swPuertas.push(false)
      swMotor.push(false)
      swPuertas2.push(0)
      pulsesFlow.push(0)
    })
  }
  //la variable tiempoMotorAuxi se agarra el tiempo como string y aqui se lo transforma a numeros enteros en milisegundos
  for (let i = 0; i < tiempoMotorAuxi.length; i++) {
    var a=parseInt(tiempoMotorAuxi[i].substring(3,5))
    var b=parseInt(tiempoMotorAuxi[i].substring(6,8))
    
    var c = b*1000
    var d= (a*60)*1000
    var time = d+c
    tiempoMotor.push(time)
    
  }
//console.log(ObtPines)
}
//Funcion que instancia los parametros de temperatura y tiempointermitencia
async function findInvbyContr(){
 
  const options = {
    method: 'GET',
    url: Host+`api/findInvbyContr/${agentID}`,
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
  
  //itera sobre todo el json para colocar cada valor del pin en un array diferente
  if (Array.isArray(result)) {
    result.forEach(m => {
      tempMaxima=m.tempMaxima
      tempMedia=m.tempMedia
      tempMinima=m.tempMinima
      tiempoIntermitencia=m.tiempoIntermitencia
      
      var a=parseInt(m.tiempoPausa.substring(3,5))
      var b=parseInt(m.tiempoPausa.substring(6,8))
      
      var c = b*1000
      var d= (a*60)*1000
      var time = d+c

      TiempoPausa =  time

      var a=parseInt(m.tiempoFuncionMotor.substring(3,5))
      var b=parseInt(m.tiempoFuncionMotor.substring(6,8))
      
      var c = b*1000
      var d= (a*60)*1000
      var time = d+c

      TiempoFuncionMotor=  time
    })
  }
  //console.log(result)
  
}
async function horarios(){
 
  const options = {
    method: 'GET',
    url: Host+`api/mostrarHorarioControlador/${agentID}`,
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
  
  if (Array.isArray(result)) {
    result.forEach(m => {
      hId.push(m.id)
      hIni.push(m.horaInicio)
      hDur.push(m.duracion)
      hPinId.push(m.pineId)
      hAux.push(false)
    })
  }
  console.log(hIni)
  
}
async function notificacion(title, body){
  
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
async function encenderVentilador(idP, nroP,pos){
  console.log("ventilador")
  TiEsperaInactividad = 120
  //conversion a mili segundo del tiempo de intermitencia
  var a=parseInt(tiempoIntermitencia.substring(3,5))
  var b=parseInt(tiempoIntermitencia.substring(6,8))
  
  var c = b*1000
  var d= (a*60)*1000
  var time = d+c

  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP && descripcion[j].toLowerCase().indexOf('ventilador')>=0){
      var HoraYFecha = new Date()
      var Hora = HoraYFecha.getHours()
      var Minuto = HoraYFecha.getMinutes()
      var Segundos = HoraYFecha.getSeconds()
      console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Encendiendo ventilador : "+descripcion[j])
      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":1},"timestamp":1517522296902}`
      client.publish("actuador", payload)
      clientLocal.publish("actuador", payload)
    }

  }


  //segun tiempointermitencia, mantiene ventiladores encendidos
  setTimeout(function() {
    
    
    for (let j = 0; j < idPin.length; j++) {
      
      if(sensorId[j]==idP && descripcion[j].toLowerCase().indexOf('ventilador')>=0){
        var HoraYFecha = new Date()
        var Hora = HoraYFecha.getHours()
        var Minuto = HoraYFecha.getMinutes()
        var Segundos = HoraYFecha.getSeconds()
        
        console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Descanso ventilador : "+descripcion[j])
        var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
        client.publish("actuador", payload)
        clientLocal.publish("actuador", payload)
      }
  
    }
    //apaga ventiladores, despues del primer tiempo de intermitencia, para luego preguntar otra vez
    setTimeout(function() {
      descansoVentilador[pos]=true
    }, time)
    
  }, time)
  
}
async function abrirPuertas(idP, nroP, pos){
  TiEsperaInactividad = 120
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {
        
          if(idPin[j]==depende[j2]){
            //este pin debe cambiar, debe ser el sensor de giros
            if(descripcion[j2].indexOf('finalOn')>=0 && temp[j2]<200){
              
                  TiempoApertura=TiempoApertura+TiempoPausa
                  setTimeout(function() {
                    var descr
                    var nPin
                    
                    for (let k = 0; k < descripcion.length; k++) {
                      if(descripcion[j]+'Off'==descripcion[k]){
                        nPin=nroPin[k]
                        descr=descripcion[j]
                      }
                    
                    }
                  //abrir puerta, enciende el motor para abrir
                  var HoraYFecha = new Date()
                  var Hora = HoraYFecha.getHours()
                  var Minuto = HoraYFecha.getMinutes()
                  var Segundos = HoraYFecha.getSeconds()
                  console.log("tiempo actividad :"+TiEsperaInactividad)
                  //PIN ABRIR
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Abriendo - encendiendo motor : "+descripcion[j]);
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":1},"timestamp":1517522296902}`
                  
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                  
                  //PIN POLARIDAD
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - Encendiendo motor : "+descr)
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nPin},"value":1},"timestamp":1517522296902}`
                  
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                    
                    //pasado X segundos no detecta final de carrera y apaga el motor
                    setTimeout(function() {
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      
                      console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Error, final de carrera no detectado, deteniendo motor : "+descripcion[j])
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
                      client.publish("actuador", payload)
                      clientLocal.publish("actuador", payload)


                      
                    }, TiempoFuncionMotor)
                    
                }, TiempoApertura)
              
            }

          }
          
        }
    }
  }
  
  //habilita para q pueda funcionar el ventilador
  setTimeout(function() {
    
    descansoVentilador[pos]=true
    swPuertas[pos]=true
    //console.log("abrir ------------------------------------------------------------------")

    
  }, TiempoApertura+10000)
  


    
  
}
async function cerrarPuertas(idP, nroP, pos){
  TiEsperaInactividad = 120
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {

          if(idPin[j]==depende[j2]){
      
            if(descripcion[j2].indexOf('finalOff')>=0 && temp[j2]<200){
      
              TiempoApertura=TiempoApertura+TiempoPausa
                
                setTimeout(function() {
                  var descr
                  var nPin
                  
                  for (let k = 0; k < descripcion.length; k++) {
                    if(descripcion[j]+'Off'==descripcion[k]){
                      nPin=nroPin[k]
                      descr=descripcion[j]
                    }
                  
                  }
                  //abrir puerta, enciende el motor para abrir
                  var HoraYFecha = new Date()
                  var Hora = HoraYFecha.getHours()
                  var Minuto = HoraYFecha.getMinutes()
                  var Segundos = HoraYFecha.getSeconds()
                  console.log("tiempo actividad :"+TiEsperaInactividad)
                   //PIN ABRIR
                   console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Abriendo - encendiendo motor : "+descripcion[j]);
                   var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":1},"timestamp":1517522296902}`
                   
                   client.publish("actuador", payload)
                   clientLocal.publish("actuador", payload)
                   
                   //PIN POLARIDAD
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - Encendiendo motor : "+descr)
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nPin},"value":1},"timestamp":1517522296902}`
                  //console.log(payload)
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                  
                  //pasado 10 segundos apaga el motor
                  setTimeout(function() {
                    var HoraYFecha = new Date()
                    var Hora = HoraYFecha.getHours()
                    var Minuto = HoraYFecha.getMinutes()
                    var Segundos = HoraYFecha.getSeconds()
                    
                   console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - deteniendo motor : "+descr)
                    var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nPin},"value":0},"timestamp":1517522296902}`
                    client.publish("actuador", payload)
                    clientLocal.publish("actuador", payload)
                    
                    if(temp[j2]<200){
                      console.log("\x1b[31m","error no termino de cerrar : "+descripcion[j].substring(0,descripcion[j].length))
                    }
                    
                  }, TiempoFuncionMotor)
                
                }, TiempoApertura)
            
              
            }
            
          }
          
        }

      
      
    }
  }
  setTimeout(function() {

    swPuertas[pos]=false
    descansoVentilador[pos]=false
    //console.log("cerrar----------------------------------------")
  }, TiempoApertura+10000)
}
async function abrirPuertas2(idP, nroP, pos){
  TiEsperaInactividad = 120
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {
      
          if(idPin[j]==depende[j2]){
      
            if(sensorId[j2]==0){
      
                  TiempoApertura=TiempoApertura+TiempoPausa
                  setTimeout(function() {
                  
                  //abrir puerta, enciende el motor para abrir
                  var HoraYFecha = new Date()
                  var Hora = HoraYFecha.getHours()
                  var Minuto = HoraYFecha.getMinutes()
                  var Segundos = HoraYFecha.getSeconds()
                  console.log("tiempo actividad :"+TiEsperaInactividad)
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Abriendo - encendiendo motor : "+descripcion[j]);
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":1},"timestamp":1517522296902}`
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                  
                  
                  

                    //pasado X segundos no detecta final de carrera y apaga el motor
                    setTimeout(function() {
                      //Actualiza variable de sensorId pero del 2do pin para cambiar su valor a 1 que es abierto
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j2]},"value":0},"timestamp":1}`
                      sensorId[j2]=1
                      client.publish("actuador2", payload)
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      
                      console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Abriendo - Deteniendo motor : "+descripcion[j])
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
                      client.publish("actuador", payload)
                      clientLocal.publish("actuador", payload)

                    }, tiempoMotor[j])
                    
                }, TiempoApertura)
              
            }

          }
          
        }
    }
  }
  
  // //habilita para q pueda funcionar el ventilador
  // setTimeout(function() {
    
  //   descansoVentilador[pos]=true
  //   swPuertas[pos]=true
  //   //console.log("abrir ------------------------------------------------------------------")

    
  // }, TiempoApertura+10000)
  


    
  
}
async function cerrarPuertas2(idP, nroP, pos){
  TiEsperaInactividad = 120
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {
        
          if(idPin[j]==depende[j2]){
            
            if(sensorId[j2]==1){
              
                  TiempoApertura=TiempoApertura+TiempoPausa
                  setTimeout(function() {
                  
                  //abrir puerta, enciende el motor para abrir
                  var HoraYFecha = new Date()
                  var Hora = HoraYFecha.getHours()
                  var Minuto = HoraYFecha.getMinutes()
                  var Segundos = HoraYFecha.getSeconds()
                  console.log("tiempo actividad :"+TiEsperaInactividad)
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - encendiendo motor : "+descripcion[j]);
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j2]},"value":1},"timestamp":1517522296902}`
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                  
                  
                  

                    //pasado X segundos no detecta final de carrera y apaga el motor
                    setTimeout(function() {
                      //Actualiza variable de sensorId pero del 2do pin para cambiar su valor a 1 que es abierto
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j2]},"value":0},"timestamp":0}`
                      sensorId[j2]=0
                      client.publish("actuador2", payload)
                      
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      
                      console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - Deteniendo motor : "+descripcion[j])
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j2]},"value":0},"timestamp":1517522296902}`
                      client.publish("actuador", payload)
                      clientLocal.publish("actuador", payload)

                    }, tiempoMotor[j])
                    
                }, TiempoApertura)
              
            }

          }
          
        }
    }
  }
  
  // //habilita para q pueda funcionar el ventilador
  // setTimeout(function() {
    
  //   swPuertas[pos]=false
  //   descansoVentilador[pos]=false
  //   //console.log("abrir ------------------------------------------------------------------")

    
  // }, TiempoApertura+10000)
  


    
  
}
async function finalCarrera(pin,value,pos) {
  
    
      if(value>600){
        if(Auxtemp[pos]==1){
          var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${pin}","value":1},"timestamp":1517522296903}`
          client.publish("control", payload)
          client.publish("update", payload)
          clientLocal.publish("control", payload)
          // console.log(payload)
          // console.log(temp)
          Auxtemp[pos]=0
        }
      }
      if(value>=0 && value<400 ){
        if(Auxtemp[pos]==0){
          var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${pin}","value":0},"timestamp":1517522296904}`
          client.publish("control", payload)
          client.publish("update", payload)
          clientLocal.publish("control", payload)
          // console.log(payload)
          // console.log(temp)
          Auxtemp[pos]=1
        }
      }
      
    
  
}

 // mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")


//fin1