const mavlink = require('mavlink');
const EventEmitter = require('events');

// Create an event emitter to emit battery details
const maxListeners = 7000; // Set to the appropriate value
EventEmitter.defaultMaxListeners = maxListeners;
const eventEmitter = new EventEmitter();

const mav = new mavlink(1, 1);

// This is an example implementation. You should replace it with actual MAVLink connection logic.
function connectToDrone(ipAddress, port) {
    console.log(`Connecting to drone at ${ipAddress}:${port}...`);

    // Create a TCP connection to the drone
    const socket = require('net').createConnection({
        port: port,
        host: ipAddress
    });
// Log the methods registered with mav.on event emitter
//console.log(mav._events)
//console.log("Registered methods with mav.on event emitter:", Object.keys(mav._events));
//console.log("mavlink",mavlink.MAVLINK_MSG_ID_BATTERY_STATUS)

    mav.on('message', function(message) {
        console.log('Received MAVLink message:', message);
        // Your existing event handler code here
    });

    // Bind MAVLink instance to the socket
    mav.on('ready', function () {
        console.log('MAVLink ready');
    });

    socket.on('connect', function () {
        console.log('Connected to simulation.');
    });

    // Bind socket to MAVLink instance
   // socket.setEncoding('utf8')
   //console.log(socket.unpipe())
    socket.on('data', function (data) {
        
       //console.log(data.buffer);
      // const text = new TextDecoder().decode(data.buffer);

// Print the text
//console.log(text);
        //const arrayBuffer = Buffer.from(data).buffer;
       // console.log(arrayBuffer);
       //const uint8Array = new Uint8Array(data.buffer);

// Convert Uint8Array to string
//const string = String.fromCharCode.apply(null, uint8Array);

//console.log(string);
      

    // Now you can use the string data as needed
   // console.log(data.buffer);
        mav.parse(data);
       
        // mav.on('message', function(message) {
        //     console.log(message);
        // });
        // mav.on("ATTITUDE", function(data, fields) {
        //     console.log(data);
        // });

       // console.log('Received data from socket:', data.toString('hex')); // Log data in hexadecimal format
      // console.log(JSON.parse(data))
      //for(let each of  data){
       //console.log("each",each)
      //}
//      // Sample encoded data received as a Uint8Array
// const encodedData = new Uint8Array(data);

// // Decode the encoded data based on the encoding method
// function decodeData(encodedData) {
//     // Check if the encoding is byte-wise or C-style cast
//     const byteWiseEncoding = true; // Change to false for C-style cast encoding

//     // Create a DataView to read the encoded data
//     const buffer = encodedData.buffer;
//     const view = new DataView(buffer);

//     // Decode the parameter value based on the encoding method
//     let decodedValue;
//     if (byteWiseEncoding) {
//         // For byte-wise encoding, read the bytes directly
//         decodedValue = view.getFloat32(0, true); // Read as little-endian 32-bit floating point number
//     } else {
//         // For C-style cast encoding, interpret the bytes as a float
//         decodedValue = view.getFloat32(0, true); // Read as little-endian 32-bit floating point number
//     }

//     return decodedValue;
// }

// // Decode the encoded data
// const decodedValue = decodeData(encodedData);
// console.log('Decoded value:', decodedValue);
// mav.parse(data)

    });

  
  //  console.log(mav.on.toString())
    
    // Listen for MAVLink messages


    // Error handling for MAVLink
    mav.on('error', function (err) {
        console.error('MAVLink error:', err);
    });

    // Error handling for socket
    socket.on('error', function (err) {
        console.error('Socket error:', err);
    });

    // Connection close handling
    socket.on('close', function () {
        console.log('Connection closed');
    });
    

    // Return event emitter to allow subscribing to battery details
    return eventEmitter;
}

module.exports = {
    connectToDrone: connectToDrone
};
