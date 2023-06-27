import { useEffect,useState } from "react";
import "./pending_orderBox.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, createPickupRequest, generateShippingLabel, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const PendingOrderBox = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [dispatchByDate, setDispatchByDate] = useState('')

  const [timeLeft, setTimeLeft] = useState('');

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const [loader1, setLoader1] = useState(false);

  const dispatch = useDispatch();


  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  async function handleGetListing(){
    const obj = {
      listing_id: item.product.listing_id,
      sku_id: item.product.sku_id,
      style_code: item.product.style_code,
      type: "listingSKUStyle"
    }
    const json = await getlisting_info(obj);

    if(json.success){
      setListing(json.msz);
    }
  }
  useEffect(()=>{
    formatDate(item.createdAt)
    handleGetListing();
  },[])

  function formatDate(ts){
    const givenTimestamp = ts;
    const targetDate = new Date(givenTimestamp);
    targetDate.setDate(targetDate.getDate() + 2);
    targetDate.setMinutes(0);
    targetDate.setSeconds(0);
    targetDate.setMilliseconds(0);

    const hour = targetDate.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    const month = targetDate.toLocaleString('en-US', { month: 'short' });
    const day = targetDate.toLocaleString('en-US', { day: 'numeric' });
    const year = targetDate.toLocaleString('en-US', { year: 'numeric' });

    const formattedDate = `${hour}, ${month} ${day}, ${year}`;

    
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if(daysLeft < 0 || hoursLeft < 0) {
      setTimeLeft("Breached!");
    } else {
    setTimeLeft(`${daysLeft} day, ${hoursLeft} Hr`);
    }
    setDispatchByDate(formattedDate)
  }

  async function handleCancelShipmentDelhivery() {
    setModalIsOpen(false);
    setLoader1(true);
    const obj = { waybill: item.waybill };
    const json = await cancelShipmentDelhivery(obj);
    if(json.success) {
      const obj2 = {
        type: 'manufacturer_id',
        manufacturer_id: localStorage.getItem('manufacturer_id')
      }
      const json2 = await dispatch(getMyOrders(obj2,"pending"));
      if(json2.success){
        setLoader1(false);
      } else {
        setLoader1(false);
        window.alert("Something Went Wrong");
      }
    } else{
      setLoader1(false);
      window.alert("Something Went Wrong");
    }
    
  }

  async function handleGenerateShippingLabel (){
    setLoader1(true);
    const obj = {
      waybills: [item.waybill],
      pdf: true
    }
    const json = await generateShippingLabel(obj);
    if(json.success) {
      const obj2 = {
        type: 'manufacturer_id',
        manufacturer_id: localStorage.getItem('manufacturer_id')
      }
      const json2 = await dispatch(getMyOrders(obj,"pending"));
      if(json2.success){
        setLoader1(false);
        for(let i = 0; i<json2.labelArray.length;i++){
          window.open(`${json2.labelArray[i].label_pdf_link}`)
        }
      } else{
        setLoader1(false);
        window.alert("Something Went Wrong");
      }
    } else {
      setLoader1(false);
      window.alert("Something Went Wrong");
    }
  }

  async function handleCreatePickupRequest (){
    setLoader1(true);

    const currentDate = new Date();
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);

    const year = nextDate.getFullYear();
    const month = String(nextDate.getMonth() + 1).padStart(2, '0');
    const day = String(nextDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const obj = {
      "pickup_location": "Apple",
      "expected_package_count": "1",
      "pickup_date": formattedDate,
      "pickup_time": "10:00:00",
      order_ids: [item.order_id]
    }
    const json = await createPickupRequest(obj);
    if(json.success) {
      const obj2 = {
        type: 'manufacturer_id',
        manufacturer_id: localStorage.getItem('manufacturer_id')
      }
      const json2 = await dispatch(getMyOrders(obj,"pending"));
      if(json2.success){
        setLoader1(false);
        for(let i = 0; i<json2.labelArray.length;i++){
          window.open(`${json2.labelArray[i].label_pdf_link}`)
        }
      } else{
        setLoader1(false);
        window.alert("Something Went Wrong");
      }
    } else {
      setLoader1(false);
      window.alert("Something Went Wrong");
    }
  }
 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="oBox">
    <div className="ol1">
      {/* <span className="ol1-key">Order ID: <span className="ol1-value">{item.order_id}</span></span> */}
      <span className="ol1-key">Order ID </span>
      <span className="ol1-value">{item.order_id}</span>
       </div>
    <div className="ol2">
       <img className="ol2-image" src={listing.media_urls[0]}/>
     <div className="ol2-rightbox">
     <span className="ol2-rightbox-key">SKU ID: <span className="ol2-rightbox-value">{listing.sku_id}</span></span>
     <span className="ol2-rightbox-key">Style Code: <span className="ol2-rightbox-value">{listing.style_code}</span></span>
     <span className="ol2-rightbox-brand">{listing.brand}<span className="ol2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="ol3">
    <div className="ol3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='ol4'>
    <div className="ol4-price">₹{item.product.price}</div>
    </div>
    <div className='ol5'>
      <div className="ol5-row" >
      <div className={timeLeft === "Breached!" ? "obc-breached" :"dedays"}>{timeLeft}</div> 
        <div className="detime">{dispatchByDate} </div>
        </div> 
        <div className="obc-action">
          <div onClick={()=>{setModalIsOpen(true)}} className="obc-action-cancel">Cancel</div>
          { item.label_pdf_link === undefined ? <div onClick={handleGenerateShippingLabel} className="obc-action-accept">Accept & Print Label</div> : null}
          { item.label_pdf_link === undefined ? null : <div onClick={()=>{window.open(`${item.label_pdf_link}`)}} className="obc-action-label">Print Label</div>}
          { item.label_pdf_link === undefined ? null : <div onClick={()=>{handleCreatePickupRequest()}} className="obc-action-rts">Ready To Ship</div>}
        </div>
      </div>
     </div>

     <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}
      >        
      <div className="obc-modalHeadingL1">

      <div className='obc-modaliconL1'><i class="fa-solid fa-xmark"></i></div>
      <h2 className='obc-deleteL1'>{`Cancel Order (Order ID: ${item.order_id})`}</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='obc-modalDesL1'>Are you sure that you want to cancel this order?</div>
      <div className="obc-modalOptionL1">
        <p onClick={()=>{
          setModalIsOpen(false);
        }} className='obc-modalNoL1'>No</p>
        <p onClick={()=>{handleCancelShipmentDelhivery()}} className='obc-modalYesL1'>Yes</p>
          
      </div>
      
    </Modal>



    </div>
    </>
  );
};

export default  PendingOrderBox;
