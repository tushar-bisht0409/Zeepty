import React, { useEffect, useState } from 'react'
import MCancelledCard from '../../mComponents/morder_page/mcancelledCard/mcancelledCard';
import MDeliveredCard from '../../mComponents/morder_page/mdeliveredCard/mdeliveredCard';
import MOrderedCard from '../../mComponents/morder_page/morderedCard/morderedCard';
import MReturnedCard from '../../mComponents/morder_page/mreturnedCard/mreturnedCard';
import { getOrders } from '../../store/actions/order_action';
import './morder_page.css'

const MOrderPage = () => {

    const [oMode, setOMode] = useState("all");

    const [allOrders, setAllOrders] = useState(undefined);

    const [selectedOrders, setSelectedOrders] = useState(undefined);

    function manageOrders(ords, tempMode) {
        console.log("oMode: ", tempMode);
        let nOrders = [];
        if (tempMode === "all") {
            nOrders = ords;
        } else if (tempMode === "ordered") {
            ords.map((item) => {
                if (item.order_status === "Pending" || item.order_status === "RTS" || item.order_status === "Shipped") {
                    nOrders.push(item);
                }
            })
        } else if (tempMode === "cancelled") {
            ords.map((item) => {
                if (item.order_status === "Cancelled") {
                    nOrders.push(item);
                }
            })
        } else if (tempMode === "returned") {
            ords.map((item) => {
                if (item.order_status === "Return") {
                    nOrders.push(item);
                }
            })
        } else if (tempMode === "delivered") {
            ords.map((item) => {
                if (item.order_status === "Delivered") {
                    nOrders.push(item);
                }
            })
        }
        setSelectedOrders(nOrders);
    }

    async function handleGetOrders() {
        const c_id = localStorage.getItem('customer_id');
        const obj = {
            type: "customer_id",
            customer_id: c_id,
        }
        const json = await getOrders(obj);
        console.log('allOrders: ', json);
        if (json.success) {
            setAllOrders(json.msz);
            manageOrders(json.msz, "all")
        } else {

        }
    }

    useEffect(() => {
        handleGetOrders()
    }, [])

    return (
        allOrders === undefined || selectedOrders === undefined ? <div></div> :
            <div className='opBox'>
                <div className="opTopBar">
                    <i onClick={()=>{window.history.back()}} style={{ fontSize: '20px' }} class="fa-solid fa-arrow-left"></i>
                    <p className='opTopBarText'>Orders</p>
                </div>

                <div className='opModeBar'>
                    <p onClick={() => { manageOrders(allOrders, "all"); setOMode("all"); }} className={oMode === "all" ? "opModeBarActive" : "opModeBarInActive"}>All</p>
                    <p onClick={() => { manageOrders(allOrders, "ordered"); setOMode("ordered") }} className={oMode === "ordered" ? "opModeBarActive" : "opModeBarInActive"}>Ordered</p>
                    <p onClick={() => { manageOrders(allOrders, "delivered"); setOMode("delivered") }} className={oMode === "delivered" ? "opModeBarActive" : "opModeBarInActive"}>Delivered</p>
                    <p onClick={() => { manageOrders(allOrders, "cancelled"); setOMode("cancelled") }} className={oMode === "cancelled" ? "opModeBarActive" : "opModeBarInActive"}>Cancelled</p>
                    <p onClick={() => { manageOrders(allOrders, "returned"); setOMode("returned") }} className={oMode === "returned" ? "opModeBarActive" : "opModeBarInActive"}>Return</p>
                </div>

                <div key={oMode}>
                    {selectedOrders.map((p) => (
                                p.order_status === "Pending" || p.order_status === "RTS" || p.order_status === "Shipped" ? <MOrderedCard  item={p} /> : p.order_status === "Cancelled" ? <MCancelledCard  item={p} /> : p.order_status === "Delivered" ? <MDeliveredCard  item={p} /> : p.order_status === "Return" ? <MReturnedCard  item={p} /> : null
                    ))}
                </div>

            </div>
    )
}

export default MOrderPage