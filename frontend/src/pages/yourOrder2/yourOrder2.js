import React, {useState} from "react";
import "./yourOrder2.css";
import image from '../pic1.jpeg'
import Drawer from "../../components/drawer/drawer";
import TopBar from "../../components/TopBar/TopBar";


export default function YourOrder2() {
    const status = 1
    return(
        // status === 1 &&
        <div id="content-wrap">
            <Drawer />
            

            <div>
            <TopBar />
        <div className="order1">
        <div className="headphonePic">
        <img className="orderPic" src={image} alt="orderPic"></img>
        </div>
        <div className="orderStatus">
        <div id="orderStatus">Order Status</div>
        <div className="centerDiv">
        <div id="status">Arriving on 31 Dec</div>
        <div className="iconSelect">icon</div>
        </div>
        <div className="descrip00">boat Wireless headphone</div>
        </div>
        </div>
        </div>
        </div>
        
    )
}
