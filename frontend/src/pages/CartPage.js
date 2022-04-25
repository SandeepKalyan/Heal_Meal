import Head from "../components/Head"
import CartCards from "../components/CartCards"
import { useState } from "react";
import { useEffect } from "react"
import CartHead from "../components/CartHead";
import Footer from "../components/Footer"
import { Navigate } from "react-router-dom";


function CartPage() {
    const [json, setJson] = useState();
    useEffect(() => {
        (
            async () => {
                const response = await fetch(
                    'http://localhost:8000/api/cart', {
                    headers: { "Content": "application/json" },
                    credentials: "include"
                });
                const content = await response.json();
                setJson(content)
            }
        )();
    });

    async function CheckOut() {
        const response = await fetch(
            'http://localhost:8000/api/buycart', {
            method: "POST",
            headers: { "Content": "application/json" },
            credentials: "include"
        });
        const content = await response.json()

        alert(content["message"]);
        <Navigate to="/orders" />

    }

    async function ClearCart() {
        const response = await fetch(
            'http://localhost:8000/api/clearcart', {
            method: "POST",
            headers: { "Content": "application/json" },
            credentials: "include"
        });
        const content = await response.json()

        alert(content["message"]);
    }

    return (
        <div>
            <CartHead />
            <h2>Check out below items in your cart</h2>
            <CartCards json={json} />

            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/home';
                }}
            > Click here</button>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => CheckOut()}>Check Out Cart</button>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => ClearCart()}>Clear Cart</button>
            <Footer />
        </div>
    )
}

export default CartPage