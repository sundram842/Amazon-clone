import React from "react";
import '../component_css/index.css';
import Subheader from "./Subheader";
import SearchIcon from "../img/SearchIcon.png";
import ShoppingBasketIcon from "../img/ShoppingBasketIcon.png";
import { Link } from "react-router-dom";

function Header_amazon(props){

    function texSet(event)
    {
        let value=event.target.value;
//console.log(value);
        props.setInputState.setText(value)
    }

    return(

        <div>
            <div className="header">

                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                />


                <div className="header__search">
                    <input className="header__searchInput" type="text" onChange={texSet} />
                    <img className="header__searchIcon" src={SearchIcon} />
                    
                </div>

                <div className="header__nav">

                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>



                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>



                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>


                    <div className="header__optionBasket">
                        <Link to="/card/cart"><img src={ShoppingBasketIcon} /></Link>
                        
                        {/* <ShoppingBasketIcon /> */}
                        <span className="header__optionLineTwo header__basketCount">
                            {/* {props.setInputState.inputState} */}
                            {props.setInputState.cart.length}
                           
                        </span>
                    </div>

                </div>
            </div>

            <div>
                <Subheader/>
            </div>
        </div>
        
        
    );
}
export default Header_amazon