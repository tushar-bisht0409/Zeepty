import React, {useState} from "react";
import "./yourOrder1.css";
import YourOrder2 from "../yourOrder2/yourOrder2";
import YourOrder3 from "../yourOrder3/yourOrder3";
import YourOrder4 from "../yourOrder4/yourOrder4";
import YourOrder5 from "../yourOrder5/yourOrder5";
import YourOrder6 from "../yourOrder6/yourOrder6";
import Drawer from "../../components/drawer/drawer";
import { Link } from "react-router-dom";
import TopBar from "../../components/TopBar/TopBar";
import All from "../All";


export default function YourOrder1() {  
    // return(
    //     <div id="content-wrap">
    //         <Drawer />
    //     <div>
    //         <TopBar />
    //     </div>
    //         <YourOrder2></YourOrder2>
    //         <YourOrder3></YourOrder3>
    //         <YourOrder4></YourOrder4>
    //         <YourOrder5></YourOrder5>
    //         <YourOrder6></YourOrder6>
    //     </div>
    // )
    return (
        <div id="content-wrap"> 
            <Drawer />
            <div>
                <TopBar />
                <All />
            </div>
        </div>
    )

}