var fs = require("fs");
var stream;
stream = fs.createReadStream("data.txt");
var events = require('events');
var eventEmitter = new events.EventEmitter();

// For adding new data to upcoming web application
const addData = (data) => {
    stream.on("data", function(dataNew) {
    var chunk = dataNew.toString();
    console.log(chunk);
}); 
}
