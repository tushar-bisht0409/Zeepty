import React, {useEffect, useState} from "react";
import Drawer from "../../components/drawer/drawer";
import LeftNav from "../../components/leftnav/lefnav";
import "./payment_page.css";
import { sizeObject } from "./Women_size";
import { v4 as uuidv4 } from 'uuid';
import { mensObject } from "./Behere verticles-2";
import { womensObject } from "./Women-Category";
import {mensSizeObject} from "./Mens Size full-2"
import { menData } from "./Mongo_men";
import { API_URI } from "../../store/action/type";
import { WomenData } from "./Mongo_women";

const TestPage = () => {

    function aaa() {
        let verticals = [];
        let newObj = {};
        let i = 0;
        let j = 0;
        let k = 0;
        let m = 0;
        let sVertical = "";
        let sCategory = "";
        let sSubCategory = "";
        let sSubCategory2 = "";
        let searchArray = [];
        let mongoArray = [];
        for(i = 0; i < Object.keys(mensObject).length; i++){
            sVertical = Object.keys(mensObject)[i];
            newObj = {};
            newObj[`${sVertical}`] = [];
            verticals.push(newObj);

            
            let mongoObj = {
                "vertical_id": "",
                "vertical": "",
                "category": "",
                "sub_category": "",
                "sub_category2": "",
                "all_options": [],
                "hsn_code": [],
                "gst_percent": [],
                "size": [],
                "size_fields": []
            } 

            for(j = 0; j<Object.keys(mensObject[`${sVertical}`]).length; j++){
                sCategory = Object.keys(mensObject[`${sVertical}`])[j];
                newObj = {};
                newObj[`${sCategory}`] = [];
                verticals[i][`${sVertical}`].push(newObj);
                for(k = 0; k < Object.keys(mensObject[`${sVertical}`][`${sCategory}`]).length ; k++){
                    sSubCategory = Object.keys(mensObject[`${sVertical}`][`${sCategory}`])[k]
                    newObj = {};
                    newObj[`${sSubCategory}`] = [];
                    verticals[i][`${sVertical}`][j][`${sCategory}`].push(newObj);

                    for(m = 0; m < Object.keys(mensObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`]).length; m++){
                        sSubCategory2 = Object.keys(mensObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`])[m];
                        verticals[i][`${sVertical}`][j][`${sCategory}`][k][`${sSubCategory}`].push(`${sSubCategory2}`);
                        
                        console.log("SS: ",sVertical," : ", sCategory, " : ", sSubCategory, " : ", sSubCategory2 )
                        mongoObj = {
                            "vertical_id": uuidv4(),
                            "vertical": sVertical,
                            "category": sCategory,
                            "sub_category": sSubCategory,
                            "sub_category2": sSubCategory2,
                            "all_options": mensObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].allOptions,
                            "hsn_code": mensSizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].HSN,
                            "gst_percent": mensSizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].GST,
                            "size": mensSizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].Size,
                            "size_fields": mensSizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].fields
                        }

                        mongoArray.push(mongoObj);
                        searchArray.push(`${sVertical} / ${sCategory} / ${sSubCategory} / ${sSubCategory2}`);
                    }
                } 
                

            }
        }
        console.log('vertic ',mongoArray)
    }

    // async function uload() {
    //     let err = 0;
    //     for(let i = 0; i < WomenData.length; i++){
    //         try { 
    //             const response = await fetch(`${API_URI}/savevertical`, { 
    //               method: 'POST', 
    //               headers: { 
    //                 Accept: 'application/json', 
    //                       'Content-Type': 'application/json' 
    //                     }, 
    //                     body: JSON.stringify(WomenData[i]) 
    //                   }); 
    //             } catch (error) { 
    //                 err ++;
    //                 console.log(err , ": ", error);
    //             } 
    //     }
    //     console.log("WEWEWE: ",err)
    // }

    useEffect(()=>{
        // aaa()
    },[])
  return (
    <div id='content-wrap'>
    </div>
  )
}

export default TestPage