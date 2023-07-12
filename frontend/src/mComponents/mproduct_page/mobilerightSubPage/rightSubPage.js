import "./rightSubPage.css";
import React,{useEffect,useRef,useState} from "react";
import RatingReviews from "../mobilerightpageRatingsReviews/ratingReviews";
import VariantColor from "./variantColor/variantColor";
import VariantSize from "./variantSize/variantSize";
import MRatingBox from "../../mratingBox/mratingBox";
import { API_URI } from "../../../store/actions/auth_action";
import { updateLocalUserInfo } from "../../../store/actions/notLoggedInUser_action";
import Modal from 'react-modal';


const RightSubPage = ({isInCart,setIsInCart,isPresentInCart,selectedSKUID, setSelectedSKUID, selectedStyleCode, cart,setCart, variant, setVariant,products,colorVariants, product_id}) => {

  const ratingRef = useRef(null);
  const [isFloating, setIsFloating] = useState(true);
  const [isInViewPort, setIsInViewPort] = useState(false);
  const [sModal,setSModal] = useState(false);


    const customStyles = {
        content: {
          padding: '0px',
          height: 'fit-content',
        },
        overlay: {zIndex: 1000}
      };

  let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if(isInViewPort){
  if (prevScrollpos > currentScrollPos) {
    setIsFloating(true);
  } else {
    setIsFloating(false);
  }
}
  prevScrollpos = currentScrollPos;
};

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInViewPort(true)
        } else{
          setIsInViewPort(false)
        }
      },
      { root: document, threshold: 0 }
    );

    if (ratingRef.current) {
      observer.observe(ratingRef.current);
    }

    return () => {
      if (ratingRef.current) {
        observer.unobserve(ratingRef.current);
      }
    };
  }, [ratingRef]);


  const [selectedProduct,setSelectedProduct] = useState(products[0]);

  const discount = Math.round((selectedProduct.mrp - selectedProduct.price)*100/selectedProduct.mrp);

  function getProductDetailTitle(title) {
    return title.split("_").map((word) => {
        if(title.includes("_")){
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else{
            return title[0].toUpperCase() + title.substring(1)
        }
    }).join(" ")
}

const addToCart = async()=> {
  let c_id = localStorage.getItem('customer_id');
  if(c_id ===null){
    if(selectedSKUID != undefined){
    let obj = {
      type: 'add',
      subType: 'cart',
      productObject: {
        product_id: products[0].product_id,
        listing_id: products[0].listing_id,
        sku_id: selectedSKUID,
        style_code: selectedStyleCode,
        quantity: 1,
      }
    }
    let json = await updateLocalUserInfo(obj);
    if(json.success){
      let newInfo = JSON.parse(localStorage.getItem('userInfo'));
        setCart(newInfo.cart);
        setIsInCart(true);
    }
  } else {
    // window.alert('Select the size');
    setSModal(true)
  }
  }
  else if(selectedSKUID != undefined) {
  try {
    await fetch(`${API_URI}/editcustomerinfo`, {
      method: 'POST', headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        type: 'add',
        subType: 'cart',
        customer_id: c_id,
        product: {
          product_id: products[0].product_id,
          listing_id: products[0].listing_id,
          sku_id: selectedSKUID,
          style_code: selectedStyleCode,
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
            product_id: products[0].product_id,
            listing_id: products[0].listing_id,
            sku_id: selectedSKUID,
            style_code: selectedStyleCode,
            quantity: 1,
          }
        );
        temp.cart = newW;
        localStorage.setItem('userInfo',JSON.stringify(temp));
        setCart(newW);
        setIsInCart(true);
      } //add to list
      });
  } catch (error) {
    console.log(error);
    return {"msz": "Something went wrong", "success": false}
  }
} else {
  setSModal(true)
}
}

const goToCart = async()=> {
  window.open(`/cart`,'_self')
  console.log("clicked")
}

  return (
    <div className="mobilerightSubPage">
      <div className="mobilerightSubPageBox">
    <div className="mobileproductName">{selectedProduct.brand}</div>
    <div className="mobileproductTitle">{selectedProduct.product_name}</div>

    <div className="mobileratingsReviews">
    <MRatingBox stars={selectedProduct.rating_total} star_size={'12px'}></MRatingBox>
    <div className="mobileratings">({selectedProduct.rating_count})</div>
    </div>
    
    <div className="mobileprice">
    <div className="mobilemrp">MRP <s>₹{selectedProduct.mrp}</s></div>
    <div className="mobilepriceAfterDiscount">₹{selectedProduct.price}</div>
    <div className="mobilediscountPercent">({discount}% OFF)</div>
    </div>
    
    <div className="mobilevariantTitle">Color</div>
    <div className="mobilevariantColorBox">
      {colorVariants===undefined ? <div></div> : colorVariants.map((p) => (
      <VariantColor isPresentInCart={isPresentInCart} isPrimary={true} products={p} kkey={"color"} setSelectedSKUID={setSelectedSKUID} variant={variant} setVariant={setVariant} product_id={product_id} setSelectedProduct={setSelectedProduct}></VariantColor>
      ))}
    </div> 
      
      <div className="mobilevariantTitle">Size</div>
      
        <div className="mobilevariantColorBox">
        {products.map((p) => (
        <VariantSize key={selectedSKUID === p.sku_id ?"OOO" : p.sku_id} isPresentInCart={isPresentInCart} isPrimary={false} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} products={p} kkey={"size"} variant={variant} setVariant={setVariant} setSelectedProduct={setSelectedProduct}></VariantSize>
        ))}
        </div>
      


    <div className="mobileproductDetailsHeading">Product Details</div>
    <div style={{display: 'flex',flexDirection: 'row',paddingLeft: '4vw',flexWrap: "wrap"}}>   
    {selectedProduct.product_details.map((p) => (
      <div className="mobileproductDetailBox">
       <div className="mobileProductdetailtitle">{getProductDetailTitle(Object.keys(p)[0])}</div>
      <div className="mobileProductDetailMain">
        <div className="mobileProductdetailvalue">{p[Object.keys(p)[0]]}</div>
      </div>
      </div>
      ))}
      {selectedProduct.other_details.map((p) => (
      <div className="mobileproductDetailBox">
       <div className="mobileProductdetailtitle">{getProductDetailTitle(Object.keys(p)[0])}</div>
      <div className="mobileProductDetailMain">
        <div className="mobileProductdetailvalue">{p[Object.keys(p)[0]]}</div>
      </div>
      </div>
      ))}
      </div>
      </div>

      

    <RatingReviews item={selectedProduct}></RatingReviews>
    <div ref={ratingRef}></div>
    <div className={isFloating ? "mobilebuttons-float" : "mobilebuttons"}>
    {isInCart?
   <div onClick={goToCart} className="mobilegoToCartt">
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '16px', color: "orange",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Go To Cart</p></div>:<div className="mobileaddToCart" onClick={addToCart}>
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '16px', color: "white",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Add To Cart</p></div>}
   <div className="mobilebuyNow">Buy Now</div>
   </div>

   <Modal
        isOpen={sModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setSModal(false)}}
        overlayClassName="mobilerightSubPage-sizeModal-overlay"
        className="mobilerightSubPage-sizeModal"
        style={customStyles}>
            <div className="mobilerightSubPage-sizeModal-box">
            <div onClick={()=>{setSModal(false)}} className='mobilerightSubPage-sizeModal-box-close'>
                <div className='mobilerightSubPage-sizeModal-box-close-div'></div>
            </div>
            <p className="mobilerightSubPage-sizeModal-box-head">Select Size</p>
            <div className="mobilerightSubPage-sizeModal-box-body">
        {products.map((p) => (
        <VariantSize key={selectedSKUID === p.sku_id ?"OOO" : p.sku_id} isPresentInCart={isPresentInCart} isPrimary={false} selectedSKUID={selectedSKUID} setSelectedSKUID={setSelectedSKUID} products={p} kkey={"size"} variant={variant} setVariant={setVariant} setSelectedProduct={setSelectedProduct}></VariantSize>
        ))}
        </div>
        <div className="mobilebuttons">
    {isInCart?
   <div onClick={goToCart} className="mobilegoToCartt">
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '16px', color: "orange",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Go To Cart</p></div>:<div className="mobileaddToCart" onClick={addToCart}>
   <i style={{alignSelf: 'center', margin: '0px 8px' , fontSize: '16px', color: "white",cursor:"pointer"}} className="fa fa-shopping-cart" ></i>
   <p>Add To Cart</p></div>}
   <div className="mobilebuyNow">Buy Now</div>
   </div>
            </div>
        </Modal>

    </div>
  );
};

export default RightSubPage;