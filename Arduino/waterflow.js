//ConfigurableFirmData
var five = require("johnny-five");
var board = new five.Board({
  port: "COM5"
});
var Stream = require('stream');
var flow_stream = new Stream();
var plotly = require('plotly')('workshop','v6w5xlbx9j');

var data = [{
  x : [],
  y : [],
  stream : {
    token : '25tm9197rz',
    maxpoints : 5000
  }
}];

var layout = { fileopt : "overwrite", filename : "Water Flow" };

var pulses = 0;
var lastFlowRateTimer = 0;

board.on("ready", function() {
  this.pinMode(14, five.Pin.INPUT);
  lastFlowPinState = 0;

  // Check Digital Pin to see if theres a change
  var x = this.digitalRead(14, function(value) {
    // send the pin status to flowSignal helper
    flowSignal(value);
    //console.log(value);
  });

  // Set how often to Emit data to Plotly
  setInterval(function() {
    var litres = pulses;
    litres /= 7.5;
    litres /= 60;
    var data = {x:getDateString(), y:litres};
    flow_stream.emit('data', JSON.stringify(data)+'\n');
    console.log("estos son los listros",lastFlowRateTimer)
  }, 1000);

  // Set up Graph + Initialize stream + Pipe to stream
  plotly.plot(data,layout,function (err, msg) {
    if (err) console.log(err);
    console.log(msg);
    var stream = plotly.stream('25tm9197rz', function (err, res) {
      if (err) console.log(err);
      console.log(res);
    });
    flow_stream.pipe(stream);
  });
});

// helper function to keep track of pulses
function flowSignal (value) {
    if (value === 0) {
      lastFlowRateTimer ++;
      return;
    }
    if (value === 1) {
      pulses ++;
    }
    lastFlowPinState = value;
    flowrate = 1000.0;
    flowrate /= lastFlowRateTimer;
    lastFlowRateTimer = 0;
}

// little helper function to get a nicely formatted date string
function getDateString () {
  var time = new Date();
  // 14400000 is (GMT-4 Montreal)
  // for your timezone just multiply +/-GMT by 3600000
  var datestr = new Date(time - 14400000).toISOString().replace(/T/, ' ').replace(/Z/, '');
  return datestr;
}