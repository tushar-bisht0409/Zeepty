import React, { useEffect, useState } from 'react'
import MINRatingBox from '../minRatingBox/minRatingBox'
import './minProductCard.css';
import Modal from 'react-modal';
import { API_URI } from '../../store/action/type';
import {v4 as uuidv4} from 'uuid';
import { getlisting_info } from '../../store/action/listingaction';
import { getproduct_info, postMultipleProductInMongoAndElastic, saveProduct } from '../../store/action/productaction';


const MINProductCard = ({setCModalIsOpen,storeStage, item,lMode,increasePCount}) => {

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
    if(val.wishlist_id === isWishlisted.wishlist_id){
      return false;
    } 
    return true;
  }

  const addWishlist = async()=> {
    try {
      let new_id = uuidv4();
      await fetch(`${API_URI}/editsellerinfo`, {
        method: 'POST', headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          type: 'add',
          subType: 'wishlist',
          seller_id: localStorage.getItem('influencer_id'),
          wishlistObj: {wishlist_id: new_id, listing_id: listing.listing_id,sku_id: listing.sku_id}
        })}).then(async(res)=> {
          const json = await res.json();
        console.log("add",json);
        if(json.success)
        {
          let temp = JSON.parse(localStorage.getItem('sellerInfo'));
          let newW = [...list];
          newW.push({
            wishlist_id: new_id,
            listing_id: listing.listing_id,
            sku_id: listing.sku_id
          });
          temp.wishlist = newW;
          localStorage.setItem('sellerInfo',JSON.stringify(temp));
          setList(newW);
          isInWishlist(listing,temp.wishlist)
        } //add to list
        });
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
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
          wishlist_id: isWishlisted.wishlist_id,
        })}).then(async (res) =>{
          const json = await res.json();
        if(json.success){
          console.log('remove');
          let temp = JSON.parse(localStorage.getItem('sellerInfo'));
          temp.wishlist = [...list].filter(isPresent);
          console.log("TT: ",temp.wishlist)
          localStorage.setItem('sellerInfo',JSON.stringify(temp));
          setList(temp.wishlist);
          isInWishlist(listing,temp.wishlist)
        } 
        });         
    } catch (error) {
      console.log(error);
      return {"msz": "Something went wrong", "success": false}
    }
  }

  const routeToProductDesc = ()=>{
    window.open(`/m2/${listing.listing_id}/${listing.sku_id}`);
  }

    const [listing,setListing] = useState(undefined);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [newPrice,setNewPrice] = useState("");

    const [newName,setNewName] = useState("");
    const [newDesc,setNewDesc] = useState("");


    const [isAdded, setIsAdded] = useState(false);

    const customStyles = {
        content: {
          padding: '0px',
          height: 'fit-content',
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
            listing_id: listing.listing_id,
            sku_id: listing.sku_id,
            price: newPrice,
        };

        sProduct.push(obj);
        localStorage.setItem("product_selected",JSON.stringify(sProduct));
        increasePCount();
        productAdded(listing);
        } else{
          let obj2 = {
            listing_ids: [listing.listing_id],
            seller_id: localStorage.getItem("influencer_id"),
            prices: [{
              listing_id: listing.listing_id,
              price: newPrice
            }],
          };
  
          const json = await postMultipleProductInMongoAndElastic(obj2);
          if(json.success){
          await productAdded(listing);
          setLoader1(false);
          } else {
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

    
  function handleModalData() {
    setNewName(listing.product_name);
          let ind = listing.other_details.findIndex((obj)=> Object.keys(obj)[0] === "description");
          if(ind !== -1) {
            setNewDesc(listing.other_details[ind]['description']);
          }
  }

    useEffect(()=>{
        const getListing = async ()=> {
            const obj = {
                listing_id: item.listing_id,
                sku_id: item.sku_id,
                type: `listingSKU`
              }
              const json = await getlisting_info(obj);
              console.log(json);
              if(json.success)
              {
                setListing(json.msz);
                productAdded(json.msz);
                isInWishlist(json.msz,list)
              }
          }
          getListing();
    },[])


  return (
    
    <div className="minPCBox" >
      <div className="minPCImageBox">
        <img onClick={()=>{}} className="minPCImage" src={listing===undefined? "":listing.media_urls[0]} alt="logos"/>
        {isWishlisted?
          <div onClick={removeWishlist} className="minMPcardWishlist"><i style={{color: 'red', fontSize: '20px'}} class="fa-solid fa-heart fa-2x"></i></div>
        : <div onClick={addWishlist} className="minMPcardWishlist"><i style={{fontSize: '20px'}} class="fa-regular fa-heart fa-2x"></i></div>}
      </div>
      <div onClick={()=>{}} className="minPCInfoBox">
        <p className="minPCInfoB">{listing===undefined? "":listing.brand}</p>
        <p className="minPCInfoT">{listing===undefined? "":listing.product_name}</p>
        <div className="minPCInfoP">
          <div className="minPCInfoPP">Rs.{listing===undefined? "":listing.price}</div>
          <s className="minPCInfoPM">Rs.{listing===undefined? "":listing.mrp}</s>
          <div className="minPCInfoPD">{listing===undefined? "":Math.round((listing.mrp - listing.price)*100/listing.mrp)}% Off</div>
         </div>       
        <div className="minPCInfoRB">
          <MINRatingBox stars={listing===undefined? 0:listing.rating_count}></MINRatingBox>
          <div className="minPCInfoRBText">({listing===undefined? "":listing.rating_total})</div>
        </div>
        { loader1? <div className='minPCLoader1'></div> : isAdded? <div className='minPCAdded'>Added</div> :
        <div onClick={()=>{
          if(storeStage===1){
            setCModalIsOpen(true);
          } else{
          setModalIsOpen(true)
          }
          }} className='minPCAdd'>Add Product</div>}
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        onAfterOpen={()=>{handleModalData()}}
        className="minPCModal"
        overlayClassName="minPCModalOverLay"
        style={customStyles}>
         <>
         <div className='minPCModal-box'>
            <div onClick={()=>{setModalIsOpen(false)}} className='minPCModalClose'>
            </div>
            <div className='minPCModalPB'>
                <img className='minPCModalPBImage' src={listing===undefined? "":listing.media_urls[0]}/>
                <div className='minPCModalPBInfoBox'>
                    <p className='minPCModalPBInfoBoxB'>{listing===undefined? "":listing.brand}</p>
                    <p className='minPCModalPBInfoBoxT'>{listing===undefined? "":listing.product_name}</p>
                    <div className="minPCModalPBInfoBoxP">
                    <div className="minPCModalPBInfoBoxPP">Rs.{listing===undefined? "":listing.price}</div>
                    <s className="minPCModalPBInfoBoxPM">Rs.{listing===undefined? "":listing.mrp}</s>
                    <div className="minPCModalPBInfoBoxPD">{listing===undefined? "":Math.round((listing.mrp - listing.price)*100/listing.mrp)}% Off</div>
                    </div>
                    <div className="minPCModalPBInfoBoxRB">
                    <MINRatingBox stars={listing===undefined? 0:listing.rating_count}></MINRatingBox>
                    <div className="minPCModalPBInfoBoxRBText">({listing===undefined? "":listing.rating_total})</div>
                    </div>
                </div>
            </div>

            <p className='minPCModalPBHint'>Changing product name and description may help in getting more orders</p>
                <div className='minPCModalPBEditBox'>
                    <p className='minPCModalPBEditBoxT'>Product Name</p>
                    <input value={newName} onChange={(val)=>{setNewName(val.target.value)}} type="text" className='minPCModalPBEditBoxI'></input>
                </div> 

                <div className='minPCModalPBEditBox'>
                    <p className='minPCModalPBEditBoxT'>Description</p>
                    <textarea value={newDesc} onChange={(val)=>{setNewDesc(val.target.value)}} type="text" rows="2" cols="50" className='minPCModalPBEditBoxI'></textarea>
                </div>   

                <div className='minPCModalPBEditBox2'>
                    <p className='minPCModalPBEditBox2T'>Price</p>
                    <div className='minPCModalPBEditBox2D'>
                      <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minPCModalPBEditBox2DI'></input>
                      <p className='minPCModalPBEditBox2DT'>Your price should be lower than this Rs. Xyz</p>
                    </div>
                </div>                

                <div onClick={()=>{ addProduct(); ;setModalIsOpen(false)}} className='minPCModalAddButton'>Submit Product</div>
         </div>
         </>
        </Modal>
    </div>
  )
}

export default MINProductCard