const fs = require('fs')
const request = require('request-promise-native')
let a=[
    {
        "id": 1,
        "departamento": "La Paz 1",
        "ubicacion": "La Paz",
        "provincia": "La Paz",
        "tempMaxima": "35",
        "tempMedia": "20",
        "tempMinima": "10",
        "tiempoIntermitencia": "00:03:00",
        "tiempoPausa": "00:00:10",
        "tiempoFuncionMotor": "00:03:00",
        "logo": "cjaGydwij7hF5PmTJQqFEsag.png",
        "createdAt": "2019-06-02T21:22:27.842Z",
        "updatedAt": "2019-06-02T21:22:27.842Z",
        "usuarioId": 2
    }
]
let data= JSON.stringify(a,null,2)

const { parsePayload } = require('../mod-mqtt/utils')

/*fs.writeFile('ver.json', data, (err) => {
    if (err) console.log(err);
    //console.log("Successfully Written to File.");
  });*/

  let data2=require('./ver')
    let data3=parsePayload(data2)
  console.log(data2[0].departamento)
  console.log(a[0].id)