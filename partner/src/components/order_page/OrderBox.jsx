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


const OrderBox=( data )=> {

    return (
        <>
        {
            (data.data == undefined)?
            <div>Loading</div>:
            data.data.map((d)=>{
                return(
                    <div>{data.mode === "pending" ? <PendingOrderBox item={d}/> : data.mode === "RTS" ? <RtsOrderBox item={d}/> : data.mode === "shipped" ? <ShippedOrderBox item={d}/> : data.mode === "cancelled" ? <CancelledOrderBox item={d}/> : data.mode === "delivered" ? <DeliveredOrderBox item={d}/> : null}
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