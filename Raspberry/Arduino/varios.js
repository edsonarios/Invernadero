const fs = require('fs')
const a = [{
  id: 101,
  horaInicio: '19:04:00',
  duracion: '00:01:00',
  createdAt: '2019-07-18T23:01:53.823Z',
  updatedAt: '2019-07-18T23:01:53.823Z',
  pineId: 118
},
{
  id: 238,
  horaInicio: '19:54:00',
  duracion: '00:01:00',
  createdAt: '2019-07-18T23:43:14.310Z',
  updatedAt: '2019-07-18T23:43:14.310Z',
  pineId: 118
}]

const data = JSON.stringify(a, null, 2)

fs.writeFile('Rhorario.json', data, (err) => {
  if (err) console.log(err)
  console.log('Successfully ObtPines Written to File.')
})
setTimeout(function () {
  const horario2 = fs.readFileSync('Rhorario.json')
  const aa = JSON.parse(horario2)
  console.log(aa[0].id)
}, 1000)
// console.log(horario2)
// console.log(horario2[0].id)
