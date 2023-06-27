import { useEffect,useState } from "react";
import "./delivered_orderBox.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, createPickupRequest, generateShippingLabel, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const DeliveredOrderBox = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [deliveredAt, setDeliveredAt] = useState('')
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
    formatDate(item.delivered_at,item.createdAt)
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
    
    setDeliveredAt(formattedDate);
    setCreateddAt(formattedDate1)
  }

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="dOB">
    <div className="dOB1">
    <span className="cOB1-key">Order ID</span>
      <span className="cOB1-value">{item.order_id}</span>
       </div>
    <div className="dOB2">
       <img className="dOB2-image" src={listing.media_urls[0]}/>
     <div className="dOB2-rightbox">
     <span className="dOB2-rightbox-key">SKU ID: <span className="dOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="dOB2-rightbox-key">Style Code: <span className="dOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="dOB2-rightbox-brand">{listing.brand}<span className="dOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="dOB3">
    <div className="dOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='dOB4'>
    <div className="dOB4-price">₹{item.product.price}</div>
    </div>
    <div className='dOB5'>
      <div className="dOB5-row" >
        <span className="dOB5-key">Ordered on: <span className="dOB-detime">{createdAt} </span></span>
        <span className="dOB5-key">Delivered On: <span className="dOB-detime">{deliveredAt} </span></span>
        </div> 
      </div>
     </div>

    </div>
    </>
  );
};

export default  DeliveredOrderBox;
