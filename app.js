// REQUIRE SECTION
const express = require('express');

// VARIABLES
const server_port = process.env.APP_SERVER_PORT || 3000;

// CREATE and SET UP SERVER
const app = express();

app.listen(server_port, () => {
    console.log(`Moonlaw is UP!`);
});  