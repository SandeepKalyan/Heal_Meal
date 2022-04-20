import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.png'

function Footer() {
    return (
        <div className='footer'>
            <nav >
                <img src={logo} className='logo' />
                <a width='3%'>© Copyright 2022 - All Rights Reserved</a>
            </nav>
        </div>
    )
}

export default Footer;