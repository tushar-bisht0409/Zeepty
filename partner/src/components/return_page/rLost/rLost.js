import { useEffect,useState } from "react";
import "./rLost.css";
import { getlisting_info } from "../../../store/action/listingaction";
import Modal from 'react-modal';
import { cancelShipmentDelhivery, claimOrderLost, getMyOrders } from "../../../store/action/order_action";
import FullScreenLoader from '../../fullScreen_loader/fullScreen_loader'
import { useDispatch } from "react-redux";

const RLost = ({item}) => {

  const [listing, setListing] = useState(undefined)

  const [dispatchByDate, setDispatchByDate] = useState('');
  const [returnedAt, setReturnedAt] = useState('')

  const [timeLeft, setTimeLeft] = useState('');

  const [modalIsOpen,setModalIsOpen] = useState(false);

  const [loader1, setLoader1] = useState(false);

  const [lossClaimed, setLossClaimed] = useState(true);

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
    formatDate(item.returnreceived_at,item.returned_at)
    handleGetListing();
    if(item.loss_claimed){
      setLossClaimed(true);
    } else{
      setLossClaimed(false);
    }
  },[])

  async function handleClaimOrderLost () {
    if(lossClaimed){
    }
    else{
    setLoader1(true);
    const obj = {
      order_id: item.order_id,
      loss_claimed: true
    }
    const json = await claimOrderLost(obj);

    if(json.success){
      setLossClaimed(true);
    } else{
      window.alert("Something Went Wrong")
    }
    setLoader1(false);
  }
  }

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
     <div className="rlostOB">
    <div className="rlostOB1">
      <span className="rlostOB1-key">Order ID: <span className="rlostOB1-value">{item.order_id}</span></span>

       </div>
    <div className="rlostOB2">
       <img className="rlostOB2-image" src={listing.media_urls[0]}/>
     <div className="rlostOB2-rightbox">
     <span className="rlostOB2-rightbox-key">SKU ID: <span className="rlostOB2-rightbox-value">{listing.sku_id}</span></span>
     <span className="rlostOB2-rightbox-key">Style Code: <span className="rlostOB2-rightbox-value">{listing.style_code}</span></span>
     <span className="rlostOB2-rightbox-brand">{listing.brand}<span className="rlostOB2-rightbox-name">{listing.product_name}</span></span>
     </div>
    </div>
   
    <div className="rlostOB3">
    <div className="rlostOB3-quantity">{item.product.quantity}</div> 
      
       </div>
    <div className='rlostOB4'>
    <div className="rlostOB4-price">₹{item.product.price}</div>
    </div>
    <div className='rlostOB5'>
      <div className="rlostOB5-row" >
        <span className="rlostOB5-key">Returned on: <span className="rlostOB-detime">{returnedAt} </span></span>
        <span className="rlostOB5-key">Return Picked on: <span className="rlostOB-detime">{dispatchByDate} </span></span>
        <div className="rlostOB5-raise">Raise Ticket</div>

        {/* <div onClick={handleClaimOrderLost} className={lossClaimed ? "rlostOB5-lossclaimed" :"rlostOB5-claim"}>{lossClaimed ? "Claimed" : "Claim Loss"}</div> */}
        </div>
      </div>
     </div>

    </div>
    </>
  );
};

export default  RLost;
