import Head from "../components/Head"
import CartCards from "../components/CartCards"
import { useState } from "react";
import { useEffect } from "react"
import CartHead from "../components/CartHead";
import Footer from "../components/Footer"
import { Navigate } from "react-router-dom";


function CartPage() {
    const [json, setJson] = useState();
    const [checkout, setCheckout] = useState(false);
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
        setCheckout(true);

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
    if (checkout)
        return <Navigate to="/orders" />

    return (
        <div data-testid="cart">
            <CartHead />
            <h2>Check out below items in your cart</h2>
            <CartCards json={json} />
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => CheckOut()}>Check Out Cart</button>
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => ClearCart()}>Clear Cart</button>
            <Footer />
        </div>
    )
}

export default CartPage