'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to handle JSON requests
app.use(bodyParser.json());

// Route to handle Gemini API requests
app.post('/gemini', (req, res) => {
    const apiKey = req.body.apiKey;
    const apiSecret = req.body.apiSecret;
    const requestBody = req.body.request;

    if (!apiKey || !apiSecret) {
        return res.status(400).json({ error: 'API key and secret are required.' });
    }

    // Here you would handle the request with your Gemini API logic
    // For demonstration, we're just responding with the request body
    res.json({ apiKey, apiSecret, request: requestBody });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
