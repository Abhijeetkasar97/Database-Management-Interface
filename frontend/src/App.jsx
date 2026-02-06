// src/App.jsx
import CreateDatabase from "./components/CreateDatabase";
import CheckDatabase from "./components/CheckDatabase";
import MigrateDatabase from "./components/MigrateDatabase";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>PostgreSQL Database Management Interface</h2>

      <CreateDatabase />
      <hr />

      <CheckDatabase />
      <hr />

      <MigrateDatabase />
    </div>
  );
}

export default App;
