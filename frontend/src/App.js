
import './App.css';
import React, { useEffect, useState } from 'react';
import SignInPage from "./pages/SignInPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CartPage from './pages/CartPage';
import OrdersPage from "./pages/OrdersPage"

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


  return (
    <div className="App" data-testid="app">
      <Router>
        <Routes>
          <Route exact path="/orders" element={<OrdersPage />} />
          <Route exact path="/cart" element={<CartPage />} />

          <Route exact path="/home" element={<HomePage name={name} />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/" element={<SignInPage setName={setName} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
