import React, { useEffect, useState } from 'react'
import MRatingBox from '../../mratingBox/mratingBox'
import './mmodalProduct.css'
import { getproduct_info } from '../../../store/actions/product_action'

const MModalProduct = ({item}) => {

    const [product,setProduct] = useState(undefined)

    
    useEffect(()=>{
        const getProduct = async ()=> {
            const obj = {
                manufacturerID: `m1`,
                sellerID: `s1`,
                productID: `p1`,
                SKUID: `a1`,
                type: `productSKU`
              }
              const json = await getproduct_info(obj);
              if(json.success)
              {
                setProduct(json.msz);
              }
          }
          getProduct();
    },[])

    const [list,setList] = useState([]);

  return (
    
    <div className="minMPBox" >
      <div className="minMPImageBox">
        <img onClick={()=>{}} className="minMPImage" src={product===undefined? "":product.imageUrls[0]} alt="logos"/>
        {product===undefined? null: list.includes(product.productID)?
          <div onClick={()=>{setList([])}} className="cardWishlist"><i style={{fontSize: '18px', color: 'red'}} class="fa-solid fa-heart fa-2x"></i></div>
        : <div onClick={()=>{setList(['p1'])}} className="cardWishlist"><i style={{fontSize: '18px'}} class="fa-regular fa-heart fa-2x"></i></div>}
      </div>
      <div onClick={()=>{}} className="minMPInfoBox">
        <p className="minMPInfoB">{product===undefined? "":product.brand}</p>
        <p className="minMPInfoT">{product===undefined? "":product.title}</p>
        <div className="minMPInfoP">
          <div className="minMPInfoPP">Rs.{product===undefined? "":product.price}</div>
          <s className="minMPInfoPM">Rs.{product===undefined? "":product.mrp}</s>
          <div className="minMPInfoPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
         </div>       
        <div className="minMPInfoRB">
          <MRatingBox stars={product===undefined? 0:product.ratingCount}></MRatingBox>
          <div className="minMPInfoRBText">({product===undefined? "":product.ratingTotal})</div>
        </div>
        <div className='minMPAdd'>
            Add To Cart
        </div>
      </div>
    </div>
  )
}

export default MModalProduct