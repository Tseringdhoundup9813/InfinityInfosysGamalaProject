import React,{useState} from "react";
import "./CssFolder/product.css";
import Navbar from "./navbar";



function Product(){
    let productCaraousleImg = ["./Image/flower2.jpg","./Image/flower11.jpg","./Image/flower3.jpg"];
    let [carouselSelction,SetcarouselSelection] = useState(0)
    function CarouselLeft(){
        if(carouselSelction < 0 || carouselSelction> 0){
            SetcarouselSelection((prev)=>--prev )
            let carousel_main_image = document.querySelector(".carousel-main-image");
            carousel_main_image.classList.toggle("moveleft");
        }
        else{
            SetcarouselSelection(carouselSelction= 0)
        }
    }
    function CarouselRight(){
        
        if(carouselSelction < productCaraousleImg.length-1){
            SetcarouselSelection((prev)=>prev+1)
            let carousel_main_image = document.querySelector(".carousel-main-image");
            carousel_main_image.classList.toggle("moveRight");
        }
        else{
            SetcarouselSelection(carouselSelction = productCaraousleImg.length-1);
        }

    }
    console.log(carouselSelction);


    return(
    <div className="product-detail-parent">
        
        <Navbar></Navbar>
        <div className="product-detail-container">
            <div className="product-detail-carousel">
                <div className="product-carousel-img">
                
                   <div className="carousel-box">
                        {/* <img className="carousel-main-image" src={productCaraousleImg[carouselSelction-1]} alt="" /> */}
                        <img className="carousel-main-image" src={productCaraousleImg[carouselSelction]} alt="" />
                        {/* <img className="carousel-main-image" src={productCaraousleImg[carouselSelction+1]} alt="" /> */}
                        
                   </div>
                 

                  
                  <div className="product-carousel-arrow">
                    <div onClick={CarouselLeft} className="left">
                        <img src={("./Image/circle.svg")} alt="" />
                        <img src={("./Image/leftarrow.svg")} alt="" />

                    </div>
                    <div onClick={CarouselRight} className="right">
                        <img src={("./Image/circle.svg")} alt=""/>
                        <img src={("./Image/rightarrow.svg")} alt="" />

                     </div>
                </div>
               
                </div>
               
            </div>

            <div className="product-detail-information-container">
                <div className="price">
                    <p>24$</p>
                </div>
                <div className="title">
                    <h1>Flower Pot</h1>
                </div>
                
                <div className="rating">
                    <img src={("./Image/star.png")}></img>
                    <img src={("./Image/star.png")}></img>
                    <img src={("./Image/star.png")}></img>

                </div>
                <div className="stock">
                    <div className="stock-color">

                    </div>
                    <h1>inStock</h1>
                </div>
                <div className="description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto nulla ad expedita sed tempora. Neque hic, rem sit aperiam voluptatum
                         facere eaque animi, molestias dolorem consectetur delectus culpa sapiente nisi.</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}


export default Product;