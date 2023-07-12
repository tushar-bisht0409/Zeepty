import "./mcartProductCard.css"
import React,{useState,useEffect} from 'react'
import { API_URI } from "../../store/actions/auth_action";
import {useSelector, useDispatch, connect } from "react-redux";
import { getListing } from '../../store/actions/listing_action';
import { getproduct_info } from '../../store/actions/product_action';
import { updateLocalUserInfo } from "../../store/actions/notLoggedInUser_action";

const MCartProductCard = ({noAction, item ,selected, quantity}) => {
    const dispatch = useDispatch();
  
    const [qnty,setQnty] = useState(quantity);
  
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [cart,setCart] = useState(userInfo.cart);   //cart data
  
    const [product,setProduct] = useState(undefined); 
  
    const [isSelected,setIsSelected] = useState(selected);
  
    useEffect(()=>{
      const getproductdata = async()=>{
        try{
            const obj = {
              type: "productSKUStyle",
              product_id: item.product_id,
              sku_id: item.sku_id,
              style_code: item.style_code
            };
        const json = await getproduct_info(obj);
        if(json.success === true){
          setProduct(json.msz);
          if(isSelected === true){        
            dispatch({
              type:'ADD_CART_PRODUCT',
              payload:{
                product_id: item.product_id,
                listing_id: item.listing_id,
                sku_id: item.sku_id,
                style_code: item.style_code,
                quantity:quantity,
                price:json.msz.price,
                mrp:json.msz.mrp,
                isselected:isSelected
              }
            });
          }
        }
        } catch(error){
          console.log(error);
          return {"msz": "Something went wrong", "success": false, "userID": ""}
        }
      }
      getproductdata();
    },[]);  
  
  
    function isPresent(val) {
      if(val === product.product_id){
        return false;
      } 
      return true;
    }
  
  
        
   
  const removeFromCart = async()=>{
    let c_id = localStorage.getItem('customer_id');
    if(c_id === undefined || c_id === null) {
      let obj = {
        type: 'remove',
        subType: 'cart',
        productObject: {
          product_id: item.product_id,
          listing_id: item.listing_id,
          style_code: item.style_code,
          sku_id: item.sku_id,
          quantity: 1
        }
      }
      let json = await updateLocalUserInfo(obj);
      if(json.success){
        window.location.reload(false);
      }
    } else {
    try {
      await fetch(`${API_URI}/editcustomerinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'delete',
          subType: 'cart',
          customer_id: localStorage.getItem('customer_id'),
          product: {
            product_id: item.product_id,
            listing_id: item.listing_id,
            style_code: item.style_code,
            sku_id: item.sku_id,
            quantity: 1
          }
        })}).then(async (res) =>{
          const json = await res.json();
        if(json.success){
          let temp = JSON.parse(localStorage.getItem('userInfo'));
          temp.cart = [...cart].filter(isPresent);
          localStorage.setItem('userInfo',JSON.stringify(temp));
          setCart(temp.cart);
        } 
        });         
        window.location.reload(false);
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }
  }


  const manageCart = async()=>{
    if(isSelected){
      dispatch({
        type:'REMOVE_CART_PRODUCT',
        payload:{
          product_id: item.product_id,
          listing_id: item.listing_id,
          style_code: item.style_code,
          sku_id: item.sku_id,
          quantity:quantity,
          price:product.price,
          mrp:product.mrp,
          isselected:isSelected
        }
      });
      setIsSelected(false);
    }
    else{
      dispatch({
        type:'ADD_CART_PRODUCT',
        payload:{
          product_id: item.product_id,
          listing_id: item.listing_id,
          style_code: item.style_code,
          sku_id: item.sku_id,
          quantity:quantity,
          price:product.price,
          mrp:product.mrp,
          isselected:isSelected
        }
      });
      setIsSelected(true);
    }
  }
  
  const increaseValue = ()=> {
    dispatch({
      type:'UPDATE_QUANTITY',
      payload:{
        product_id: item.product_id,
        listing_id: item.listing_id,
        style_code: item.style_code,
        sku_id: item.sku_id,
        quantity:qnty+1,
        price:product.price,
        mrp:product.mrp,
      }
    })
    setQnty(qnty+1);
    
  }
  
  const decreaseValue = ()=> {
    if(qnty==1){
    }
    else if(qnty>1){
      dispatch({
        type:'UPDATE_QUANTITY',
        payload:{
        product_id: item.product_id,
        listing_id: item.listing_id,
        style_code: item.style_code,
        sku_id: item.sku_id,
        quantity:qnty-1,
        price:product.price,
        mrp:product.mrp,
        }
      })
      setQnty(qnty - 1)
    }
  }

  function getSize() {
    return product.product_size['size'].split("_").map((word) => {
        if(product.product_size['size'].includes("_")){
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else {
            return product.product_size['size'].toUpperCase()
        }
    }).join(" ")
}

  function getColor() {
        let ind = product.product_details.findIndex((obj)=>Object.keys(obj)[0] === "color");
        if(ind === -1){
            return ""; 
        } else {
            return product.product_details[ind]['color'];
        }
    }
  
    return (
      product===undefined ? <div></div> : <div className="Mobile-productcard-Container">
        {noAction? null :<div className="Mobile-closeB" onClick={removeFromCart}>
        <i style={{color: 'lightgrey', fontSize: '20px'}} class="fa-solid fa-remove"></i>
        </div>}
       
        <div className="Mobile-img-Container">
          {noAction? null : <div onClick={manageCart} className='Mobile-checkBox'>
          {isSelected?<i style={{fontSize: '10px', color: 'white',height:'15px',width: '15px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA'}}
           class="fa-solid fa-check"></i>
            :<div></div>}
          </div>}
            <img className='Mobile-product-img' src={product.media_urls[0]} alt="logo" />
        </div>
        <div className="Mobile-details-Container">
            <div className="Mobile-titledesc">
                <div className="Mobile-brandC">{product.brand}</div>
                <div className="Mobile-titleC">{product.product_name}</div>
                {/* <div className="Mobile-desc">Electronics</div> */}
            </div>
            <div className="Mobile-quantityBox">
                <div className="Mobile-quantityText">Quantity</div>
                {noAction? null :<i onClick={decreaseValue} style={{fontSize: '20px', color: '#cfccff'}} class="fa-solid fa-square-minus"></i>}
                <p>{qnty}</p>
                {noAction? null :<i onClick={increaseValue} style={{fontSize: '20px', color: '#cfccff'}} class="fa-solid fa-square-plus"></i>}
            </div>
            <div className='mvariantBox'>
              <div className="mvariantBoxSize">
              <p className="mvariantBoxSizeHead">Size</p>
              <p className="mvariantBoxSizeValue">{getSize()}</p>
              </div>
              <div className="mvariantBoxColor">
              <p className="mvariantBoxColorHead">Color</p>
              <p className="mvariantBoxColorValue">{getColor()}</p>
              </div>
            </div>
            <div className="Mobile-card-Price">
                <s className="Mobile-actual-Price">Rs.{product.mrp}</s>
                <div className="Mobile-discount-Price">Rs.{product.price}</div>
                <div className="Mobile-discount-Percent">({Math.round((product.mrp - product.price)*100/product.mrp)}% OFF)</div>
         </div>   
        </div>
    </div>
  )
}
export default MCartProductCard;