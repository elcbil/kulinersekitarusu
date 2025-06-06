const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'kuliner'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Routes
// Get all locations (tempat)
app.get('/api/locations', (req, res) => {
  const query = 'SELECT * FROM tempat';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Get shops by location
app.get('/api/shops/:locationId', (req, res) => {
  const locationId = req.params.locationId;
  const query = 'SELECT * FROM toko WHERE id_tempat = ?';
  db.query(query, [locationId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

// Get shop details by ID
app.get('/api/shops/detail/:shopId', (req, res) => {
  const shopId = req.params.shopId;
  const query = 'SELECT * FROM toko WHERE id_toko = ?';
  db.query(query, [shopId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results[0]); // Send single shop object
  });
});

// Get menus by shop
app.get('/api/menus/:shopId', (req, res) => {
  const shopId = req.params.shopId;
  const query = 'SELECT * FROM menu WHERE id_toko = ?';
  db.query(query, [shopId], (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 