
// incluimos la libreria j5
const five = require('johnny-five')
const request = require('request-promise-native')
// configuramos nuestra placa arduino en una variable
const board = new five.Board({
  port: '/dev/ttyUSB1'
})

// const IP = 'localhost'
const IP = '173.212.204.188'
// host para la api
const Host = `http://${IP}:3000/`
const agentID = 'edson@edson'

// funcion que se ejecuta cuando la placa ya esta lista
board.on('ready', function () {
// mensaje que se muestra por consola informandonos de que la placa esta lista
  console.log('Placa lista.')
  /// /////////////////////////////////////////////////////////////////////////////////////
  /*
var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 10
    });

      thermometer.on("change", function() {
        console.log(this.celsius + "°C");
        // console.log("0x" + this.address.toString(16));
      });
*/
  /// /////////////////////////////////////////////////////////////////////////////////////
  const proximity = new five.Proximity({
    controller: 'HCSR04',
    pin: 12

  })

  proximity.on('data', function () {
    console.log('Proximity: ')
    console.log('  cm  : ', this.cm)
    console.log('-----------------')
  })

  proximity.on('change', function () {
    console.log('The obstruction has moved.')
  })
/// /////////////////////////////////////////////////////////////////////////////////////
// notificacion("Error bomba 3", "bomba no encendida")
})

async function notificacion (title, body) {
  const options = {
    method: 'GET',
    url: Host + `api/postNotificacion/${agentID}/${title}/${body}`,
    // url: `http://173.212.235.89:3000/api/obtenerPines/${agentID}`,
    json: true
  }

  let result

  try {
    result = await request(options)
  } catch (e) {
    this.error = e.error.error
    return
  }
  console.log(result)
}

// mensaje que se muestra por consola mientras se espera a que se inicie la placa
console.log('\nEsperando a que inicialice el dispositivo...')
