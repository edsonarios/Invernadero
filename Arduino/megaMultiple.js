var five = require("johnny-five");
var ports = [
       { id: "A", port: "COM3" },//MEGA
       { id: "B", port: "COM8" }, //DS
       { id: "C", port: "COM9" } //proximidad
     ];

var boards = new five.Boards(ports);

// Create 2 board instances with IDs "A" & "B"
boards.on("ready", function() {

  // Both "A" and "B" are initialized
  // (connected and available for communication)

  // Access them by their ID:
  var led = new five.Led({
    pin: 13,
    board: this.byId("A")
  });

  led.blink(1000);
  //this.digitalWrite(13, 1);

  // |this| is an array-like object containing references
  // to each initialized board.
  this.each(function(board) {
    if (board.id === "B") {
      // Initialize an Led instance on pin 13 of
      // each initialized board and strobe it.
      var thermometer = new five.Thermometer({
        controller: "DS18B20",
        pin: 3,
        board:board
      });
    
      thermometer.on("change", function() {
        console.log(this.celsius + "°C");
        // console.log("0x" + this.address.toString(16));
      });
    }
  });
  
  this.each(function(board) {
    if (board.id === "C") {
      // Initialize an Led instance on pin 13 of
      // each initialized board and strobe it.
      var proximity = new five.Proximity({
        controller: "HCSR04",
        pin: 6,
        board:board
      });
    
      proximity.on("data", function() {
        console.log("Proximity: ");
        console.log("  cm  : ", this.cm);
        console.log("-----------------");
      });
    
      proximity.on("change", function() {
        console.log("The obstruction has moved.");
      });
    }
  });
  /*
  this.each(function(board) {
    if (board.id === "D") {
      // Initialize an Led instance on pin 13 of
      // each initialized board and strobe it.
      var led = new five.Led({
        pin: 13,
        board: board
      });

      led.blink(2000);
    }
  });
*/

  //FIN
});

/**
 * When initializing multiple boards with only an ID string,
 * the order of initialization and connection is the order
 * that your OS enumerates ports.
 *
 * Given the above program, "A" and "B" would be assigned as:
 *
 * A => /dev/cu.usbmodem411
 * B => /dev/cu.usbmodem621
 *
 *
 * You may override this by providing explicit port paths:
 *
 * var ports = [
 *   { id: "A", port: "/dev/cu.usbmodem621" },
 *   { id: "B", port: "/dev/cu.usbmodem411" }
 * ];
 *
 * new five.Boards(ports).on("ready", function() {
 *
 *   // Boards are initialized!
 *
 * });
 */