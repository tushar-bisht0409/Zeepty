import React, {useEffect, useState} from "react";
import Drawer from "../../components/drawer/drawer";
import LeftNav from "../../components/leftnav/lefnav";
import "./payment_page.css";
import { sizeObject } from "./Women_size";
import { v4 as uuidv4 } from 'uuid';
import { mensObject } from "./Behere verticles-2";
import { womensObject } from "./Women-Category";

const PaymentPage = () => {

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

        for(i = 0; i < Object.keys(womensObject).length; i++){
            sVertical = Object.keys(womensObject)[i];
            newObj = {};
            newObj[`${sVertical}`] = [];
            verticals.push(newObj);

            let mongoArray = [];
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

            for(j = 0; j<Object.keys(womensObject[`${sVertical}`]).length; j++){
                sCategory = Object.keys(womensObject[`${sVertical}`])[j];
                newObj = {};
                newObj[`${sCategory}`] = [];
                verticals[i][`${sVertical}`].push(newObj);
                for(k = 0; k < Object.keys(womensObject[`${sVertical}`][`${sCategory}`]).length ; k++){
                    sSubCategory = Object.keys(womensObject[`${sVertical}`][`${sCategory}`])[k]
                    newObj = {};
                    newObj[`${sSubCategory}`] = [];
                    verticals[i][`${sVertical}`][j][`${sCategory}`].push(newObj);

                    for(m = 0; m < Object.keys(womensObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`]).length; m++){
                        sSubCategory2 = Object.keys(womensObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`])[m];
                        verticals[i][`${sVertical}`][j][`${sCategory}`][k][`${sSubCategory}`].push(`${sSubCategory2}`);

                        mongoObj = {
                            "vertical_id": uuidv4(),
                            "vertical": sVertical,
                            "category": sCategory,
                            "sub_category": sSubCategory,
                            "sub_category2": sSubCategory2,
                            "all_options": [],
                            "hsn_code": [],//sizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].HSN,
                            "gst_percent": [],//sizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].GST,
                            "size": [],//sizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].Size,
                            "size_fields": []//sizeObject[`${sVertical}`][`${sCategory}`][`${sSubCategory}`][`${sSubCategory2}`].fields
                        }

                        mongoArray.push(mongoObj);
                        searchArray.push(`${sVertical} / ${sCategory} / ${sSubCategory} / ${sSubCategory2}`);
                    }
                } 
                

            }
        }
        console.log('vertic ',verticals)
    }

    useEffect(()=>{
        aaa()
    },[])
  return (
    <div id='content-wrap'>
        <Drawer mode={"payments"} />
        <div style={{width: '75vw',marginLeft: '25vw'}} className="right">
            <div className="bankDetails">
                <h2>Your Bank Details</h2>
                <div className="bank">
                    <span style={{ fontWeight: '600' }}>Account Number: </span><span>74r293480918443</span>
                    <span id="a" style={{ fontWeight: '600' }}>Account Number: </span><span>74r293480918443</span>
                    <p><span style={{ fontWeight: '600' }}>Benificiery Number: </span><span>74r293480918443</span></p>
                </div>
            </div>
            <div className="sub-parent">
                <div className="subPayment">
                    <h2>Next Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
                <div className="subPayment right-parent">
                    <h2>Last Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
            </div>
            <div className="sub-parent">
                <div className="subPayment">
                    <h2>Total Outstanding Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
                <div className="subPayment right-parent">
                    <h2>Request Payment Report</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>Request Report</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage