import Apple from "./apple.jpeg"

function Card(props) {

    const cardList = [];

    async function addToCart(name) {
        const response = await fetch(
            "http://localhost:8000/api/addtocart",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({
                    name
                })
            });
        const content = await response.json();
        alert(content["message"])
    }

    for (let index = 0; index < props.json.length; index++) {
        var str = "http://localhost:3000/Images/" + String(props.json[index].url)
        cardList.push(<div className="card shadow-sm">

            <div className="card-body">
                <p className="card-text">{props.json[index].name}</p>
                <img src={str} width="30%" />
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => addToCart(props.json[index].name)}>Add to cart</button>

                    </div>
                    <small className="text-muted">{props.json[index].price} $</small>
                </div>
            </div>
            <></>
        </div>
        )
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

export default Card;