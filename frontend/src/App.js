
import './App.css';

import SignIn from "./pages/SignInPage"
import Register from "./pages/RegisterPage"
import Home from "./pages/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
