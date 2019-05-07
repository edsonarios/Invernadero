var dato = 96
var maximo = 95
var minimo = 15

var result 
//95 es 100% - 15 es 0%
dato -= minimo

result = ((dato/(maximo-minimo))*100).toFixed(2)
console.log(result)