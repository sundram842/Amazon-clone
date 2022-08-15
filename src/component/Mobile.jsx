import React from "react";
import { Link } from "react-router-dom";
import data from "../Data"
import MobileCom from "./MobileCom";
function Mobile({ AddToCart })
{
    let mobile=data.filter((ele)=>ele.type=="mobile");
    return(
        <div>
            <MobileCom con={{ mobile, AddToCart }} /></div>
    )
}
export default Mobile;