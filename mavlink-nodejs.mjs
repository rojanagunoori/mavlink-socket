import React, { useState } from 'react';

const DroneDetails = () => {
  const [name, setName] = useState('');
  const [ipAddress, setIpAddress] = useState('');
  const [port, setPort] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('ipAddress', ipAddress);
    localStorage.setItem('port', port);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Drone Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="IP Address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Port"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default DroneDetails;