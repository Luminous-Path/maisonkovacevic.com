require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create a MySQL connection pool
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// Endpoint to handle form submissions
app.post('/contact', (req, res) => {
    const { fullName, email, message } = req.body;

    const query = 'INSERT INTO submissions (fullName, email, message) VALUES (?, ?, ?)';
    const values = [fullName, email, message];

    db.query(query, values, (error, results) => {
        if (error) {
            console.error('Error saving submission:', error);
            return res.status(500).send('Error saving submission. Please try again later.');
        }
        res.status(200).send('Form submission saved successfully!');
    });
});

// Start the server
const PORT = 4001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
