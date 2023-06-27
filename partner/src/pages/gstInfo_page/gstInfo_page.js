import React ,{useEffect,useRef,useState}from "react";
import {useSelector, useDispatch} from "react-redux"
import { isValidUser } from "../../store/action/auth_action";
import { checkIsStoreNameUnique, editManufacturerInfo, getManufacturerInfo, saveManufacturerInfo, validateAndGetManufacturer } from "../../store/action/manufacturer_action";

import './gstInfo_page.css'
import Snackbar from "../../components/snackbar/snackbar";

const  GstInfoPage =()=> {
  
    const [mode,setMode] = useState("GST");

    const [mData, setMData] = useState(undefined);

    const [complete, setComplete] = useState(0);

    const [gstVerified, setGstVerified] = useState(false);

    const [gstin, setGstin] = useState("");

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

    const [bank, setBank] = useState("");

    const [ifsc, setIfsc] = useState("");

    const [store, setStore] = useState("");
    
    const [name, setName] = useState("");

    const [loading1, setLoading1] = useState(false);

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
            if(json.msz.gst_details === undefined){

            } else if(json.msz.bank_details === undefined){
                if(json.msz.gst_details["gstin"] === "" || json.msz.gst_details["gstin"] === null || json.msz.gst_details["gstin"] === undefined){
                } else {
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
            localStorage.setItem("gstin_verified", 'false');
            setMData({
                phone: json.msz.phone,
                email: json.msz.email,
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

    async function verifyGst () {
        setLoading1(true);
        //Call GSTIN VEERIFICATION API
        mData['gst_details'] = {
            gstin: gstin,
            bussiness_name: "",
            pan_number: "",
            registered_bussiness_address: "",
            registered_mobile_number: mData.phone,
            registered_email_address: mData.email
        }
        const obj = {
            type: "gst_phone_email",
            manufacturer_id: mData.manufacturer_id,
            phone: mData.phone,
            email: mData.email,
            gst_details: mData.gst_details,
            pickup_address: mData.gst_details.registered_bussiness_address
        }

        const json = await saveManufacturerInfo(obj);

        if(json.success) {
                setMData(mData);
                setGstVerified(true);
                setLoading1(false);
                setComplete(1);
            } else{
                setLoading1(false);
                snackbarObject['message'] = "Something Went Wrong";
                showSnackbarMessage(snackbarObject);
            }

    }

    async function handleMode () {
        if(mode === "GST") {
            setMode("Address")
        } else if(mode === "Address") {
            setMode("Bank")
        } else if(mode === "Bank") {
            setMode("Supplier")
        } else if(mode === "Supplier"){
            mData['pickup_address'] = {
                address: address,
                landmark: landmark,
                pincode: pincode,
                city: city,
                state: state,
            }
            mData['bank_details'] = {
                beneficiary_name: beneficiary,
                account_number: account,
                bank_name: bank,
                ifsc_code: ifsc,
            }
            const obj = {
                type: "pickup_bank_supplier",
                manufacturer_id: mData.manufacturer_id,
                bank_details: mData.bank_details,
                pickup_address: mData.pickup_address,
                name: name,
                store_name: store
            }
            if(isUniqueStoreName){
                await saveData(obj);
            } else{
                snackbarObject['message'] = "Please Enter A Valid Store Name";
                showSnackbarMessage(snackbarObject);
            }
        }
    }

    useEffect(()=>{
        handleValidateAndGetManufacturer()
    },[]);

    function handleIsReturnSame() {
        if(isReturnAddressSame){
            mData['return_address'] = {
                address: rAddress,
                landmark: rLandmark,
                pincode: rPincode,
                city: rCity,
                state: rState,
            }
        } else {
            mData['return_address'] = {
                address: address,
                landmark: landmark,
                pincode: pincode,
                city: city,
                state: state,
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
                    <input disabled={gstVerified} value={gstin} onChange={(e)=>{setGstin(e.target.value)}} className='gipRGBodyInput' type='text' placeholder='Enter Your GSTIN'/>
                    {loading1? <div className="gipLoader1"></div> : gstVerified ?null: <div onClick={()=>{verifyGst()}} className='gipRGBodySave'>Verify</div>}
                    {gstVerified ? <i style={{fontSize: '20px', color: 'green'}} class="fa-solid fa-circle-check"></i>:null}
                    {gstVerified ?<p className='gipRGBodyT1'>Verified</p>:null}
                </div>
                {gstVerified ? <div className="gipRGBodyI">
                        <p className="gipRGBodyIT1">GSTIN</p>
                        <p className="gipRGBodyIT2">1234678</p>
                        <p className="gipRGBodyIT1">Bussiness Name</p>
                        <p className="gipRGBodyIT2">Name</p>
                        <p className="gipRGBodyIT1">PAN Number</p>
                        <p className="gipRGBodyIT2">55DFCG</p>
                        <p className="gipRGBodyIT1">Registered Bussiness Address</p>
                        <p className="gipRGBodyIT2">Line 1, How to Do what and when hope so that will be done okay</p>
                    </div> : null}
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
                    <p className="gipRBBodyT1">Beneficiary Name</p>
                    <select className="gipRBBodyDD" value={beneficiary} onChange={(e)=>{setBeneficiary(e.target.value)}}>
                        <option value="User Name">User Name</option>
                        <option value="Company Name">Company Name</option>
                    </select>
                    <p className="gipRBBodyT1">Account Number</p>
                    <input value={account} onChange={(e)=>{setAccount(e.target.value)}} className='gipRBBodyInput' type='text'/>
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
                </div> : null }

                {gstVerified ? <div onClick={()=>{handleMode()}} className="gipRContinue">{mode === "Supplier"? "Save" :"Continue"}</div> : null}
            </div>
            {showSnackbar ? <Snackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
      </div>
    );
  }


export default  GstInfoPage;
