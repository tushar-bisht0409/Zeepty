import { useEffect,useState } from "react";
import "./rTransit.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const RTransit = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [dispatchByDate, setDispatchByDate] = useState('');
  const [returnedAt, setReturnedAt] = useState('')

  const [timeLeft, setTimeLeft] = useState('');

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const [loader1, setLoader1] = useState(false);

  const dispatch = useDispatch();

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
    formatDate(item.returnpickedup_at,item.returned_at)
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
    
    setDispatchByDate(formattedDate);
    setReturnedAt(formattedDate1)
  }

 
  return ( listing===undefined ? null :
    <>
    <div>
      {loader1? <FullScreenLoader/> : null }
     <div className="rtransitOB">
    <div className="rtransitOB1">
      <span className="rtransitOB1-key">Order ID: <span className="rtransitOB1-value">{item.order_id}</span></span>

       </div>
    <div className="rtransitOB2">
       <img className="rtransitOB2-image" src={listing.media_urls[0]}/>
     <div className="rtransitOB2-rightbox">
     <span className="rtransitOB2-rightbox-key">SKU ID: <span className="rtransitOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="rtransitOB2-rightbox-key">Style Code: <span className="rtransitOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="rtransitOB2-rightbox-brand">{listing.brand}<span className="rtransitOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="rtransitOB3">
    <div className="rtransitOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='rtransitOB4'>
    <div className="rtransitOB4-price">₹{item.product.price}</div>
    </div>
    <div className='rtransitOB5'>
      <div className="rtransitOB5-row" >
        <span className="rtransitOB5-key">Returned on: <span className="rtransitOB-detime">{returnedAt} </span></span>
        <span className="rtransitOB5-key">Return Picked on: <span className="rtransitOB-detime">{dispatchByDate} </span></span>
        </div>
      </div>
     </div>

    </div>
    </>
  );
};

export default  RTransit;
