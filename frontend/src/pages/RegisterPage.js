import React from "react"
import Head from "../components/Head"
import Register from "../components/Register"
import Footer from "../components/Footer"
import "./pages.css"

export default function SignInPage() {
    return (
        <div className="signinpage">
            <Head />
            <Register />
            <Footer />
        </div>
    )
}