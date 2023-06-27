import React, {useState} from "react";
import "./yourOrder3.css";
import image from '../pic1.jpeg'
import TopBar from "../../components/TopBar/TopBar";
import Drawer from "../../components/drawer/drawer";

export default function YourOrder3() {
    const status = 0
    return(
        status === 0 &&
        <div id="content-wrap">
            <Drawer />
            <div>
            <div>
            <TopBar />
        <div className="order2">
        <div className="headphonePic1">
        <img className="orderPic1" src={image} alt="orderPic1"></img>
        </div>
        <div className="orderStatus1">
        <div id="orderStatus1">
        <div>icon</div>
        <div id="deliver" >Delivered on 31 Dec</div>
        </div>
        <div className="descrip01">boat Wireless headphone</div>
        </div>
        <div className="iconSelect1">icon</div>
        </div>
        </div>
            </div>
        </div>
        
    )
}