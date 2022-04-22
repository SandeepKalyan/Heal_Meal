import React from "react"
import Head from "../components/Head"
import Register from "../components/Register"
import Footer from "../components/Footer"
import "./pages.css"

export default function RegisterPage() {

    return (
        <div className="signinpage">
            <Head name={""} />
            <Register />
            <Footer />
        </div>
    )
}