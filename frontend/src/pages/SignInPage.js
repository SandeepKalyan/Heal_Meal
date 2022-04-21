import React from "react"
import Head from "../components/Head"
import SignIn from "../components/SignIn"
import Footer from "../components/Footer"
import "./pages.css"

export default function SignInPage(){
    return (
        <div className="signinpage">
            <Head />
            <SignIn />
            <Footer />
        </div>
    )
}