import { useEffect, useState } from "react";
import { useDispatch, useSelector,connect } from "react-redux";
import OrderBox from "./OrderBox";
import Modal from 'react-modal';
import { SAVE_ORDER_INFO ,SELECT_ALL,UPDATE_MODE, UPDATE_SELECTED_ARRAY } from "../../store/action/type";
import './RightContent.css'
import OrderHead from "./orderHead/orderHead";
import { getMyOrders } from "../../store/action/order_action";

import errorOccurred from '../../assets/supplier/images/errorOccurred.png'
import nothingHere from '../../assets/supplier/images/nothingHere.png'


const  RightContent= (d) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          padding: '2rem',
          transform: 'translate(-50%, -50%)',
        },
      };
    const [modevalue,setMode] = useState("pending")
    const [pendingproduct,setPendingProduct] = useState([]);
    const [check,setcheck] = useState(false);

    const dispatch = useDispatch();
    const [selectedArray,setSelectedArray] = useState([]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [cancelmodalIsOpen, setcancelIsOpen] = useState(false);

    const [ordersSelected, setOrdersSelected] = useState([]);

    const[isError, setIsError] = useState(false);
    const[isNoData, setIsNoData] = useState(false);
    const [loader1, setLoader1] = useState(true);


    const handleGetMyOrders = async()=>{
        const obj = {
            type: 'manufacturer_id',
            manufacturer_id: localStorage.getItem("manufacturer_id")
        }
        const json = await dispatch(getMyOrders(obj,"pending"));
        setLoader1(false);
        if(json.success === true){
        } else if(json.success === false && json.err === null || json.err === undefined) {
            setIsNoData(true);
        } else {
            setIsError(true);
        }
    }

    useEffect(()=>{
        handleGetMyOrders();
    },[]);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    
    
    

    console.log("value of d",d)
      const handleCheckbox =()=>{
       if(!check){
        setcheck(true);
        // select all
        let mode = d.data.mode;
        let dd = d.data[mode]
        console.log("ritesh",dd)
        const array=[];
        for(let i=0;i<dd.length;i++){
            
            let item = dd[i].orderID;
            array.push(item)
               
        }
        // console.log("array",array)
        dispatch({
            type:SELECT_ALL,
            payload:{
                action:"ADD",
                array : array
            }
        })
       }
       else{
        setcheck(false);
        dispatch({
            type:SELECT_ALL,
            payload:{
                action:"REMOVE",
                array:[]
            }
        })
       }
        
      }

      const handleMode = (mMode)=>{
        setMode(mMode);
        dispatch({
            type:UPDATE_MODE,
            payload: mMode
        })
      }
   
    return (
       loader1 ? <div className="oprc-loader1"></div> :
        <div style={{width: '80vw',marginLeft: '20vw'}} className="rightContent">

    <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >       
      <div className="modalA">
        <div className="orderID">
            <p style={{ fontWeight: '600' }}>Order ID</p>
            <li><a href="#">231294129</a></li>
            <li><a href="#">231294129</a></li>
            <li><a href="#">231294129</a></li>
            <li><a href="#">231294129</a></li>
            <li><a href="#">231294129</a></li>
        </div>
        <div className="rightArea">
            <div className="lengths">
                <div>
                    <p>Length (in cms)</p>
                    <div style={{ border: '1px solid black', borderRadius: '2px', padding: '0.4rem', textAlign: 'center' }}>
                        20
                    </div>
                </div>
                <div>
                    <p>Breadth (in cms)</p>
                    <div style={{ border: '1px solid black', borderRadius: '2px', padding: '0.4rem', textAlign: 'center' }}>
                        20
                    </div>
                </div>
                <div>
                    <p>Height (in cms)</p>
                    <div style={{ border: '1px solid black', borderRadius: '2px', padding: '0.4rem', textAlign: 'center' }}>
                        20
                    </div>
                </div>
                <div>
                    <p>Weight (in Kgs)</p>
                    <div style={{ border: '1px solid black', borderRadius: '2px', padding: '0.4rem', textAlign: 'center' }}>
                        20
                    </div>
                </div>
            </div>
            <div className="proIn">
                <span><span style={{ fontWeight: 'bold' }}>SKU ID:</span>1234214144</span>
                <span><span style={{ fontWeight: 'bold' }}>Quantity:</span>10</span>
                <span><span style={{ fontWeight: 'bold' }}>Total:</span>Rs. 10000</span>
                <span><span style={{ fontWeight: 'bold' }}>Brand:</span>Wireless Overear headphones</span>
                <span><span style={{ fontWeight: 'bold' }}>Price:</span>Rs. 10000</span>
                <span><span style={{ fontWeight: 'bold' }}>HSN:</span>1231423424</span>
            </div>
            <button className="updateModal" style={{ backgroundColor: '#3F2B96', border: 'none', borderRadius: '5px', padding: '0.5rem 4rem 0.5rem 4rem', color: 'white', fontWeight: '600' }}>Update</button>
        </div>
      </div>
      
    </Modal>

    <div className="oprc-titlebar">
            <div onClick={()=>{handleMode("pending")}} className={modevalue==="pending" ? "oprc-titlebar-active":"oprc-titlebar-inactive" }>
                <p className={modevalue==="pending" ? "oprc-titlebar-active-T1":"oprc-titlebar-inactive-T1" }>Pending</p>
                <div className={d.data['pending'].length===0 ? "oprc-titlebar-inactive-count":"oprc-titlebar-active-count"}>( {d.data['pending'].length} )</div>
            </div>
            <div onClick={()=>{handleMode("RTS")}} className={modevalue==="RTS" ? "oprc-titlebar-active":"oprc-titlebar-inactive" }>
                <p className={modevalue==="RTS" ? "oprc-titlebar-active-T1":"oprc-titlebar-inactive-T1" }>Ready To Ship</p>
                <div className={d.data['RTS'].length===0 ? "oprc-titlebar-inactive-count":"oprc-titlebar-active-count"}>( {d.data['RTS'].length} )</div>
            </div>
            <div onClick={()=>{handleMode("shipped")}} className={modevalue==="shipped" ? "oprc-titlebar-active":"oprc-titlebar-inactive" }>
                <p className={modevalue==="shipped" ? "oprc-titlebar-active-T1":"oprc-titlebar-inactive-T1" }>Shipped</p>
                <div className={d.data['shipped'].length===0 ? "oprc-titlebar-inactive-count":"oprc-titlebar-active-count"}>( {d.data['shipped'].length} )</div>
            </div>
            <div onClick={()=>{handleMode("cancelled")}} className={modevalue==="cancelled" ? "oprc-titlebar-active":"oprc-titlebar-inactive" }>
                <p className={modevalue==="cancelled" ? "oprc-titlebar-active-T1":"oprc-titlebar-inactive-T1" }>Cancelled</p>
                <div className={d.data['cancelled'].length===0 ? "oprc-titlebar-inactive-count":"oprc-titlebar-active-count"}>( {d.data['cancelled'].length} )</div>
            </div>
            <div onClick={()=>{handleMode("delivered")}} className={modevalue==="delivered" ? "oprc-titlebar-active":"oprc-titlebar-inactive" }>
                <p className={modevalue==="delivered" ? "oprc-titlebar-active-T1":"oprc-titlebar-inactive-T1" }>Delivered</p>
                <div className={d.data['delivered'].length===0 ? "oprc-titlebar-inactive-count":"oprc-titlebar-active-count"}>( {d.data['delivered'].length} )</div>
            </div>
          </div>

        {/* <div className="midBar">
            <div className="leftMid">
                <p style={{ fontWeight: '600' }}>Actions</p>
                <button style={{ backgroundColor: '#3F2B96', border: 'none', borderRadius: '5px', padding: '0.6rem', color: 'white', fontWeight: '600' }} onClick={openModal}>Print Label</button>
                <button style={{ backgroundColor: '#3F2B96', border: 'none', borderRadius: '5px', padding: '0.6rem', color: 'white', fontWeight: '600' }}>Mark RTS</button>
            </div>
            <button style={{ backgroundColor: '#CDCDCD', border: 'none', borderRadius: '5px', padding: '0.6rem', marginRight: '3rem', fontWeight: '600'}}>Cancel</button>
        </div> */}

        {isError ? <div className="oprc-error">
        <img onClick={()=>{window.location.reload()}} className="oprc-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="oprc-error-refresh">Refresh</div>
      </div> : isNoData ? <div className="oprc-nodata">
        <img onClick={()=>{window.open('/supplier/vertical','_self')}} className="oprc-nodata-img" src={nothingHere}></img>
        <div onClick={()=>{window.open('/supplier/vertical','_self')}} className="oprc-nodata-text">Adding more listings increases the chance of getting orders</div>
        <div className="oprc-nodata-add">+ Add More Listing</div>
        </div> : <OrderHead mode={modevalue}></OrderHead>}

                { isError || isNoData ? null : <OrderBox/>}
                
        </div>
    )

}

function mapStateToProps(state){
    const data = state.saveorderinfo;
    return {data:data}
}


export default connect (mapStateToProps)(RightContent)