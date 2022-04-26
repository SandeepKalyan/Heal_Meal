import React from "react"


function CartCards(props) {
    const cardList = [];
    var total_price = 0;
    if (props.json !== undefined && props.json !== null) {
        for (let index = 0; index < props.json.length; index++) {
            var str = "http://localhost:3000/Images/" + String(props.json[index].url)
            total_price = total_price + props.json[index].price;
            cardList.push(<div className="card shadow-sm">
                <div className="card-body">
                    <img src={str} width="30%" />
                    <div className="card-body">
                        <p className="card-text">{props.json[index].name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{props.json[index].price} $</small>
                        </div>
                    </div>
                </div>
            </div>
            )
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
                <h3>Total Price: {total_price} $</h3>
            </div>
        </div>
    )
}

export default CartCards;