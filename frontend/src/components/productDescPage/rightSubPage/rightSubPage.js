import "./rightSubPage.css";
import React,{useEffect,useState} from "react";
import RatingReviews from "../rightpageRatingsReviews/ratingReviews";
import { useParams } from "react-router-dom";
import { API_URI } from "../../../store/actions/auth_action";
import VariantColor from "./variantColor/variantColor";
import VariantAny from "./variantAny/variantAny";
import { getListing } from "../../../store/actions/listing_action";
import { getproduct_info } from "../../../store/actions/product_action";
import RatingBox from "../../ratingBox/ratingBox";

const RightSubPage = ({isPresentInCart,selectedSKUID, setSelectedSKUID,cart,setCart, variant, setVariant,products,getListInfo, productID}) => {
 
  const primaryKeys = ["color"];

  const secondaryKeys = ["size"];

  const [allListings,setAllListings] = useState(undefined);

  const [selectedProduct,setSelectedProduct] = useState(products);

  const discount = Math.round((selectedProduct.mrp - selectedProduct.price)*100/selectedProduct.mrp);

  const getAllListing  = async()=>{

    let allV = {};

    for(let i = 0;i<primaryKeys.length;i++){
      variant[`${primaryKeys[i]}`] = products[`${primaryKeys[i]}`];
      allV[`${primaryKeys[i]}`] = [products];
    }
    setVariant(variant);

    for(let i = 0;i<secondaryKeys.length;i++){
      allV[`${secondaryKeys[i]}`] = [products];
    }

    if(secondaryKeys.length===0){
      setSelectedSKUID(products.SKUID);
      isPresentInCart(products,products.SKUID);
    }
    const obj = {
      type: "productID",
      manufacturerID: "",
      productID: products.productID,
      SKUID: ""
    };
    const json = await getproduct_info(obj);
    if(json.success){
      for(let i = 0;i<json.msz.length;i++){
        for(let j = 0;j<primaryKeys.length;j++){
          if(json.msz[i][`${primaryKeys[j]}`]!= products[`${primaryKeys[j]}`]) {
            let isEligi =true;
            for( let l = 0;l<allV[`${primaryKeys[j]}`].length;l++){
              if(json.msz[i][`${primaryKeys[j]}`] == allV[`${primaryKeys[j]}`][l][`${primaryKeys[j]}`]) {
                isEligi = false;
                break;
            }
         }
         if(isEligi){
          allV[`${primaryKeys[j]}`].push(json.msz[i]);
         }
        } else{
          console.log(json.msz[i].SKUID," : ",json.msz[i][`${secondaryKeys[0]}`])
            for(let k=0;k<secondaryKeys.length;k++){
              if(json.msz[i][`${secondaryKeys[k]}`] != products[`${secondaryKeys[k]}`]) {
                allV[`${secondaryKeys[k]}`].push(json.msz[i]);
              }
            }
          }
        }
      }
      let arr = [];
      let x=0;
      for(let i = 0;i<primaryKeys.length;i++){
        arr[x] = {};
        arr[x++][`${primaryKeys[i]}`] = allV[`${primaryKeys[i]}`];
      }
      for(let i = 0;i<secondaryKeys.length;i++){
        arr[x] = {};
        arr[x++][`${secondaryKeys[i]}`] = allV[`${secondaryKeys[i]}`];
      }
      console.log("asasasa: ",allV)
      setAllListings(arr);
    }
  }



const [list,setList] = useState([]);   //wishlist products
useEffect(()=>{
  getAllListing();
  if(JSON.parse(localStorage.getItem('userInfo'))===null){
    setList([]);
  } else{
    setList(JSON.parse(localStorage.getItem('userInfo')).wishlist);
  }
},[selectedProduct]);  //updated wishlist


function isPresent(val) {
  if(val === selectedProduct.productID){
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
        newW.push(selectedProduct.productID);
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


  return (
    <div className="rightSubPage">
    <div className="productName">{selectedProduct.brand}</div>
    <div className="productTitle">{selectedProduct.title}</div>
    <div className="typeOfProduct">{selectedProduct.category}</div>

    <div className="ratingsReviews">
    <div className="starBox">
    <RatingBox stars={selectedProduct.ratingTotal}></RatingBox>
    </div>
    <div className="ratings">({selectedProduct.rateCount})</div>
    </div>
    
    <div className="price">
    <div className="priceAfterDiscount">₹{selectedProduct.price}</div>
    <div className="mrp">MRP <s>₹{selectedProduct.mrp}</s></div>
    <div className="discountPercent">({discount}% OFF)</div>
    </div>

    <div className="inclusiveOfAllTaxes">inclusive of all taxes</div>

    <div className="btn">
      {list.includes(selectedProduct.productID)?
    <button type="button" onClick={removeWishlist} className="addedToWishlist">
    <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '25px', color: "#6b00c3"}} className="fa-solid fa-heart fa-2x" ></i>
    <p>Remove From Wishlist</p>
    </button>:
    <button type="button" onClick={addWishlist} className="addToWishlist">
    <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '25px', color: "#3F2B96"}} className="far fa-heart" ></i>
    <p>Add to Wishlist</p>
    </button>}
    </div>

   
  <div style={{marginTop: '4vh'}}></div>
    {allListings===undefined ? <div></div> : allListings.map((p) => (
      <div>
        <div className="variantTitle">
          {Object.keys(p)[0].charAt(0).toUpperCase() + Object.keys(p)[0].slice(1)}
        </div>
      {Object.keys(p)[0] === "color" ?
      <div className="variantColorBox">
      {p.color.map((d)=>(
        <VariantColor isPresentInCart={isPresentInCart} isPrimary={primaryKeys.includes(Object.keys(p)[0])} products={d} kkey={Object.keys(p)[0]} setSelectedSKUID={setSelectedSKUID} variant={variant} setVariant={setVariant} getListInfo={getListInfo} productID={productID} setSelectedProduct={setSelectedProduct}></VariantColor>
      ))}
      </div> :
      <div className="variantColorBox">
      {p[Object.keys(p)[0]].map((d,index)=>(
        <div key={variant[`${Object.keys(p)[0]}`] + `${index}`}>
        <VariantAny isPresentInCart={isPresentInCart} isPrimary={primaryKeys.includes(Object.keys(p)[0])} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} products={d} kkey={Object.keys(p)[0]} variant={variant} setVariant={setVariant} getListInfo={getListInfo} setSelectedProduct={setSelectedProduct}  ></VariantAny>
        </div>
      ))}
      </div>}
      </div>
      ))}
    <div className="productDetailsHeading">Product Details</div>
    <div style={{display: 'flex',flexDirection: 'row',paddingLeft: '4vw',  width: '35vw',flexWrap: "wrap"}}>   
    {selectedProduct.specification.map((p) => (
      <div className="productDetailBox">
       <div className="Productdetailtitle">{Object.keys(p)[0]}</div>
      <div className="ProductDetailMain">
      {/* <div><img className="productDetailicons" src={specificationsIcons[Object.keys(p)[0]]}/> </div> */}
      <i style={{color:"#2FB84D", fontSize:"15px", paddingRight: '10px'}} class="fa-solid fa-circle"></i>
        <div className="Productdetailvalue">{p[Object.keys(p)[0]]}</div>
      </div>
      </div>
      ))}
      </div>

    <RatingReviews></RatingReviews>

    </div>
  );
};

export default RightSubPage;