import React, { useEffect, useRef, useState } from 'react'
import './minOrders_page.css'
import { getOrders } from '../../store/action/order_action';
import MINProductOrderCard from '../../minComponents/minProductOrderCard/minProductOrderCard';
import errorOccurred from '../../assets/influencer/images/errorOccurred.png'
import nothingHere from '../../assets/influencer/images/nothingHere.png'

const MINOrdersPage = () => {

    const [mode, setMode] = useState("Pending");
    const [allOrders, setallOrders] = useState(undefined);
    const [orders, setOrders] = useState({pending: [], shipped: [], delivered: [], returned: []});
    const [loader1, setLoader1] = useState(true);
    const [isError, setIsError] = useState(false);

    function handleMode(newMode) {
        setMode(newMode)
    }

    function handleOrders (ord){
        for(let i = 0; i<ord.length; i++){
            if(ord[i].order_status === "Pending" || ord[i].order_status === "RTS"){
                orders.pending.push(ord[i]);
            } else if(ord[i].order_status === "Shipped"){
                orders.shipped.push(ord[i]);
            } else if(ord[i].order_status === "Delivered"){
                orders.delivered.push(ord[i]);
            } else if(ord[i].order_status === "Returned"){
                orders.returned.push(ord[i]);
            }
        }
    }

    async function handleGetOrders() {
        const obj = {
            type: 'seller_id',
            seller_id: localStorage.getItem('influencer_id')
        }

        const json = await getOrders(obj);
        if(json.success) {
            handleOrders(json.msz)
            setallOrders(json.msz);
            setLoader1(false);
        } else if(!json.success && json.err === null) { 
            setallOrders([]);
            setLoader1(false)
        } else {
            setallOrders([]);
            setLoader1(false)
            setIsError(true);
            // window.alert("Something Went Wrong")
        }
    }

    useEffect(()=>{
        handleGetOrders()
    },[])

  return (
    <div className='minOP'>
        <div onClick={()=>{window.history.back()}} className='minOP-topbar'>
            <i style={{fontSize: '16px',color: 'white', cursor: 'pointer'}} class="fa-solid fa-arrow-left"></i>
            <p className='minOP-topbar-T1'>Orders</p>
        </div>

        <div className='minOP-tabbar'>
            <div onClick={()=>{handleMode("Pending")}} className={mode === "Pending" ? 'minOP-tabbar-active' : 'minOP-tabbar-inactive'}>Pending</div>
            <div onClick={()=>{handleMode("Shipped")}} className={mode === "Shipped" ? 'minOP-tabbar-active' : 'minOP-tabbar-inactive'}>Shipped</div>
            <div onClick={()=>{handleMode("Delivered")}} className={mode === "Delivered" ? 'minOP-tabbar-active' : 'minOP-tabbar-inactive'}>Delivered</div>
            <div onClick={()=>{handleMode("Returned")}} className={mode === "Returned" ? 'minOP-tabbar-active' : 'minOP-tabbar-inactive'}>Returned</div>
        </div>

        {isError ? <div className="minOP-error">
        <img onClick={()=>{window.location.reload()}} className="minOP-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="minOP-error-refresh">Refresh</div>
      </div> : loader1 ? <div className='minOP-loader1'></div> :
         orders[`${mode.toLowerCase()}`].length === 0 ? <div className="minOP-nothing">
         <img onClick={()=>{window.location.reload()}} className="minOP-nothing-img" src={nothingHere}></img>
       </div> : <div className='minOP-body'>
            <div className='minOP-body-orders'>
                {orders[`${mode.toLowerCase()}`].map((item)=>(
                    <MINProductOrderCard item={item}/>
                ))}
            </div>
        </div>}

    </div>
  )
}

export default MINOrdersPage