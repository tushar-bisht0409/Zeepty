import { getlisting_info } from '../../../../store/action/listingaction';
import './firstOrderBoxItem.css';
import { useEffect,useState } from "react";

export default function FirstOrderBoxItem({item}) {

    const [listing, setListing] = useState(undefined)
    const [dispatchByDate, setDispatchByDate] = useState('')
    const [timeLeft, setTimeLeft] = useState('');

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

      useEffect(()=>{
        formatDate(item.createdAt);
        handleGetListing();
      },[])

    return (
        listing === undefined ? <></> :

                        <div className='fobi'>
                            <span className='fobi-head'>Order ID: <span className='fobi-head-orderid'>{item.order_id}</span></span>
                            <div className='fobi-body'>
                                <img className='fobi-body-img' src={listing.media_urls[0]}/>
                                <div className='fobi-body-product'>
                                    <span className='fobi-body-product-skuid'>SKU ID: <span className='fobi-body-product-skuid-value'>{listing.sku_id}</span></span>
                                    <span className='fobi-body-product-brand'>{listing.brand} <span className='fobi-body-product-brand-name'>{listing.product_name}</span></span>
                                </div>

                                <div className='fobi-body-info'>
                                    <p className='fobi-body-info-price'>Rs. {listing.price}</p>
                                    <span className='fobi-body-info-quantity'>Qty. <span className='fobi-body-info-quantity-value'>{item.product.quantity}</span></span>
                                </div>

                                <div className='fobi-body-time'>
                                    <span className='fobi-body-time-dispatch-value'>{dispatchByDate}</span>
                                    <p className={timeLeft === "Breached!" ? 'fobi-body-time-red' : 'fobi-body-time-days'}>{timeLeft}</p>
                                </div>
                            </div>
                        </div>
    )
}