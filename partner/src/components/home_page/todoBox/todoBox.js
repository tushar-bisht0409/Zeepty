import { useEffect, useState } from 'react';
import './todoBox.css'
 
export default function TodoBox({pendingorder , outofstock,lowstock, draftRequest, pendingRequest, rejectedRequest, approvedRequest }) {

    const [request1, setRequest1] = useState('Drafts');
    const [request2, setRequest2] = useState('QC Rejected');

    const [value1, setValue1] = useState(draftRequest);
    const [value2, setValue2] = useState(rejectedRequest);

    const [icon1, setIcon1] = useState("fa-solid fa-pencil")
    const [icon2, setIcon2] = useState("fa-solid fa-xmark")

    let key1 = "draft";
    let key2 = "rejected"


    useEffect(()=>{
        let selected1 = "";
        if(draftRequest === 0){
            if(pendingRequest !=0){
                selected1 = "QC Pending";
                setRequest1("QC Pending");
                setValue1(pendingRequest);
                setIcon1("fa-solid fa-clock")
                key1 = "pending";
            } else if(approvedRequest !=0){
                selected1 = "QC Approved";
                setRequest1("QC Approved");
                setValue1(approvedRequest);
                setIcon1("fa-solid fa-check")
                key1 = "approved";

            }
        }

        if(rejectedRequest === 0){
            if(pendingRequest !=0 && selected1 != "pendingRequest"){
                setRequest2("QC Pending");
                setValue2(pendingRequest);
                setIcon2("fa-solid fa-clock");
                key2 = "pending";
            } else if(approvedRequest !=0 && selected1 != "approvedRequest"){
                setRequest2("QC Approved");
                setValue2(approvedRequest);
                setIcon2("fa-solid fa-check");
                key2 = "approved";
            }
        }

    },[])
    return (
        <div className='tdb'>
            <div className='tdb-head'>
                <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-bookmark"></i>
                <p className='tdb-head-text'>To Do</p>
            </div>

            <div className='tdb-body'>
                <div onClick={()=>{window.open('/supplier/order','_self')}} className='tdb-body-item'>
                    <div className='tdb-body-item-head'>
                        <div className='tdb-body-item-head-icon'>
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <p className='tdb-body-item-head-text'>Pending Order</p>
                    </div>
                    <p className='tdb-body-item-value'>{pendingorder}</p>
                </div>

                {outofstock > 0 ?<div onClick={()=>{window.open('/supplier/listing/listing/outOfStock','_self')}} className='tdb-body-item'>
                    <div className='tdb-body-item-head'>
                        <div className='tdb-body-item-head-icon'>
                            <i class="fa-solid fa-box"></i>
                        </div>
                        <p className='tdb-body-item-head-text'>Out of stock</p>
                    </div>
                    <p className='tdb-body-item-value'>{outofstock}</p>
                </div>
                :
                <div onClick={()=>{window.open('/supplier/listing/listing/inStock','_self')}} className='tdb-body-item'>
                    <div className='tdb-body-item-head'>
                        <div className='tdb-body-item-head-icon'>
                            <i class="fa-solid fa-arrow-down"></i>
                        </div>
                        <p className='tdb-body-item-head-text'>Low on stock</p>
                    </div>
                    <p className='tdb-body-item-value'>{lowstock}</p>
                </div>}

                <div onClick={()=>{window.open(`/supplier/uploadlisting/${key1}`,'_self')}} className='tdb-body-item'>
                    <div className='tdb-body-item-head'>
                        <div className='tdb-body-item-head-icon'>
                            <i class={icon1}></i>
                        </div>
                        <p className='tdb-body-item-head-text'>{request1}</p>
                    </div>
                    <p className='tdb-body-item-value'>{value1}</p>
                </div>

                <div onClick={()=>{window.open(`/supplier/uploadlisting/${key2}`,'_self')}} className='tdb-body-item'>
                    <div className='tdb-body-item-head'>
                        <div className='tdb-body-item-head-icon'>
                            <i class={icon2}></i>
                        </div>
                        <p className='tdb-body-item-head-text'>{request2}</p>
                    </div>
                    <p className='tdb-body-item-value'>{value2}</p>
                </div>
            </div>
        </div>
    )
}