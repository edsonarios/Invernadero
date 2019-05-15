var dato = 10
var maximo = 0
var minimo = 120

var result 
//95 es 100% - 15 es 0%
dato -= minimo

result = ((dato/(maximo-minimo))*100).toFixed(2)
console.log(result)