var SerialPort = require('serialport');
var Readline = SerialPort.parsers.Readline;
var port = new SerialPort('/dev/ttyACM0');
var parser = port.pipe(Readline({delimiter: '\r\n'}));
parser.on('data', console.log);