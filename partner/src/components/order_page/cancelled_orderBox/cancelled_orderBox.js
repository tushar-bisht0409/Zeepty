import { useEffect,useState } from "react";
import "./cancelled_orderBox.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, createPickupRequest, generateShippingLabel, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const CancelledOrderBox = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [cancelledAt, setCancelledAt] = useState('')
  const [createdAt, setCreateddAt] = useState('');

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
    formatDate(item.cancelled_at,item.createdAt)
    handleGetListing();
  },[])

  function formatDate(givenTimestamp,givenTimestamp1){
    const targetDate = new Date(givenTimestamp);

    const hour = targetDate.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    const month = targetDate.toLocaleString('en-US', { month: 'short' });
    const day = targetDate.toLocaleString('en-US', { day: 'numeric' });
    const year = targetDate.toLocaleString('en-US', { year: 'numeric' });

    const formattedDate = `${hour}, ${month} ${day}, ${year}`;

    const targetDate1 = new Date(givenTimestamp1);

    const hour1 = targetDate1.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    const month1 = targetDate1.toLocaleString('en-US', { month: 'short' });
    const day1 = targetDate1.toLocaleString('en-US', { day: 'numeric' });
    const year1 = targetDate1.toLocaleString('en-US', { year: 'numeric' });

    const formattedDate1 = `${hour1}, ${month1} ${day1}, ${year1}`;
    
    setCancelledAt(formattedDate);
    setCreateddAt(formattedDate1)
  }

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="cOB">
    <div className="cOB1">
    <span className="cOB1-key">Order ID</span>
      <span className="cOB1-value">{item.order_id}</span>
       </div>
    <div className="cOB2">
       <img className="cOB2-image" src={listing.media_urls[0]}/>
     <div className="cOB2-rightbox">
     <span className="cOB2-rightbox-key">SKU ID: <span className="cOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="cOB2-rightbox-key">Style Code: <span className="cOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="cOB2-rightbox-brand">{listing.brand}<span className="cOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="cOB3">
    <div className="cOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='cOB4'>
    <div className="cOB4-price">₹{item.product.price}</div>
    </div>
    <div className='cOB5'>
      <div className="cOB5-row" >
        <span className="cOB5-key">Ordered on: <span className="cOB-detime">{createdAt} </span></span>
                <span className="cOB5-key">Cancelled On: <span className="cOB-detime">{cancelledAt} </span></span>
        </div> 
      </div>
     </div>

    </div>
    </>
  );
};

export default  CancelledOrderBox;
