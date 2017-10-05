
function Port()
{
    console.log("called");
    var SerialPort = require('serialport');
    var Readline = SerialPort.parsers.Readline;
    var port = new SerialPort('/dev/ttyACM0');
    var parser = port.pipe(Readline({ delimiter: '\r\n' }));
    port.on('open', function () {
        console.log("port is opend");
    })
    parser.on('data', function (str) {
        console.log(str);
        console.log("data found"); 
    });

}
Port();