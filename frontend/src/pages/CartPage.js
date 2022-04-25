import Head from "../components/Head"
import CartCards from "../components/CartCards"
import { useState } from "react";
import { useEffect } from "react"
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

    return (
        <div>
            <Head />
            <h2>Check out below items in your cart</h2>
            <CartCards json={json} />
            <button
                type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href = '/home';
                }}
            > Click here</button>
        </div>
    )
}

export default CartPage