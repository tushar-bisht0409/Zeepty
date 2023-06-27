import "./leftSubPage.css";
import React,{useEffect,useState} from "react";
import image from "./roh.jpg";
import { useParams } from "react-router-dom";
import { API_URI } from "../../../store/actions/auth_action";



const LeftSubPage = ({isInCart, selectedSKUID, setSelectedSKUID, cart,setCart, variant, setVariant,products,setListing,productID}) => {

const [selectedImage, setSelectedImage] = useState(products.imageUrls[0]);

console.log("leftid",products);

const primaryKeys = ["color"];

const secondaryKeys = ["size"];

function variantSelected (){
  let isEligible = true;
  for(let i = 0;i<secondaryKeys.length;i++){
    if(variant[`${secondaryKeys[0]}`] === undefined){
      isEligible = false;
      break;
    }
  }
  return isEligible;
}

const addToCart = async()=> {
  console.log(products.productID," : ",products.listingID," : ",selectedSKUID)
  if(JSON.parse(localStorage.getItem('userInfo'))===null){
    window.alert('LOGIN OR SIGNUP');
  }
  else if(variantSelected()) {
  try {
    await fetch(`${API_URI}/edituserinfo`, {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'add',
        subType: 'cart',
        userID: 'u1',
        product: {
          productID: products.productID,
          listingID: products.listingID,
          SKUID: selectedSKUID,
          quantity: 1,
        }
      })}).then(async(res)=> {
        const json = await res.json();
      console.log("add",json);
      if(json.success)
      {
        let temp = JSON.parse(localStorage.getItem('userInfo'));
        let newW = [...cart];
        newW.push(
          {
            productID: products.productID,
            listingID: products.listingID,
            SKUID: selectedSKUID,
            quantity: 1,
          }
        );
        temp.cart = newW;
        localStorage.setItem('userInfo',JSON.stringify(temp));
        setCart(newW);
      } //add to list
      });
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false}
  }
} else{
  window.alert('Select the variant');
}
}

const goToCart = async()=> {
  window.open(`/placeorder`)
  console.log("clicked")
}

  return (
    products===undefined?<div></div>:
   <div className="leftSubPage">
   <img className="bigImage" src={selectedImage}  alt="football pic"></img>
   
   <div className="parentOfImages">
    {products.imageUrls.map((iurl)=>(
         <img onClick={()=>{setSelectedImage(iurl)}} className={selectedImage===iurl? "imgSmallActive":"imgSmall"} src={iurl}  alt="football pic1"></img>
    ))}
  

   </div>
   
   <div className="buttons">
    {isInCart?
   <div  onClick={goToCart} className="goToCart">
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '20px', color: "white",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Go To Cart</p></div>:<div className="addToCart" onClick={addToCart}>
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '20px', color: "white",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Add To Cart</p></div>}


   <div className="buyNow">Buy Now</div>
   {/* <button type="button" className="addToCart">
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '20px', color: "#3F2B96"}} className="fa fa-shopping-cart" ></i>
   <p>Add To Cart</p></button>
   <button type="button" class="buyNow">Buy Now</button> */}
   </div>
   </div>
  );
};

export default LeftSubPage;