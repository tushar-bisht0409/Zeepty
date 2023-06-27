import React, { useEffect, useRef, useState } from 'react'
import { getproduct_info } from '../../store/action/productaction'
import './minProductRevCard.css'
import { getManufacturerInfo } from '../../store/action/manufacturer_action'


//PRODUCT REVENUE CARD

const MINProductRevCard = ({item}) => {

    const [product,setProduct] = useState(undefined);
    const [manufacturer_info, setManufacturer_info] = useState(undefined);

     const handleGetProduct = async ()=> {
        const obj = {
            product_id: item.product.product_id,
            sku_id: item.product.sku_id,
            style_code: item.product.style_code,
            type: `productSKUStyle`
          }
          const json = await getproduct_info(obj);
          if(json.success)
          {
            setProduct(json.msz);
          }
      }

      function handleGetManufacturerInfo() {
        const obj = {
            manufacturer_id: item.manufacturer_id
        }
        const json = getManufacturerInfo(obj);
        if(json.success){
            setManufacturer_info(json.msz);
        }
    }

    useEffect(()=>{
          handleGetProduct();
          handleGetManufacturerInfo();
    },[]);

    function formatTime(tStamp) {
        const currentTimestamp = new Date();

        // Provided timestamp
        const providedTimestamp = new Date(tStamp);

        // Calculate the time difference in milliseconds
        const timeDifference = currentTimestamp - providedTimestamp;

        // Helper function to format the relative time
        function formatRelativeTime(time, unit) {
        return `${time}${unit} ago`;
        }

        // Convert the time difference to a relative time format
        if (timeDifference < 60000) {  // Less than 1 minute
        const seconds = Math.floor(timeDifference / 1000);
        return formatRelativeTime(seconds, 's');
        } else if (timeDifference < 3600000) {  // Less than 1 hour
        const minutes = Math.floor(timeDifference / 60000);
        return formatRelativeTime(minutes, 'm');
        } else if (timeDifference < 86400000) {  // Less than 1 day
        const hours = Math.floor(timeDifference / 3600000);
        return formatRelativeTime(hours, 'h');
        } else if (timeDifference < 604800000) {  // Less than 1 week
        const days = Math.floor(timeDifference / 86400000);
        return formatRelativeTime(days, 'd');
        } else {  // More than 1 week
        const weeks = Math.floor(timeDifference / 604800000);
        return formatRelativeTime(weeks, 'w');
        }
    }

    return (
        product === undefined?<div></div>: 
        <div className='minPRC'>
            <img className='minPRCImage' src={product.media_urls[0] }/>
            <div className='minPRCI'>
                <span className='minPRCIB'>{product.brand} </span>
                <span className='minPRCIT'>{product.product_name}</span>
                <div className='minPRCIS'>
                <div className='minPRCISB1'>
                    <p className='minPRCISB1T1'>Sold</p>
                    <p className='minPRCISB1T2'>{product.sold_count}</p>
                </div>
                <div className='minPRCISB2'>
                    <p className='minPRCISB2T1'>Rating</p>
                    <span className='minPRCISB2T2'>{product.rating_total === 0 ? "0" : (product.rating_total/product.rating_count).toString()} <i style={{ alignSelf: 'center', fontSize: '8px', color: "green"}} className="fa-solid fa-star"></i> </span>
                </div>
                </div>
            </div>

            <div className='minPRCE'>
                <p className='minPRCEHead'>Earning</p>
                <div className='minPRCELBox'>
                    <div className='minPRCELBoxI'>₹</div>
                <p className='minPRCELBoxT'>{item.payout.seller}</p>
                </div>
            </div>

            <div className='minPRCTime'>{formatTime(item.createdAt)}</div>

            <div className='minPRCSup'>{manufacturer_info === undefined ? "" : manufacturer_info['name']}</div>

        </div>
    );
}

export default MINProductRevCard