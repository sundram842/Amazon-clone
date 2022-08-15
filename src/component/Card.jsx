import React from "react";
import "../component_css/Card.css";
import Data from "../Data";


function contain(con, inputState)
{

   
   
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
                <img className="img" src={con.image}/>
            </div>
            <div className="button">
                <button onClick={() => inputState.AddToCart(con)}>Add to Basket</button>
            </div>

     
        </div>
    )
}



function Card(prop ) {

    let data = prop.inputState.text.toLowerCase()
    //console.log(data);
   let filterData=Data.filter(ele=>ele.type.includes(data.toLowerCase()))


    return(
        
           <div>
            {
             
               
                filterData.length==0?
            Data.map((data)=>{
                return (contain(data, prop.inputState)) 
            }) :filterData.map((data) => {
                return (contain(data, prop.inputState))
            })
            
            
            
            }


           </div>
    );
    
   

}

export default Card;