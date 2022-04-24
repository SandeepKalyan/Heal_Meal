import './style.css'
import logo from "./logo.png"
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [flag, setFlag] = useState(0);

    async function Submit(e) {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        })
        const content = await response.json();
        props.setName(content.name);

        if (response.status == 200)
            setFlag(2);
        else setFlag(1);
    }

    if (flag == 2)
        return <Navigate to='/home' />

    else if (flag == 1)
        return (<div>
            <form className="form-signin" onSubmit={Submit}>
                <img className="mb-4" src={logo} alt="" width="100" height="100" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                <span className='authtext'>Not Authenticated</span>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </div>);

    return (
        <div>
            <form className="form-signin" onSubmit={Submit}>
                <img className="mb-4" src={logo} alt="" width="100" height="100" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label for="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </div>
    );
}

export default SignIn;