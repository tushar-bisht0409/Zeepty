import "./layoutSplit.css";
import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { API_URI } from "../../../store/actions/auth_action";
import LeftSubPage from "../leftSubPage/leftSubPage";
import RightSubPage from "../rightSubPage/rightSubPage";
import { getListing } from "../../../store/actions/listing_action";
import { getproduct_info } from "../../../store/actions/product_action";

const LayoutSplit = () => {

  const [data, setData] = useState(undefined)

  const params = useParams();

  const [cart, setCart] = useState(undefined);

  const [variant, setVariant] = useState({});

  const [selectedSKUID, setSelectedSKUID] = useState(undefined);

  const [listing, setListing] = useState(undefined);

  const [products, setProducts] = useState(undefined);

  const [isInCart, setIsInCart] = useState(false);

  const primaryKeys = ["color"];

  const secondaryKeys = ["size"];

  function isPresentInCart(prod,skuid){
    if(primaryKeys.length+secondaryKeys.length === Object.keys(variant).length){
    let isIn = false;
    for(let i = 0;i<cart.length;i++){
      if(cart[i].productID === prod.productID && skuid===""){
        isIn = false;
        setIsInCart(false);
        break;
      } else if(cart[i].productID === prod.productID && cart[i].SKUID === skuid){
        isIn = true;
        setIsInCart(true);
        break;
      }
    }
    console.log("CCC: ",cart,": ",isIn)
    return isIn;
  } else{
    setIsInCart(false);
    return false;
  }
  }

const getProdInfo = async(pid,sid)=>{
  const obj = {
    type: "productSKU",
    manufacturerID: "",
    productID: pid,
    SKUID: sid,
  };
  const json = await getproduct_info(obj);
  console.log("SASA: ",json);
  if(json.success){
    setProducts(json.msz);
    if(secondaryKeys.length===0){
      setSelectedSKUID(params.SKUID);
        isPresentInCart(json.msz,json.msz.SKUID);
    }
  }
}

  useEffect(()=> {
    const getdata = async()=>{
      try {
        const response = await fetch(`${API_URI}/getProduct?type=${encodeURIComponent(`productID`)}&productID=${encodeURIComponent(`${params.productID}`)}`, {
            method: 'GET'});
        const res = await response.json();
        setData(res.msz[0]);
        getProdInfo(`${params.productID}`,`${params.SKUID}`);
    }catch (error) {
        console.log(error);
      }
    };

    getdata();
    if(JSON.parse(localStorage.getItem('userInfo'))===null){
      setCart([]);
    } else{
      setCart(JSON.parse(localStorage.getItem('userInfo')).cart);
    }
    
    }, []);
  return (
    products ===undefined || cart===undefined?<div></div>: <div className="box-container">
        <div className="box-1">
        <LeftSubPage isInCart={isInCart} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} cart={cart} setCart={setCart} variant={variant} setVariant={setVariant} products={products} getProdInfo={getProdInfo} productID={params.productID}></LeftSubPage>
        </div>
        <div className="box-2">
        <RightSubPage isPresentInCart={isPresentInCart} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} cart={cart} setCart={setCart} variant={variant} setVariant={setVariant} products={products} getProdInfo={getProdInfo} productID={params.productID}></RightSubPage>
        </div>
   </div>
  );
};

export default LayoutSplit;