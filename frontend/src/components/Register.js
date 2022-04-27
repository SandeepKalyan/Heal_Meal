import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './style.css'
import logo from "./logo.png"

function Register() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function Submit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        });

        setRedirect(true);
        const content = await response.json();
        alert(content["message"]);
    }

    if (redirect)
        return <Navigate to="/" />

    return (
        <div>
            <form className='registerform' onSubmit={Submit}>


                <div className="form-signin">
                    <img className="mb-4" src={logo} alt="" width="100" height="100" />
                    <h1 className="h3 mb-3 fw-normal">Please Create Account</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="First Name" required
                            onChange={e => setFirstname(e.target.value)}
                        />
                        <label >First Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="text" className="form-control" placeholder="Last Name" required
                            onChange={e => setLastname(e.target.value)}
                        />
                        <label >Last Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" placeholder="email" required
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>


                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label for="floatingPassword">Password</label>
                    </div>

                </div>
                <div className='createaccount'>
                    <button className="registerbutton" type="submit">
                        <span className="register label">
                            Register
                        </span>
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Register;