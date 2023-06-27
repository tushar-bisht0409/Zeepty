import React, { useEffect, useState } from 'react'

import './minSaveInfo_page.css'

import { getSellerInfo, saveSellerInfo } from '../../store/action/seller_action';

const MINSaveInfoPage = ({phone}) => {

    const [currMode, setCurrMode] = useState("personal")

    const [displayName, setDisplayName] = useState("");

    const [userName, setUserName] = useState("");

    const [email, setEmail] = useState("");

    const [gender, setGender] = useState("");

    const [sMedia, setSMedia] = useState(() => []);

    const [sDomain, setSDomain] = useState(() => []);

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
      window.alert("Fill all Fields")
    } else if(sMedia[0].user_name === ""){
      window.alert("Fill all Fields")
    } else {
      console.log("LSS: ",localStorage);
      const obj = {
        seller_id: localStorage.getItem('influencer_id'),
        phone: localStorage.getItem('user_phone'),
        mode: 'Influencer',
        display_name: displayName,
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
        window.alert("Something Went Wrong")
      }
    }
  }

  async function getUserData(sID) {
    const json = await getSellerInfo(sID);
    console.log(":: ",json)
    if(json.success === true && json.isNew === false) {
      window.open('/creator/home','_self');
    } else if(json.success === true && json.isNew === true){
        window.open('/minsaveinfo','_self');
    } else{
        window.alert("Something Went Wrong")
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
                <div className='siPerInputHead'>Display Name</div>
                <input value={displayName} onChange={(val)=>{setDisplayName(val.target.value)}} className='siPerInput' type="text" placeholder='Display Name' />
            </div>
            <div className='siPerInputBox'>
                <div className='siPerInputHead'>User Name</div>
                <input value={userName} onChange={(val)=>{setUserName(val.target.value)}} className='siPerInput' type="text" placeholder='User Name' />
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
        <div onClick={()=>{
          setCurrMode("social")
        }} className='siPerNextButton'>Next</div>
        </div>
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
      <div onClick={()=>{
        saveData();
      }} className='siSocButtonBox'>
      <div className='siSocButton'>Save</div>
      </div>
      </div>
    </div>
  )
}

export default MINSaveInfoPage