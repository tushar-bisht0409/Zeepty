import { useEffect,useState } from "react";
import "./rScheduled.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const RScheduled = ({item}) => {

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
    console.log('listing',json)

    if(json.success){
      setListing(json.msz);
    }
  }
  useEffect(()=>{
    formatDate(item.returned_at)
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
    setTimeLeft(`${daysLeft} day, ${hoursLeft} Hr`);
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

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="rsOB">
    <div className="rsOB1">
      <span className="rsOB1-key">Order ID:</span>
      <span className="rsOB1-value">{item.order_id}</span>

       </div>
    <div className="rsOB2">
       <img className="rsOB2-image" src={listing.media_urls[0]}/>
     <div className="rsOB2-rightbox">
     <span className="rsOB2-rightbox-key">SKU ID: <span className="rsOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="rsOB2-rightbox-key">Style Code: <span className="rsOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="rsOB2-rightbox-brand">{listing.brand}<span className="rsOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="rsOB3">
    <div className="rsOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='rsOB4'>
    <div className="rsOB4-price">₹{item.product.price}</div>
    </div>
    <div className='rsOB5'>
      <div className="rsOB5-row" >
      {/* <div className="rsOB-dedays">{timeLeft}</div>  */}
        <span className="rsOB5-key">Returned on: <span className="rsOB-detime">{dispatchByDate} </span></span>
        </div> 
        {/* <div className="rsOB-action">
          <div onClick={()=>{setModalIsOpen(true)}} className="rsOB-action-cancel">Cancel</div>
          <div onClick={()=>{window.open(`${item.label_pdf_link}`)}} className="rsOB-action-label">Print Label</div>
        </div> */}
      </div>
     </div>

     {/* <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}
      >        
      <div className="rsOB-modalHeadingL1">

      <div className='rsOB-modaliconL1'><i class="fa-solid fa-xmark"></i></div>
      <h2 className='rsOB-deleteL1'>{`Cancel Order (AWS: ${item.waybill})`}</h2>
      </div>
      <div className='rsOB-modalDesL1'>Are you sure that you want to cancel this order?</div>
      <div className="rsOB-modalOptionL1">
        <p onClick={()=>{
          setModalIsOpen(false);
        }} className='rsOB-modalNoL1'>No</p>
        <p onClick={()=>{handleCancelShipmentDelhivery()}} className='rsOB-modalYesL1'>Yes</p>
          
      </div>
      
    </Modal> */}

    </div>
    </>
  );
};

export default  RScheduled;
