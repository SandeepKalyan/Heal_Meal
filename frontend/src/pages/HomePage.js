import React, { useEffect, useState } from "react"
import Head from "../components/Head"
import Footer from "../components/Footer"
import Card from "../components/Card"

import "./pages.css"
import { Navigate } from "react-router-dom"

export default function HomePage(props) {

    const [json, setJson] = useState([]);
    useEffect(() => {
        (
            async () => {
                const response = await fetch(
                    'http://localhost:8000/api/products', {
                    headers: { "Content": "application/json" },
                    credentials: "include"
                });
                const content = await response.json();

                setJson(content);
            }
        )();
    });

    return (
        <div className="signinpage" data-testid="home" >
            <Head name={props.name} />
            <h2 className="menu">Menu</h2>
            <Card json={json} />
            <Footer />
        </div>
    )
}