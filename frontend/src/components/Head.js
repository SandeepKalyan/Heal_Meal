import './style.css'
import logo from './logo.png'

function Head() {
    return (
        <nav className='nav'>
          <img src = {logo}  className='logo' alt='Heal Meal logo'></img>
          <button className='Menu'>Menu</button>
          <ul className='features'>           
            <button>Login</button>
            <button>Cart</button>
          </ul>
        </nav>
    );
  }
  
  export default Head;