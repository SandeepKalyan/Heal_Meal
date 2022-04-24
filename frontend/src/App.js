
import './App.css';
import React, { useEffect, useState } from 'react';
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import BasePage from "./pages/BasePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Head from "./components/Head"

function App() {
  const [name, setName] = useState("");
  useEffect(() => {
    (
      async () => {
        const response = await fetch(
          'http://localhost:8000/api/user', {
          headers: { "Content": "application/json" },
          credentials: "include"
        });
        const content = await response.json();
        setName(content.firstname);
      }
    )();
  });
  console.log(name)

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route exact path="/" element={<BasePage />} />
          <Route exact path="/home" element={<HomePage name={name} />} />

          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<SignInPage setName={setName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
