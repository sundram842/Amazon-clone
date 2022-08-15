import React from "react";
import { Link } from "react-router-dom";
function Subheader()
{
   return(
    <div className="subheader">
        
           <Link to="/card/mobile"> <button className="mobile">mobile</button></Link>
     <button className="shirt">shirt</button>
    
    </div>
   )
}
export default Subheader;