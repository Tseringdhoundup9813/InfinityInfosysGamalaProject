import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from "./Component/Home";
import Shop from "./Component/Shop"
import Product from './Component/product';





function App() {
  return (
  <div> 
     <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/shop" element={ <Shop></Shop>}></Route>
      <Route path='/product' element={<Product></Product>}></Route>
     </Routes>
  </div>
  );
}

export default App;
