
import React, { useState } from "react"
import "./CssFolder/shoplist.css";
import cardSound from "../sound/cardSound.mp3"



function ShopListDetail(props){
            
    
  
    // add to cart function 
    
    
    // =======================
    function AddToCartFunction(){
        props.addToCart(props);
        new Audio(cardSound).play();
        
    } 
    //==============================


    // ==============================>
    let countclass=[];
    
    if(props.count > 0){
        countclass.push("addtocartcount");
    }
    else{
        countclass.pop("addtocartcount");
    }

    // ====================================>
   
    
    



    return (<div>
               

            {/*  */}
                     <div id="shop-product-image">
                         <img  id="shop-product-img"src={props.img} alt="flower"></img>
                     </div>
                         <div className="shop-product-price">
                             <h1>{props.price}</h1>
                         </div>
                         <div className="shop-product-title">
                             <h1>{props.name}</h1>
                         </div>
                         <div className="shop-product-rating">
                             <img src={("./Image/halfstar.png")}></img>
                             <img src={("./Image/star.png")}></img>
                             <img src={("./Image/star.png")}></img>
                         </div>
                         <div className="shop-product-cart" onClick={AddToCartFunction}>
                             <img src={("./Image/cart.gif")}></img>
                             <p className={countclass}>{props.count}</p>
                         </div>
     
                 </div>

     

  
    )
}

export default ShopListDetail;