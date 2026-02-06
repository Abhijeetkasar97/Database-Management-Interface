// controllers/database.controller.js
const pool = require("../config/db");
const { exec } = require("child_process");

exports.createDatabase = async (req, res) => {
  const { dbName } = req.body;

  try {
    const check = await pool.query(
      "SELECT datname FROM pg_database WHERE datname=$1",
      [dbName]
    );

    if (check.rows.length > 0) {
      return res.status(409).json({ message: "Database already exists" });
    }

    await pool.query(`CREATE DATABASE ${dbName}`);
    res.json({ message: "Database created successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.checkDatabase = async (req, res) => {
  const { dbName } = req.body;

  try {
    const result = await pool.query(
      "SELECT datname FROM pg_database WHERE datname=$1",
      [dbName]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Database not found" });
    }

    res.json({ message: "Database exists" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.migrateDatabase = async (req, res) => {
  const { sourceDb, targetDb } = req.body;

  const dumpCmd = `pg_dump -Fc ${sourceDb} > backup.dump`;
  const restoreCmd = `pg_restore -d ${targetDb} backup.dump`;

  exec(dumpCmd, (err) => {
    if (err) return res.status(500).json({ error: "Dump failed" });

    exec(restoreCmd, (err2) => {
      if (err2) return res.status(500).json({ error: "Restore failed" });

      res.json({ message: "Migration completed successfully" });
    });
  });
};
