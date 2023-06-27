import React ,{useState,useEffect}from "react";
import { useDispatch } from "react-redux";
import "./card.css";
import {getCustomerInfo} from "../../store/actions/user_action"
import { Link } from "react-router-dom";
import { API_URI } from "../../store/actions/auth_action";
import { SAVE_USERINFO } from "../../store/actions/type";
import { getListing } from "../../store/actions/listing_action";
import { getseller_info } from "../../store/actions/seller_action";
import RatingBox from "../ratingBox/ratingBox";
import { getproduct_info } from "../../store/actions/product_action";
const Card = ({item}) => {
  
  const dispatch = useDispatch();
  const [list,setList] = useState(JSON.parse(localStorage.getItem('userInfo')).wishlist);   //wishlist data
  const [listing,setListing] = useState(undefined);  

  const getProd_Info = async () => {
    const obj = {
      type: "productSKU",
      manufacturerID: "",
      productID: item.productID,
      SKUID: item.SKUID
    };
    const json = await getproduct_info(obj);
    if(json.success){
      console.log("AAA:DSs ",json)
    setListing(json.msz);
        }
  };

  useEffect(() => {
    getProd_Info();
}, []); 


  
  console.log("item: hihuhuhuj",item)
  const discount = Math.round((item.mrp - item.price)*100/item.mrp);
  const img = listing ===undefined? "" : listing.imageUrls[0];
  function isPresent(val) {
    if(val === item.productID){
      return false;
    } 
    return true;
  }

  const addWishlist = async()=> {
    try {
      await fetch(`${API_URI}/edituserinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'add',
          subType: 'wishlist',
          userID: 'u1',
          productID: 'p1'
        })}).then(async(res)=> {
          const json = await res.json();
        console.log("add",json);
        if(json.success)
        {
          let temp = JSON.parse(localStorage.getItem('userInfo'));
          let newW = [...list];
          newW.push(item.productID);
          temp.wishlist = newW;
          localStorage.setItem('userInfo',JSON.stringify(temp));
          setList(newW);
        } //add to list
        });
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }

  const removeWishlist = async()=> {
    try {
      await fetch(`${API_URI}/edituserinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'delete',
          subType: 'wishlist',
          userID: 'u1',
          productID: 'p1'
        })}).then(async (res) =>{
          const json = await res.json();
        if(json.success){
          console.log('remove');
          let temp = JSON.parse(localStorage.getItem('userInfo'));
          temp.wishlist = [...list].filter(isPresent);
          localStorage.setItem('userInfo',JSON.stringify(temp));
          setList(temp.wishlist);
        } 
        });         
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }

  const routeToProductDesc = ()=>{
    window.open(`/1/${item.productID}/${item.SKUID}`);
  }

  // console.log('list',list);

  return (
    // <Link to={`/1/${item.productID}`} style={{ textDecoration: 'none' }} >
    listing===undefined?<div></div> : <div className="cardContainer" >
      <div className="ImageContainer">
        <img onClick={routeToProductDesc} className="cardImage" src={img} alt="logos"/>
        {list.includes(item.productID)?
          <div onClick={removeWishlist} className="cardWishlist"><i style={{color: 'red'}} class="fa-solid fa-heart fa-2x"></i></div>
        : <div onClick={addWishlist} className="cardWishlist"><i class="fa-regular fa-heart fa-2x"></i></div>}
      </div>
      <div onClick={routeToProductDesc} className="categoryContainer">
        <p className="cardBrand">{item.brand}</p>
        <p className="cardTitle">{item.title}</p>
        <div className="card-Price">
          <div className="discountPrice">Rs.{item.price}</div>
          <s className="actualPrice">Rs.{item.mrp}</s>
          <div className="discount-Percent">{discount}% Off</div>
         </div>       
        <div className="card-Rating">
          <RatingBox stars={listing.ratingCount}></RatingBox>
          {/* <div className="ratingStars"><i style={{alignSelf: 'center', margin: '4px' , fontSize: '10px', color: "orange"}} className="fa-solid fa-star" /></div> */}
          <div className="rating-Reviews">({listing.ratingTotal})</div>
        </div>
        {/* <div className="cardInfo">
          <img className="cardLogo" src={sellerimg} alt="" />
          <span>Seller Name</span>
        </div> */}
      </div>
    </div>
  //  </Link>
  );
};

export default Card;
