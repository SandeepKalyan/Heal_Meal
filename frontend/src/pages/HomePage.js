import React, { useEffect, useState } from "react"
import Head from "../components/Head"
import Footer from "../components/Footer"


import "./pages.css"
import { Navigate } from "react-router-dom"

export default function HomePage(props) {

    return (
        <div className="signinpage">
            <Head name={props.name} />
            <h1>Home page after logging in. {props.name}</h1>
            <Footer />
        </div>
    )
}