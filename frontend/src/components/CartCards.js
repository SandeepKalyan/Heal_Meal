import React from "react"

function CartCards(props) {
    const cardList = [];
    if (props.json !== undefined) {
        for (let index = 0; index < props.json.length; index++) {

            cardList.push(<div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                <div className="card-body">
                    <p className="card-text">{props.json[index].name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Remove from Cart</button>

                        </div>
                        <small className="text-muted">{props.json[index].price} $</small>
                    </div>
                </div>
                <></>
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
            </div>
        </div>
    )
}

export default CartCards;