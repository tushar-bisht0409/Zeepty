import React, {useEffect, useState} from "react";
import Drawer from "../../components/drawer/drawer";
import LeftNav from "../../components/leftnav/lefnav";
import "./payment_page.css";
import { validateManufacturerLocalData } from "../../store/action/auth_action";

const PaymentPage = () => {
  useEffect(()=>{
    validateManufacturerLocalData();
  },[])
  return (
    <div id='content-wrap'>
        <Drawer mode={"payments"} />
        <div className="pcontainer">
            <div className="pts">Payments</div>
            <div className="reportp"> <div className="quickr">Quick Report</div></div>
            <div style={{display:'flex',alignItems:'baseline',justifyContent:'center' ,flexDirection:'row',marginTop:'40px'        }}>
      <div >   
    <div className="totalpayment">
    <div className="tpayment">Total Payment </div>
        <div className="tmoney" >$ 4565</div>
        <div className="tview"><div style={{fontFamily:'sans-serif',fontWeight:600,color:'white',marginLeft:'15px',marginTop:'16px',paddingTop:'5px'}}>View Details</div></div>
    </div>
    <div className="lastpayment">
    <div className="tpayment">Last payment </div>
        <div className="tmoney" >$ 4565</div>
        <div className="tview"><div style={{fontFamily:'sans-serif',fontWeight:600,color:'white',marginLeft:'15px',marginTop:'16px',paddingTop:'5px'}}>View Details</div></div>
    </div>
    </div>   
    <div  >
    <div className="outstanding">
    <div className="tpayment">Outstanding Payment </div>
        <div className="tmoney" >$ 4565</div>
        <div className="tview"><div style={{fontFamily:'sans-serif',fontWeight:600,color:'white',marginLeft:'15px',marginTop:'16px',paddingTop:'5px'}}>View Details</div></div>
    </div>
    <div className="nextpayment">
    <div className="tpayment">Next Payment </div>
        <div className="tmoney" >$ 4565</div>
        <div className="tview"><div style={{fontFamily:'sans-serif',fontWeight:600,color:'white',marginLeft:'15px',marginTop:'16px',paddingTop:'5px'}}>View Details</div></div>
    </div>
    </div>

   </div>
   </div>
    </div>
  )
}

export default PaymentPage