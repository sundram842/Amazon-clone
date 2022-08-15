import React from "react";
import "../component_css/Cart.css"

function Container(con, cart)
{
    

    return(
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
                <button onClick={() => {
                    cart.AddToCart(con);
                }}>Add to Basket</button>
            </div>

            <div className="cost">
                <strong>$ </strong>
                <strong>{con.price}</strong>
            </div>

            <div className="quantity">
                <h3>quantity {con.quantity}</h3>
            </div>

            <div className="total price">
               
                <h4>total price {con.price * con.quantity}$ </h4>
            </div>
            <div>
                <button >-</button>
            </div>

            

            <button onClick={()=>
            {
                cart.DeletCard(con)
            }}>Delete from cart</button>

         </div>
    )
}


function Cart({ cart })
{
    return(
        <div>

             {cart.cart.map((data) => {
                return Container(data, cart)
             })}
         </div>
     )
 }
 export default Cart;