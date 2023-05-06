import React,{useEffect, useState} from 'react';
import './App.css';
import {Routes,Route, json} from 'react-router-dom';
import Home from "./Component/Home";
import Shop from "./Component/Shop"
import Product from './Component/product';
import Cart from './Component/Cart';




function App() {


  const[cartlistitem,setcartlistitem] = useState([]);



  function addToCartList(cartlist){

    if(cartlistitem.length > 0){
         cartlistitem.map((item)=>{
            if(item.index == cartlist.index){
              console.log("you have add double time")
            }
            else{
              console.log("this is uniquie item");
              setcartlistitem([...cartlistitem,cartlist]);

            }
        })
    }
    else{
       setcartlistitem([...cartlistitem,cartlist]);

    }
    
  
    
  }



  function deletecartlistfunction(key){
      let newcartlist = [...cartlistitem];
      newcartlist.splice(key,1);
      setcartlistitem([...newcartlist]);
  }
 

 
    

  return (
  <div> 
     <Routes>
      <Route path="" element={ <Home/>}></Route>
      <Route path="/shop" element={ <Shop addToCartList={addToCartList}  ></Shop>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
      <Route path="/cart" element={<Cart cartlist={cartlistitem} deletecartlist={deletecartlistfunction}></Cart>}></Route>
     </Routes>
  </div>
  );
}

export default App;
