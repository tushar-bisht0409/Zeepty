import React, { useEffect, useState } from 'react'
import { getproduct_info } from '../../../store/actions/product_action';
import './mcancelledCard.css'

const MCancelledCard = ({item}) => {

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
      <div onClick={()=>{window.open(`/order/${item.order_id}`,'_self')}} className='mccBox'>
        <img className='mccImage' src={product.media_urls[0]}/>
        <div className='mccMid'>
            <div className='mccMidTop'>
            <i style={{color: 'red',fontSize: "18px"}} class="fa-solid fa-circle-xmark"></i>
            <p className='mccMidS'>Cancelled</p>
            </div>
          <div className='mccMidName'>
          <p className='mccMidNameB'>{product.brand}</p>
          <p className='mccMidNameT'>{product.product_name}</p>
          </div>
        </div>
        <i style={{alignSelf: 'center'}} class="fa-solid fa-angle-right"></i>
      </div>
    )
  }

export default MCancelledCard