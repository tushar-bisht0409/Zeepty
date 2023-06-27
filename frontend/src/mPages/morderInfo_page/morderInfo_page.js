import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import MOrderProgress from '../../mComponents/morderProgress/morderProgress';
import { cancelShipmentDelhivery, getOrders } from '../../store/actions/order_action';
import { getproduct_info } from '../../store/actions/product_action';
import './morderInfo_page.css'
import Modal from 'react-modal';
import MFullScreenLoader from '../../mComponents/mFullScreen_loader/mFullScreen_loader';


const MOrderInfoPage = () => {

    const [product,setProduct]= useState(undefined);

    const [oInfo,setOInfo]= useState(undefined);

    const [circleIndex, setCircleIndex] = useState(1);

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [loader1,setLoader1] = useState(false);

    const customStyles = {
      content: {
        alignSelf: 'center',
        margin: '30vh 4vw 0vh 4vw',
        width: '92vw',
        height: 'fit-content',
        padding: '3vh 8vw',
        boxSizing: 'border-box'
      },
      overlay: {zIndex: 1000,backgroundColor: 'rgb(0,0,0,0.5)'}
    };


    const params = useParams();
   
    async function handleGetOrders(){
        const obj = {
            order_id: params.order_id
        }
       const json = await getOrders(obj);
       console.log('ord: ',json.msz);
       if(json.success){
        getproductdata(json.msz.product)
        manageCircleIndex(json.msz.order_status)
        setOInfo(json.msz);
       } else {

       }
    }

    function manageCircleIndex(oStatus) {
        if(oStatus === "Pending") {
            setCircleIndex(1);
        } else if(oStatus === "Shipped"){
            setCircleIndex(2);
        } else if(oStatus === "Delivered"){
            setCircleIndex(4);
        }
    }

    const getproductdata = async(prod)=>{
      try{
          const obj = {
            type: "productSKUStyle",
            manufacturerID: "",
            product_id: prod.product_id,
            sku_id: prod.sku_id,
            style_code: prod.style_code
          };
      const json = await getproduct_info(obj);
      console.log("Prd: ",json.msz)
      if(json.success === true){
        setProduct(json.msz);
        
      }
      } catch(error){
        console.log(error);
        return {"msz": "Something went wrong", "success": false, "userID": ""}
      }
    }

    async function handleCancelShipmentDelhivery(){
      setModalIsOpen(false);
      setLoader1(true);
      const obj = { waybill: oInfo.waybill };
      const json = await cancelShipmentDelhivery(obj);
      if(json.success) {
        window.location.reload()
      } else{
        setLoader1(false);
        window.alert("Something Went Wrong");
      }
    }


    useEffect(()=>{
      handleGetOrders();
    },[]);  
     
      return(
        product===undefined || oInfo === undefined?<div></div>:

    <div className='oipBox'>
        <div className="oipTopBar">
            <i style={{fontSize: '20px'}} class="fa-solid fa-arrow-left"></i>
            <p className='oipTopBarText'>Order</p>
        </div>

        {loader1 ? <MFullScreenLoader/> : null}

        <div className='oipProductBox'>
      <img className='oipProductImage' src={product.media_urls[0]}/>
      <div className='oipProductMid'>
        <div className='oipProductMidName'>
        <span className='oipProductMidNameB'>{product.brand} <span className='oipProductMidNameT'>{product.product_name}</span></span>
        </div>
        <p className='oipProductMidA'>Arriving on 31 Dec</p>
      </div>
      <div onClick={()=>{setModalIsOpen(true)}} className='oipProductCancel'>
        Cancel
      </div>
        </div>

        <MOrderProgress circleIndex={circleIndex}/>

{/* <div className='oipShipBox'>
            <p className='oipShipHead'>Shipping Address</p>
            <p className='oipShipText'>{oInfo.shipping_address.full_name}</p>
            <p className='oipShipText'>{oInfo.shipping_address.address_line}, {oInfo.shipping_address.landmark}</p>
            <p className='oipShipText'>{oInfo.shipping_address.city}, {oInfo.shipping_address.postalcode}</p>
        </div> */}

        <div className='oipOrderDBox'>
        <p className='oipOrderDHead'>Order Details</p>
        <span className='oipOrderDTextBold'>Order ID   <span className='oipOrderDText'>{oInfo.order_id}</span></span>
        <span className='oipOrderDTextBold'>Order Placed On   <span className='oipOrderDText'>{oInfo.createdAt.substring(10,0)}</span></span>
        <span className='oipOrderDTextBold'>Total Amount   <span className='oipOrderDText'>{oInfo.total_amount}</span></span>
        <span className='oipOrderDTextBold'>Payment Mode   <span className='oipOrderDText'>{oInfo.payment_method}</span></span>
        </div>

        <div className="oipBottom">
            <div className="oipBottomItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-shield"></i>
                <p className="oipBottomItemText">Return And Cancellation Policy</p>
            </div>
            <div className="oipBottomItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-headset"></i>
                <p className="oipBottomItemText">Help Center</p>
            </div>
        </div>

        <Modal
        className="oipModal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
          <>
          <div className='oipModalHead'>
            <div className='oipModalHeadIconBox'>
            <i style={{color: 'white', fontSize: '16px'}} class="fa-solid fa-xmark"></i>
            </div>
          <p className='oipModalHeadT1'>Cancel Order</p>
          </div>

          <p className='oipModalBodyT1'>Are you sure you want to cancel this order?</p>

          <div className='oipModalAction'>
            <p onClick={()=>{setModalIsOpen(false)}} className='oipModalActionN'>No</p>
            <p onClick={handleCancelShipmentDelhivery} className='oipModalActionY'>Yes</p>
          </div>
          </>
        </Modal>
        
    </div>
  )
}

export default MOrderInfoPage