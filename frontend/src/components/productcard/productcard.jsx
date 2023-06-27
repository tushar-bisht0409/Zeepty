import React,{useState,useEffect} from 'react'
import { API_URI } from "../../store/actions/auth_action";
import "./productcard.css"
import {useSelector, useDispatch, connect } from "react-redux";
import logo from "./logo.jpg";
import { getListing } from '../../store/actions/listing_action';
import { getproduct_info } from '../../store/actions/product_action';

const Productcard = ({item ,selected, quantity}) => {
  const dispatch = useDispatch();

  const [qnty,setQnty] = useState(quantity);

  const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  const [cart,setCart] = useState(userInfo.cart);   //cart data

  const [product,setProduct] = useState(undefined); 

  const [isSelected,setIsSelected] = useState(selected);

  const primaryKeys = ["color"];
  const secondaryKeys = ["size"];

  const allKeys = primaryKeys.concat(secondaryKeys);
  
  useEffect(()=>{
    const getproductdata = async()=>{
      try{
          const obj = {
            type: "productSKU",
            manufacturerID: "",
            productID: item.productID,
            SKUID: item.SKUID,
          };
      const json = await getproduct_info(obj);
      if(json.success === true){
        setProduct(json.msz);
        if(isSelected === true){        
          dispatch({
            type:'ADD_CART_PRODUCT',
            payload:{
              productID: item.productID,
              listingID: item.listingID,
              SKUID: item.SKUID,
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
    if(val === product.productID){
      return false;
    } 
    return true;
  }


      
 
const removeFromCart = async()=>{
  // console.log("removed from cart")
  console.log("CCxXS",item,)
  try {
    await fetch(`${API_URI}/edituserinfo`, {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'delete',
        subType: 'cart',
        userID: 'u1',
        product: {
          productID: item.productID,
          listingID: item.listingID,
          SKUID: item.SKUID,
          quantity: 1
        }
      })}).then(async (res) =>{
        const json = await res.json();
      if(json.success){
        // console.log('remove');
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
const manageCart = async()=>{
  if(isSelected){
    dispatch({
      type:'REMOVE_CART_PRODUCT',
      payload:{
        productID: item.productID,
        listingID: item.listingID,
        SKUID: item.SKUID,
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
        productID: item.productID,
        listingID: item.listingID,
        SKUID: item.SKUID,
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
      productID: item.productID,
      listingID: item.listingID,
      SKUID: item.SKUID,
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
      productID: item.productID,
      listingID: item.listingID,
      SKUID: item.SKUID,
      quantity:qnty-1,
      price:product.price,
      mrp:product.mrp,
      }
    })
    setQnty(qnty - 1)
  }
}

  return (
    product===undefined ? <div></div> : <div className="productcard-Container">
        <div className="closeB" onClick={removeFromCart}>
        <i class="fa-solid fa-trash"></i>
        </div>
       
        <div className="img-Container">
          <div onClick={manageCart} className='checkBox'>
          {isSelected?<i style={{fontSize: '20px', color: 'white',height:'25px',width: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA'}}
           class="fa-solid fa-check"></i>
            :<div></div>}
          </div>
        {/* <input className='checkbox'  checked={isSelected} onClick={manageCart} type="checkbox" /> */}
            <img className='product-img' src={product===undefined?"": product.imageUrls[0]} alt="logo" />
        </div>
        <div className="details-Container">
            <div className="titledesc">
                <div className="brandC">{product.brand}</div>
                <div className="titleC">{product.title}</div>
                <div className="desc">{product.category}</div>
            </div>
            <div className="quantityBox">
                <div className="quantityText">Quantity</div>
                <i onClick={decreaseValue} style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-square-minus"></i>
                <p>{qnty}</p>
                <i onClick={increaseValue} style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-square-plus"></i>
            </div>
            <div className='variantBox'>
              {allKeys.map((p)=>
              <>
                  <div className="variantBoxText">{p.substring(0,1).toUpperCase()}{p.substring(1)}</div>
                  <p>{product[`${p}`].substring(0,1).toUpperCase()}{product[`${p}`].substring(1)}</p>
                </>
              )}
            </div>
            <div className="card-Price">
                <div className="discount-Price">Rs.{product.price}</div>
                <s className="actual-Price">Rs.{product.mrp}</s>
                <div className="discount-Percent">({Math.round((product.mrp - product.price)*100/product.mrp)}% OFF)</div>
         </div>   
         {/* <div className="card-Info">
          <img className="card-Logo" src={logo} alt="" />
          <span>Seller Name</span>
        </div> */}
            
        </div>
    </div>
  )
}
export default Productcard;