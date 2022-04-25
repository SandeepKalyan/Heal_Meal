import React from "react"
import CartHead from "../components/CartHead"
import Orders from "../components/Orders";
import { useState } from "react";
import { useEffect } from "react";

export default function OrdersPage() {
    const [json, setJson] = useState();
    useEffect(() => {
        (
            async () => {
                const response = await fetch(
                    'http://localhost:8000/api/orders', {
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
            <CartHead />
            <Orders json={json} />
        </div>
    )
}