import React, { useEffect, useState } from 'react'
import './minAuth_page.css'

import { useParams } from 'react-router-dom';
import MINVerificationBox from '../../minComponents/minAuth_page/minverificationBox/minverificationBox';
import MINRegistrationBox from '../../minComponents/minAuth_page/minregistrationBox/minregistrationBox';
import { addNew, authenticationOTP, sendOTP, verifyOTP } from '../../store/action/auth_action';
import MINSaveInfoPage from '../minSaveInfo_page/minSaveInfo_page';
import { getSellerInfo } from '../../store/action/seller_action';
import MINSnackbar from '../../minComponents/minSnackbar/minSnackbar';


const MINAuthPage = () => {

  const [authMode, setAuthMode] = useState('signup');

  const [phone, setPhone] = useState("");

  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarObject, setSnackbarObject] = useState({message: "", backgroundColor: "#181818", color: "white", okColor: "white"})

  const showSnackbarMessage = (sObject) => {
    setSnackbarObject(sObject)
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      setSnackbarObject({message: "", backgroundColor: "#181818", color: "white", okColor: "white"});
    }, 5000);
  }
  

  async function processOTP(obj) {
    const json = await sendOTP(obj);
    if(json.success) {
      if(json.userExist){
        setAuthMode('loginVerification');
      } else{
        setAuthMode('signupVerification');
      }
      return true;
    } else{
      let sbObject = {message: "Something Went Wrong", backgroundColor: "#181818", color: "white", okColor: "white"}
      showSnackbarMessage(sbObject)
      return false;
    }
  }

  async function IsOTPCorrect(otp) {
    const obj = {
      phone: phone,
      otp: otp,
      password: "",
      mode: "Influencer",
      authMode: authMode === "signupVerification" ? "Signup" : "Login"
    };

    let json;
    json = await authenticationOTP(obj);

    if(authMode === "loginVerification"){
      if(json.success) {
        window.open('/creator/home','_self',)
      } else{
        let sbObject = {message: "Wrong OTP", backgroundColor: "red", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
        return false;
      }
    } else if(authMode === "signupVerification"){
      if(json.success) {
        setAuthMode('SaveInfo')
      } else{
        let sbObject = {message: "Wrong OTP", backgroundColor: "red", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
        return false;
      }
      
      // window.open('/minsaveinfo','_self',)
      // json = await addNew(obj);
    }

    
  }

  async function getUserData(sID) {
    const json = await getSellerInfo(sID);
    console.log(":: ",json)
    if(json.success === true && json.isNew === false) {
      window.open('/creator/home','_self');
    } else if(json.success === true && json.isNew === true) {
        window.open('/minsaveinfo','_self');
    } else {
      let sbObject = {message: "Something Went Wrong", backgroundColor: "#181818", color: "white", okColor: "white"}
      showSnackbarMessage(sbObject)
    }
}


async function getData(){
    let uID = localStorage.getItem('influencer_id');
    if(uID === null || uID === undefined){
    } else {
        getUserData(uID);
    }
}
useEffect(()=>{
    getData();
},[]);


  return (
    authMode === "SaveInfo" ? <MINSaveInfoPage phone={phone}/> :
    <div className='apBox'>
    <div className='apTop'>
        <p className='apTopText'>Influencer <br />Log In</p>
    </div>
    {authMode === "signup" ? <MINRegistrationBox phone={phone} setPhone={setPhone} processOTP={processOTP} /> : <MINVerificationBox IsOTPCorrect={IsOTPCorrect} processOTP={processOTP} setAuthMode={setAuthMode} authMode={authMode} phone={phone}/>}
    {showSnackbar ? <MINSnackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}

    </div>
  )
}

export default MINAuthPage