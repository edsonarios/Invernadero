var sensorCOM = '/dev/ttyUSB1'
//var sensorCOM = 'COM3'
const Serialport=require('serialport');
//parsers ver lectura
const Readline=Serialport.parsers.Readline;
const port=new Serialport(sensorCOM,{baudRate:9600});
const parser=port.pipe(new Readline({
    delimeter:'\r\n'
}));
parser.on('open ',function(){
    console.log('coneccion is opend');
});
parser.on('data',function(data){
  console.log(data)
  /*
    var a=""
  for (let i = 0; i < data.length; i++) {
    if(data.charCodeAt(i)==32 || data.charCodeAt(i)==13){
        
        if(!isNaN(parseFloat(a))){
            console.log("este es nan")
          }
          else{
            console.log(parseFloat(a))
          }
        a=""
    }else{
        a+=data.charAt(i)
        
    }
     //console.log(parseFloat(data.substring((6*i),(6*i+5))))
  }*/

  
});
port.on('error',function(err){
    console.log(err);
});
/*
//var sensorCOM = '/dev/ttyUSB2'
var sensorCOM2 = 'COM4'
const Serialport2=require('serialport');
//parsers ver lectura
const Readline2=Serialport2.parsers.Readline;
const port2=new Serialport(sensorCOM2,{baudRate:9600});
const parser2=port2.pipe(new Readline2({
    delimeter:'\r\n'
}));
parser2.on('open ',function(){
    console.log('coneccion is opend');
});
parser2.on('data',function(data){
  console.log(data)
});
port2.on('error',function(err){
    console.log(err);
});*/