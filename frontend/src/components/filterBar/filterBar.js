import React from "react";
import "./filterBar.css";

const FilterBar = () => {
    return (
        <div className="filterBar">
            <div className="heading">
                <h3>Filters</h3>
            </div>

            <div className="heading-price">
                <p>Price</p>
                <div className="price-slider">
                    <div className="slidecontainer" >
                        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                        <div className="slider-values">
                            <label>Min</label>
                            <div>-</div>
                            <label>Max</label>
                        </div>
                      
                    </div>
                </div>
            </div>

            <div className="heading-category">
                <p>Category</p>
                <div className="sub-categories">

                    <div className="container">
                        <input type="checkbox"  />
                        <label >Category 1</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >Category 2</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >Category 3</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >Category 4</label>
                    </div>

                </div>
            </div>

            <div className="heading-rating">
                <p>Ratings</p>
                <div className="sub-ratings">

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >2 and above</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >3 and above</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >3.5 and above</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >4 and above</label>
                    </div>

                </div>
            </div>

            <div className="heading-discount">
                <p>Discount</p>

                <div className="sub-discounts">
                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >50% or more</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >40% or more</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >30% or more</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >20% or more</label>
                    </div>

                    <div className="container">
                        <input type="checkbox" checked="" />
                        <label >10% or more</label>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default FilterBar;