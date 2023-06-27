import React, { useEffect, useState } from 'react'
import { getproduct_info } from '../../../store/actions/product_action';
import './morderedCard.css'

const MOrderedCard = ({item}) => {

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
    <div onClick={()=>{window.open(`/order/${item.order_id}`,'_self')}} className='mocBox'>
      <img className='mocImage' src={product.media_urls[0]}/>
      <div className='mocMid'>
        <p className='mocMidS'>Order Status</p>
        <p className='mocMidA'>Arriving on 31 Dec</p>
        <div className='mocMidName'>
        <p className='mocMidNameB'>{product.brand}</p>
        <p className='mocMidNameT'>{product.product_name}</p>
        </div>
      </div>
      <i style={{alignSelf: 'center'}} class="fa-solid fa-angle-right"></i>
    </div>
  )
}

export default MOrderedCard