import React, { useEffect, useState } from 'react'
import MINRatingBox from '../minRatingBox/minRatingBox'
import './minProductCard.css';
import Modal from 'react-modal';
import { API_URI } from '../../store/action/type';
import {v4 as uuidv4} from 'uuid';
import { getlisting_info } from '../../store/action/listingaction';
import { getproduct_info, postmultipleproductrequest, postMultipleProductInMongoAndElastic, saveProduct } from '../../store/action/productaction';


const MINProductCard = ({setCModalIsOpen,storeStage, item,lMode,increasePCount}) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('sellerInfo')).wishlist);   //wishlist data

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const [loader1, setLoader1] = useState(false);
  const [loader2, setLoader2] = useState(false)
  const [isSame, setIsSame] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState(undefined);
  const [productRequestData, setProductRequestData] = useState([]);


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
    const [allListing,setAllListing] = useState([]);

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

      async function addProductRequest () {
        // if(storeStage === 1){
        //   setCModalIsOpen(true);
        // }else if(storeStage === 2){
          
        //   let sProduct = JSON.parse(localStorage.getItem("product_selected"));
        // if(sProduct === null || sProduct === undefined){
        //     sProduct = [];
        // }

        // let obj = {
        //     listing_id: listing.listing_id,
        //     new_info: [],
        // };

        // for(let i = 0; i<productRequestData.length; i++){
        //   obj.new_info.push({
        //     style_code: productRequestData[i].style_code,
        //     new_title: productRequestData[i].new_title,
        //     new_description: productRequestData[i].new_description,
        //     new_price: productRequestData[i].new_price
        //   })
        // }
        // sProduct.push(obj);
        // localStorage.setItem("product_selected",JSON.stringify(sProduct));
        // increasePCount();
        // productAdded(listing);
        // } else {
          if(isSame) {
            for(let i = 1; i<productRequestData.length; i++){
              productRequestData[i].new_title = productRequestData[0].new_title;
              productRequestData[i].new_description = productRequestData[0].new_description;
              productRequestData[i].new_price = productRequestData[0].new_price;
            }
          }
          setProductRequestData([...productRequestData]);
          let obj = {
            products: productRequestData,
          };
          console.log("KKKL ",obj)
          const json = await postmultipleproductrequest(obj);
          console.log(json)
          if(json.success){
          // await productAdded(listing);
          setLoader1(false);
          setModalIsOpen(false);
          } else {
            window.alert('Something Went Wrong')
          }
        // }
    }

    async function productAdded(prod) {
      let isP = false
      if(storeStage == 2){
        let sProduct = JSON.parse(localStorage.getItem("product_selected"));
        if(sProduct === null || sProduct === undefined){
            sProduct = [];
        }
        for(let i = 0; i<sProduct.length;i++) {
            if(sProduct[i].listing_id === prod.listing_id){
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
    setIsSame(true);
    // setNewName(listing.product_name);
    //       let ind = listing.other_details.findIndex((obj)=> Object.keys(obj)[0] === "description");
    //       if(ind !== -1) {
    //         setNewDesc(listing.other_details[ind]['description']);
    //       }
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
    },[]);

    async function handleGetAllListing () {
      const obj = {
        listing_id: item.listing_id,
        type: `listing_id`
      }
      const json = await getlisting_info(obj);
      if(json.success)
      {
        productRequestData.length = 0;
        let p_id = uuidv4();
        let i_id = localStorage.getItem('influencer_id')
        let newRData = listing;
        delete newRData._id;
        let p_size = {size: listing.product_size.size, sku_id: listing.sku_id};
        newRData.listing_request_id = uuidv4();
        newRData.product_id = p_id;
        newRData.seller_id = i_id;
        newRData.new_price = 0;
        newRData.new_title = "";
        newRData.new_description = "";
        newRData.product_size = [p_size];
        productRequestData.push(newRData);

        
        for(let i =0; i<json.msz.length; i++){        
          let ind = productRequestData.findIndex((item)=>(item.style_code === json.msz[i].style_code))
          if(ind === -1){

            //Defining Product Request Data
            let newRData2 = json.msz[i];
            delete newRData._id;
            let p_size = {size: json.msz[i].product_size.size, sku_id: json.msz[i].sku_id};
            newRData2.listing_request_id = uuidv4();
            newRData2.product_id = p_id;
            newRData2.seller_id = i_id;
            newRData2.new_price = 0;
            newRData2.new_title = "";
            newRData2.new_description = "";
            newRData2.product_size = [p_size];
            productRequestData.push(newRData2);

            } else {
              let p_size = {size: json.msz[i].product_size.size, sku_id: json.msz[i].sku_id};
              if(json.msz[i].sku_id !== listing.sku_id){
                delete productRequestData[ind]._id;
                productRequestData[ind].product_size.push(p_size);
              }
            }
        }
        setAllListing(json.msz);
        setProductRequestData([...productRequestData]);
      } else{
        window.alert("Something Went Wrong");
      }
    }

    function handleProductRequestData (kName,index,value) {
        kName = kName.replace(/\s+/g, "_").toLowerCase();
        productRequestData[index][`${kName}`] = value;
        setProductRequestData([...productRequestData]);
    }


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
        onAfterOpen={()=>{handleGetAllListing(); handleModalData()}}
        className="minPCModal"
        overlayClassName="minPCModalOverLay"
        style={customStyles}>
         <>
         {productRequestData.length === 0 ? null : <div className='minPCModal-box'>
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
                    <input value={productRequestData[0].new_title} onChange={(val)=>{handleProductRequestData('new_title',0,val.target.value)}} type="text" className='minPCModalPBEditBoxI'></input>
                </div> 

                <div className='minPCModalPBEditBox'>
                    <p className='minPCModalPBEditBoxT'>Description (Optional)</p>
                    <textarea value={productRequestData[0].new_description} onChange={(val)=>{handleProductRequestData('new_description',0,val.target.value)}} type="text" rows="2" cols="50" className='minPCModalPBEditBoxI'></textarea>
                </div>   

                <div className='minPCModalPBEditBox2'>
                    <p className='minPCModalPBEditBox2T'>Price</p>
                    <div className='minPCModalPBEditBox2D'>
                      <input value={productRequestData[0].new_price} onChange={(val)=>{handleProductRequestData('new_price',0,val.target.value);}} type="number" className='minPCModalPBEditBox2DI'></input>
                      <p className='minPCModalPBEditBox2DT'>Your price should be lower than this Rs. Xyz</p>
                    </div>
                </div>        

                {productRequestData.length === 0 ? null : <div onClick={()=>{setSelectedVariant(productRequestData[1]);setIsSame(!isSame);}} className='minPCModal-same'>
                  <div className={isSame ? 'minPCModal-same-checkbox' : 'minPCModal-same-checkbox-inactive'}>
                  <i class="fa-solid fa-check"></i>
                  </div>
                  <p className='minPCModal-same-text'>Keep the details same for other variants</p>
                  </div>}

                  {productRequestData.length === 0 ? null : <p className='minPCModal-othervariants'>All Products</p> }

                  <div className='minPCModal-variants'>
                    {productRequestData.map((item,index)=>(
                      item.style_code === listing.style_code ? null : <div className='minPCModal-variants-box'>
                      <div onClick={()=>{setSelectedVariant(item)}} className={selectedVariant === undefined || isSame ? "minPCModal-variants-item-inactive" : selectedVariant.style_code === item.style_code ? 'minPCModal-variants-item' : 'minPCModal-variants-item-inactive'}>
                        <img className={selectedVariant === undefined || isSame ? "minPCModal-variants-item-img-inactive" : selectedVariant.style_code === item.style_code ? 'minPCModal-variants-item-img' : 'minPCModal-variants-item-img-inactive'} src={item.media_urls[0]}/>
                      </div>
                      {isSame ? null : <>  <div className='minPCModalPB'>
                <img className='minPCModalPBImage' src={selectedVariant===undefined? "":selectedVariant.media_urls[0]}/>
                <div className='minPCModalPBInfoBox'>
                    <p className='minPCModalPBInfoBoxB'>{selectedVariant===undefined? "":selectedVariant.brand}</p>
                    <p className='minPCModalPBInfoBoxT'>{selectedVariant===undefined? "":selectedVariant.product_name}</p>
                    <div className="minPCModalPBInfoBoxP">
                    <div className="minPCModalPBInfoBoxPP">Rs.{selectedVariant===undefined? "":selectedVariant.price}</div>
                    <s className="minPCModalPBInfoBoxPM">Rs.{selectedVariant===undefined? "":selectedVariant.mrp}</s>
                    <div className="minPCModalPBInfoBoxPD">{selectedVariant===undefined? "":Math.round((selectedVariant.mrp - selectedVariant.price)*100/selectedVariant.mrp)}% Off</div>
                    </div>
                    <div className="minPCModalPBInfoBoxRB">
                    <MINRatingBox stars={selectedVariant===undefined? 0:selectedVariant.rating_count}></MINRatingBox>
                    <div className="minPCModalPBInfoBoxRBText">({selectedVariant===undefined? "":selectedVariant.rating_total})</div>
                    </div>
                </div>
            </div>  
            <div className='minPCModalPBEditBox'>
                    <p className='minPCModalPBEditBoxT'>Product Name</p>
                    <input value={productRequestData[index].new_title} onChange={(val)=>{ handleProductRequestData('new_title',index,val.target.value)}} type="text" className='minPCModalPBEditBoxI'></input>
                </div> 

                <div className='minPCModalPBEditBox'>
                    <p className='minPCModalPBEditBoxT'>Description (Optional)</p>
                    <textarea value={productRequestData[index].new_description} onChange={(val)=>{handleProductRequestData('new_description',index,val.target.value)}} type="text" rows="2" cols="50" className='minPCModalPBEditBoxI'></textarea>
                </div>   

                <div className='minPCModalPBEditBox2'>
                    <p className='minPCModalPBEditBox2T'>Price</p>
                    <div className='minPCModalPBEditBox2D'>
                      <input value={productRequestData[index].new_price} onChange={(val)=>{handleProductRequestData('new_price',index,val.target.value)}} type="number" className='minPCModalPBEditBox2DI'></input>
                      <p className='minPCModalPBEditBox2DT'>Your price should be lower than this Rs. Xyz</p>
                    </div>
                </div>

                </> }
                      </div> 
                    ))}
                    </div>   

                 

                <div onClick={()=>{ addProductRequest() }} className='minPCModalAddButton'>Submit Product</div>
         </div>
}
         </>
        </Modal>
    </div>
  )
}

export default MINProductCard