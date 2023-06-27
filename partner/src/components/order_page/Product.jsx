import React, { useEffect,useState } from 'react'
// import proImg from '../../images/order.png'
import logo from "./logo.jpg"
import { getlisting, getproduct_info } from '../../store/action/productaction';
import {useDispatch} from "react-redux"

export const Product = ({item}) => {

    const dispatch = useDispatch();
  const [product,setProduct] = useState(undefined);
  const [listing,setListing] = useState(undefined);
  const getProduct = async ()=> {
    const obj = {
        manufacturerID: 'm1',
        sellerID: 's1',
        productID: item.productID,
        type: 'productID'
      }
      const json = await getproduct_info(obj);
      if(json.success)
      {
        console.log("oooLLL",json.msz[0])
        setProduct(json.msz[0]);
      }
  }
  const getListing = async ()=> {
    const json = await dispatch(getlisting('listingID','','','l1'));
    console.log("kkkk",json.msz)
    if(json.success){
        setListing(json.msz[0]);
    }
  }
  useEffect(()=>{
   getProduct();
   getListing();
},[])

  return (
   <>
   {product===undefined || listing === undefined ?<div></div> :
        <div className='productCardBox'>
            <input className='checkbox' type="checkbox" />
            <div className="productImg">
                <img className='img' src={listing.imageUrls[0]} alt="logo" />
            </div>
            <div className="productDetails">
                <p className="title">{product.brand}</p>
                <p className="title">{product.title}</p>
                <p className="skuid">
                    <p className="title">SKUID:</p>
                    <p>{listing.SKUID}</p>
                </p>
                <p className="qnty">
                    <p className="title">Quantity:</p>
                    <p>{item.quantity}</p>
                </p>
            </div>
        </div>
        }
   </>
  )
}
