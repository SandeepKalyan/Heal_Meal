import React from 'react'
import ReactDOM from 'react-dom'
import logo from './logo.png'

function Footer() {
    return (
        <div className='footer'>
            <nav >
                <img src={logo} className='logo' />
                <span>© Copyright 2022 - All Rights Reserved</span>
            </nav>
        </div>
    )
}

export default Footer;