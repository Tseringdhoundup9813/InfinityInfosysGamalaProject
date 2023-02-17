import React from 'react';
import  "./CssFolder/category.css";


function Category(){
    return(<div>
        <div className="category-content">
            <ul className='categories-list'>
                <li>
                    <div className="title">
                        <h1>Categories</h1> 
                    </div>
                    <ul>
                        <li>Rose</li>
                        <li>Lotus</li>
                        <li>jasmine</li>
                        <li>sunflower</li>
                        <li>tulip</li>
                        <li>magnolia</li>
                    </ul>
                </li>    
            </ul>
            <ul className="brands">
                <li>Brands
                    <ul>
                        <li>
                            <input type="checkbox"  name=""/>
                            <label htmlFor=''>Nike</label>
                        </li>
                        <li>
                            <input type="checkbox"  name=""/>
                            <label htmlFor=''>jorden</label>
                        </li>
                        <li>
                            <input type="checkbox"  name=""/>
                            <label htmlFor=''>puma</label>
                        </li>
                        <li>
                            <input type="checkbox"  name=""/>
                            <label htmlFor=''>logitech</label>
                        </li>
                    </ul>
                </li>
            </ul>

                <div className="categories-colors">
                    <li>Colors
                        <ul>
                            <li>
                                <div className="black"></div><h1>Black</h1>
                            </li>
                            <li>
                                <div className="red"></div><h1>Red</h1>
                            </li>
                            <li>
                                <div className="yellow"></div><h1>Yellow</h1>
                            </li>
                            <li>
                                <div className="blue"></div><h1>blue</h1>
                            </li>
                        </ul>
                      
                    </li>
                   
                </div>

                <div className="categories-price">
                    <div className='price-input'>
                        <h1>Price</h1>
                        <input type="Range" min="1" max="100"/>
                    </div>
                    <div className="price-min-max">
                        <p>5$</p>
                        <p>10000$</p>
                    </div>
                </div>
            </div>
 
    </div>)
}
export default Category;