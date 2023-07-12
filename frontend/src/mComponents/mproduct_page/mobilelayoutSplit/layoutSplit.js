import "./layoutSplit.css";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { API_URI } from "../../../store/actions/auth_action";
import LeftSubPage from "../mobileleftSubPage/leftSubPage";
import RightSubPage from "../mobilerightSubPage/rightSubPage";
import { getListing } from "../../../store/actions/listing_action";
import { getproduct_info } from "../../../store/actions/product_action";
import {v4 as uuidv4} from 'uuid';
import { updateLocalUserInfo } from "../../../store/actions/notLoggedInUser_action";


const LayoutSplit = () => {

  const [data, setData] = useState(undefined)

  const params = useParams();

  const [cart, setCart] = useState(undefined);

  const [variant, setVariant] = useState({});

  const [selectedSKUID, setSelectedSKUID] = useState(undefined);

  const [selectedStyleCode, setSelectedStyleCode] = useState(params.style_code);

  const [products, setProducts] = useState([]);

  const [list,setList] = useState(JSON.parse(localStorage.getItem('userInfo')).wishlist);   //wishlist data

  const [colorVariants, setColorVariants] = useState([]);

  const [isInCart, setIsInCart] = useState(false);

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  function isPresentInCart(prod,sku_id,style_code){
    let isIn = false;
    for(let i = 0;i<cart.length;i++){
      if(cart[i].product_id === prod.product_id && cart[i].sku_id === sku_id && cart[i].style_code === style_code){
        isIn = true;
        break;
      }
    }
    setIsInCart(isIn);
    return isIn;
  }

const getProdInfo = async(pid,sid)=>{
  const obj = {
    type: "product_id",
    product_id: pid,
  };
  const json = await getproduct_info(obj);
  if(json.success){
    let unique_style_code_array = [];
    products.length=0;
    colorVariants.length=0;
  for(let i = 0;i<json.msz.length;i++) {
    if(json.msz[i].style_code === params.style_code){
      products.push(json.msz[i]);
    } else {
      if(unique_style_code_array.includes(json.msz[i].style_code) === false){
        unique_style_code_array.push(json.msz[i].style_code);
        colorVariants.push(json.msz[i]);
      }
    }
  }

  let ind = products[0].product_details.findIndex((obj)=>Object.keys(obj)[0] === "color");
  variant[`color`] = products[0].product_details[ind][`color`]
  setVariant(variant)


  colorVariants.unshift(products[0]);  

  isInWishlist(products[0],list);

  setProducts([...products]);
  setColorVariants([...colorVariants]);
  }
}

  useEffect(()=> {

    getProdInfo(`${params.product_id}`,`${params.sku_id}`);
    if(JSON.parse(localStorage.getItem('userInfo'))===null){
      setCart([]);
    } else {
      setCart(JSON.parse(localStorage.getItem('userInfo')).cart);
    }
    
    }, []);
    
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
      let c_id = localStorage.getItem("customer_id");
      let new_id = uuidv4();
        if(c_id === '' || c_id === null || c_id === undefined){
          let obj = {
            type: 'add',
            subType: 'wishlist',
            productObject: {
              wishlist_id: new_id,
              product_id: products[0].product_id,
              style_code: products[0].style_code
            }
          }
          let json = await updateLocalUserInfo(obj);
          if(json.success){
            let newInfo = JSON.parse(localStorage.getItem('userInfo'));
            setList(newInfo.wishlist);
            isInWishlist(products[0],newInfo.wishlist)
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
            productObj: {wishlist_id: new_id, product_id: products[0].product_id,style_code: products[0].style_code}
          })}).then(async(res)=> {
            const json = await res.json();
          console.log("add",json);
          if(json.success)
          {
            let temp = JSON.parse(localStorage.getItem('userInfo'));
            let newW = [...list];
            newW.push({
              wishlist_id: new_id,
              product_id: products[0].product_id,
              style_code: products[0].style_code
            });
            temp.wishlist = newW;
            localStorage.setItem('userInfo',JSON.stringify(temp));
            setList(newW);
            isInWishlist(products[0],temp.wishlist)
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
              product_id: products[0].product_id,
              style_code: products[0].style_code
            }
          }
          let json = await updateLocalUserInfo(obj);
          if(json.success){
            let newInfo = JSON.parse(localStorage.getItem('userInfo'));
            setList(newInfo.wishlist);
            isInWishlist(products[0],newInfo.wishlist)
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
            let temp = JSON.parse(localStorage.getItem('userInfo'));
            temp.wishlist = [...list].filter(isPresent);
            console.log("TT: ",temp.wishlist)
            localStorage.setItem('userInfo',JSON.stringify(temp));
            setList(temp.wishlist);
            isInWishlist(products[0],temp.wishlist)
          } 
          });         
      } catch (error) {
        console.log(error);
        return {"msz": "Something went wrong", "success": false}
      }
    }
    }

  return (
    products.length === 0 || cart===undefined?<div></div>: <div className="mobilebox-container">
          <div className="mobileicon">
            <div className="mobileicon-circle">
            <i style={{color: 'white',fontSize: '15px'}} class="fa-solid fa-share-nodes"></i>
            </div>
            <div onClick={isWishlisted? removeWishlist : addWishlist} className="mobileicon-circle">
            {isWishlisted?
          <i style={{color: 'red', fontSize: '15px'}} class="fa-solid fa-heart "></i>
        : <i style={{color: 'white', fontSize: '15px'}} class="fa-regular fa-heart "></i>}
            </div>
          </div>
        <div className="mobilebox-1">
        <LeftSubPage setIsInCart={setIsInCart} isInCart={isInCart} selectedStyleCode={selectedStyleCode} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} cart={cart} setCart={setCart} variant={variant} setVariant={setVariant} products={products} colorVariants={colorVariants} getProdInfo={getProdInfo} product_id={params.product_id}></LeftSubPage>
        </div>
        <div className="mobilebox-2">
        <RightSubPage isInCart={isInCart} setIsInCart={setIsInCart} isPresentInCart={isPresentInCart} selectedStyleCode={selectedStyleCode} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} cart={cart} setCart={setCart} variant={variant} setVariant={setVariant} products={products} colorVariants={colorVariants} getProdInfo={getProdInfo} product_id={params.product_id}></RightSubPage>
        </div>
   </div>
  );
};

export default LayoutSplit;