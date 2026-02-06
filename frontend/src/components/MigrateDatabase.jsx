import { useState } from "react";

function MigrateDatabase() {
  const [sourceDb, setSourceDb] = useState("");
  const [targetDb, setTargetDb] = useState("");

  const migrate = async () => {
    await fetch("/api/database/migrate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sourceDb, targetDb })
    });
    alert("Migration Done");
  };

  return (
    <>
      <input placeholder="Source DB" onChange={e => setSourceDb(e.target.value)} />
      <input placeholder="Target DB" onChange={e => setTargetDb(e.target.value)} />
      <button onClick={migrate}>Migrate</button>
    </>
  );
}
export default MigrateDatabase;
