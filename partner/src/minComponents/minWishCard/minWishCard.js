import React, { useEffect, useState } from 'react'
import MINRatingBox from '../minRatingBox/minRatingBox'
import './minWishCard.css';
import Modal from 'react-modal';
import { API_URI } from '../../store/action/type';
import {v4 as uuidv4} from 'uuid';
import { getlisting_info } from '../../store/action/listingaction';
import { getproduct_info, postMultipleProductInMongoAndElastic, saveProduct } from '../../store/action/productaction';


const MINWishCard = ({setCModalIsOpen,storeStage, item,lMode,increasePCount}) => {

    const [list,setList] = useState(JSON.parse(localStorage.getItem('sellerInfo')).wishlist);   //wishlist data

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const [loader1, setLoader1] = useState(false)

  function isInWishlist (prod,wList){
    console.log(wList);
    setIsWishlisted(undefined)
    for(let i = 0; i<wList.length; i++){
      if(wList[i].listing_id === prod.listing_id && wList[i].sku_id === prod.sku_id){
        setIsWishlisted(wList[i]);
        break;
      }
    }
  }

  function isPresent(val) {
    console.log("VV: ",val)
    if(val.wishlist_id === item.wishlist_id){
      return false;
    } 
    return true;
  }


  const removeWishlist = async()=> {
    try {
      await fetch(`${API_URI}/editsellerinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'delete',
          subType: 'wishlist',
          seller_id: localStorage.getItem('influencer_id'),
          wishlist_id: item.wishlist_id,
        })}).then(async (res) =>{
          const json = await res.json();
        if(json.success){
          console.log('remove');
          let temp = JSON.parse(localStorage.getItem('sellerInfo'));
          temp.wishlist = [...list].filter(isPresent);
          console.log("TT: ",temp.wishlist)
          localStorage.setItem('sellerInfo',JSON.stringify(temp));
          setList(temp.wishlist);
          isInWishlist(product,temp.wishlist)
        } 
        });         
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }

  const routeToProductDesc = ()=>{
    window.open(`/m2/${product.listing_id}/${product.sku_id}`);
  }

    const [product,setProduct] = useState(undefined);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [newPrice,setNewPrice] = useState("");
    const [newMrp,setNewMrp] = useState("");

    const [isAdded, setIsAdded] = useState(false);

    const customStyles = {
        content: {
          alignSelf: 'center',
          padding: '0px',
          margin: '15vh 0px',
          height: 'fit-content',
          alignSelf: 'center',
        },
        overlay: {zIndex: 1000}
      };

      async function addProduct () {

        if(storeStage === 1){
          setCModalIsOpen(true);
        }else if(storeStage === 2){
          let sProduct = JSON.parse(localStorage.getItem("product_selected"));

        if(sProduct === null || sProduct === undefined){
            sProduct = [];
        }

        const obj = {
            listing_id: product.listing_id,
            sku_id: product.sku_id,
            price: newPrice,
            mrp: newMrp
        };

        sProduct.push(obj);
        localStorage.setItem("product_selected",JSON.stringify(sProduct));
        increasePCount();
        productAdded(product);
        } else{
          let obj2 = {
            listing_ids: [product.listing_id],
            seller_id: localStorage.getItem("influencer_id"),
            prices: [{
              listing_id: product.listing_id,
              price: newPrice
            }],
          };
  
          const json = await postMultipleProductInMongoAndElastic(obj2);
          if(json.success){
          await productAdded(product);
          setLoader1(false);
          } else{
            window.alert('Something Went Wrong')
          }

        }
        // localStorage.removeItem("product_selected");
    }

    async function productAdded(prod) {
      let isP = false
      if(storeStage == 2){
        let sProduct = JSON.parse(localStorage.getItem("product_selected"));
        if(sProduct === null || sProduct === undefined){
            sProduct = [];
        }
        console.log(sProduct);
        for(let i = 0; i<sProduct.length;i++) {
            if(sProduct[i].listing_id === prod.listing_id && sProduct[i].sku_id === prod.sku_id){
                isP = true;
                break;
            }
        }
      } else if(storeStage == 3){
        const obj = {
          type: "sellerListing",
          seller_id: localStorage.getItem("influencer_id"),
          listing_id: prod.listing_id
        };
        console.log(obj)
        const json = await getproduct_info(obj);
        console.log(json)
        if(json.success){
          isP = true;
        }
      }
      setIsAdded(isP);
    }

    
    useEffect(()=>{
        const getProduct = async ()=> {
            const obj = {
                listing_id: item.listing_id,
                sku_id: item.sku_id,
                type: `listingSKU`
              }
              const json = await getlisting_info(obj);
              if(json.success)
              {
                setProduct(json.msz);
                productAdded(json.msz);
                isInWishlist(json.msz,list)
              }
          }
          getProduct();
    },[])


  return (
    
   isWishlisted ? <div className="minWCBox" >
      <div className="minWCImageBox">
        <img onClick={()=>{}} className="minWCImage" src={product===undefined? "":product.media_urls[0]} alt="logos"/>
        {isWishlisted?
          <div onClick={removeWishlist} className="minWCcardWishlist"><i style={{color: 'lightgrey',fontSize: '20px'}} class="fa-solid fa-circle-xmark"></i></div>
        : <div onClick={()=>{}} className="minWCcardWishlist"><i style={{fontSize: '20px'}} class="fa-regular fa-heart fa-2x"></i></div>}
      </div>
      <div onClick={()=>{}} className="minWCInfoBox">
        <p className="minWCInfoB">{product===undefined? "":product.brand}</p>
        <p className="minWCInfoT">{product===undefined? "":product.product_name}</p>
        <div className="minWCInfoP">
          <div className="minWCInfoPP">Rs.{product===undefined? "":product.price}</div>
          <s className="minWCInfoPM">Rs.{product===undefined? "":product.mrp}</s>
          <div className="minWCInfoPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
         </div>       
        <div className="minWCInfoRB">
          <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
          <div className="minWCInfoRBText">({product===undefined? "":product.rating_total})</div>
        </div>
        { loader1? <div className='minWCLoader1'></div> : isAdded? <div className='minWCAdded'>Added</div> :
        <div onClick={()=>{
          if(storeStage===1){
            setCModalIsOpen(true);
          } else{
          setModalIsOpen(true)
          }
          }} className='minWCAdd'>Add Product</div>}
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <>
         <div className='minWCModal'>
            <div className='minWCModalClose'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
                fontSize: '20px',
                color: 'black'
        }} class="fa-solid fa-xmark"></i>
            </div>
            <div className='minWCModalPB'>
                <img className='minWCModalPBImage' src={product===undefined? "":product.media_urls[0]}/>
                <div className='minWCModalPBInfoBox'>
                    <p className='minWCModalPBInfoBoxB'>{product===undefined? "":product.brand}</p>
                    <p className='minWCModalPBInfoBoxT'>{product===undefined? "":product.product_name}</p>
                    <div className="minWCModalPBInfoBoxP">
                    <div className="minWCModalPBInfoBoxPP">Rs.{product===undefined? "":product.price}</div>
                    <s className="minWCModalPBInfoBoxPM">Rs.{product===undefined? "":product.mrp}</s>
                    <div className="minWCModalPBInfoBoxPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
                    </div>
                    <div className="minWCModalPBInfoBoxRB">
                    <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
                    <div className="minWCModalPBInfoBoxRBText">({product===undefined? "":product.rating_total})</div>
                    </div>
                </div>
            </div>
            <div className='minWCModalPBEditBox'>
                    <p className='minWCModalPBEditBoxT'>Selling Price</p>
                    <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minWCModalPBEditBoxI'></input>
            </div>

                <div onClick={()=>{ addProduct(); ;setModalIsOpen(false)}} className='minWCModalAddButton'>Add Product</div>
         </div>
         </>
        </Modal>
    </div> : null
  )
}

export default MINWishCard