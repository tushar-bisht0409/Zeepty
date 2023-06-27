import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getlisting_info } from '../../store/action/listingaction';
import {  getproduct_info } from '../../store/action/productaction';
import logo from "./logo.jpg"
const BuyerInfo = (s) => {
    const dispatch = useDispatch()
    const [loading1,setLoading1] = useState(false)
    const [loading2,setLoading2] = useState(false)
    const [product,setProduct] = useState(undefined);
    const [listing,setListing] = useState(undefined);
    const getProduct = async ()=> {
        let obj = {
          type: 'product_id',
          product_id: 'p1'  
        }
        const json = await getproduct_info(obj);
        setProduct(json.msz[0]);
        setLoading1(true)
    }
    const getListing = async ()=> {
        let obj = {
            type: 'listing_id',
            listing_id: 'l1'  
          }
        const json = await getlisting_info(obj);
        setListing(json.msz[0]);
        setLoading2(true);
        console.log('opp',json.msz);

    }
    useEffect(()=>{
     getProduct();
     getListing();
  },[]);
//   console.log(listing,"sdf")

  return (
    
<>
    {
        loading1 && loading2?
        <div className='buyerInfoBox'>
        <div className="OrderID">
        <div className="buyerOrderId">
            <p className='title'> Order ID:</p>
            <p>{s.orderId}</p>
        </div>
        </div>
        <div className="buyerProductinfo">
            <div className="buyerImgContainer">
                    <img  className='buyerImg' src={listing.image_urls[0]} alt="logo" />
            </div> 
            <div className="buyerDetails">
                    
                    <div className="buyerSKUID">
                        <p className='title'>SKU ID:</p>
                        <p >{listing.skuid}</p>
                    </div>
                    <div className="buyerBrand">
                        {/* <p className='title'>Brand:</p> */}
                        <p className='title'>{listing.brand}</p>
                    </div>
                    <div className="buyerBrand">
                        
                        <p>{listing.category}</p>
                    </div>
            </div>
        </div>
        <div className="buyerQuantity title">{s.props.quantity}</div>   
        <div className="buyerPrice title">{s.props.price}</div>   
    </div>
    :<div>Loading</div>
    }
    
</>
  )
}

export default BuyerInfo