import React from 'react';
import './CssFolder/navbar.css';
import { Link} from 'react-router-dom';

function Navbar(){
    return(<div className='navbar-container'>

        {/* logo container  */}
        <div className='logo'>
            <img src={("./logo192.png")} alt="Company Logo"></img>
        </div>
        {/* end of logo container */}

        {/* navbar main container */}
        <ul className='navbar-box'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="checkout">CheckOut</Link></li>
        </ul>
        {/* end of navbar main container */}


        {/* button of discount and new this week */}
        <div className="button-content">
            <div className="discount">
                <p>Discount</p>
            </div>
            <div className="new-this-week">
                <p>New This Week</p>
            </div>
        </div>
        {/* end this button  */}


        {/* cart,search and FAVOURITE container  */}

            <div className="cart-search-favourite-container">
                <div className="cart">
                    <img src={("./Image/cart.gif")} alt="" />
                    <p>Cart</p>
                </div>
                <div className="favourite">
                    <img src={("./Image/favourite.gif")} alt="" />
                    <p>Favourite</p>
                </div>
                <div className="search">
                    <img src={("./Image/search.gif")} alt="" />
                    <p>Search</p>
                </div>
            </div>

        {/* end this container */}


        {/* socail media  */}
        <div className="socialmedia-container">
            <img src={("./Image/facebook.png")} alt="" />
            <img src={("./Image/instagram.png")} alt="" />
            <img src={("./Image/twitter.png")} alt="" />
            <img src={("./Image/pintrest.png")} alt="" />

        </div>
        {/* end of social media */}

    </div>)
}

export default Navbar;