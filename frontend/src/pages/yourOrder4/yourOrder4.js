import React, {useState} from "react";
import "./yourOrder4.css";
import image from '../pic1.jpeg'
import Drawer from "../../components/drawer/drawer";
import TopBar from "../../components/TopBar/TopBar";
import { Routes, Route } from "react-router-dom";
import Orders from "../orders/orders";


export default function YourOrder4() {
    // const status = 3
    return(
        // status === 3 &&
        <div id="content-wrap">
            <Drawer />
            <div>
                <TopBar />
                <div className="order3">
                <div className="headphonePic2">
                <img className="orderPic2" src={image} alt="orderPic2"></img>
                </div>
                <div className="orderStatus2">
                <div id="orderStatus2">
                <div>icon</div>
                <div id="deliver2" >Cancelled</div>
                </div>
                <div className="descrip02">boat Wireless headphone</div>
                </div>
                <div className="iconSelect2">icon</div>
                </div>
                
                </div>
                
            </div>
    )
}