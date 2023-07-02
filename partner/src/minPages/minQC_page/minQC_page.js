import React, { useEffect, useRef, useState } from 'react'
import './minQC_page.css'
import { getProductRequest } from '../../store/action/productaction';
import errorOccurred from '../../assets/influencer/images/errorOccurred.png'
import nothingHere from '../../assets/influencer/images/nothingHere.png'

const MINQCPage = () => {

    const [mode, setMode] = useState("Pending");

    const [requests, setRequests] = useState({pending: [], rejected: [], approved: []});
    const [loader1, setLoader1] = useState(true);
    const [isError, setIsError] = useState(false);

    function handleMode(newMode) {
        setMode(newMode)
    }

    const handleGetProductRequest = async ()=> {
        let obj = {
          type: "seller_id",
          seller_id: localStorage.getItem('influencer_id')
        }
        const json = await getProductRequest(obj);
        console.log(json)
        if(json.success){
            groupRequest(json.msz);
        } else if(!json.success && json.err === null) { 
            setLoader1(false)
        } else {
            setIsError(true);
        }
      }

      useEffect(()=>{
        handleGetProductRequest();
      },[]);

      function groupRequest(list){
        let inArray = [];
        for(let i=0;i<list.length;i++){  
            if(list[i].product_status === 'Approved'){
              if(inArray.includes(list[i].product_id) === false){
                let nInfo = {...{local_count: 1},...list[i]};
                inArray.push(list[i].product_id);
                requests.approved.push(nInfo);
              } else{
                let ind = requests.approved.findIndex((itm)=>(itm.product_id === list[i].product_id));
                if(ind != -1 ){
                  requests.approved[ind]['local_count']++;
                }   
              }
            } else if(list[i].product_status === 'Rejected'){
              if(inArray.includes(list[i].product_id) === false){
                let nInfo = {...{local_count: 1},...list[i]};
                inArray.push(list[i].product_id);
                requests.rejected.push(nInfo);
              } else{
                let ind = requests.rejected.findIndex((itm)=>(itm.product_id === list[i].product_id));
                if(ind != -1 ){
                  requests.rejected[ind]['local_count']++;
                }   
              }
            }else if(list[i].product_status === 'Pending' || list[i].product_status === 'OnHold'){
                if(inArray.includes(list[i].product_id) === false){
                  let nInfo = {...{local_count: 1},...list[i]};
                  inArray.push(list[i].product_id);
                  requests.pending.push(nInfo);
                } else{
                  let ind = requests.pending.findIndex((itm)=>(itm.product_id === list[i].product_id));
                  if(ind != -1 ){
                    requests.pending[ind]['local_count']++;
                  }   
                }
              }
          }
          setRequests(requests);
          setLoader1(false);
      }


      function convertDate(str) {
        const timestamp = new Date(str);
        const options = {
          year: "2-digit",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
        return timestamp.toLocaleString("en-US", options);
      }


    return (
    <div className='minQCP'>
        <div onClick={()=>{window.history.back()}} className='minQCP-topbar'>
            <i style={{fontSize: '16px',color: 'white',cursor: 'pointer'}} class="fa-solid fa-arrow-left"></i>
            <p className='minQCP-topbar-T1'>Products QC</p>
        </div>

        <div className='minQCP-tabbar'>
            <div onClick={()=>{handleMode("Pending")}} className={mode === "Pending" ? 'minQCP-tabbar-active' : 'minQCP-tabbar-inactive'}>Pending</div>
            <div onClick={()=>{handleMode("Rejected")}} className={mode === "Rejected" ? 'minQCP-tabbar-active' : 'minQCP-tabbar-inactive'}>Rejected</div>
            <div onClick={()=>{handleMode("Approved")}} className={mode === "Approved" ? 'minQCP-tabbar-active' : 'minQCP-tabbar-inactive'}>Approved</div>
        </div>

        {requests[`${mode.toLowerCase()}`].length === 0 ? null :<div className='minQCP-titlebar'>
            <p className='minQCP-titlebar-product'>Product</p>
            <p className='minQCP-titlebar-time'>Status</p>
        </div>}
        <div className='minQCP-body'>
            {isError ? <div className="minQCP-error">
        <img onClick={()=>{window.location.reload()}} className="minQCP-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="minQCP-error-refresh">Refresh</div>
      </div> : loader1 ? <div className='minQCP-loader1'></div> :
         requests[`${mode.toLowerCase()}`].length === 0 ? <div className="minQCP-nothing">
         <img onClick={()=>{window.location.reload()}} className="minQCP-nothing-img" src={nothingHere}></img>
       </div> : requests[`${mode.toLowerCase()}`].map((item)=>(
                <div className='minQCP-body-item'>
                    <div className='minQCP-body-item-product'>
                        <img src={item.media_urls[0]} className='minQCP-body-item-product-img'/>
                        <span className='minQCP-body-item-product-key'>{item.brand} <span className='minQCP-body-item-product-value'>{item.product_name}</span></span>
                    </div>
                    <div className='minQCP-body-item-status'>
                        <span className='minQCP-body-item-status-key'>Uploaded on: <span className='minQCP-body-item-status-value'>{convertDate(item.createdAt)}</span></span>
                        <div className='minQCP-body-item-status-div'>
                        <p style={{color: item.product_status === "Rejected" ? "red" : item.product_status === "Approved" ? "green" : "orange"}} className='minQCP-body-item-status-div-pending'>{item.product_status}</p>
                        {item.product_status === "Rejected" ? <div className='minQCP-body-item-status-div-see'>See Report</div> : null}
                        </div>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )
}

export default MINQCPage