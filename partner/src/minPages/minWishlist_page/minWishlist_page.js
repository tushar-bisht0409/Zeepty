import React, { useEffect, useRef, useState } from 'react'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar';
import MINCreateStore from '../../minComponents/minCreateStore/minCreateStore';
import MINWishCard from '../../minComponents/minWishCard/minWishCard';
import './minWishlist_page.css'

import Modal from 'react-modal';
import { editSellerInfo, getSellerInfo } from '../../store/action/seller_action';
import { postMultipleProductInMongoAndElastic } from '../../store/action/productaction';
import MINProductCard from '../../minComponents/minProductCard/minProductCard';


const MINWishlistPage = () => {

  const [sellerInfo, setSellerInfo] = useState(JSON.parse(localStorage.getItem('sellerInfo')));

  const [sModalIsOpen, setSModalIsOpen] = useState(false);

  const [fModalIsOpen,  ] = useState(false);

  const [cModalIsOpen, setCModalIsOpen] = useState(false);

  const [storeStage, setStoreStage] = useState(3);

  const [loader1, setLoader1] = useState(false);

  // Stage 1 = Saved Nothing, So on clicking Add Product Button Create Modal will appear

  // Stage 2 = Saved Profile Image and Categories, Display Product count and on clicking
  // Add Product Button Edit Product Info and Save it locally and on added 3 products
  // Make Launch Button Visible 

  // Stage 3 = Store Launched, On Add Button Clicked, Directly Add product to Mongo Database

  function identifyStage() {
    const u_data = JSON.parse(localStorage.getItem("sellerInfo"));

    if (u_data.profile_image === undefined || u_data.profile_image === null || u_data.profile_image === "") {
      setStoreStage(1);
    } else if (u_data.store_url === "") {
      setStoreStage(2);
    } else {
      setStoreStage(3);
    }

  }

  const [pCount, setPCount] = useState(0);

  useEffect(() => {

    let lpCount = localStorage.getItem("product_count");
    if (lpCount === null || lpCount === undefined) {
      setPCount(0);
    } else {
      setPCount(parseInt(lpCount));
    }

    identifyStage();
  }, []);


  const cCustomStyles = {
    content: {
      alignSelf: 'center',
      padding: '0px',
      margin: '0px'
    },
    overlay: {zIndex: 1000}
  };

  async function handleLaunch() {

    setLoader1(true);
    const json = await getSellerInfo(localStorage.getItem("influencer_id"));
    if(json.success){
      let allListings = JSON.parse(localStorage.getItem("product_selected"));
      let listingidArr = [];
      let pricesArr = [];
      for(let i = 0;i<allListings.length; i++){
        listingidArr.push(allListings[i].listing_id);
        pricesArr.push(
          {
            listing_id: allListings[i].listing_id,
            price: allListings[i].price
          }
        );
      }

        let obj = {
          listing_ids: listingidArr,
          seller_id: localStorage.getItem("influencer_id"),
          prices: pricesArr,
        };

        const json1 = await postMultipleProductInMongoAndElastic(obj);

        if(json1.success) {
          let obj2 = {
            type: 'store_url',
            seller_id: localStorage.getItem("influencer_id"),
            store_url: `www.xyz.com/${json.msz.user_name}`
          }
          const json2 = await editSellerInfo(obj2);
          if(json2.success) {
            let u_info = JSON.parse(localStorage.getItem("sellerInfo"));
            u_info.store_url = `www.xyz.com/${json.msz.user_name}`;
            localStorage.getItem("sellerInfo",JSON.stringify(u_info));
            window.open('/creator/home');
          } else {
            setLoader1(false)
            return window.alert("Something Went Wrong");
          }
        } else {
          setLoader1(false)
          return window.alert("Something Went Wrong");
        }
      }else{
        setLoader1(false)
          return window.alert("Something Went Wrong");
      }
        setLoader1(false)
  }
  
  return (
    <div className='minWPBox'>
        <div className='minWPTB'>
            <p className='minWPTBT1'>Wishlist</p>
            {storeStage <3 ? <div className='minWPTB-bag'>
                <i class="fa-solid fa-bag-shopping"></i>
                <p className='minWPTB-bag-text'>{pCount}</p>
                </div> : null}
        </div>

        {storeStage <3 ? <div className='minWP-banner'>
            <i class="fa-solid fa-bag-shopping"></i>
            <p className='minWP-banner-text'>Add At Least 3 Products To Launch Your Store</p>
          </div> : null}
        {sellerInfo.wishlist === undefined ? <div></div> :
        <div style={{ overflow: sModalIsOpen || fModalIsOpen ? "hidden" : "scroll" }} className="minWP_mobile_cart">
          {sellerInfo.wishlist.map((p) => (
            <MINProductCard setCModalIsOpen={setCModalIsOpen} storeStage={storeStage} item={p} wishlist={sellerInfo.wishlist} wishlistPage={true} />
          ))}

        </div>}

        <MINBottomNavBar bMode={"Wishlist"}/>

        {/* {storeStage === 2 ? <div className='minWPCountBox'>
        <div className='minWPCount'>{pCount}</div>
        {pCount === 3 ? <div></div> : <div className='minWPCountBoxT1'>Add ${3 - pCount} Products</div>}
      </div> : <div></div>} */}

      <Modal
        className="minCreateModal"
        isOpen={cModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setCModalIsOpen(false)}}
        style={cCustomStyles}>
         <MINCreateStore setModalIsOpen={setCModalIsOpen} />
        </Modal>

        {pCount>=3 && storeStage === 2? loader1 ? <div className='minWPLoader1'></div> : <div onClick={()=>{
            handleLaunch();
          }} className='minWPLaunch'>Launch Store</div>:null}
    </div>
  )
}

export default MINWishlistPage