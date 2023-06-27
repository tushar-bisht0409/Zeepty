import React, {useState} from "react";
import "./yourOrder6.css";
import image from '../pic1.jpeg'

export default function YourOrder6() {
    const status = 2
    return(
        status === 2 &&
        <div>
        <div className="order5">
        <div className="headphonePic4">
        <img className="orderPic4" src={image} alt="orderPic4"></img>
        </div>
        <div className="orderStatus4">
        <div id="orderStatus4">
        <div>icon</div>
        <div id="deliver4" >Returned</div>
        </div>
        <div className="descrip04">boat Wireless headphone</div>
        </div>
        <div className="iconSelect4">icon</div>
        </div>
        </div>
    )
}