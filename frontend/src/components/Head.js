import './style.css'
import logo from './logo.png'
import { Link } from "react-router-dom"

function Head() {
  return (
    <nav className='navstart'>
      <img src={logo} className='logo' alt='Heal Meal logo'></img>
      <ul>
        <li><Link to="/login" className="active" >Login</Link></li>
        <li><Link to="/register" >Register</Link></li>

      </ul>
    </nav>
  );
}

export default Head;