import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components/index";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navabar">
          <Navbar />
        </nav>
        <main className="main">

        </main>
        <footer className="footer">

        </footer>
      </div>
    </Router>
  );
}

export default App;