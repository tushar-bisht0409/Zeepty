import React ,{useEffect,useState}from "react";
import Drawer from "../../components/drawer/drawer";
import "./return_page.css"
import RTitleBar from "../../components/return_page/rTitle_bar/rTitle_bar";
import { getMyReturns } from "../../store/action/order_action";
import { useDispatch } from "react-redux";
import RInfoBox from "../../components/return_page/rInfo_box/rInfo_box";

const ReturnPage =()=> {

  const dispatch = useDispatch();

  const handleGetMyReturns = async()=>{
    const obj = {
        type: 'manufacturer_id',
        manufacturer_id: localStorage.getItem("manufacturer_id")
    }
    const json = await dispatch(getMyReturns(obj,"scheduled"));

    if(json.success === true){

    } else{
        window.alert("Something Went Wrong")
    }
}

useEffect(()=>{
    handleGetMyReturns();
},[]);

    return (
      <>
              <Drawer mode={"return"}/>

      <div className="return"> 
        <div className="return-top">
          <p className="return-top-head">Return Orders</p>
          <div className="return-top-body">
            <p className="return-top-body-head">Consumer Return Rate</p>
            <p className="return-top-body-rate">0.0%</p>
            <p className="return-top-body-summary">0 orders returned out of 0 delivered</p>
          </div>
        </div>

        <RTitleBar/>
        <RInfoBox/>

        {/* <RightContent /> */}
        
      </div>
      </>
    );
  }


export default ReturnPage;
