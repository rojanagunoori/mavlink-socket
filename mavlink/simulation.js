const axios = require('axios');

// Function to retrieve simulation ID using IP address and port
async function getSimulationId(ipAddress, port) {
    try {
        const response = await axios.get(`https://intelligentquads.com/sim/api/v1/docs/redoc`);
        // Assuming the response contains simulation details including ID
        return response.data.simulationId; // Adjust this based on the actual response structure
    } catch (error) {
        console.error('Error retrieving simulation ID:', error.message);
        return null;
    }
}

// Usage
const ipAddress = '165.232.151.98';
const port = 32037;

getSimulationId(ipAddress, port)
    .then(simulationId => {
        if (simulationId) {
            console.log('Simulation ID:', simulationId);
        } else {
            console.log('Failed to retrieve simulation ID.');
        }
    })
    .catch(error => {
        console.error('An error occurred:', error.message);
    });
