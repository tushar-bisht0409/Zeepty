import React ,{useEffect,useRef,useState}from "react";
import {useSelector, useDispatch} from "react-redux"
import { isValidUser } from "../../store/action/auth_action";
import { checkIsStoreNameUnique, editManufacturerInfo, editManufacturerInfoAndDelhiveryWarehouse, getManufacturerInfo, saveManufacturerInfo, validateAndGetManufacturer } from "../../store/action/manufacturer_action";

import './gstInfo_page.css'
import Snackbar from "../../components/snackbar/snackbar";
import { verifyGSTIN } from "../../store/action/manufacturer_action";
import { v4 as uuidv4 } from 'uuid';
import { uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import { S3_URI } from "../../store/action/type";

const  GstInfoPage =()=> {
  
    const [mode,setMode] = useState("GST");

    const [signImg, setSignImg] = useState(undefined);

    const [mData, setMData] = useState(undefined);

    const [complete, setComplete] = useState(0);

    const [gstVerified, setGstVerified] = useState(false);

    const [oldGstData, setOldGstData] = useState({});

    const [isNewUser, setIsNewUser] = useState(true);
    

    const [gstInfo, setGstInfo] = useState(undefined);
    const [gstin, setGstin] = useState("");

    const [gstError, setGstError] = useState("");

    const [address, setAddress] = useState("");

    const [landmark, setLandmark] = useState("");

    const [pincode, setPincode] = useState("");

    const [city, setCity] = useState("");

    const [state, setState] = useState("");

    const [rAddress, setRAddress] = useState("");

    const [rLandmark, setRLandmark] = useState("");

    const [rPincode, setRPincode] = useState("");

    const [rCity, setRCity] = useState("");

    const [rState, setRState] = useState("");

    const [beneficiary, setBeneficiary] = useState("");

    const [account, setAccount] = useState("");
    const [cAccount, setCAccount] = useState("");

    const [bank, setBank] = useState("");

    const [ifsc, setIfsc] = useState("");

    const [store, setStore] = useState("");
    
    const [name, setName] = useState("");

    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [loading3, setLoading3] = useState(false);

    const [beneficiaryList, setBeneficiaryList] = useState([]);


    const[isReturnAddressSame, setIsReturnAddressSame] = useState(true);

    const [disableStoreTyping, setDisableStoreTyping] = useState(false);
    let disableStoreTypingLocal = false;

    const [typingTimer, setTypingTimer] = useState(0);

    const [isUniqueStoreName, setIsUniqueStoreName] = useState(undefined);
    let isUniqueStoreNameLocal = undefined;

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

    function handleTB (newMode) {
        if(gstVerified){
            setMode(newMode);
        } else {
            snackbarObject['message'] = "Verify GST First";
            showSnackbarMessage(snackbarObject);
        }
    }

    function handleData(obj) {

        setGstin(obj['gst_details']['gstin'])
        setAddress(obj['pickup_address']['address'])
        setLandmark(obj['pickup_address']['landmark'])
        setPincode(obj['pickup_address']['pincode'])
        setCity(obj['pickup_address']['city'])
        setState(obj['pickup_address']['state'])
        setBeneficiary(obj['bank_details']['beneficiary_name'])
        setAccount(obj['bank_details']['account_number'])
        setBank(obj['bank_details']['bank_name'])
        setIfsc(obj['bank_details']['ifsc_code'])
        setStore(obj['store_name'])
        setName(obj['name'])

    }

    async function handleValidateAndGetManufacturer () {
        localStorage.setItem("gstin_verified", 'false');
        const m_id = localStorage.getItem('manufacturer_id');
        if(m_id === "" || m_id === null || m_id === undefined){
            localStorage.clear();
            window.open('/supplier/auth','_self');
        } else{
        let obj = { manufacturer_id: m_id}
        const json = await validateAndGetManufacturer(obj);
        if(json.success === true && json.isNew === false) {
            setIsNewUser(false)
            if(json.msz.gst_details === undefined){
            } else if(json.msz.bank_details === undefined){
                if(json.msz.gst_details["gstin"] === "" || json.msz.gst_details["gstin"] === null || json.msz.gst_details["gstin"] === undefined){
                } else {
                    setGstInfo(json.msz.gst_api_data)
                    setOldGstData(json.msz.gst_api_data);
                    copyGSTAddress(json.msz.gst_api_data);
                    setGstVerified(true);
                    setGstin(json.msz['gst_details']['gstin'])
                }
                setMData(json.msz);
            } else if(json.msz.gst_details["gstin"] === "" || json.msz.gst_details["gstin"] === null || json.msz.gst_details["gstin"] === undefined || json.msz.bank_details["account_number"] === "" || json.msz.bank_details["account_number"] === null || json.msz.bank_details["account_number"] === undefined || json.msz.bank_details === undefined ){
                if(json.msz.gst_details["gstin"] === "" || json.msz.gst_details["gstin"] === null || json.msz.gst_details["gstin"] === undefined){
                } else {
                    setGstVerified(true);
                    handleData(json.msz);
                }
                setMData(json.msz);
                // window.open('/supplier/fillinfo','_self'); 
            } else {
                localStorage.setItem("gstin_verified", 'true');
                window.open('/supplier/home','_self');
            }
        } else if(json.success === true && json.isNew === true) {
            setIsNewUser(true)
            localStorage.setItem("gstin_verified", 'false');
            setMData({
                phone: json.user.phone,
                email: json.user.email,
                manufacturer_id: m_id,
            });
        } else {
            localStorage.clear();
            window.open('/supplier/auth','_self');
        }
        }
    }

    async function saveData (obj) {
        const json = await editManufacturerInfo(obj);
        if(json.success) {
            localStorage.setItem("gstin_verified", 'true');
            window.open("/supplier/home","_self")
        } else{
            snackbarObject['message'] = "Something Went Wrong";
            showSnackbarMessage(snackbarObject);
        }
    }

    async function saveGSTInfo () {
        setLoading2(true)
        mData['gst_details'] = {
            gstin: gstInfo.data.gstin,
            bussiness_name: gstInfo.data.tradeNam,
            pan_number: gstInfo.data.gstin.slice(2, 12),
            registered_bussiness_address: gstInfo.data.pradr.adr,
            registered_mobile_number: mData.phone,
            registered_email_address: mData.email,
        }
        const obj = {
            type: "gst_phone_email",
            manufacturer_id: mData.manufacturer_id,
            phone: mData.phone,
            email: mData.email,
            gst_details: mData.gst_details,
            gst_api_data: gstInfo,
            store_name: uuidv4()
        }

        const json = await saveManufacturerInfo(obj);
        console.log("SDS: ",json )
        if(json.success) {
                setMData(mData);
                setGstVerified(true);
                setMode("Address")
                setComplete(1);
            } else{
                snackbarObject['message'] = "Something Went Wrong";
                showSnackbarMessage(snackbarObject);
            }
            setLoading2(false)
    }

    async function handleMode () {
        if(mode === "GST") {
            setMode("Address")
            // saveGSTInfo();
        } else if(mode === "Address") {
            setMode("Bank")
        } else if(mode === "Bank") {
            if(account === cAccount){
                setMode("Supplier")
            }
        } else if(mode === "Supplier"){
            setLoading3(true);
            if(checkAllFilled()){
            mData['pickup_address'] = {
                address: address,
                landmark: landmark,
                pincode: pincode,
                city: city,
                state: state,
            }
            if(isReturnAddressSame){
                mData['return_address'] = {
                    address: address,
                    landmark: landmark,
                    pincode: pincode,
                    city: city,
                    state: state,
                }
            } else {
                mData['return_address'] = {
                    address: rAddress,
                    landmark: rLandmark,
                    pincode: rPincode,
                    city: rCity,
                    state: rState,
                }
            }
            mData['bank_details'] = {
                account_number: account,
                ifsc_code: ifsc,
                beneficiary_name: beneficiary,
                bank_name: bank,
            }
            const json0 = await uploadMultipleFilesToS3([signImg]);
            if(json0.success){
            const obj = {
                email: mData.email,
                phone: mData.phone,
                manufacturer_id: mData.manufacturer_id,
                bank_details: mData.bank_details,
                pickup_address: mData.pickup_address,
                return_address: mData.return_address,
                name: name,
                store_name: store,
                signature_url: S3_URI + json0.fileKeys[0],
            }
                const jj = await editManufacturerInfoAndDelhiveryWarehouse(obj);
                if(jj.success){
                    localStorage.setItem("gstin_verified", 'true');
                window.open('/supplier/home','_self');
                } else {
                    snackbarObject['message'] = "Something went wrong";
            showSnackbarMessage(snackbarObject);
                }
        } else {
            snackbarObject['message'] = "Unable to upload E-Sign";
            showSnackbarMessage(snackbarObject);
        }
        }
        setLoading3(false);
        }
    }

    useEffect(()=>{
        handleValidateAndGetManufacturer()
    },[]);

    async function handleMediaUpload(e) {
        setSignImg(e.target.files[0]);
    }

    function handleIsReturnSame() {
        if(isReturnAddressSame){
            mData['return_address'] = {
                address: address,
                landmark: landmark,
                pincode: pincode,
                city: city,
                state: state,
            }
        } else {
            mData['return_address'] = {
                address: rAddress,
                landmark: rLandmark,
                pincode: rPincode,
                city: rCity,
                state: rState,
            }
        }
        setIsReturnAddressSame(!isReturnAddressSame)
    }

    useEffect(() => {
        if (store !== "") {
          const timer = setInterval(() => {
            setTypingTimer( (prevTime) => {
                handleCheckIsStoreNameUnique();
              if (prevTime === 0) {       
                return prevTime;
              } else {
                return prevTime - 1;
              }
            });
          }, 1000);
    
          return () => clearInterval(timer);
        }
      }, [store]);

      async function handleCheckIsStoreNameUnique() {
        if(disableStoreTypingLocal === false && isUniqueStoreNameLocal === undefined){
            setDisableStoreTyping(true);
            disableStoreTypingLocal = true;
            const obj = { store_name: store };
            const json = await checkIsStoreNameUnique(obj);
            if(json.success){
                setIsUniqueStoreName(true);
                isUniqueStoreNameLocal = true;
                setDisableStoreTyping(false);
                disableStoreTypingLocal = false;
            } else if(json.success === false && json.err === null){
                setIsUniqueStoreName(false);
                isUniqueStoreNameLocal = false;
                setDisableStoreTyping(false);
                disableStoreTypingLocal = false;
            } else{
                setDisableStoreTyping(false);
                disableStoreTypingLocal = false;
                snackbarObject['message'] = "Something Went Wrong";
                showSnackbarMessage(snackbarObject);
            }
        }
      }

    const handleStoreName = (event) => {
        setStore(event.target.value);
        setTypingTimer(5);
        setIsUniqueStoreName(undefined)       
        isUniqueStoreNameLocal = undefined; 
      }

      async function handleVerifyGST() {
        setLoading1(true);
        let obj = {
            gstin: gstin
        };

        const json = await verifyGSTIN(obj);
        setGstError("");
        setGstInfo(undefined);
        if(json.success) {
            if(json.msz.flag === true){
                if(json.msz.data.dty === "Composition"){
                    setGstError("This is a composite GSTIN. Please use a regular GSTIN");
                } else{
                            mData['gst_details'] = {
                                gstin: json.msz.data.gstin,
                                bussiness_name: json.msz.data.tradeNam,
                                pan_number: json.msz.data.gstin.slice(2, 12),
                                registered_bussiness_address: json.msz.data.pradr.adr,
                                registered_mobile_number: mData.phone,
                                registered_email_address: mData.email,
                            }
                            
                            let json2;
                            if(isNewUser){
                                const obj2 = {
                                    manufacturer_id: mData.manufacturer_id,
                                    phone: mData.phone,
                                    email: mData.email,
                                    gst_details: mData.gst_details,
                                    gst_api_data: json.msz,
                                    store_name: uuidv4()
                                }
                                console.log("SDS: ",obj2)
                                json2 = await saveManufacturerInfo(obj2);
                            } else{
                                let obj2 = {
                                    type: 'gstin',
                                    manufacturer_id: mData.manufacturer_id,
                                    gst_details: mData.gst_details,
                                    gst_api_data: json.msz,
                                }
                            json2 = await editManufacturerInfo(obj2)
                            }
                            if(json2.success) {
                                setIsNewUser(false);
                                setGstVerified(true);
                                setGstInfo(json.msz);
                                setOldGstData(json.msz)
                                copyGSTAddress(json.msz);
                            } else{
                                snackbarObject['message'] = "Something Went Wrong";
                                    showSnackbarMessage(snackbarObject);
                            }
                }
            } else {
                setGstError("Please enter a valid GSTIN");
            }
        } else if(json.success === false && json.err === null){
            setGstError("GSTIN is already linked to another supplier account on Zeepty. Please enter a different GSTIN.If this GSTIN belongs to you, please reach out to us at contact@zeepty.com")
        } else{
            snackbarObject['message'] = "Something Went Wrong";
            showSnackbarMessage(snackbarObject);
        }
        setLoading1(false);
      }

      function copyGSTAddress(gInfo) {
        let gadr = gInfo.data.pradr.addr;
        let adr = `${gadr.lg === ""? "": `${gadr.lg},`}${gadr.flno === ""? "": `${gadr.flno},`}${gadr.bno === ""? "": `${gadr.bno},`}${gadr.bnm === ""? "": `${gadr.bnm},`}${gadr.st === ""? "": `${gadr.st},`}${gadr.loc === ""? "": `${gadr.loc},`}`
        setAddress(adr);
        setLandmark(gadr.lt);
        setCity(gadr.dst);
        setPincode(gadr.pncd);
        setState(gadr.stcd);
        setRAddress(adr);
        setRLandmark(gadr.lt);
        setRCity(gadr.dst);
        setRPincode(gadr.pncd);
        setRState(gadr.stcd);
        setIsReturnAddressSame(true)
      }

      function checkAllFilled() {
        console.log("AS:", beneficiary, ":" ,account,":", cAccount,":", bank, ":",ifsc,)
        if(address.trim() === "" || pincode.trim() === "" || city.trim() === "" || state.trim() === "" ){
            setMode("Address");
            snackbarObject['message'] = "Please fill the address";
            showSnackbarMessage(snackbarObject);
            return false;
        } else if(rAddress.trim() === "" || rPincode.trim() === "" || rCity.trim() === "" || rState.trim() === ""){
            if(isReturnAddressSame){
                if(beneficiary.trim() === "" || account.trim() === "" || cAccount.trim() === "" || bank.trim() === "" || ifsc.trim() === ""){
                    setMode("Bank");
                    snackbarObject['message'] = "Please fill the bank details";
                    showSnackbarMessage(snackbarObject);
                    return false;
                } else if(store.trim() === "" || name.trim() === ""){
                    setMode("Supplier");
                    snackbarObject['message'] = "Please fill the supplier details";
                    showSnackbarMessage(snackbarObject);
                    return false;
                } else if(!isUniqueStoreName){
                    setMode("Supplier");
                    snackbarObject['message'] = "Store name is not unique";
                    showSnackbarMessage(snackbarObject);
                } else{
                    return true;
                }
            } else {
            setMode("Address");
            snackbarObject['message'] = "Please fill the return address";
            showSnackbarMessage(snackbarObject);
            return false;
            }
        } else if(beneficiary.trim() === "" || account.trim() === "" || cAccount.trim() === "" || bank.trim() === "" || ifsc.trim() === ""){
            setMode("Bank");
            snackbarObject['message'] = "Please fill the bank details";
            showSnackbarMessage(snackbarObject);
            return false;
        } else if(store.trim() === "" || name.trim() === ""){
            setMode("Supplier");
            snackbarObject['message'] = "Please fill the supplier details";
            showSnackbarMessage(snackbarObject);
            return false;
        } else if(signImg === undefined){
            setMode("Supplier");
            snackbarObject['message'] = "Please Add E-Signature";
            showSnackbarMessage(snackbarObject);
            return false;
        } else if(!isUniqueStoreName){
            setMode("Supplier");
            snackbarObject['message'] = "Store name is not unique";
            showSnackbarMessage(snackbarObject);
        } else{
            return true;
        }
      }

    return (
        <div className="gipBox">

            <div className="gipTB">
            <img className="gipTBLogo" src={"https://img1a.flixcart.com/fk-sp-static/images/Onboarding_logo_GrowthImg.svg"}/>
            </div>

            <div className="gipRBox">

                <div className="gipRH">Please complete all steps below to start selling</div>

                <div className="gipRT">
                    <div onClick={()=>{handleTB("GST")}} className="gipRTItem">
                    {complete>0 ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i> :<i style={{fontSize: '20px',color: mode === "GST" ?"#554BDA":"grey"}} class="fa-solid fa-file-invoice"></i>}
                    <p style={{color: mode === "GST" ?"#554BDA":"grey"}} className={mode === "GST"?"gipRTItemT1":"gipRTItemT1Inactive"}>GST Details</p>
                    <div className={mode === "GST"?"gipRTItemD1":"gipRTItemD1Inactive"}></div>
                    </div>

                    <div onClick={()=>{handleTB("Address")}} className="gipRTItem">
                    {complete>1 ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i>:<i style={{fontSize: '20px',color: mode === "Address" ?"#554BDA":"grey"}} class="fa-solid fa-location-dot"></i>}
                    <p style={{color: mode === "Address" ?"#554BDA":"grey"}} className={mode === "GST"?"gipRTItemT1":"gipRTItemT1Inactive"}>Pickup Address</p>
                    <div className={mode === "Address"?"gipRTItemD1":"gipRTItemD1Inactive"}></div>
                    </div>

                    <div onClick={()=>{handleTB("Bank")}} className="gipRTItem">
                    {complete>2 ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i>:<i style={{fontSize: '20px',color: mode === "Bank" ?"#554BDA":"grey"}} class="fa-solid fa-building-columns"></i>}
                    <p style={{color: mode === "Bank" ?"#554BDA":"grey"}} className={mode === "GST"?"gipRTItemT1":"gipRTItemT1Inactive"}>Bank Details</p>
                    <div className={mode === "Bank"?"gipRTItemD1":"gipRTItemD1Inactive"}></div>
                    </div>

                    <div onClick={()=>{handleTB("Supplier")}} className="gipRTItem">
                    {complete>3 ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i>:<i style={{fontSize: '20px',color: mode === "Supplier" ?"#554BDA":"grey"}} class="fa-solid fa-user"></i>}
                    <p style={{color: mode === "Supplier" ?"#554BDA":"grey"}} className={mode === "GST"?"gipRTItemT1":"gipRTItemT1Inactive"}>Supplier Details</p>
                    <div className={mode === "Supplier"?"gipRTItemD1":"gipRTItemD1Inactive"}></div>
                    </div>
                </div>

                {mode === "GST" ?
                <div className="gipRG"> 
                <p className='gipRGHead'>GSTIN</p>
                <div className='gipRGBody'>
                    <input value={gstin} onChange={(e)=>{

                        if(Object.keys(oldGstData).length !== 0){
                        if(oldGstData['data']['gstin'] === e.target.value){
                            setGstVerified(true);
                            setGstInfo(oldGstData);
                            copyGSTAddress(oldGstData);
                        } else{
                            setGstVerified(false)
                        }
                     } else if(gstInfo !== undefined){
                        if(gstInfo['data']['gstin']=== e.target.value){
                            setGstVerified(true)
                        } else{
                            setGstVerified(false)
                        }
                    } else{
                            setGstVerified(false)
                    } setGstin(e.target.value)}} className='gipRGBodyInput' type='text' placeholder='Enter Your GSTIN'/>
                    {loading1? <div className="gipLoader1"></div> : gstVerified ?null: <div onClick={()=>{if(!gstVerified){handleVerifyGST()}}} className='gipRGBodySave'>Verify</div>}
                    {gstVerified ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i>:null}
                    {gstVerified ?<p className='gipRGBodyT1'>Verified</p>:null}
                </div>
                {gstError === "" ? null :<p className="gipRGError">{gstError}</p>}
                {gstInfo === undefined ? null : <div className="gipRGBodyI">
                        <p className="gipRGBodyIT1">GSTIN</p>
                        <p className="gipRGBodyIT2">{gstInfo.data.gstin}</p>
                        <p className="gipRGBodyIT1">Bussiness Name</p>
                        <p className="gipRGBodyIT2">{gstInfo.data.tradeNam}</p>
                        <p className="gipRGBodyIT1">PAN Number</p>
                        <p className="gipRGBodyIT2">{gstInfo.data.gstin.slice(2, 12)}</p>
                        <p className="gipRGBodyIT1">Registered Bussiness Address</p>
                        <p className="gipRGBodyIT2">{gstInfo.data.pradr.adr}</p>
                    </div>}
                    {gstInfo === undefined ? null : loading2 ? <div className="gipLoader3"></div> : <div onClick={()=>{handleMode()}} className="gipRGBodyContinue">Continue</div>}
                </div>
                : mode === "Address" ? 
                <div className="gipRABody">
                    <p className="gipRABodyT1">Address</p>
                    <input value={address} onChange={(e)=>{setAddress(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Landmark</p>
                    <input value={landmark} onChange={(e)=>{setLandmark(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Pincode</p>
                    <input value={pincode} onChange={(e)=>{setPincode(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">City</p>
                    <input value={city} onChange={(e)=>{setCity(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">State</p>
                    <input value={state} onChange={(e)=>{setState(e.target.value)}} className='gipRABodyInput' type='text'/>

                    <div onClick={handleIsReturnSame} className="gipRABodyCheck">
                        <div className={isReturnAddressSame ? "gipRABodyCheck-boxActive" : "gipRABodyCheck-boxInactive"}>
                            <i style={{color: 'white',fontSize: '14px'}} class="fa-solid fa-check"></i>
                        </div>
                        <p className="gipRABodyCheck-T1">Return address is the same as Pickup Address</p>
                    </div>

                    {isReturnAddressSame ? null : <div>
                    <p className="gipRABodyT1">Return Address</p>
                    <input value={rAddress} onChange={(e)=>{setRAddress(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Return Landmark</p>
                    <input value={rLandmark} onChange={(e)=>{setRLandmark(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Return Pincode</p>
                    <input value={rPincode} onChange={(e)=>{setRPincode(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Return City</p>
                    <input value={rCity} onChange={(e)=>{setRCity(e.target.value)}} className='gipRABodyInput' type='text'/>
                    <p className="gipRABodyT1">Return State</p>
                    <input value={rState} onChange={(e)=>{setRState(e.target.value)}} className='gipRABodyInput' type='text'/>
                    </div>}
                </div> : mode=== "Bank" ? 
                <div className="gipRBBody">
                    {/* <p className="gipRBBodyT1">Beneficiary Name</p>
                    <select className="gipRBBodyDD" value={beneficiary} onChange={(e)=>{setBeneficiary(e.target.value)}}>
                        <option value="User Name">User Name</option>
                        <option value="Company Name">Company Name</option>
                    </select> */}
                    <p className="gipRBBodyT1">Beneficiary Name</p>
                    <input value={beneficiary} onChange={(e)=>{setBeneficiary(e.target.value)}} className='gipRBBodyInput' type='text'/>
                    <p className="gipRBBodyT1">Account Number</p>
                    <input value={account} onChange={(e)=>{setAccount(e.target.value)}} className='gipRBBodyInput' type='password'/>
                    <p className="gipRBBodyT1">Confirm Account Number</p>
                    <input value={cAccount} onChange={(e)=>{setCAccount(e.target.value)}} className='gipRBBodyInputC' type='text'/>
                    <p className="gipRBBodyT1Error">{account === cAccount ? "" :"Account numbers are not matching."}</p>
                    <p className="gipRBBodyT1">Bank Name</p>
                    <input value={bank} onChange={(e)=>{setBank(e.target.value)}} className='gipRBBodyInput' type='text'/>
                    <p className="gipRBBodyT1">IFSC Code</p>
                    <input value={ifsc} onChange={(e)=>{setIfsc(e.target.value)}} className='gipRBBodyInput' type='text'/>
                </div> : mode === "Supplier" ?
                <div className="gipRSBody">
                    <p className="gipRSBodyT1">Store Name</p>
                    <div className="gipRSBodyStoreDiv">
                        {disableStoreTyping? <div className="gipLoader2"></div> : null}
                        <input disabled={disableStoreTyping} value={store} onChange={handleStoreName} className={isUniqueStoreName? 'gipRSBodyInputGreen' : isUniqueStoreName === false ? 'gipRSBodyInputRed' : 'gipRSBodyInput'} type='text'/>
                        { isUniqueStoreName === undefined ? null : <p className={isUniqueStoreName? 'gipRSBodyStoreValid' : 'gipRSBodyStoreInvalid'}>{isUniqueStoreName? `'${store}' is available` : `'${store}' is already taken, Please try another one`}</p>}
                    </div>
                    <p className="gipRSBodyT1">Your Full Name</p>
                    <input value={name} onChange={(e)=>{setName(e.target.value)}} className='gipRSBodyInput' type='text'/>
                    <div className="gip-sign-esign">Upload E-Signature</div>
                    <div className="gip-sign-imgBox">
                    {signImg === undefined ? <div className="gip-sign-imgBox-img"></div> : <img src={URL.createObjectURL(signImg)} type="file" accept="image/*" className="gip-sign-imgBox-img"></img>}
                    <div className="gip-sign-imgBox-text">{signImg === undefined ? <><i class="fa-solid fa-arrow-up-from-bracket"></i><p style={{marginLeft: '1vw'}}>Upload E-Sign</p></>:<><i class="fa-solid fa-pencil"></i><p style={{marginLeft: '1vw'}}>Edit E-Sign</p></>}</div>
                    <input onChange={handleMediaUpload} type="file" className="gip-sign-imgBox-input"/>
                    </div>
                </div> : null }

                {gstVerified && mode !== "GST" ? loading3 ? <div className="gipLoader4"></div> : <div onClick={()=>{handleMode()}} className="gipRContinue">{mode === "Supplier"? "Save" :"Continue"}</div> : null}
            </div>
            {showSnackbar ? <Snackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
      </div>
    );
  }


export default  GstInfoPage;
