// src/components/CheckDatabase.jsx
import { useState } from "react";

function CheckDatabase() {
  const [dbName, setDbName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const checkDatabase = async () => {
    setMessage("");
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/database/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ dbName })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Database not found");
      } else {
        setMessage("✅ Database exists and is ready");
      }
    } catch (err) {
      setError("Server error");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Existing Database</h3>

      <input
        type="text"
        placeholder="Enter database name"
        value={dbName}
        onChange={(e) => setDbName(e.target.value)}
      />

      <button onClick={checkDatabase}>Check</button>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default CheckDatabase;
