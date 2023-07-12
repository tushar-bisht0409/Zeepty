import React, { useEffect, useState } from 'react'

import './minSaveInfo_page.css'

import { checkIsSellerUserNameUnique, getSellerInfo, isSellerEmailExist, saveSellerInfo } from '../../store/action/seller_action';
import MINSnackbar from '../../minComponents/minSnackbar/minSnackbar';

const MINSaveInfoPage = ({phone}) => {

    const [currMode, setCurrMode] = useState("personal")

    const [displayName, setDisplayName] = useState("");

    const [userName, setUserName] = useState("");

    const [email, setEmail] = useState("");

    const [gender, setGender] = useState("");

    const [sMedia, setSMedia] = useState(() => []);

    const [sDomain, setSDomain] = useState(() => []);

    const [loader1, setLoader1] = useState(false);

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



    const [disableUserTyping, setDisableUserTyping] = useState(false);
    let disableUserTypingLocal = false;
    const [typingTimer, setTypingTimer] = useState(0);
    const [isUniqueUserName, setIsUniqueUserName] = useState(undefined);
    let isUniqueUserNameLocal = undefined;

    useEffect(() => {
      if (userName.trim() !== "") {
        const timer = setInterval(() => {
          setTypingTimer( (prevTime) => {
              handleCheckIsUserNameUnique();
            if (prevTime === 0) {       
              return prevTime;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000);
  
        return () => clearInterval(timer);
      }
    }, [userName]);

    async function handleCheckIsUserNameUnique() {
      if(disableUserTypingLocal === false && isUniqueUserNameLocal === undefined){
          setDisableUserTyping(true);
          disableUserTypingLocal = true;
          const obj = { user_name: userName };
          const json = await checkIsSellerUserNameUnique(obj);
          if(json.success){
              setIsUniqueUserName(true);
              isUniqueUserNameLocal = true;
              setDisableUserTyping(false);
              disableUserTypingLocal = false;
          } else if(json.success === false && json.err === null){
              setIsUniqueUserName(false);
              isUniqueUserNameLocal = false;
              setDisableUserTyping(false);
              disableUserTypingLocal = false;
          } else{
              setDisableUserTyping(false);
              disableUserTypingLocal = false;
              snackbarObject['message'] = "Something Went Wrong";
              showSnackbarMessage(snackbarObject);
          }
      }
    }

  const handleUserName = (event) => {
      setUserName(event.target.value.trim().toLowerCase());
      setTypingTimer(5);
      setIsUniqueUserName(undefined)       
      isUniqueUserNameLocal = undefined; 
    }

    function addSMedia(smName) {
      let nSM = {
        account_type: smName,
        user_name: ""
      }
      sMedia.push(nSM);
      setSMedia([...sMedia]);
    }

    function removeSMedia(smName) { 
      for(let i = 0; i<sMedia.length; i++){
        if(sMedia[i].account_type === smName){
          sMedia.splice(i,1);
          break;
        }
      } 
        setSMedia([...sMedia]);
  } 
    
  function isSMSelected(smName) {
    let isP = false;
    for(let i = 0; i<sMedia.length; i++){
      if(sMedia[i].account_type === smName){
        isP = true;
        break;
      }
    }
    return isP;
  }

  function handleSMSelection (smName) {
    if(isSMSelected(smName)){
      removeSMedia(smName);
    } else{
      addSMedia(smName);
    }
  }

  function handleSMSelectionUserName (index,uName) {
    sMedia[index].user_name = uName;
    setSMedia([...sMedia]);
  }


  function addSDomain(sDmn) {
    sDomain.push(sDmn);
    setSDomain([...sDomain]);
  }

  function removeSDomain(sDmn) { 
    for(let i = 0; i<sDomain.length; i++){
      if(sDomain[i] === sDmn){
        sDomain.splice(i,1);
        break;
      }
    } 
    setSDomain([...sDomain]);
} 

function isSDSelected(sDmn) {
  let isP = false;
  if(sDomain.includes(sDmn)){
    isP = true;
  }
  return isP;
}

function handleSDSelection (sDmn) {
  if(isSDSelected(sDmn)){
    removeSDomain(sDmn);
  } else{
    addSDomain(sDmn);
  }
}

  const allDomains = [
    {
      dName: "Artist",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      dName: "Fashion/Style",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      dName: "Lifestyle",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },

    {
      dName: "Health & Fitness",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      dName: "Vlogger",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      dName: "Memers",
      imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ]


  async function saveData() {
    if(displayName === "" || userName === "" || email === "" || gender === "" || sMedia === [] || sDomain === ""){
      snackbarObject['message'] = "Fill all the fields";
      showSnackbarMessage(snackbarObject);
    } else if(sMedia[0].user_name === ""){
      snackbarObject['message'] = "Fill all the fields";
      showSnackbarMessage(snackbarObject);
    } else {
      console.log("LSS: ",localStorage);
      const obj = {
        seller_id: localStorage.getItem('influencer_id'),
        phone: localStorage.getItem('user_phone'),
        mode: 'Influencer',
        name: displayName,
        user_name: userName,
        email: email,
        gender: gender,
        accounts: sMedia,
        domains: sDomain
      }
      const json = await saveSellerInfo(obj);
      console.log(json);
      if(json.success) {
        window.open('/creator/home','_self');
      }else{
        snackbarObject['message'] = "Something Went Wrong";
        showSnackbarMessage(snackbarObject);
      }
    }
  }

  async function getUserData(sID) {
    const json = await getSellerInfo(sID);
    console.log(":: ",json)
    if(json.success === true && json.isNew === false) {
      window.open('/creator/home','_self');
    } else if(json.success === true && json.isNew === true){
        // window.open('/minsaveinfo','_self');
    } else{
      snackbarObject['message'] = "Something Went Wrong";
      showSnackbarMessage(snackbarObject);
    }
}


async function getData(){
    let uID = localStorage.getItem('influencer_id');
    if(uID === null || uID === undefined){
        window.open('/creator/auth','_self');
    } else{
        getUserData(uID);
    }
}

async function handleEmailExist() {
  if(displayName === "" || userName === "" || email === "" || gender === ""){
    snackbarObject['message'] = "Fill all the fields";
      showSnackbarMessage(snackbarObject);
  } else {
  setLoader1(true);
  let obj = {email: email.trim().toLowerCase()}
  const json = await isSellerEmailExist(obj);
  if(json.success){
    setCurrMode("social")
  } else{
    snackbarObject['message'] = "Email is linked with another account";
    showSnackbarMessage(snackbarObject);
  }
  setLoader1(false);
}

}

useEffect(()=>{
    getData();
},[]);

  return (
    currMode==="personal"?
    <div className='siPerBox'>
      <div className='siPerTop'>
    </div>
    <p className='siPerHead' >Enter your Personal Details</p>
            <div className='siPerInputBox'>
                <div className='siPerInputHead'>Full Name</div>
                <input value={displayName} onChange={(val)=>{setDisplayName(val.target.value)}} className='siPerInput' type="text" placeholder='Full Name' />
            </div>
            <div className='siPerInputBox'>
                <div className='siPerInputHead'>User Name</div>
                <div className="siSocUNDiv">
                        {disableUserTyping? <div className="siLoader2"></div> : null}
                        <input disabled={disableUserTyping} value={userName} onChange={handleUserName} className={isUniqueUserName? 'siSocInputGreen' : isUniqueUserName === false ? 'siSocInputRed' : 'siPerInput'} type='text'/>
                        { isUniqueUserName === undefined ? null : <p className={isUniqueUserName? 'siSocUNValid' : 'siSocUNInvalid'}>{isUniqueUserName? `'${userName}' is available` : `'${userName}' is already taken, Please try another one`}</p>}
                    </div>
                {/* <input value={userName} onChange={(val)=>{setUserName(val.target.value)}} className='siPerInput' type="text" placeholder='User Name' /> */}
            </div>
            <div className='siPerInputBox'>
                <div className='siPerInputHead'>Email</div>
                <input value={email} onChange={(val)=>{setEmail(val.target.value)}} className='siPerInput' type="text" placeholder='Email' />
            </div>

            <p className='siPerGenderHead'>Gender</p>
        <div className='siPerGenderBox'>
        <div onClick={()=>{setGender('Male');}} className={gender==="Male"?'siPerGender-active':'siPerGender-inActive'}>Male</div>
        <div onClick={()=>{setGender('Female');}} className={gender==="Female"?'siPerGender-active':'siPerGender-inActive'}>Female</div>
        <div onClick={()=>{setGender('Other');}} className={gender==="Other"?'siPerGender-active':'siPerGender-inActive'}>Other</div>
        </div>
        <div className='siPerNextButtonBox'>
        {loader1 ? <div className='siLoader1'></div> : <div onClick={()=>{
          handleEmailExist();
        }} className='siPerNextButton'>Next</div>}
        </div>
        {showSnackbar ? <MINSnackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
    </div> 
    :
    <div className='siSocBox'>
      <div className='siSocHead'>Social Media Details</div>

      <div className='siSocSelBox'>
        <p className='siSocSelHead'>Select</p>
        <div className='siSocSelIconsBox'>
        <i onClick={()=>{
          handleSMSelection("Instagram");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Instagram")? "#cd486b" : "lightgrey"
        }} class="fa-brands fa-instagram"></i>
        <i onClick={()=>{
          handleSMSelection("Facebook");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Facebook")? "#4267B2" : "lightgrey"
        }} class="fa-brands fa-facebook"></i>
        <i onClick={()=>{
          handleSMSelection("Youtube");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Youtube")? "#FF0000" : "lightgrey"
        }} class="fa-brands fa-youtube"></i>
        <i onClick={()=>{
          handleSMSelection("Whatsapp");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Whatsapp")? "#25D366" : "lightgrey"
        }} class="fa-brands fa-whatsapp"></i>
        </div>
        <div className='siSocSelIconsBox'>
        <i onClick={()=>{
          handleSMSelection("Discord");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Discord")? "#7289da" : "lightgrey"
        }} class="fa-brands fa-discord"></i>
        <i onClick={()=>{
          handleSMSelection("Twitter");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Twitter")? "#1DA1F2" : "lightgrey"
        }} class="fa-brands fa-twitter"></i>
        <i onClick={()=>{
          handleSMSelection("Snapchat");
        }} style={{
          fontSize: '8vw',
          padding: '1vw',
          borderRadius: '8px',
          backgroundColor: isSMSelected("Snapchat")? "#FFFC00" : "white",
          color: isSMSelected("Snapchat")? "black" : "lightgrey"
        }} class="fa-brands fa-snapchat"></i>
        <i onClick={()=>{
          handleSMSelection("Telegram");
        }} style={{
          fontSize: '10vw',
          color: isSMSelected("Telegram")? "#0088cc" : "lightgrey"
        }} class="fa-brands fa-telegram"></i>
        </div>
        <div className='siSocSelFoot'>(You Can Select Multiple)</div>
      </div>
      {sMedia.map((item,index)=>(
        <div className='siSocUNBox'>
          <p className='siSocUNHead'>{item.account_type}</p>
          <input
          value={sMedia[index].user_name}
          onChange={(val)=>{handleSMSelectionUserName(index,val.target.value)}}
          className='siSocUNInput' type="text" placeholder={`${item.account_type} Username`}/>
        </div>
      ))}

      <div className='siSocDBox'>
      <div className='siSocDHead'>Select A Domain</div>
      <div className='siSocDAll'>
      {allDomains.map((item,index)=> (
        <div onClick={()=>{handleSDSelection(item.dName)}} className="siSocD">
            <img className='siSocDL' src={item.imageUrl} alt="" />
        <div className='siSocDR'>
          <p className='siSocDRText'>{item.dName}</p>
        </div>
        <div className='siSocDIcon'>
        {isSDSelected(item.dName) ? <i style={{color:'green',fontSize: '18px'}} class="fa-solid fa-circle-check"></i> : <i style={{color:'black',fontSize: '18px'}} class="fa-regular fa-circle"></i>}
        </div>
    </div>
      ))}
      </div>
      <div  className='siSocButtonBox'>
        <div onClick={()=>{setCurrMode("personal")}} className='siSocButtonBox-back'>Back</div>
      <div onClick={()=>{saveData();}} className='siSocButtonBox-save'>Save</div>
      </div>
      </div>
      {showSnackbar ? <MINSnackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
    </div>
  )
}

export default MINSaveInfoPage