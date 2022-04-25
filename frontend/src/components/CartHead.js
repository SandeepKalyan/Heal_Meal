import './style.css'
import logo from './logo.png'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function CartHead(props) {
    async function Logout() {
        const response = await fetch(
            "http://localhost:8000/api/logout",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            });
    }
    return (
        <nav className='navstart'>
            <img src={logo} className='logo' alt='Heal Meal logo'></img>
            <ul>
                <li><Link to="/home" className="active">Menu</Link></li>
                <li><Link to="/login" className="active" onClick={Logout}>Log out</Link></li>
            </ul>
        </nav>
    )


}

export default CartHead;