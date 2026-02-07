import { useState } from "react";

function CreateDatabase() {
  const [dbName, setDbName] = useState("");

  const createDB = async () => {
    await fetch("http://localhost:5000/api/database/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dbName })
    });
    alert("Database Created");
  };

  return (
    <>
      <h3>New Database</h3>
      <input onChange={e => setDbName(e.target.value)} />
      <button onClick={createDB}>Create</button>
    </>
  );
}
export default CreateDatabase;
