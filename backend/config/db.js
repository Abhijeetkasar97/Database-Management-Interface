const { Pool } = require("pg");

const adminPool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: 5432,
  database: "postgres" // admin DB
});

module.exports = adminPool;
