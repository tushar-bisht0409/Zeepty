import MRatingBox from '../mratingBox/mratingBox'
import "./mcard.css"

import React ,{useState,useEffect}from "react";
import { API_URI } from "../../store/actions/auth_action";
import { getproduct_info } from "../../store/actions/product_action";
import {v4 as uuidv4} from 'uuid';
import { updateLocalUserInfo } from '../../store/actions/notLoggedInUser_action';

const MCard = ({item}) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('userInfo')).wishlist);   //wishlist data
  const [product,setProduct] = useState(undefined);  

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const getProd_Info = async () => {
    const obj = {
      type: "productSKUStyle",
      product_id: item._source.product_id,
      sku_id: item._source.sku_id,
      style_code: item._source.style_code
    };
    const json = await getproduct_info(obj);
    console.log("AAA:DSs ",item._source.product_id," : ",item._source.sku_id)
    if(json.success){
    setProduct(json.msz);
    isInWishlist(json.msz,list);
        }
  };

  useEffect(() => {
    getProd_Info();
    console.log(JSON.parse(localStorage.getItem("userInfo")))
}, []); 


  
  const img = product ===undefined? "" : product.media_urls[0];

  function isInWishlist (prod,wList){
    setIsWishlisted(undefined)
    for(let i = 0; i<wList.length; i++){
      if(wList[i].product_id === prod.product_id && wList[i].style_code === prod.style_code ){
        setIsWishlisted(wList[i]);
        break;
      }
    }
  }

  function isPresent(val) {
    if(val.wishlist_id === isWishlisted.wishlist_id){
      return false;
    } 
    return true;
  }

  const addWishlist = async()=> {
    let new_id = uuidv4();
    let c_id = localStorage.getItem("customer_id");
      if(c_id === '' || c_id === null || c_id === undefined){
        console.log("SSS: ",c_id)
        let obj = {
          type: 'add',
          subType: 'wishlist',
          productObject: {
            wishlist_id: new_id,
            product_id: product.product_id,
            style_code: product.style_code
          }
        }
        let json = await updateLocalUserInfo(obj);
        if(json.success){
          let newInfo = JSON.parse(localStorage.getItem('userInfo'));
          setList(newInfo.wishlist);
          isInWishlist(product,newInfo.wishlist)
        }
      } else{
    try {
      
      await fetch(`${API_URI}/editcustomerinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'add',
          subType: 'wishlist',
          customer_id: c_id,
          productObj: {wishlist_id: new_id, product_id: product.product_id,style_code: product.style_code}
        })}).then(async(res)=> {
          const json = await res.json();
        console.log("add",json);
        if(json.success)
        {
          let temp = JSON.parse(localStorage.getItem('userInfo'));
          let newW = [...list];
          newW.push({
            wishlist_id: new_id,
            product_id: product.product_id,
            style_code: product.style_code
          });
          temp.wishlist = newW;
          localStorage.setItem('userInfo',JSON.stringify(temp));
          setList(newW);
          isInWishlist(product,temp.wishlist)
        } //add to list
        });
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }
  }

  const removeWishlist = async()=> {
    let c_id = localStorage.getItem("customer_id");
      if(c_id === '' || c_id === null || c_id === undefined){
        let obj = {
          type: 'remove',
          subType: 'wishlist',
          productObject: {
            wishlist_id: isWishlisted.wishlist_id,
            product_id: product.product_id,
            style_code: product.style_code
          }
        }
        let json = await updateLocalUserInfo(obj);
        if(json.success){
          let newInfo = JSON.parse(localStorage.getItem('userInfo'));
          setList(newInfo.wishlist);
          isInWishlist(product,newInfo.wishlist)
        }
      } else{
    try {
      await fetch(`${API_URI}/editcustomerinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'delete',
          subType: 'wishlist',
          customer_id: c_id,
          wishlist_id: isWishlisted.wishlist_id,
        })}).then(async (res) =>{
          const json = await res.json();
        if(json.success){
          console.log('remove');
          let temp = JSON.parse(localStorage.getItem('userInfo'));
          temp.wishlist = [...list].filter(isPresent);
          console.log("TT: ",temp.wishlist)
          localStorage.setItem('userInfo',JSON.stringify(temp));
          setList(temp.wishlist);
          isInWishlist(product,temp.wishlist)
        } 
        });         
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }
  }

  const routeToProductDesc = ()=>{
    window.open(`/product/${product.product_id}/${product.style_code}`,'_self');
  }

  return (
    product===undefined?<div></div> : <div className="mobile_card_cardContainer">
          
      <div className="mobile_card_ImageContainer">
        <img onClick={routeToProductDesc} className="mobile_card_cardImage" src={img} alt="logos" />
        <div className="mobile_card_cardWishlist">
        {isWishlisted?
          <div onClick={removeWishlist} className="fa-1x"><i style={{color: 'red', fontSize: '20px'}} class="fa-solid fa-heart fa-2x"></i></div>
        : <div onClick={addWishlist} className="fa-1x"><i style={{fontSize: '20px'}} class="fa-regular fa-heart fa-2x"></i></div>}
          </div>
      </div>
      <div className="mobile_card_categoryContainer">
        <p className="mobile_card_cardTitle">{product.brand}</p>
        <p className="mobile_card_carddesc">{product.product_name}</p>
        <div className="mobile_card_card-Price">
          <div className="mobile_card_discountPrice">₹{product.price}</div>
          <s className="mobile_card_actualPrice">₹{product.mrp}</s>
          <div className="mobile_card_discount-Percent">{`${Math.round((product.mrp - product.price)*100/product.mrp)}%Off`}</div>
         </div>       
      </div>
      <div className="mobile_card_card-Rating">
            <MRatingBox stars={product.rating_total/product.rating_count}></MRatingBox>
          <p className="mobile_card_rating-Reviews">({product.rating_count})</p>
        </div>
    </div>
  )
}

export default MCard