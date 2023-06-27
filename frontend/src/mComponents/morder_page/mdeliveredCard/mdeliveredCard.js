import React, { useEffect, useState } from 'react'
import { getproduct_info } from '../../../store/actions/product_action';
import './mdeliveredCard.css'

const MDeliveredCard = ({item}) => {

    const [product,setProduct] = useState(undefined);
  
    const getProdInfo = async () => {
      const obj = {
        type: "productSKUStyle",
        product_id: item.product.product_id,
        sku_id: item.product.sku_id,
        style_code: item.product.style_code
      };
      const json = await getproduct_info(obj);
      if(json.success){
        setProduct(json.msz);
          }
    };
  
    useEffect(()=>{
      getProdInfo();
    },[])
  
    return (
      product===undefined?<div></div>:
      <div onClick={()=>{window.open(`/order/${item.order_id}`,'_self')}} className='mdcBox'>
        <img className='mdcImage' src={product.media_urls[0]}/>
        <div className='mdcMid'>
            <div className='mdcMidTop'>
            <i style={{color: 'green',fontSize: "18px"}} class="fa-solid fa-circle-check"></i>
            <p className='mdcMidS'>Delivered on 31 Jan</p>
            </div>
          <div className='mdcMidName'>
          <p className='mdcMidNameB'>{product.brand}</p>
          <p className='mdcMidNameT'>{product.product_name}</p>
          </div>
        </div>
        <i style={{alignSelf: 'center'}} class="fa-solid fa-angle-right"></i>
      </div>
    )
  }

export default MDeliveredCard