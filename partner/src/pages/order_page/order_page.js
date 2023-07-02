import React ,{useEffect,useState}from "react";
import Drawer from "../../components/drawer/drawer";
import LeftNav from "../../components/leftnav/lefnav";
import RightContent from "../../components/order_page/RightContent";
import "./order_page.css"
import { validateManufacturerLocalData } from "../../store/action/auth_action";


const OrderPage =()=> {

  useEffect(()=>{
    validateManufacturerLocalData();
  },[])
    return (
      <div id="content-wrap">
        <Drawer mode={"order"} />
        <RightContent />
      </div>
    );
  }


export default OrderPage;
