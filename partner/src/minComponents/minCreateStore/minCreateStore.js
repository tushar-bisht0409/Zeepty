import React, { useEffect, useRef,useMemo, useState,useCallback } from 'react'
import { postMultipleProductInMongoAndElastic } from '../../store/action/productaction';
import { searchListingByVertical } from '../../store/action/search_action';
import { editSellerInfo, getSellerInfo, saveSellerInfo, saveStoreInfo } from '../../store/action/seller_action';
import { S3_URI } from '../../store/action/type';
import { deleteMultipleFilesS3, uploadFile, uploadMultipleFilesToS3 } from '../../store/action/upload_file_action';
import MINProductCard from '../minProductCard/minProductCard';

import './minCreateStore.css'

const MINCreateStore = ({setModalIsOpen}) => {

    const [userData, setUserData] = useState(undefined);

    const [pImage, setPImage] = useState("");

    const [dName, setDName] = useState("");
    const [uName, setUName] = useState("");
    const [yName, setYName] = useState("");

    const [loader1, setLoader1] = useState(false);
    const [loader2, setLoader2] = useState(false);
    const [loader3, setLoader3] = useState(false);

    const [fCategories, setFCategories] = useState(() => []);

    const [listingsByVertical, setListingByVertical] = useState([]);


    async function getUserData() {
        const s_id = localStorage.getItem("influencer_id")
        const json = await getSellerInfo(s_id);
        console.log(":: ",json)
        if(json.success === true && json.isNew === false) {
            setUserData(json.msz);
            setDName(json.msz.display_name);
            setYName(json.msz.name);
            setUName(json.msz.user_name);
            setPImage(json.msz.profile_image);
            setFCategories(json.msz.fav_categories);
        } else{
            window.alert("Something Went Wrong")
        }
    }

    const allCategories = [
        {
          cName: "MENS WEAR",
          imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
    
        {
          cName: "Women's Wear",
          imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
        {
          cName: "Accessories",
          imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
        {
          cName: "Footwears",
          imageUrl: "https://images.pexels.com/photos/14005887/pexels-photo-14005887.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        },
      ]

      const its = [1,2,3,4,5,6,7,8];

      const [csMode, setCSMode] = useState("Info");

      const [newpImage, setNewpImage] = useState(null);

      async function saveStoreData () {
        setLoader1(true);
        let obj = {
          seller_id: userData.seller_id,
          profile_image: pImage,
          display_name: dName,
          name: yName,
          user_name: uName,
          fav_categories: fCategories
        }
        let json;
        let json2;

        if(pImage === "" || pImage === undefined){
          if(dName != "" || yName != "" || uName !="" || fCategories !=[]|| newpImage != null){
            json = await uploadMultipleFilesToS3([newpImage]);
            if(json.success){
              obj.profile_image = S3_URI + json.fileKeys[0];
              json2 = await saveStoreInfo(obj);
            } else {
              setLoader1(false)
              return window.alert('Something went wrong');
            }
          } else{
            setLoader1(false)
            return window.alert("Fill all Fields")
          }
        } else {
          if(dName != "" || yName != "" || uName !="" || fCategories !=[]){
            if(newpImage != null){
              json = await uploadMultipleFilesToS3([newpImage]);
              obj.profile_image = S3_URI + json.fileKeys[0];
            }
            json2 = await saveStoreInfo(obj);
          } else {
            setLoader1(false)
            return window.alert("Fill all Fields")
          }
          setLoader1(false);
        }
        
          if(json2.success){
              let u_info = JSON.parse(localStorage.getItem("sellerInfo"));
              u_info.profile_image = obj.profile_image;
              u_info.display_name = dName;
              u_info.user_name = uName;
              u_info.name = yName;
              u_info.fav_categories = fCategories;
              localStorage.setItem("sellerInfo",JSON.stringify(u_info));
              setLoader2(true);
              setCSMode("Product");
              const json3 = await searchListingByVertical({verticals: fCategories});
              if(json3.success){
                setListingByVertical(json3.msz);
              } else {
                window.alert("Something Went Wrong");
              }
              setLoader2(false)
              if(pImage === "" || pImage === undefined){}else if(newpImage!=null){
              deleteMultipleFilesS3([pImage.replace(S3_URI, "")]);}
          } else{
            return window.alert("Something Went Wrong")
        }
      
      }

      function addFCategories(fCat) {
        fCategories.push(fCat);
        setFCategories([...fCategories]);
      }
    
      function removeFCategories(fCat) { 
        for(let i = 0; i<fCategories.length; i++){
          if(fCategories[i] === fCat){
            fCategories.splice(i,1);
            break;
          }
        } 
        setFCategories([...fCategories]);
    }
  
    function isFCSelected(fCat) {
      let isP = false;
      if(fCategories.includes(fCat)){
        isP = true;
      }
      return isP;
    }
  
    function handleFCSelection (fCat) {
      if(isFCSelected(fCat)){
        removeFCategories(fCat);
      } else{
        addFCategories(fCat);
      }
    }
  
    function handleProfileImage(e) {
      setNewpImage(e.target.files[0]);
  }

      const [keyW, setKeyW] = useState("");

    function searchNow() {
      if(keyW !=""){
      window.open(`/minsearch/${keyW}`,'_self');
      }
    }

    const [pCount, setPCount] = useState(0);

    useEffect(()=>{
        let lpCount = localStorage.getItem("product_count");
        if(lpCount === null || lpCount === undefined){
          setPCount(0);
    } else{
      setPCount(parseInt(lpCount));
    }

    getUserData();

    },[]);

    

    function increasePCount () {
      let newCount = pCount;
      newCount++;
      localStorage.setItem("product_count",newCount.toString());
      setPCount(newCount);
    }

    async function handleLaunch() {
      setLoader3(true);
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

        const json = await postMultipleProductInMongoAndElastic(obj);

        if(json.success) {
          let obj2 = {
            type: 'store_url',
            seller_id: localStorage.getItem("influencer_id"),
            store_url: `www.xyz.com/${uName}`
          }
          const json2 = await editSellerInfo(obj2);
          if(json2.success) {
            let u_info = JSON.parse(localStorage.getItem("sellerInfo"));
            u_info.store_url = `www.xyz.com/${uName}`;
            localStorage.getItem("sellerInfo",JSON.stringify(u_info));
            window.open('/creator/home');
          } else {
            setLoader3(false)
            return window.alert("Something Went Wrong");
          }
        } else {
          setLoader3(false)
          return window.alert("Something Went Wrong");
        }
        setLoader3(false)
      }

  return (

    userData===undefined ?<div></div>:
    csMode==="Info"? <>

          <div className='minCreateModalTB'>
            <p className='minCreateModalTBT1'>Create Store</p>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
          fontSize: '25px',
          color: 'black'
        }} class="fa-solid fa-xmark"></i>
          </div>

          <input id="profile_image_input" onChange={handleProfileImage} style={{ display: 'none' }} type="file" accept="image/*"/>
          <div className='minCreateModalPI'>
          <img onClick={() => document.getElementById('profile_image_input').click()} className='minCreateModalPIImage' src={newpImage===null? pImage : URL.createObjectURL(newpImage)} alt=""/>
          <div onClick={() => document.getElementById('profile_image_input').click()} className='minCreateModalPIEdit'>
          <i style={{fontSize: "3vw",color: 'white'}} class="fa-solid fa-pencil"></i>
          </div>
          </div>
          <p className='minCreateModalDNHead'>Store Name</p>
          <div className='minCreateModalDN'>
            <input value={dName} onChange={(val)=>{setDName(val.target.value)}} className='minCreateModalDNInput' type='text'/>
            <div className='minCreateModalDNIcon'>
            <i style={{fontSize: '14px', color: '#554BDA'}} class="fa-solid fa-pencil"></i>
            </div>
          </div>

          <p className='minCreateModalUNHead'>User Name</p>
          <div className='minCreateModalUN'>
            <input value={uName} onChange={(val)=>{setUName(val.target.value)}} className='minCreateModalDNInput' type='text'/>
            <div className='minCreateModalUNIcon'>
            <i style={{fontSize: '14px', color: '#554BDA'}} class="fa-solid fa-pencil"></i>
            </div>
          </div>

          <p className='minCreateModalUNHead'>Your Name</p>
          <div className='minCreateModalUN'>
            <input value={yName} onChange={(val)=>{setYName(val.target.value)}} className='minCreateModalDNInput' type='text'/>
            <div className='minCreateModalUNIcon'>
            <i style={{fontSize: '14px', color: '#554BDA'}} class="fa-solid fa-pencil"></i>
            </div>
          </div>

          <p className='minCreateModalFCHead'>Select Categories</p>

          <div className='minCreateModalFCAll'>
            {allCategories.map((item,index)=> (
            <div onClick={()=>{handleFCSelection(item.cName)}} className="minCreateModalFC">
            <img className='minCreateModalFCL' src={item.imageUrl} alt="" />
            <div className='minCreateModalFCR'>
            <p className='minCreateModalFCRText'>{item.cName}</p>
          </div>
          <div className='minCreateModalFCIcon'>
            {isFCSelected(item.cName) ? <i style={{color:'green',fontSize: '18px'}} class="fa-solid fa-circle-check"></i> : <i style={{color:'black',fontSize: '18px'}} class="fa-regular fa-circle"></i>}
          </div>
          </div>
          ))}
          </div>

          {loader1 ? <div className='minCreateModalLoader1'></div> : <div onClick={async ()=>{saveStoreData();}} className='minCreateModalContinueButton'>Save</div>}

          </>: <>
          <div className='minCreateModalAPTB'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
          fontSize: '20px',
          color: 'black'
        }} class="fa-solid fa-arrow-left"></i>

              <div className="minCreateModalAPInputfield">
                <input onKeyDown={(val)=>{
                  if(val.key === 'Enter') {
                  searchNow()}}}
                   value={keyW} onChange={(val)=>{setKeyW(val.target.value)}} type="text" placeholder='Search here' />
                   <div onClick={()=>{searchNow()}} className='minCreateModalAPSIconBox'>
                <i style={{ fontSize: '15px',color: 'lightgrey'}} class="fa-solid fa-search"></i>
                </div>
            </div>
          

          <div className='minCreateModalAPCountBox'>
            <div className='minCreateModalAPCount'>{pCount}</div>
            {pCount===3?<div></div>:<div className='minCreateModalAPCountBoxT1'>Add {3-pCount} Products</div>}
          </div>
          </div>

          <div className='minCreateModalAPHead'>(Add At Least 3 Products To Launch Your Store)</div>

          {loader2? <div className='minCreateModalLoader2'></div> :<div className='minCreateModalAPPLBox'>
            {listingsByVertical.map((itm)=>(
              <MINProductCard lMode={"Locally"} storeStage={2} increasePCount={increasePCount} item={itm._source}/>
            ))}
          </div>}

          {pCount>=1? loader3? <div className='minCreateModalLoader3'></div> : <div onClick={()=>{
            handleLaunch();
          }} className='minCreateModalAPLaunch'>Launch Store</div>:null}
          </>
    
  )
} 

export default MINCreateStore