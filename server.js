const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// /ping route
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Start the server
app
