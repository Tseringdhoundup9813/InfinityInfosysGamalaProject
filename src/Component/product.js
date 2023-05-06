import React,{useState} from "react";
import "./CssFolder/product.css";
import Navbar from "./navbar";



function Product(){
   
    let[carouselCount,SetcarouselCount] =useState(0);
    function CarouselLeft(){
        
        if(carouselCount <= 0){
            SetcarouselCount(0);

        }
        else{
            SetcarouselCount(--carouselCount);

        }
       
        
    }
    function CarouselRight(){
        
        SetcarouselCount(++carouselCount);
       
    
    }
    const carouselmovestyle={
        transform:`translateX(${carouselCount * -350}px)`,
    }



    return(
    <div className="product-detail-parent">
        
        <Navbar></Navbar>
        <div className="product-detail-container">

            <div className="product-detail-design-background">
                
            </div>
    

            <div className="product-detail-carousel-parent">
            {/* ============================ */}
            
           

            <div className="product-detail-carousel" >

                <div className="product-carousel-container" style={carouselmovestyle}>
                   <div className="carousel-box">
                      <img className="carousel-main-image" src={("./Image/flower2.jpg")} alt="" />
                   </div>
                   <div className="carousel-box">
                     <img className="carousel-main-image" src={("./Image/flower2.jpg")} alt="" /> 
                   </div>
                   <div className="carousel-box">
                         <img className="carousel-main-image" src={("./Image/flower3.jpg")} alt=""/> 
                   </div>
                </div>


                {/* arrow container ======================================== */}
                <div className="arrow-container">
                    <div className="arrow-left" onClick={CarouselLeft}>
                        <img src={("./image/rightarrow.svg")}></img>
                     
                    </div>
                    <div className="arrow-right" onClick={CarouselRight}>
                        <img src={("./image/rightarrow.svg")}></img>

                    </div>
                </div>
             </div>
             </div>
             {/* ================================================= */}
               
           
            {/* ==================================================== */}
            <div className="product-detail-information-container">
                
                <div className="title">
                    <h1>Flower Pot</h1>
                </div>



                <div className="price">
                    <p>24$</p>
                    <div className="stock">
                        <div className="stock-color">
                        </div>
                        <h1>inStock</h1>
                    </div>
                </div>
                
                <div className="rating">
                    <img src={("./Image/star.png")}></img>
                    <img src={("./Image/star.png")}></img>
                    <img src={("./Image/star.png")}></img>

                </div>
                
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla ad expedita sed tempora. Neque hic, rem sit aperiam voluptatum
                         facere eaque animi, molestias dolorem consectetur delectus culpa sapiente nisi.</p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla ad expedita sed tempora. Neque hic, rem sit aperiam voluptatum
                         facere eaque animi, molestias dolorem consectetur delectus culpa sapiente nisi.</p>
                      
                </div>

                <div className="add-to-cart-button-wishlist-button-container">
                    <div>
                        <p>Add To Cart</p>
                    </div>
                    <div>
                        <p>Add to WishList</p>
                    </div>
                </div>
            </div>
            {/* ========================================================== */}
            
        </div>
    </div>
    )
}


export default Product;