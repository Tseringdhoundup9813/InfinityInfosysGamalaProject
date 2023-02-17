import React from "react";
import "./CssFolder/shop.css"
import Category from "./Categories";
import Navbar from "./navbar";
import Shoplist from "./shoplist";


function Shop(){
    return(<div>
        
        <div className="shop-main-container">
            <Navbar></Navbar>
            <div className="shop-container">
                <Category></Category>
                <Shoplist></Shoplist>

               
                
            </div>

          
        </div>
       
    </div>)
}

export default Shop;