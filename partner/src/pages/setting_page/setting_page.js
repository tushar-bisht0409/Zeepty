import React, { useState,useEffect } from "react";
import "./setting_page.css";
import Drawer from "../../components/drawer/drawer";
import { editManufacturerInfo, getManufacturerInfo } from "../../store/action/manufacturer_action";
import { S3_URI } from "../../store/action/type";
import { deleteMultipleFilesS3, uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import FullScreenLoader from "../../components/fullScreen_loader/fullScreen_loader";
import { changePassword, validateManufacturerLocalData } from "../../store/action/auth_action";
import Snackbar from "../../components/snackbar/snackbar";
import errorOccurred from '../../assets/supplier/images/errorOccurred.png'


 function SettingPage() {  

    const [mode, setMode] = useState("gstin");
    const [signImg, setSignImg] = useState(undefined);
    const [mInfo, setMInfo] = useState(undefined)
    const [loader1, setLoader1] = useState(true);
    const [loader2, setLoader2] = useState(false);

    const [password, setPassword] = useState("");
    const [new_password, setNew_password] = useState("");
    const [again_password, setAgain_password] = useState("");
    const [password_verified, setPassword_verified] = useState(true);

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarObject, setSnackbarObject] = useState({message: "", backgroundColor: "#181818", color: "white", okColor: "white"})

  // Function to show the snackbar
  const showSnackbarMessage = (sObject) => {
    setSnackbarObject(sObject)
    setShowSnackbar(true);
    setTimeout(() => {
      setShowSnackbar(false);
      setSnackbarObject({message: "", backgroundColor: "#181818", color: "white", okColor: "white"});
    }, 5000);
  }


    async function handleGetManufacturerInfo() {
        let obj = {
            manufacturer_id: localStorage.getItem("manufacturer_id")
        }

        const json = await getManufacturerInfo(obj);

        if(json.success){
            setMInfo(json.msz);
        } else{
        }
        setLoader1(false);
        setLoader2(false);
    }

    useEffect(()=>{
        validateManufacturerLocalData();
        handleGetManufacturerInfo();
    },[])

    function maskPhoneNumber(number) {
        const numberStr = number.toString();
      
        if (numberStr.length >= 10) {
          const firstTwo = numberStr.substring(0, 2);
          const lastTwo = numberStr.substring(numberStr.length - 2);
                const asterisks = "*".repeat(numberStr.length - 4);
      
          return firstTwo + asterisks + lastTwo;
        } else {
          return numberStr;
        }
      }

      function hideEmail(email) {
        const atIndex = email.indexOf('@');
        const username = email.substring(0, atIndex);
        const domain = email.substring(atIndex);
        const hiddenUsername = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];
        return hiddenUsername + domain;
      }

      async function handleMediaUpload(e) {
        setSignImg(e.target.files[0]);
    }

    async function handleEditSignature() {
        setLoader2(true)
        const json = await uploadMultipleFilesToS3([signImg]);
        if(json.success){
            let obj = {
                manufacturer_id: localStorage.getItem('manufacturer_id'),
                signature_url: S3_URI + json.fileKeys[0],
                type: 'signature_url'
            }
          const json2 = await editManufacturerInfo(obj);
          if(json2.success){
            await deleteMultipleFilesS3([mInfo.signature_url.replace(S3_URI, "")]);
            handleGetManufacturerInfo();
          } else{
            await deleteMultipleFilesS3(json.fileKeys);
            setLoader2(false);
            snackbarObject.message = "An Error Occurred";
            showSnackbarMessage(snackbarObject);
          }
        } else {
            setLoader2(false)
            snackbarObject.message = "An Error Occurred";
            showSnackbarMessage(snackbarObject);
        }
    }

    function verifyNewPassword(str) {
        if(str === new_password){
            setPassword_verified(true);
        } else {
            setPassword_verified(false); 
        }
        setAgain_password(str)
    }

    async function handleChangePassword(){
        setLoader2(true);
        const obj = {
            manufacturer_id: localStorage.getItem('manufacturer_id'),
            phone: mInfo.phone,
            mode: 'Manufacturer',
            password: password,
            new_password: new_password
        }

        const json = await changePassword(obj);
        if(json.success) {
            snackbarObject.message = "Password Changed";
            snackbarObject.backgroundColor = "green";
            showSnackbarMessage(snackbarObject);
        } else if(json.err === null || json.err === undefined && json.success === false){
            snackbarObject.message = "You have Entered Wrong Password";
            snackbarObject.backgroundColor = "red";
            showSnackbarMessage(snackbarObject);
        } else{
            snackbarObject.message = "An Error Occurred";
            showSnackbarMessage(snackbarObject);
        }
        setLoader2(false);
    }

    async function logout() {
        localStorage.clear();
        window.open('/supplier/auth','self');
    }

    return (
        
        <div className="settingPage">

            {loader2 ? <FullScreenLoader/> : null}
            <p className="settingPage-head">Settings</p>

            <div className="settingPage-drawer">

            <div className="settingPage-drawer-item">
            <div onClick={()=>{setMode("gstin")}} className={mode === "gstin" ? "settingPage-drawer-item-active" : "settingPage-drawer-item-inactive"}>
                <i class="fa-solid fa-file-invoice"></i>
                <p className={mode === "gstin" ? "settingPage-drawer-item-active-text" : "settingPage-drawer-item-inactive-text"}>GSTIN Details</p>
            </div>

            <div onClick={()=>{setMode("bank")}} className={mode === "bank" ? "settingPage-drawer-item-active" : "settingPage-drawer-item-inactive"}>
                <i class="fa-solid fa-bank"></i>
                <p className={mode === "bank" ? "settingPage-drawer-item-active-text" : "settingPage-drawer-item-inactive-text"}>Bank Details</p>
            </div>

            <div onClick={()=>{setMode("sign")}} className={mode === "sign" ? "settingPage-drawer-item-active" : "settingPage-drawer-item-inactive"}>
                <i class="fa-solid fa-signature"></i>
                <p className={mode === "sign" ? "settingPage-drawer-item-active-text" : "settingPage-drawer-item-inactive-text"}>Supplier E-Signature</p>
            </div>

            <div onClick={()=>{setMode("password")}} className={mode === "password" ? "settingPage-drawer-item-active" : "settingPage-drawer-item-inactive"}>
                <i class="fa-solid fa-lock"></i>
                <p className={mode === "password" ? "settingPage-drawer-item-active-text" : "settingPage-drawer-item-inactive-text"}>Change Password</p>
            </div>

            <div onClick={logout} className="settingPage-drawer-logout">Logout</div>

            </div>

            { loader1 ? <div className="settingPage-loader1"></div> :
        mInfo === undefined ? <div className="settingPage-error">
        <img onClick={()=>{window.location.reload()}} className="settingPage-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="settingPage-error-refresh">Refresh</div>
      </div> : mode === "gstin" ?<div className="settingPage-drawer-gstin">
                <p className="settingPage-drawer-gstin-head">GSTIN Details</p>
                <div className="settingPage-drawer-gstin-item">
                    <p className="settingPage-drawer-gstin-key">GSTIN Number</p>
                    <p className="settingPage-drawer-gstin-value">{mInfo.gst_details.gstin}</p>
                </div>
                <div className="settingPage-drawer-gstin-item">
                    <p className="settingPage-drawer-gstin-key">Registered Mobile Number</p>
                    <p className="settingPage-drawer-gstin-value">+91 {maskPhoneNumber(mInfo.gst_details.registered_mobile_number)}</p>
                </div>
                <div className="settingPage-drawer-gstin-item">
                    <p className="settingPage-drawer-gstin-key">Registered Email Address</p>
                    <p className="settingPage-drawer-gstin-value">{hideEmail(mInfo.gst_details.registered_email_address)}</p>
                </div>
            </div> : mode === "bank" ? <div className="settingPage-drawer-bank">
                <p className="settingPage-drawer-bank-head">Bank Details</p>
                <div className="settingPage-drawer-bank-item">
                    <p className="settingPage-drawer-bank-key">Beneficiary Name</p>
                    <p className="settingPage-drawer-bank-value">{mInfo.bank_details.beneficiary_name}</p>
                </div>
                <div className="settingPage-drawer-bank-item">
                    <p className="settingPage-drawer-bank-key">Account Number</p>
                    <p className="settingPage-drawer-bank-value">{mInfo.bank_details.account_number}</p>
                </div>
                <div className="settingPage-drawer-bank-item">
                    <p className="settingPage-drawer-bank-key">Bank Name</p>
                    <p className="settingPage-drawer-bank-value">{mInfo.bank_details.bank_name}</p>
                </div>
                <div className="settingPage-drawer-bank-item">
                    <p className="settingPage-drawer-bank-key">IFSC Code</p>
                    <p className="settingPage-drawer-bank-value">{mInfo.bank_details.ifsc_code}</p>
                </div>

                <div className="settingPage-drawer-bank-support">
                    <p className="settingPage-drawer-bank-support-text">To change your bank details, please raise ticket in support section</p>
                    <p className="settingPage-drawer-bank-support-button">Raise Ticket</p>
                </div>
            </div> : mode === "sign" ? <div className="settingPage-drawer-sign">
                <p className="settingPage-drawer-sign-head">Supplier E-Siganture</p>
                <div className="settingPage-drawer-sign-notice">
                    <p className="settingPage-drawer-sign-notice-text">Your e-signature will be recorded for issuing invoices/credit notes to customers</p>
                </div>

                <div className="settingPage-drawer-sign-item">
                    <p className="settingPage-drawer-sign-key">Full Legal Name</p>
                    <p className="settingPage-drawer-sign-value">Full Name</p>
                </div>

                <div className="settingPage-drawer-sign-esign">E-Signature</div>
                <div className="settingPage-drawer-sign-imgBox">
                <img src={signImg === undefined ? mInfo.signature_url : URL.createObjectURL(signImg)} className="settingPage-drawer-sign-imgBox-img"></img>
                <p className="settingPage-drawer-sign-imgBox-text">Tap to edit</p>
                <input onChange={handleMediaUpload} type="file" accept="image/*" className="settingPage-drawer-sign-imgBox-input"/>
                </div>

                <div onClick={handleEditSignature} className={signImg === undefined ? "settingPage-drawer-sign-button-inactive" : "settingPage-drawer-sign-button"}>Save E-Signature</div>

            </div> : mode === "password" ? <div className="settingPage-drawer-pass">
                <p className="settingPage-drawer-pass-head">Change Password</p>
                <div className="settingPage-drawer-pass-item">
                    <p className="settingPage-drawer-pass-key">Current Password</p>
                    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className="settingPage-drawer-pass-input" />
                </div>
               
                <div style={{height: '4vh'}}></div>

                <div className="settingPage-drawer-pass-item">
                    <p className="settingPage-drawer-pass-key">New Password</p>
                    <input value={new_password} onChange={(e)=>{setNew_password(e.target.value)}} className="settingPage-drawer-pass-input" />
                </div>

                <div className="settingPage-drawer-pass-item">
                    <p className="settingPage-drawer-pass-key">Re-Type Password</p>
                    <input value={again_password} onChange={(e)=>{verifyNewPassword(e.target.value)}} className={password_verified ? "settingPage-drawer-pass-input" : "settingPage-drawer-pass-input-error" } />
                    <p className={password_verified ? "settingPage-drawer-pass-text" : "settingPage-drawer-pass-errorText"}>Password doesn't match with new password</p>
                </div>


                <div onClick={()=>{if(password_verified && again_password !== ""){handleChangePassword()}}} className={password_verified && again_password !== "" ? "settingPage-drawer-pass-button" : "settingPage-drawer-pass-button-inactive"}>Change Password</div>

            </div> : null}
            </div>
           
            {showSnackbar ? <Snackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}

            <Drawer mode={"settings"}/>
        </div>
    )
}

export default SettingPage