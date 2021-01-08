const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/', async (req, res) => {
  const connection = await pool.getConnection();
  const rows = await connection.query("SELECT 1 as val");
  res.send(`Hello: ${rows}`);
});

module.exports = { router };
