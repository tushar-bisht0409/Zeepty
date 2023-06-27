import React, { useState,useEffect } from "react";
import { isValidUser } from "../../store/action/auth_action";
import { getManufacturerInfo } from "../../store/action/manufacturer_action";
import "./splash_page.css";


export default function SplashPage() {

    async function getData() {
        const m_id = localStorage.getItem('manufacturer_id');
        if(m_id === "" || m_id === null || m_id === undefined){
            window.open('/supplier/auth','_self')
        } else {
            let obj = {
                _id: m_id,
                mode: 'Manufacturer'
            }
            const json = await isValidUser(obj);
            if(json.success) {
                let obj2 = {
                    manufacturer_id: m_id,
                }
                const json2 = await getManufacturerInfo(obj2);
                if(json2.success === true && json2.isNew === false) {
                    if(json2.msz.gst_details === undefined){
                        window.open('/supplier/fillinfo','_self');
                    } else if(json2.msz.bank_details === undefined){
                        window.open('/supplier/fillinfo','_self');
                    } else if(json2.msz.gst_details["gstin"] === "" || json2.msz.gst_details["gstin"] === null || json2.msz.gst_details["gstin"] === undefined || json2.msz.bank_details["account_number"] === "" || json2.msz.bank_details["account_number"] === null || json2.msz.bank_details["account_number"] === undefined ){
                        window.open('/supplier/fillinfo','_self'); 
                    } else {
                        localStorage.setItem("gstin_verified", 'true');
                        window.open('/supplier/home','_self');
                    }
                } else if(json2.success === true && json2.isNew === true) {
                    window.open('/supplier/fillinfo','_self');
                } else {
                    window.alert("Something Went Wrong")
                }
            } else {
                localStorage.clear();
                window.open('/supplier/auth','_self');
            }
        }
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <div className="splashBox">

        </div>
    )
}