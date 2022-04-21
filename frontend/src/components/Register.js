import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import './style.css'
import logo from "./logo.png"

function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function Submit(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });

        setRedirect(true);
        const content = await response.json();
        console.log(content);
    }

    if (redirect)
        return <Navigate to="/login" />

    return (
        <div>
            <form className='registerform' onSubmit={Submit}>
                <h1 >
                    Create Account
                </h1>

                <div className="registerlist">


                    <div className="registerfirstname">
                        <label className="fnlabel">
                            First Name:

                        </label>

                        <span className="fninput">
                            <input type="text" required
                                onChange={e => { setName(e.target.value) }}
                            />
                        </span>
                    </div>

                    <div className="registerlastname">
                        <label className="lnlabel">
                            Last Name:
                        </label>

                        <span className="lninput">
                            <input type="text"

                            />
                        </span>
                    </div>

                    <div className="registeremail">
                        <label className="emlabel">
                            Email:

                        </label>

                        <span className="eminput">
                            <input type="text" required
                                onChange={e => { setEmail(e.target.value) }}
                            />
                        </span>
                    </div>


                    <div className="registerpassword">
                        <label className="plabel">
                            Create Password

                        </label>

                        <span className="pinput">
                            <input type="text" required
                                onChange={e => { setPassword(e.target.value) }}
                            />
                        </span>
                    </div>

                    <div className="registerconfirmpassword">
                        <label className="cplabel">
                            Confirm Password

                        </label>

                        <span className="cpinput">
                            <input type="text" />
                        </span>
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