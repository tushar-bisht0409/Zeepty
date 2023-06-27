import { useEffect,useState } from "react";
import "./shipped_orderBox.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, createPickupRequest, generateShippingLabel, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const ShippedOrderBox = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [shippedAt, setShippedAt] = useState('');
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
    formatDate(item.shipped_at,item.createdAt)
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
    
    setShippedAt(formattedDate);
    setCreateddAt(formattedDate1)
  }

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="sOB">
    <div className="sOB1">
      <span className="sOB1-key">Order ID</span>
      <span className="sOB1-value">{item.order_id}</span>
       </div>
    <div className="sOB2">
       <img className="sOB2-image" src={listing.media_urls[0]}/>
     <div className="sOB2-rightbox">
     <span className="sOB2-rightbox-key">SKU ID: <span className="sOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="sOB2-rightbox-key">Style Code: <span className="sOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="sOB2-rightbox-brand">{listing.brand}<span className="sOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="sOB3">
    <div className="sOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='sOB4'>
    <div className="sOB4-price">₹{item.product.price}</div>
    </div>
    <div className='sOB5'>
      <div className="sOB5-row" >
      <span className="sOB5-key">Ordered On: <span className="sOB-detime">{createdAt} </span></span>
        <span className="sOB5-key">Shipped On: <span className="sOB-detime">{shippedAt} </span></span>
        </div> 
      </div>
     </div>

    </div>
    </>
  );
};

export default  ShippedOrderBox;
