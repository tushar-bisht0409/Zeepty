import React, { useEffect, useState } from 'react'
import { getproduct_info } from '../../../store/actions/product_action';
import './mreturnedCard.css'

const MReturnedCard = ({item}) => {

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
      <div onClick={()=>{window.open(`/order/${item.order_id}`,'_self')}} className='mrcBox'>
        <img className='mrcImage' src={product.media_urls[0]}/>
        <div className='mrcMid'>
            <div className='mrcMidTop'>
            <i style={{color: 'orange',fontSize: "18px"}} class="fa-solid fa-arrow-left"></i>
            <p className='mrcMidS'>Returned</p>
            </div>
          <div className='mrcMidName'>
          <p className='mrcMidNameB'>{product.brand}</p>
          <p className='mrcMidNameT'>{product.product_name}</p>
          </div>
        </div>
        <i style={{alignSelf: 'center'}} class="fa-solid fa-angle-right"></i>
      </div>
    )
  }

export default MReturnedCard