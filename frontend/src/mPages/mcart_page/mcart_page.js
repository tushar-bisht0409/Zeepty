import React, { useState,useEffect, useRef } from 'react'
import "./mcart_page.css"
import MCartProgress from '../../mComponents/mcartProgress/mcartProgress'
import { addCartAndWishlistData, getCustomerInfo, saveCustomerInfo } from "../../store/actions/user_action";
import {useSelector, useDispatch, connect} from "react-redux"
import MSelectedAddress from '../../mComponents/mselectedAddress/mselectedAddress';
import MpriceDetails from '../../mComponents/mpriceDetails/mpriceDetails';
import MAddressSection from '../../mComponents/maddressSection/maddressSection';
import { API_URI, authenticationOTP, sendOTP } from '../../store/actions/auth_action';
import MBottomNavBar from '../../mComponents/mBottomNavBar/mBottomNavBar';
import MCartProductCard from '../../mComponents/mcartProductCard/mcartProductCard';
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';
import Modal from 'react-modal';


const MCartPage = ({itemsSelected, totalPrice}) => {
    const dispatch = useDispatch();
    const [items,setItems] = useState(undefined);
    const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
    const [customerID, setCustomerID] = useState(undefined);
  
    const [selectedAddress, setSelectedAddress] = useState(undefined);
  
    const  [currentPoint, setCurrentPoint] = useState('Cart');

    const [isSelected, setIsSelected] = useState(true);

    const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

    const [phone,setPhone] = useState("");
    const [userExist, setUserExist] = useState(false)
    const [otp,setOtp] = useState("");
    const [loader1, setLoader1] = useState(false);
    const [loader2, setLoader2] = useState(false);
    const [loader3, setLoader3] = useState(false);
    const [otpStage, setOtpStage] = useState("Start");
    const [otpTimer, setOtpTimer] = useState(60);

    async function handelSendOtp() {
      setLoader1(true);
      setLoader2(true);
      if(phone.length===10){
      let obj = {
          mode: 'Customer',
          phone: phone
      }
      const json = await sendOTP(obj);
      if(json.success){
          setUserExist(json.userExist)
          setLoader1(false);
          setLoader2(false);
          setOtpStage("Sent");
      } else{
          setLoader1(false);
          setLoader2(false);
          window.alert("Something Went Wrong");
      }
  } else{
      setLoader1(false);
      setLoader2(false);
      window.alert("Phone number is not valid!");
  }
  }

  async function handelAuthenticateOtp() {
      setLoader3(true);
      let userInfo = JSON.parse(localStorage.getItem("userInfo"));
      let obj = {
          mode: 'Customer',
          phone: phone,
          otp: otp,
          password: "",
          email: "",
          authMode: userExist? "Login" : "Signup",
          cart: userInfo.cart,
          wishlist: userInfo.wishlist
      }
      const json = await authenticationOTP(obj);
      if(json.success){
        obj.customer_id = json.userID;
          if(userExist === false){
              const json2 = await saveCustomerInfo(obj);
              if(json2.success){
                  setLoader3(false);
                  window.open("/cart",'_self')
              }
          } else {
            let json3 = await addCartAndWishlistData(obj)
            console.log("333: ",json3, ":::", obj)
              setLoader3(false);
              window.open("/cart",'_self')
          }
      } else{
          setLoader3(false);
          window.alert("Something Went Wrong");
      }
  }

    useEffect(() => {
      if (otpStage === "Sent") {
        const timer = setInterval(() => {
          setOtpTimer((prevTime) => {
            if (prevTime === 0) {
              clearInterval(timer);
              setOtpStage("Resend");
              setOtpTimer(60)
              return prevTime;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000);
  
        return () => clearInterval(timer);
      }
    }, [otpStage]);
  
    const getdata = async() => {
      let obj = {
        customer_id: localStorage.getItem("customer_id")
      }
    const json = await getCustomerInfo(obj);
      if(json.success){
      setUserInfo(json.msz);
      setItems(json.msz.cart);
      getSelectedAddress(json.msz.addresses, json.msz.selected_address_id);
      } else{
        setItems([]);
      }
    }

    async function handleLocalUserInfo() {
      let json = await checkAndHandleLocalUserInfo();
      console.log(json)
      if(json.success){
        setItems(json.userInfo.cart);
      } else{
        window.alert("Soemthing Went Wrong")
      }
    }
  
    useEffect(()=>{
      let c_id = localStorage.getItem("customer_id");
      if(c_id === undefined || c_id === null){
        handleLocalUserInfo();
      } else{
        setCustomerID(c_id);
        getdata();
      }
    },[]);
    
    async function getSelectedAddress(addressList, selectedID){
      setSelectedAddress({});
      for(let i =0 ;i<addressList.length;i++){
        if(addressList[i].address_id === selectedID){
          setSelectedAddress(addressList[i]);
          break;
        }
    } 
  }

  async function changeSelectedAddress (){
    try {
      const response = await fetch(`${API_URI}/editcustomerinfo`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'selectedAddressID',
          customer_id: localStorage.getItem('customer_id'),
          selected_address_id: selectedAddress.address_id
        }),
      });
      const json = await response.json();
      console.log(json,"\n::",selectedAddress)
      if (json.success) {
        setCurrentPoint('Cart');
      }
    } catch (error) {
      console.log(error);
    }
  };
  function changeMode(newMode){
    setCurrentPoint(newMode);
  }

  function changeMode(newMode){
    setCurrentPoint(newMode);
  }

  function handleLoginModal(){
    setLoginModalIsOpen(!loginModalIsOpen);
  }

  const priceRef = useRef(null);

  const scrollToPrice = () => {
    priceRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  async function handlePlaceOrder() {
    let c_id = localStorage.getItem('customer_id');
    if(c_id === undefined || c_id === null){
      setLoginModalIsOpen(true);
    } else{
      console.log("Place Order")
    }
  }

  const customStyles = {
    content: {
      alignSelf: 'center',
      padding: '2vh 4vw',
      height: 'fit-content',
      marginTop: '20vh',
      backgroundColor: 'white',
      zIndex: '99999999999',
    },
  };

  return (
    items===undefined?<div></div>:
    currentPoint === "Address"? <div>
      <div className="MobileCart-menu"><i class="fa-solid fa-arrow-left-long"></i>
            <p className="MobileCart-menutext">Address</p>
        </div>
          <MCartProgress mode1={"active"} mode2={"inActive"} mode3={"inActive"} on1={changeMode} on2={changeMode} on3={()=>{}}></MCartProgress>
      <div>
        <MAddressSection setUserInfo={setUserInfo} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} addresses={userInfo.addresses}></MAddressSection>
      </div>
      <div onClick={()=>{
      if(selectedAddress === undefined){
      }else{
        changeSelectedAddress();
      }
    }} className='mpoBottomButton'>Place Order</div>
    </div> : items.length === 0 ? <div className="MobileCart">
        <div className="MobileCart-menu">
          <p className="MobileCart-menutext">Cart</p>
        </div>
      <img className='mpo-emptyimg' src={"https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"}/>
      <MBottomNavBar bMode={"Cart"}/>
    </div> : 
    <>
        <div className="MobileCart">
        <div className="MobileCart-menu">
          <p className="MobileCart-menutext">Cart</p>
        </div>
            <MCartProgress newUser={customerID === undefined ? true : false } mode1={'completed'} mode2={customerID === undefined ? 'inActive' : 'active'} mode3={'inActive'} on1={changeMode} on2={customerID === undefined ? handleLoginModal : changeMode} on3={()=>{}} />
            <MSelectedAddress setCurrentPoint={setCurrentPoint} item={selectedAddress}/> 
            <div className="mitems-Selected">
            <div onClick={()=>{}} className='mcheckBox'>
          {isSelected?<i style={{fontSize: '10px', color: 'white',height:'15px',width: '15px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA'}}
           class="fa-solid fa-check"></i>
            :<div></div>}
          </div>
              <div className="mnumber">{itemsSelected.length}{`/`}{items.length} Items Selected</div>
            </div>
            {userInfo.cart === undefined ? <div></div>:
            <div>
             {items.map((p)=>(
              //isselected
                <MCartProductCard item={p} selected={true} quantity={1} cart={userInfo.cart}/>
             ))} 
            </div>}


            <MpriceDetails priceRef={priceRef} />

            <div className='mpoBottomBox'>
              <div onClick={()=>{scrollToPrice()}} className='mpoBottomBoxDetail'>
              <p className='mpoBottomBoxDetailPrice'>Rs.{totalPrice}</p>
              <p className='mpoBottomBoxDetailView'>View Price Details</p>
            </div>
            <div onClick={handlePlaceOrder} className='mpoBottomBoxButton'>Place Order</div>
            </div>

            <MBottomNavBar bMode={"Cart"}/>
        </div>

        <Modal
        isOpen={loginModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setLoginModalIsOpen(false)}}
        style={customStyles}>
          <div className='mpo-login-modal'>
            <p className='mpo-login-modal-headText'>Login</p>
            <p className='mpo-login-modal-mobileHead'>Enter Mobile No.</p>
            <input value={phone} onChange={(e)=>{setPhone(e.target.value)}} className='mpo-login-modal-mobileInput' type='number' />
            {otpStage === "Start" ? loader1? <div className='mpo-loader1'></div> : <div onClick={()=>{handelSendOtp()}} className='mpo-login-modal-sendOtp'>Send OTP</div> : null}
            {otpStage === "Start" ? null : <p className='mpo-login-modal-otpHead'>Enter OTP</p>}
            {otpStage === "Start" ? null : <input phone={otp} onChange={(e)=>{setOtp(e.target.value)}} className='mpo-login-modal-otpInput' type='number' />}
            {otpStage === "Start" ? null : loader2? <div className='mpo-loader2'></div> :<div onClick={()=>{
                    if(otpStage === "Resend"){
                        handelSendOtp();
                    }
                }} className={otpStage === "Sent"?"mpo-login-modal-resendInactive":"mpo-login-modal-resendActive"}>{ otpStage === "Sent" ? `Resend in ${otpTimer}`: otpStage === "Resend" ? "Resend OTP" : ""}</div>}
            {loader3? <div className='mpo-loader3'></div> : <div onClick={()=>{handelAuthenticateOtp()}} className={phone.length === 10 && otp.length === 6 ?'mpo-login-modal-verifyActive' : 'mpo-login-modal-verifyInactive'}>Verify</div>}
          </div>
        </Modal>

    </>
  )
}

function mapStateToProps(state) {
  const cartProduct = state.cartProduct;
  let data = cartProduct.cartProduct;
  let totalPrice = 0;
  for(let i=0;i<data.length;i++){
      totalPrice+=(data[i].price * data[i].quantity);
  }
  return {itemsSelected: data, totalPrice: totalPrice };
  }

export default connect(mapStateToProps)(MCartPage);
