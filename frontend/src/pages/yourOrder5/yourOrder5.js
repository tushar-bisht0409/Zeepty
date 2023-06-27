import React, {useState} from "react";
import "./yourOrder5.css";
import image from '../pic1.jpeg'
import Drawer from "../../components/drawer/drawer";
import TopBar from "../../components/TopBar/TopBar";


export default function YourOrder5() {
    const status = 2
    return(
        <div id="content-wrap">
            <Drawer />
            <div>
                <TopBar />
                <div className="order4">
        <div className="headphonePic3">
        <img className="orderPic3" src={image} alt="orderPic3"></img>
        </div>
        <div className="orderStatus3">
        <div id="orderStatus3">
        <div>icon</div>
        <div id="deliver3" >Returned</div>
        </div>
        <div className="descrip03">boat Wireless headphone</div>
        </div>
        <div className="iconSelect3">icon</div>
        </div>
        </div>
            </div>
    )
}