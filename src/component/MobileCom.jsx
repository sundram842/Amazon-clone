import React from "react";
import "../component_css/Card.css";

function contain(con,data) {
    return (
        <div className="card">

            <div className="des">
                <p>{con.title}</p>
            </div>

            <div className="cost">
                <strong>$ </strong>
                <strong>{con.price}</strong>
            </div>

            <div className="rating">
                <p>🌟{con.rating}</p>
            </div>
            <div className="img">
                <img className="img" src={con.image} />
            </div>
            <div className="button">
                <button onClick={() => { data.AddToCart(con)}}>Add to Basket</button>
            </div>

        </div>
    )
}



function MobileCom({con}) {
    return (


        <div>
            {con.mobile.map((data) => {
                return contain(data, con)
        

            })}
        </div>


    );

}

export default MobileCom;