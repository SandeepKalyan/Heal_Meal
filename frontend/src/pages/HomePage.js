import React from "react"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Ingredients from "../components/Ingredients"

import "./pages.css"

export default function SignInPage() {
    return (
        <div className="signinpage">
            <Head />
            <Ingredients />
            <Footer />
        </div>
    )
}