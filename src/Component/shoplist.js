
import React,{useState} from 'react';
import ShopListDetail from './shoplistdetail';
import "./CssFolder/shoplist.css";

function Shoplist(props){


    let[product,Setproduct]= useState([
        {
          
            name:"sunflower pot",
            img:"./image/flower2.jpg",
            price:1,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower",
            brand:"hello",
            color:"red",
        },

        {
           

            name:"sunflower pot",
            img:"./image/flower2.jpg",
            price:2,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower2",
            brand:"hello",
            color:"green",



        },

        {
           

            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:3,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower3",
            color:"yellow",
            brand:"brand2",




        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:4,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower4",
            color:"yellow",
            brand:"brand1",


        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",

            price:5,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower5",
            color:"green",
            brand:"brand4",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:6,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower5",
            color:"blue",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:7,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand3",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:8,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand4",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:9,
            rating:1.5,
            count:0,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:10,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:11,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/flower3.jpg",
            price:12,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/redwhiteflower.jpg",
            price:13,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower5",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/redflower.jpg",
            price:14,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower2",
            color:"yellow",
            brand:"brand2",



        },
        {
            name:"sunflower pot",
            img:"./image/flower2.jpg",
            price:15,
            rating:1.5,
            count:1,
            AddToCart:false,
            category:"flower3",
            color:"black",
            brand:"brand5",
        },

    ]);


    let[productaddclass,setproductclass] = useState(["alertproductadd"]);
    // add to cart item
    function addToCartItem(item){
      

        // =========================
        props.addToCartList(item);
        product[item.index].count++;
        // Setproduct([product[item.index].count++]);




        // ======================================================

        setproductclass(["alertproductaddTransition"])
        setTimeout(()=>{
          setproductclass(["alertproductadd"]);
            
        },600)
        // ==================================================
        
    }
    
 
  

    // end here
    return(<div>
            {/* =============================== */}
                <div className={productaddclass}>
                    <p>Product is added to cart</p>
                </div>
        {/*     ============================================= */}




            <div className="shoplist-container">
              
            {
            product.map((item,i)=>{

            return <div className="shop-product">
                <ShopListDetail key ={i} isOnCard={item.AddToCart} name={item.name} index={i} img ={item.img} price={item.price} count={item.count} addToCart={addToCartItem}></ShopListDetail>
             </div>
            })
             }

            </div>

    </div>)
}

export default Shoplist;