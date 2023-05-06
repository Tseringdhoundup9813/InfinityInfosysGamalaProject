import React,{useState}  from "react";


function Cartlist(props){

    let[count,setCount] = useState(1);
    function IncreaseCounterfunction(){

        setCount(++count);
    }
    function DecreateCounterFunction(){
        if(count <= 0){
            setCount(0);
        }
        else{
            setCount(--count);
        }
    }


    function DeleteCartListFunction(){
            props.deletecartlist(props.index);
    }

    let Counter = 0;

    return(<div>
         <div  className="cart-list-box">
              <img src={(props.img)}></img>
                <h1 class="cart-product-name">{props.name}</h1>
                <h1 className="cart-product-price">Rs {props.price}</h1>
                        
                <div className="cart-count-button">
                <button onClick={IncreaseCounterfunction}>+</button>
                <p>{count}</p>
                <button onClick={DecreateCounterFunction}>-</button>
                </div>
            <div className="cart-product-final-price">
            <h1>Rs {props.price  * count}</h1>
            </div>
             <div className="cart-product-delete">
            <button onClick={DeleteCartListFunction}>
                <img src={("./image/bin.png")}></img>
             </button>
             </div>
        </div>
    </div>);
}


    // )
// }

export default Cartlist;