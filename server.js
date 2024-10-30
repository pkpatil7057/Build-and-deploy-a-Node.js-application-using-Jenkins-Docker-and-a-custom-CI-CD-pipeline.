const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js CI/CD Pipeline Application!');
});

// Example of a testable endpoint
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is a sample response from the API.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

