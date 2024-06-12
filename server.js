const express = require('express');
const app = express();
const mavlink = require('./mavlink/mavlink.js');

// Define your routes or middleware here
// For example:
app.get('/', (req, res) => {
    //console.log("res",res)
    res.send('Hello, world!');
});

// Start the server
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Load saved drone details from local storage
const savedDroneDetails = {
    ipAddress: '165.232.151.98',
    port:31888
};

// Connect to the drone using saved details
mavlink.connectToDrone(savedDroneDetails.ipAddress, savedDroneDetails.port);
//console.log(droneConnection)
//console.log("droneConnection",droneConnection.on);

// Subscribe to battery details event

