
 // incluimos la libreria j5
 const five = require("johnny-five")
 const request = require('request-promise-native')
 const mqtt = require('async-mqtt')
 const { parsePayload } = require('../mod-mqtt/utils')
 //configuramos nuestra placa arduino en una variable
 var board = new five.Board({
  //port: "/dev/ttyACM0"
 })
 
 //Inicializamos el agente
 const agentID = "arduino"
 const ModAgent = require('../mod-agent')
 const sendDatos = 6000
 const intervalAutomatization = sendDatos
 //host para la api
 const Host = `http://localhost:3000/`
 //const Host = `http://173.212.235.89:3000/`
 const agent = new ModAgent({
//   interval: 300000,
   interval: 2000,
   agentID: agentID,
 })
 //iniciamos cliente mqtt
 //const client = mqtt.connect('mqtt://173.212.235.89')
 const client = mqtt.connect('mqtt://localhost')
 const clientLocal = mqtt.connect('mqtt://localhost')
 
 
  client.subscribe('actuador')
  client.subscribe('update')
  client.subscribe('actualizacion')
  client.subscribe('nuevoRiego')
  client.subscribe('control')
 
  clientLocal.subscribe('actuador')
  clientLocal.subscribe('update')
  clientLocal.subscribe('actualizacion')
  clientLocal.subscribe('control')


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
let tempMaxima=31, tempMedia=23, tempMinima=10, tiempoIntermitencia="00:03:00", temp=[], Auxtemp=[],sensorId=[],idPin=[],nroPin=[], descansoVentilador=[], estadoPuertas=[], depende=[],tiempoMotorAuxi=[],tiempoMotor=[],swPuertas=[],swMotor=[],swPuertas2=[]
let tiempoPausa="00:00:40", tiempoFuncionMotor="00:00:30", hId=[],hIni=[],hDur=[],hPinId=[],hAux=[],ObtPines
//se espera cada 30 segundos para la siguiente puerta o ventana
var TiempoPausa = 30000
//variable que determina en que tiempo se empezaran a abrir puertas y ventas, y en cada iteracion se va sumando 30 segundos
var TiempoApertura=0
var TiempoFuncionMotor=10000
//tiempoIntermitencia = tiempo de funcionamiento de ventilador y su respectivo descanzo

var tiempoFuncionVentilador = 0
//Tiempo de espera de inactividad para preguntar nuevamente sobre puertas y ventanas de abrir o cerrar [segundos]
var TiEsperaInactividad = tiemp
var tiemp = 60


conf()
findInvbyContr()
horarios()

// funcion que se ejecuta cuando la placa ya esta lista
 board.on("ready", function() {
  
// mensaje que se muestra por consola informandonos de que la placa esta lista
 console.log("Placa lista.")

//Se debe instanciar todos los pines del dispositivo

var D0 = new five.Pin(0)
var D1 = new five.Pin(1)
var D2 = new five.Pin(2)
var D3 = new five.Pin(3)
var D4 = new five.Pin(4)
var D5 = new five.Pin(5)
var D6 = new five.Pin(6)
var D7 = new five.Pin(7)
var D8 = new five.Pin(8)
var D9 = new five.Pin(9)
var D10 = new five.Pin(10)
var D11 = new five.Pin(11)
var D12 = new five.Pin(12)
var D13 = new five.Pin(13)
var A0 = new five.Sensor("A0")
var A1 = new five.Sensor("A1")
var A2 = new five.Sensor("A2")
var A3 = new five.Sensor("A3")
var A4 = new five.Sensor("A4")
var A5 = new five.Sensor("A5")

   //D0=ABRIR D1=CERRAR A4=on58 A5=off59
   //PULSADOR ABRIR
  //  D38.read(function(error, value) {
  //    //console.log(value+" 38");
  //    if(value==1){
  //      if(temp[58]>0 && temp[58]<400){
  //        console.log("Ariendo Puerta Manualmente "+depende[5])
  //        var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":0,"value":1},"timestamp":1517522296902}`
  //        clientLocal.publish("actuador", payload)
  //      }
        
  //      }
  //   });
  //  //PULSADOR CERRAR
  //  D39.read(function(error, value) {
  //    //console.log(value+" 39");
  //    if(value==1){
  //      if(temp[59]>0 && temp[59]<400){
  //        console.log("Cerrando Puerta Manualmente "+depende[5])
  //        var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":1,"value":1},"timestamp":1517522296902}`
  //        clientLocal.publish("actuador", payload)
  //      }
       
  //      }

  // });



//se instancian solo sensores, y manda datos de inmediato
for (let i = 1; i <= estado.length; i++) {
    
  if(estado[i-1]==1){
    if(clasePin[i-1]==1){
      
      switch(i){
        case 15:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A0.on("change", function() {
                  //temp[i-1] = A0.value
                  
                  })
                break
        case 16:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A1.on("change", function() {
                  temp[i-1] = A1.value
                  
                  })
                break
        case 17:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A2.on("change", function() {
                  temp[i-1] = A2.value-20
                 
                  })
                break
        case 18:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A3.on("change", function() {
                  temp[i-1] = A3.value
                  })
                break
        case 19:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A4.on("change", function() {
                  temp[i-1] = A4.value
                  })
                break
        case 20:agent.addMetric(descripcion[i-1], function getRss () {
                  return temp[i-1]
                })
                A5.on("change", function() {
                  temp[i-1] = A5.value
                  })
                break
      }
    }
    if(clasePin[i-1]==3){
      
      switch(i){
        case 15:A0.on("change", function() {
                  //temp[i-1] = A0.value+20
                  
                  })
                break
        case 16:A1.on("change", function() {
                  //temp[i-1] = A1.value
                  
                  })
                break
        case 17:A2.on("change", function() {
                  //temp[i-1] = A2.value-20
                 
                  })
                break
        case 18:A3.on("change", function() {
                  
                  //temp[i-1] = A3.value
                  })
                break
        case 19:A4.on("change", function() {
                  
                  //temp[i-1] = A4.value
                  })
                break
        case 20:A5.on("change", function() {
                  
                  //temp[i-1] = A5.value
                  })
                break
      }
    }
  }
  
}


    //AGENTE CONECTADO
    agent.connect()
    var ssww2=0
    var swww=0
    
     //LOOP DE AUTOMATIZACION SEGUN SENSORES
     this.loop(intervalAutomatization, () => {
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Este if es para que cuando inicie el sistema (solo una vez), envie el estado actual de los finales de carrera
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
    
              
            }
          }
        }
        ssww2=1
      }
      swww=1
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //Se controla todos los pines que sean sensores para la automatizacion
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
                // var HoraYFecha = new Date()
                // var Hora = HoraYFecha.getHours()
                // var Minuto = HoraYFecha.getMinutes()
                // var Segundos = HoraYFecha.getSeconds()
                // console.log("Antiguo loop ventilador")
                console.log("sensor "+temp[i]+" "+tempMaxima)
                console.log("\x1b[32m"," Funcion ventilador")
                
                descansoVentilador[i]=false
                encenderVentilador(idPin[i],nroPin[i],i)
                //descanso para el sensor y sus dependientes ventiladores
                
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

    //Este loop descuenta al tiempo de inactividad 6 segundos y si es 0 inicia acciones
    this.loop(6000, () => {
      TiEsperaInactividad=TiEsperaInactividad-6
      //console.log("Loop tiempo actividad :"+TiEsperaInactividad)
      if(TiEsperaInactividad<=0){
        TiEsperaInactividad=tiemp
        for (let i = 0; i < idPin.length; i++) {
          if(clasePin[i]==1){

            if(estado[i]==1 && descripcion[i].indexOf('temp')>=0){
              
              //abrir puertas
              if(temp[i]>=tempMedia){
                //console.log("NP - sensor "+temp[i])
                abrirPuertas3(idPin[i],nroPin[i],i)
                  
              }
              
              //cerrar puertas
              if(temp[i]<tempMedia-10){
                //console.log("NP - sensor "+temp[i])
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
        //console.log(H)
        //console.log(M)
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

    //Recibe mensajes de mqtt
    client.on('message', (topic, payload) => {
        
      payload = parsePayload(payload)
      
      if(payload.agent.uuid==agentID){
        if(topic=="actuador"){

          
          var HoraYFecha = new Date()
          var Hora = HoraYFecha.getHours()
          var Minuto = HoraYFecha.getMinutes()
          var Segundos = HoraYFecha.getSeconds()
          console.log("\x1b[37m",Hora+":"+Minuto +":"+Segundos+ "  Pin :"+payload.actuador.type +" - Valor :"+payload.actuador.value)
          

          payload.actuador.type = parseInt(payload.actuador.type)
          //ejecuta cambios en los numeros de pines si los requiera
          //payload.actuador.type = cambioPines(payload.actuador.type)
          
          // console.log("\x1b[37m",Hora+":"+Minuto +":"+Segundos)
          // console.log("\x1b[37m",payload)
          
          //ejecuta acciones en los pines
          this.digitalWrite(payload.actuador.type,payload.actuador.value)
        }
        //if que sirve para detener el motor de una puerta o ventana si ya detecta el final de carrera
      if(swww==1){
        if(topic=="control"){

          if(payload.actuador.value==1 ){
            for (let j = 54; j < idPin.length; j++) {
              
              if(payload.actuador.type+""==nroPin[j]+""){
                for (let k = 0; k < idPin.length; k++) {

                  if(depende[j]==idPin[k] ){
                    var payload1 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296904}`
                      client.publish("actuador", payload1)
                  }
                  if(depende[j]==depende[k] && descripcion[k].indexOf('finalOn')<0 && descripcion[k].indexOf('finalOff')<0){
                    var payload2 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296905}`
                      client.publish("actuador", payload2)
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
        console.log(Hora+":"+Minuto +":"+Segundos+" Actualiza finales de carrera por peticion del front")
        for (let i = 54; i < idPin.length; i++) {
          if(clasePin[i]==3 && estado[i]==1){
            if(temp[i]>600){
              var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":1},"timestamp":1517522296903}`
              client.publish("update", payload)
            }
            if(temp[i]>=0 && temp[i]<400 ){
              var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${nroPin[i]}","value":0},"timestamp":1517522296904}`
              client.publish("update", payload)
            }
          }
        }
      }
      //Se añade un nuevo horario de riego
      if(topic=="nuevoRiego"){
        console.log("NUEVO HORARIO DE RIEGO AÑADIDO")
        
        hIni.push(payload.hora)
        hDur.push(payload.duracion)
        hPinId.push(parseInt(payload.bomba))
        hId.push(parseInt(payload.id))
        hAux.push(false)
         

      }
      if(topic=="eliminarRiego"){
        console.log("Se Elimino un horario de riego")
        
        for (let index = 0; index < hIni.length; index++) {
          if(hId[index]==parseInt(payload.id)){
            hIni.splice(index,1)
            hDur.splice(index,1)
            hPinId.splice(index,1)
            hId.splice(index,1)
          }
          
        }
         
      }

    }
      
    
    })
    //Mqtt de manera local, que ejecuta por si no tiene acceso a internet
    clientLocal.on('message', (topic, payload) => {
        
      payload = parsePayload(payload)
      
      if(payload.agent.uuid==agentID){
        //console.log(payload)
        if(topic=="actuador"){
          
          var HoraYFecha = new Date()
          var Hora = HoraYFecha.getHours()
          var Minuto = HoraYFecha.getMinutes()
          var Segundos = HoraYFecha.getSeconds()
          
          payload.actuador.type = parseInt(payload.actuador.type)
          //ejecuta cambios en los numeros de pines si los requiera
          //payload.actuador.type = cambioPines(payload.actuador.type)
          
          // console.log("\x1b[37m",Hora+":"+Minuto +":"+Segundos)
          // console.log("\x1b[37m",payload)
          
          //ejecuta acciones en los pines
          this.digitalWrite(payload.actuador.type,payload.actuador.value)

          
        }

        //if que sirve para detener el motor de una puerta o ventana si ya detecta el final de carrera
        if(swww==1){
          if(topic=="control"){
            if(payload.actuador.value==1 ){
              for (let j = 54; j < idPin.length; j++) {
                
                if(payload.actuador.type+""==nroPin[j]+""){
                  for (let k = 0; k < idPin.length; k++) {

                    if(depende[j]==idPin[k] ){
                      var payload1 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296904}`
                        //client.publish("actuador", payload1)
                        clientLocal.publish("actuador", payload1)
                    }
                    if(depende[j]==depende[k] && descripcion[k].indexOf('finalOn')<0 && descripcion[k].indexOf('finalOff')<0){
                      var payload2 = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[k]},"value":0},"timestamp":1517522296905}`
                        //client.publish("actuador", payload2)
                        clientLocal.publish("actuador", payload2)
                    }
                    
                  }
                  
                }
  
              }
            }
            
          }
        }
      

      }
      
    
    })
    //Funcion que cambia el numero de pin si lo requiera (Controlino si requiere cambio de pin)
    async function accionarPines(payload){
      switch(parseInt(payload.actuador.type)){
        case 0:D2.write(payload.actuador.value); break;//D0
        case 1:D3.write(payload.actuador.value); break;//D1
        case 2:D4.write(payload.actuador.value); break;//D2
        case 3:D5.write(payload.actuador.value); break;//D3
        case 4:D6.write(payload.actuador.value); break;//D4
        case 5:D7.write(payload.actuador.value); break;//D5
        case 6:D8.write(payload.actuador.value); break;//D6
        case 7:D9.write(payload.actuador.value); break;//D7
        case 8:D10.write(payload.actuador.value); break;//D8
        case 9:D11.write(payload.actuador.value); break;//D9
        case 10:D12.write(payload.actuador.value); break;//D10
        case 11:D13.write(payload.actuador.value); break;//D11
        case 12:D42.write(payload.actuador.value); break;//D12
        case 13:D43.write(payload.actuador.value); break;//D13
        case 14:D44.write(payload.actuador.value); break;//D14
        case 15:D45.write(payload.actuador.value); break;//D15
        case 16:D46.write(payload.actuador.value); break;//D16
        case 17:D47.write(payload.actuador.value); break;//D17
        case 18:D48.write(payload.actuador.value); break;//D18
        case 19:D49.write(payload.actuador.value); break;//D19
        case 20://D20
        case 21://D21
        case 22://D22
        case 23://D23

        case 24:
        //Aca empieza los R0 al 15
        case 25:D22.write(payload.actuador.value); break;//R0
        case 26:D23.write(payload.actuador.value); break;//R1
        case 27:D24.write(payload.actuador.value); break;//R2
        case 28:D25.write(payload.actuador.value); break;//R3
        case 29:D26.write(payload.actuador.value); break;//R4
        case 30:D27.write(payload.actuador.value); break;//R5
        case 31:D28.write(payload.actuador.value); break;//R6
        case 32:D29.write(payload.actuador.value); break;//R7
        case 33:D30.write(payload.actuador.value); break;//R8
        case 34:D31.write(payload.actuador.value); break;//R9
        case 35:D32.write(payload.actuador.value); break;//R10
        case 36:D33.write(payload.actuador.value); break;//R11
        case 37:D34.write(payload.actuador.value); break;//R12
        case 38:D35.write(payload.actuador.value); break;//R13
        case 39:D36.write(payload.actuador.value); break;//R14
        case 40:D37.write(payload.actuador.value); break;//R15
        case 41:D18.write(payload.actuador.value); break;//IN0
        case 42:D19.write(payload.actuador.value); break;//IN1
        case 43:D38.write(payload.actuador.value); break;//I16
        case 44:D39.write(payload.actuador.value); break;//I17
        case 45:D40.write(payload.actuador.value); break;//I18
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        //EMPIEZAN LOS ANALOGICOS (A)
        // case 54:D54.write(payload.actuador.value); break;//A0
        // case 55:D55.write(payload.actuador.value); break;//A1
        // case 56:D56.write(payload.actuador.value); break;//A2
        // case 57:D57.write(payload.actuador.value); break;//A3
        // case 58:D58.write(payload.actuador.value); break;//A4
        // case 59:D59.write(payload.actuador.value); break;//A5
        // case 60:D60.write(payload.actuador.value); break;//A6
        // case 61:D61.write(payload.actuador.value); break;//A7
        // case 62:D62.write(payload.actuador.value); break;//A8
        // case 63:D63.write(payload.actuador.value); break;//A9
        // case 64:D64.write(payload.actuador.value); break;//A10
        // case 65:D65.write(payload.actuador.value); break;//A11
        // case 66:D66.write(payload.actuador.value); break;//A12
        // case 67:D67.write(payload.actuador.value); break;//A13
        // case 68:D68.write(payload.actuador.value); break;//A14
        // case 69:D69.write(payload.actuador.value); break;//A15
      }
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
  
    temp[14]=35
    console.log(temp)
  //  temp[16]=600
  //  temp[17]=600
  //descansoVentilador[18]=true
  //descansoVentilador[19]=true
  
  

  
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
  //tiempo para el ventilador
  var aa=parseInt(tiempoIntermitencia.substring(3,5))
  var bb=parseInt(tiempoIntermitencia.substring(6,8))
  
  var cc = bb*1000
  var dd= (aa*60)*1000
  tiempoFuncionVentilador = dd+cc
  console.log(tiempoIntermitencia)
  console.log(tiempoFuncionVentilador)
  
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
  
}

function encenderVentilador(idP, nroP,pos){
  //conversion a mili segundo del tiempo de intermitencia


  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP && descripcion[j].toLowerCase().indexOf('ventilador')>=0){
      
      console.log("\x1b[33m"," Encendiendo ventilador : "+descripcion[j])
      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":1},"timestamp":1517522296902}`
      client.publish("actuador", payload)
      clientLocal.publish("actuador", payload)
    //   setInterval(() => {
    //     this.digitalWrite(BATMEDCARG, 0);
    // }, ledDelay)
      //segun tiempointermitencia, mantiene ventiladores encendidos
      setTimeout(() =>{
    
        console.log("\x1b[33m"," Descanso ventilador : "+descripcion[j])
            var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
            client.publish("actuador", payload)
            clientLocal.publish("actuador", payload)
            
      
        
        //apaga ventiladores, despues del primer tiempo de intermitencia, para luego preguntar otra vez
        setTimeout(() =>{
          
          descansoVentilador[pos]=true
          
        }, tiempoFuncionVentilador)
        
      }, tiempoFuncionVentilador)

    }

  }


  
  
  
}

async function abrirPuertas(idP, nroP, pos){
  TiEsperaInactividad = tiemp
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {
        
          if(idPin[j]==depende[j2]){

            if(descripcion[j2].indexOf('finalOn')>=0 && temp[j2]<200){
              
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
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      
                      if(temp[j2]<220){

                        console.log("\x1b[31m","error no termino de abrir : "+descripcion[j])
                        console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Error, final de carrera no detectado, deteniendo motor : "+descripcion[j])
                        var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
                        client.publish("actuador", payload)
                        clientLocal.publish("actuador", payload)
                      }
                      
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
    
  }, TiempoApertura+10000)
  


    
  
}
async function abrirPuertas3(idP, nroP, pos){
  TiEsperaInactividad = tiemp
  //encender ventiladores apenas inicia la funcion, para todos los ventiladores que dependan del sensor
  for (let j = 0; j < idPin.length; j++) {
    
    if(sensorId[j]==idP){
      
      for (let j2 = 0; j2 < idPin.length;j2++) {
        
          if(idPin[j]==depende[j2]){

            if(descripcion[j2].indexOf('finalOn')>=0 && temp[j2]<200){
              
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
                      var HoraYFecha = new Date()
                      var Hora = HoraYFecha.getHours()
                      var Minuto = HoraYFecha.getMinutes()
                      var Segundos = HoraYFecha.getSeconds()
                      
                      if(temp[j2]<220){

                        console.log("\x1b[31m","error no termino de abrir : "+descripcion[j])
                        console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Error, final de carrera no detectado, deteniendo motor : "+descripcion[j])
                        var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j]},"value":0},"timestamp":1517522296902}`
                        client.publish("actuador", payload)
                        clientLocal.publish("actuador", payload)
                      }
                      
                    }, TiempoFuncionMotor)
                    
                }, TiempoApertura)
              
            }

          }
          
        }
    }
  }
  
  //habilita para q pueda funcionar el ventilador
  setTimeout(function() {
    
    //descansoVentilador[pos]=true
    swPuertas[pos]=true
    
  }, TiempoApertura+10000)
  


    
  
}
async function abrirPuertas2(idP, nroP, pos){
  TiEsperaInactividad = tiemp
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
                  //console.log("tiempo actividad :"+TiEsperaInactividad)
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
  
  
}
async function cerrarPuertas2(idP, nroP, pos){
  TiEsperaInactividad = tiemp
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
                  //console.log("tiempo actividad :"+TiEsperaInactividad)
                  console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - encendiendo motor : "+descripcion[j]);
                  var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nroPin[j2]},"value":1},"timestamp":1517522296902}`
                  client.publish("actuador", payload)
                  clientLocal.publish("actuador", payload)
                  
                  
                  

                    //pasado X segundos apaga el motor
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
  
  
}
async function cerrarPuertas(idP, nroP, pos){
  TiEsperaInactividad = tiemp
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
                    
                   

                    if(temp[j2]<200){
                      console.log("\x1b[31m","error no termino de cerrar : "+descripcion[j].substring(0,descripcion[j].length))
                      console.log("\x1b[33m",Hora+":"+Minuto +":"+Segundos+" Cerrando - deteniendo motor : "+descr)
                      var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":${nPin},"value":0},"timestamp":1517522296902}`
                      client.publish("actuador", payload)
                      clientLocal.publish("actuador", payload)
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

async function finalCarrera(pin,value,pos) {
  
      if(value>600){
        if(Auxtemp[pos]==1){
          var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${pin}","value":1},"timestamp":1517522296903}`
          client.publish("control", payload)
          client.publish("update", payload)
          clientLocal.publish("control", payload)
 
          console.log(payload)
          //console.log(payload)
          Auxtemp[pos]=0
        }
      }
      if(value>=0 && value<400 ){
        if(Auxtemp[pos]==0){
          var payload = `{"agent":{"uuid":"${agentID}"},"actuador":{"type":"${pin}","value":0},"timestamp":1517522296904}`
          client.publish("control", payload)
          client.publish("update", payload)
          clientLocal.publish("control", payload)
          
          //console.log("\x1b[37m",Hora+":"+Minuto +":"+Segundos+ "  FinalCarrera :"+payload.actuador.type +" - Valor :"+payload.actuador.value)
          console.log(payload)
          Auxtemp[pos]=1
        }
      }
      
    
  
}

async function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

async function cambioMilisegundos(cadena) {
  var a=parseInt(cadena.substring(3,5))
  var b=parseInt(cadena.substring(6,8))
  
  var c = b*1000
  var d= (a*60)*1000
  var time = d+c
  return time
}


 // mensaje que se muestra por consola mientras se espera a que se inicie la placa
 console.log("\nEsperando a que inicialice el dispositivo...")

//fin1234567
//fin111