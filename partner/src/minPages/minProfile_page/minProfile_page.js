import React, { useEffect, useRef, useState } from 'react'
import './minProfile_page.css'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar'
import { getStoreInformation } from '../../store/action/seller_action'
import Modal from 'react-modal';
import MINEditStore from '../../minComponents/minEditStore/minEditStore';


const arr = [{ account_type: "Instagram", user_name: "insta_name", is_verified: true},
{ account_type: "Whatsapp", user_name: "app_name", is_verified: true},
{ account_type: "Youtube", user_name: "you_name", is_verified: false},
{ account_type: "Snapchat", user_name: "snap_name", is_verified: true}]

const MINProfilePage = () => {

    const iconObject = {
        Instagram: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#cd486b",
          }} class="fa-brands fa-instagram"></i>,
        Facebook: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#4267B2",
          }} class="fa-brands fa-facebook"></i>,
        Youtube: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#FF0000",
          }} class="fa-brands fa-youtube"></i>,
        Whatsapp: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#25D366"
          }} class="fa-brands fa-whatsapp"></i>,
        Discord: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#7289da",
          }} class="fa-brands fa-discord"></i>,
        Twitter: <i style={{
            fontSize: '16px',
            color: 'white',
            // color: "#1DA1F2"
          }} class="fa-brands fa-twitter"></i>,
        Snapchat: <i style={{
            fontSize: '12px',
            padding: '1vw',
            borderRadius: '8px',
            backgroundColor: 'white',
            // backgroundColor: "#FFFC00",
            color: "black"
          }} class="fa-brands fa-snapchat"></i>,
        Telegram: <i style={{ fontSize: '16px', color: "#0088cc"}} 
        class="fa-brands fa-telegram"></i>,
    }      

    const [storeInfo, setStoreInfo] = useState(undefined);
    const [loader1, setLoader1] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false)

    async function handleGetStoreInformation () {
        const s_id = localStorage.getItem("influencer_id");
        console.log(s_id)
        const obj = {
            seller_id: s_id
        }
        const json = await getStoreInformation(obj);
        if(json.success){
            setStoreInfo(json.msz);
            setLoader1(false);
        } else{
            window.alert("Somthing Went Wrong")
        }
        console.log(json);
    }

    useEffect(()=>{
        handleGetStoreInformation()
    },[]);

    function formatNumber(num) {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
      }

      const customStyles = {
        content: {
          alignSelf: 'center',
          padding: '0px',
          margin: '0px'
        },
        overlay: {zIndex: 1000}
      };

      async function logout() {
        localStorage.clear();
        window.open('/creator/auth','_self');
    }

  return (

    loader1 ? 
    <>
    <div className='minPP-loader1'></div>
    <MINBottomNavBar bMode={"Profile"}/>
    </>
     : 
    <div className='minPP'>
        
        <div className='minPP-topbar'>
            <p className='minPP-topbar-uname'>{storeInfo.seller_info.user_name}</p>
        </div>
        <div className='minPP-info'>
            <div className='minPP-info-left'>
                <img className='minPP-info-left-img' src={storeInfo.seller_info.profile_image}></img>
                <p className='minPP-info-left-name'>{storeInfo.seller_info.name}</p>
            </div>

            <div className='minPP-info-right'>
                <div className='minPP-info-right-item'>
                    <p className='minPP-info-right-item-value'>{storeInfo.products.length}</p>
                    <p className='minPP-info-right-item-key'>Products</p>
                </div>
                <div className='minPP-info-right-item'>
                    <p className='minPP-info-right-item-value'>{formatNumber(storeInfo.seller_info.followers.length)}</p>
                    <p className='minPP-info-right-item-key'>Followers</p>
                </div>
                <div className='minPP-info-right-item'>
                    <p className='minPP-info-right-item-value'>{formatNumber(storeInfo.seller_info.following.length)}</p>
                    <p className='minPP-info-right-item-key'>Following</p>
                </div>
            </div>
        </div>

        <div className='minPP-store'>
            <div className='minPP-store-head'>
            <i style={{fontSize: '16px', color: '#554BDA',alignSelf: 'center'}} class="fa-solid fa-store"></i>
            <p className='minPP-store-head-name'>{storeInfo.seller_info.display_name}</p>
            </div>
            
            <div className='minPP-store-action'>
                <div onClick={()=>{setModalIsOpen(true)}} className='minPP-store-action-edit'>Edit Store</div>
                <div className='minPP-store-action-share'>Share Store</div>
            </div>
        </div>

        {/* <div className='minPP-accounts'>
            <p className='minPP-accounts-head'>Accounts</p>
            <div className='minPP-accounts-box'>
                {arr.map((item)=>(
                    <div className='minPP-accounts-box-item'>
                        <div className='minPP-accounts-box-item-icon'>
                            {iconObject[`${item['account_type']}`]}
                        </div>
                        
                        <div className='miPP-accounts-box-item-div'>
                        <p className='minPP-accounts-box-item-div-text'>{item['is_verified'] ? "Verified": "Verify Now"}</p>
                        {item['is_verified'] ? <i style={{fontSize: '14px', color: 'green'}} class="fa-solid fa-circle-check"></i> : <i style={{fontSize: '14px', color: 'orange'}} class="fa-solid fa-triangle-exclamation"></i> }
                        </div>
                    </div>
                ))}
            </div>
            <div className='minPP-accounts-add'>+ Add Account</div>
        </div> */}


<div className='minPP-collection'>
            <div onClick={()=>{window.open('/creator/collections','_self')}} className='minPP-collection-button'>
              <p className='minPP-collection-button-T1'>Your Collections</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>


<div className="minPP-features">
        <div>
            <div onClick={()=>{window.open(`/creator/orders`,'_self');}} className="minPP-features-Item">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-box"></i>
                    <p className='minPP-features-ItemText'>Orders</p>
            </div>
            <div className="minPP-features-Item">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-headset"></i>
            <p className='minPP-features-ItemText'>Help Center</p>
            </div>
            
        </div>
        <div>
        
            <div onClick={()=>{window.open(`/creator/products`,'_self');}} className="minPP-features-Item">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-bag-shopping"></i>
            <p className='minPP-features-ItemText'>Products</p>
            </div>
            <div onClick={()=>{window.open(`/creator/qc`,'_self');}} className="minPP-features-Item">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-upload"></i>
            <p className='minPP-features-ItemText'>Products QC</p>
            </div>
        </div>
    </div>


            <div className='minPP-policy'>
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-shield"></i>
            <p className='minPP-policy-name'>Terms And Conditions</p>
            </div>

            <div onClick={logout} className='minPP-logout'>Logout</div>
            
            <Modal
        className="minPP-Modal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <MINEditStore setModalIsOpen={setModalIsOpen} />
        </Modal>

        <MINBottomNavBar bMode={"Profile"}/>
    </div>
  )
}

export default MINProfilePage