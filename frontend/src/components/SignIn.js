import './style.css'
import logo from "./logo.png"
function SignIn() {
    return (
        <>
            <form className="form-signin">
                <img className="mb-4" src={logo} alt="" width="100" height="100" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                <button className="w-100 btn btn-lg register-button" type="submit">Register</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2022</p>
            </form>
        </>
    );
  }
  
  export default SignIn;