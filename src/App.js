import React from "react";
import "./App.scss";
import "./variables.scss";
import NavBar from "./components/layout/navBar/NavBar";
import Dashboard from "./components/layout/dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
