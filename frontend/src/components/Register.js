import './style.css'
import logo from "./logo.png"

function Register() {


    return (
        <div>
            <form className='registerform'>
                <h1 >
                    Create Account
                </h1>

                <div className="registerlist">


                    <div className="registerfirstname">
                        <label className="fnlabel">
                            First Name:

                        </label>

                        <span className="fninput">
                            <input type="text" />
                        </span>
                    </div>

                    <div className="registerlastname">
                        <label className="lnlabel">
                            Last Name:
                        </label>

                        <span className="lninput">
                            <input type="text" />
                        </span>
                    </div>

                    <div className="registeremail">
                        <label className="emlabel">
                            Email:

                        </label>

                        <span className="eminput">
                            <input type="text" />
                        </span>
                    </div>


                    <div className="registerpassword">
                        <label className="plabel">
                            Create Password

                        </label>

                        <span className="pinput">
                            <input type="text" />
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
                    <label className="terms">
                        <input className="termscheckbox" type="checkbox" />
                        I have read and accepted the terms and agreements


                    </label>

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