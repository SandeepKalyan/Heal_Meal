import './style.css'
import logo from './logo.png'

function Head() {
  return (
    <nav className='navstart'>
      <img src={logo} className='logo' alt='Heal Meal logo'></img>
      <ul>
        <li><a class="active" href="#home">Login</a></li>
        <li><a href="#news">Register</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

export default Head;