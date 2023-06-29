import { useEffect,useState } from "react";
import { useSelector, useStore,connect, Provider, useDispatch } from "react-redux";
import BuyerInfoDetails from "./BuyerInfo";
import OrderCard from "./OrderCard";
import OrderBoxComponent from "./OrderBoxComponent";
import RtsOrderBox from "./rts_orderBox/rts_orderBox";
import ShippedOrderBox from "./shipped_orderBox/shipped_orderBox";
import PendingOrderBox from "./pending_orderBox/pending_orderBox";
import CancelledOrderBox from "./cancelled_orderBox/cancelled_orderBox";
import DeliveredOrderBox from "./delivered_orderBox/delivered_orderBox";
import nothingHere from '../../assets/supplier/images/nothingHere.png';
import './OrderBox.css'


const OrderBox=( {data,mode} )=> {

    return (
        <>
        {
            data.length === 0?
            <div className="ordBox-nothing">
            <img onClick={()=>{window.location.reload()}} className="ordBox-nothing-img" src={nothingHere}></img>
            </div> :
            data.map((d)=>{
                return(
                    <div>{mode === "pending" ? <PendingOrderBox item={d}/> : mode === "RTS" ? <RtsOrderBox item={d}/> : mode === "shipped" ? <ShippedOrderBox item={d}/> : mode === "cancelled" ? <CancelledOrderBox item={d}/> : mode === "delivered" ? <DeliveredOrderBox item={d}/> : null}
                    </div>
                )
            })

        }
        
            </>
    )
}

function mapStateToProps(state) {
    const data = state.saveorderinfo;
    let product;
    if(data.mode == "pending")
        product= data.pending;
    else if(data.mode == "RTS")
        product  = data.RTS;
    else if(data.mode == "shipped")
        product  = data.shipped;
    else if(data.mode == "cancelled")
        product  = data.cancelled;
    else if(data.mode == "delivered")
        product  = data.delivered;
    return {data:product,mode: data.mode}
}

export default connect(mapStateToProps)(OrderBox)