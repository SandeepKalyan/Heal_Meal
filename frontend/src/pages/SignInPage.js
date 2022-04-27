import React from "react"
import Head from "../components/Head"
import SignIn from "../components/SignIn"
import Footer from "../components/Footer"
import "./pages.css"

export default function SignInPage(props) {
    return (
        <div className="signinpage" data-testid="signin">
            <Head name={""} />
            <SignIn setName={props.setName} />
            <Footer />
        </div>
    )
}