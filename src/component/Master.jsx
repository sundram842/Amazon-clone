import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header_amazon from "./Header_amazon";
import Home from "./Home";
import Card from "./Card";
import Mobile from "./Mobile";
import Cart from "./Cart";







function Master() {
    let [inputState, setInputState] = useState(0);
    const [cart, setCart] = useState([]);
    let[text,setText]=useState("");

    function AddToCart(product) {

        const productinCart = cart.find((ele) => ele.id === product.id);
        
        if (productinCart) {
            if (productinCart.quantity < productinCart.Totalquantity)
            {
                setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele))
            }
           
            if (cart.length > 0) {
                let cartNo = 0
                let ans = cart.map((data) => {
                     cartNo+=data.quantity;

                })

                setInputState(cartNo)

            }

        }
        else {

            setCart([...cart, { ...product, quantity: 1 }])

            if (cart.length > 0) {
                let cartNo = 0
                let ans = cart.map((data) => {
                    cartNo += data.quantity;
                })
                setInputState(cartNo)

            }



        }



    }

    function DeletCard(pro)
    {
        setCart(cart.filter(ele=>ele.id!=pro.id))
    }

    return (


        <BrowserRouter>
            <Header_amazon setInputState={{ inputState, cart, setText }} />
            <Home />
            <Routes>
                <Route path="/" element={<Card inputState={{ inputState, AddToCart, text }} />} />
                <Route path="/card/mobile" element={<Mobile mob={{ cart, AddToCart, DeletCard }} />} />
                <Route path="/card/cart" element={<Cart cart={{ cart, AddToCart, DeletCard }} />} />

            </Routes>
        </BrowserRouter>





    )
}

export default Master;


