import React,{useState,useEffect} from "react";
import "./CssFolder/shop.css"
import Category from "./Categories";
import Navbar from "./navbar";
import Shoplist from "./shoplist";


function Shop(props){

    // 
    
    
   
    function addToCartList(item){
        
        props.addToCartList(item);
    }
  

  
    return(<div>

    
        <div className="shop-main-container">
            <Navbar></Navbar>
            <div className="shop-container">
                <Category></Category>
                <Shoplist addToCartList={addToCartList}></Shoplist>

            </div>
        </div>

          
     
       
    </div>)
}

export default Shop;