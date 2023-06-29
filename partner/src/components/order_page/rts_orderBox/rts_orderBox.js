import { useEffect,useState } from "react";
import "./rts_orderBox.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";
import { CANCEL_RTS_ORDER } from "../../../store/action/type";
import Snackbar from "../../snackbar/snackbar";

const RtsOrderBox = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [dispatchByDate, setDispatchByDate] = useState('')

  const [timeLeft, setTimeLeft] = useState('');

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const [loader1, setLoader1] = useState(false);

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarObject, setSnackbarObject] = useState({message: "", backgroundColor: "#181818", color: "white", okColor: "white"})

  // Function to show the snackbar
  const showSnackbarMessage = (sObject) => {
    setSnackbarObject(sObject)
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      setSnackbarObject({message: "", backgroundColor: "#181818", color: "white", okColor: "white"});
    }, 5000);
  }

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
    } else{
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
        dispatch({
          type: CANCEL_RTS_ORDER,
          payload: {
              order: item,
          }
      });
        setLoader1(false);
      } else {
        setLoader1(false);
        let sbObject = {message: "Something Went Wrong", backgroundColor: "#181818", color: "white", okColor: "white"}
      showSnackbarMessage(sbObject)
      }
    } else{
      setLoader1(false);
      let sbObject = {message: "Something Went Wrong", backgroundColor: "#181818", color: "white", okColor: "white"}
      showSnackbarMessage(sbObject)
    }
    
  }

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="rtsOB">
    <div className="rtsOB1">
      <span className="rtsOB1-key">Order ID</span>
      <span className="rtsOB1-value">{item.order_id}</span>

       </div>
    <div className="rtsOB2">
       <img className="rtsOB2-image" src={listing.media_urls[0]}/>
     <div className="rtsOB2-rightbox">
     <span className="rtsOB2-rightbox-key">SKU ID: <span className="rtsOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="rtsOB2-rightbox-key">Style Code: <span className="rtsOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="rtsOB2-rightbox-brand">{listing.brand}<span className="rtsOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="rtsOB3">
    <div className="rtsOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='rtsOB4'>
    <div className="rtsOB4-price">₹{item.product.price}</div>
    </div>
    <div className='rtsOB5'>
      <div className="rtsOB5-row" >
      <div className={timeLeft === "Breached!" ? "rtsOB-breached" :"rtsOB-dedays"}>{timeLeft}</div> 
        <div className="rtsOB-detime">{dispatchByDate} </div>
        </div> 
        <div className="rtsOB-action">
          <div onClick={()=>{setModalIsOpen(true)}} className="rtsOB-action-cancel">Cancel</div>
          <div onClick={()=>{window.open(`${item.label_pdf_link}`, '_blank')}} className="rtsOB-action-label">Print Label</div>
        </div>
      </div>
     </div>

     <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}
      >        
      <div className="rtsOB-modalHeadingL1">

      <div className='rtsOB-modaliconL1'><i class="fa-solid fa-xmark"></i></div>
      <h2 className='rtsOB-deleteL1'>{`Cancel Order (Order ID: ${item.order_id})`}</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='rtsOB-modalDesL1'>Are you sure that you want to cancel this order?</div>
      <div className="rtsOB-modalOptionL1">
        <p onClick={()=>{
          setModalIsOpen(false);
        }} className='rtsOB-modalNoL1'>No</p>
        <p onClick={()=>{handleCancelShipmentDelhivery()}} className='rtsOB-modalYesL1'>Yes</p>
          
      </div>
      
    </Modal>



    </div>
    {showSnackbar ? <Snackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}

    </>
  );
};

export default  RtsOrderBox;
