import React from "react"
import logo from "./logo.png"

function Orders(props) {

    async function ClearOrders(name) {
        const response = await fetch(
            "http://localhost:8000/api/clearorders",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
            });
        const content = await response.json();
        alert(content["message"])
    }

    const cardList = [];
    const arr = props.json

    if (props.json !== undefined && props.json !== null) {
        for (let j = 0; j < arr.length; j++) {
            cardList.push(<h3>OrderNo: {j + 1}</h3>)
            for (let index = 0; index < arr[String(j)].length; index++) {
                var str = "http://localhost:3000/Images/" + String(arr[String(j)][String(index)].url)

                cardList.push(<div className="card shadow-sm">

                    <div className="card-body">
                        <img src={str} width="30%" />
                        <p className="card-text">{arr[String(j)][String(index)].name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{arr[String(j)][String(index)].price} $</small>
                        </div>
                    </div>
                    <></>
                </div>
                );


            }
            if (arr[String(j)].length < 1) cardList.push(<div><img src={logo} width="20%" /></div>);
        }
    }


    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        {cardList}
                    </div>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => ClearOrders()}>Clear Orders</button>
            </div>
        </div>
    )
}

export default Orders;