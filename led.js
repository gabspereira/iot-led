var five = require("johnny-five");
var firebase = require("firebase");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  this.repl.inject({
    led: led
  });

 var config = {
  apiKey: "AIzaSyAWDSO27zUIw-8chj2TeyZtOCIapCrOpYg",
  authDomain: "iot-led-v1.firebaseapp.com",
  databaseURL: "https://iot-led-v1.firebaseio.com",
  storageBucket: "iot-led-v1.appspot.com",
};
firebase.initializeApp(config);

var starCountRef = firebase.database().ref('lampada').on('value', function(snapshot) {
	let lampada = snapshot.val()

	if (lampada == 'on'){
		led.on();
	}
	else{
		led.off();
	}


	});

});