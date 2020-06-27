import React from "react";
import "./App.css";
import Calculator from "./components/Calculator"

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Calculator</h1>
      </header>
      <main className="body">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
