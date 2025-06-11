const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'Sql@054003',
  database: process.env.DB_NAME || 'volume_mount_db'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL');
  }
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
  const userInput = req.body.input;

  const query = 'INSERT INTO submissions (input) VALUES (?)';
  db.query(query, [userInput], (err, result) => {
    if (err) {
      console.error('❗ SQL Error:', err);  // 👈 Detailed error
      return res.send(`Error saving data: ${err.message}`);
    }
    res.send(`✅ Submitted: ${userInput}`);
  });
});

app.listen(port, () => {
  console.log(`✅ App running at http://localhost:${port}`);
});
