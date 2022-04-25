import './style.css'
import logo from './logo.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Head(props) {
  const [local, setlocal] = useState(props.name);
  const [status, setStatus] = useState(0);
  useEffect(() => {
    (
      async () => {
        const response = await fetch(
          'http://localhost:8000/api/user', {
          headers: { "Content": "application/json" },
          credentials: "include"
        });
        setStatus(response.status)
        const content = await response.json();
        setlocal(content.firstname);
      }
    )();
  });

  async function Logout() {
    const response = await fetch(
      "http://localhost:8000/api/logout",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include"
      });
    setlocal("");
  }



  if (local === undefined)
    return (
      <nav className='navstart'>

        <img src={logo} className='logo' alt='Heal Meal logo'></img>

        <ul>
          <li><Link to="/login" className="active" >Login</Link></li>
          <li><Link to="/register" >Register</Link></li>

        </ul>
      </nav>
    );

  //console.log(local);
  if (local !== "") return (
    <nav className='navstart'>

      <img src={logo} className='logo' alt='Heal Meal logo'></img>

      <ul>
        <li><Link to="/cart" className="active">Cart</Link></li>
        <li><Link to="/login" className="active" onClick={Logout}>Log out</Link></li>
      </ul>
    </nav>
  );
}

export default Head;