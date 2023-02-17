import React from "react";
import "./CssFolder/Home.css";

import Navbar from './navbar';
import ProductGallery from './ProductGallery';
import Footer from './footer';


function Home(){
    return(<div>

            <div className='index-container'>
              <Navbar></Navbar>
              <ProductGallery></ProductGallery>
             
            </div>
            <div className="footer-main-container">
              <Footer></Footer>
            </div>

    </div>)
}

export default Home;