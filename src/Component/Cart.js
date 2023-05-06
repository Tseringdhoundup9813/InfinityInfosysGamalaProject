import React,{useEffect, useState} from "react";
import "./CssFolder/cart.css"
import Navbar from "./navbar";
import Cartlist from "./Cartlist";



function Cart(props){




    
    
    // console.log(cartlistUseStateData);

    

    function deletecartlist(key)
    {   
        props.deletecartlist(key);
    
    }
  

    return(<div className="cart-main-container">

        {/* navbar */}
        <Navbar></Navbar>

        {/* END OF NAVBAR */}
        
     
        <div className="cart-container">

            <div className="cart-total-item-added">
                    {/* <h1>Total Item Add </h1> */}
                    <h1>hello one</h1>
            </div>
            <div className="cart-list-container">
                
            {
            
            props.cartlist.map((item,i)=>{
                return <Cartlist img={item.img} key={i} name={item.name} price={item.price} deletecartlist={deletecartlist} index={i}></Cartlist>
             })
                    

            }


            
            </div>





            <div className="cart-summary-container">
                <div className="cart-summary-box">
                    <div className="order-summary-title">
                        <h1>Order Summary</h1>
                    </div>


                    <div className="cart-summary-price-detail">
                       
                        <div>
                            <h1>Sub total</h1>
                            <h1>140</h1>
                        </div>
                        <div>
                            <h1>Delivery</h1>
                            <h1>120</h1>
                        </div>
                        <div>
                            <h1>Total</h1>
                            <h1>140</h1>
                        </div>
                    </div>

                    <div className="checkout-button">
                        <h1>CheckOut</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default Cart;