var sensorLib = require("node-dht-sensor");

var sensor = {
    sensors: [ {
        name: "Sensor 1",
        type: 22,
        pin: 4
    }, {
        name: "Sensor 2",
        type: 22,
        pin: 17
    } ],
    read: function() {
        for (var a in this.sensors) {
            var b = sensorLib.read(this.sensors[a].type, this.sensors[a].pin);
            console.log(this.sensors[a].name + ": " +
              b.temperature.toFixed(1) + "°C, " +
              b.humidity.toFixed(1) + "%");
              console.log("-----------------------------------------------------------")
        }
        setTimeout(function() {
            sensor.read();
        }, 2000);
    }
};

sensor.read();


var sensor = require('node-dht-sensor');

sensor.read(22, 4, function(err, temperature, humidity) {
    if (!err) {
        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
            'humidity: ' + humidity.toFixed(1) + '%'
        );
    }
});

setTimeout(function() {
  sensor.read();
}, 2000);