import "./listingReport_page.css";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from 'uuid';

import { useParams } from "react-router-dom";
import { deleteListingRequest, editListingRequest, editMultipleListingRequest, getListingRequest, saveListingRequest } from "../../store/action/listingaction";
import AddProgress from "../../components/addProgress/addProgress";
import { saveListing } from "../../store/action/productaction";
import { deleteMultipleFilesS3, uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import { mensWear } from "./cat";
import { S3_URI } from "../../store/action/type";
import SImageReport from "../../components/sImageReport/sImageReport";
import { validateManufacturerLocalData } from "../../store/action/auth_action";
const allSize = {
  options: ['S', 'M', 'L', 'XL', 'XXl', 'Free Size'],
  fields: [
    { name: 'Chest Length', unit: 'Inch', options: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { name: 'Waist Length', unit: 'Inch', options: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], }
  ]
}

export default function ListingReportPage() {

  const params = useParams();
  const [lInfoArray, setLInfoArray] = useState(undefined);

  const [mediaUrls, setMediaUrls] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(undefined);
  const [selectedFile, setSelectedFile] = useState(undefined);

  const [index1, setIndex1] = useState();
  const [index2, setIndex2] = useState();

  const [selectedNow, setSelectedNow] = useState(0);

  const [toDelete, setToDelete] = useState([]);

  const [sizeModal, setSizeModal] = useState(false);

  const [errorArray, setErrorArray] = useState([]);

  const [allFields, setAllFields] = useState([]);
  const [productFields, setProductFields] = useState([]);

  const [checkErrorArray, setCheckErrorArray] = useState([]);

  const [selectCustomBrand, setSelectCustomBrand] = useState(false)



  function getAllFields() {
    const nallFields = ["product_name", "weight", "price", "mrp", "hsn_code", "gst_percent"];
    let pFields = [];
    for (let i = 0; i < mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions.length; i++) {
      if (mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions[i].required) {
        const outputString = mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions[i].name.replace(/\s+/g, "_").toLowerCase();
        pFields.push(outputString);
      }
    }

    setAllFields(nallFields);
    setProductFields(pFields);

  }

  function handleChangeLInfo(index, kName, vName) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    lInfoArray[index][`${kName}`] = vName;
    setLInfoArray([...lInfoArray]);
  }

  function handleChangeLInfoDetails(index, kArray, kName, vName) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    let ind = lInfoArray[index][`${kArray}`].findIndex(obj => Object.keys(obj)[0] === kName);
    if (ind === -1) {
      let newObj = {};
      newObj[`${kName}`] = vName;
      lInfoArray[index][`${kArray}`].push(newObj);
    } else {
      lInfoArray[index][`${kArray}`][ind][`${kName}`] = vName;
    }
    setLInfoArray([...lInfoArray]);
  }

  async function getLRData(ind) {
    let obj = {
      type: "listing_id",
      listing_id: params.listing_id
    }
    const json = await getListingRequest(obj);
    if (json.success) {
      if(json.msz[0].listing_status !== "Rejected"){
        window.open('/supplier/listing/request','_self')
      }
      errorArray.push(json.msz[0]['error_array']);
      for (let i = 0; i < json.msz.length - 1; i++) {
        errorArray.push([]);
      }
      setErrorArray([...errorArray]);
      setCheckErrorArray(json.msz[0]['error_array']);
      setSelectedNow(ind)
      setMediaUrls(json.msz[ind].media_urls);
      setSelectedMedia(json.msz[ind].media_urls[0]);
      if(ind === 0){
        setLInfoArray(json.msz);
      } else {
        lInfoArray.push(json.msz[json.msz.length - 1]);
        setLInfoArray([...lInfoArray])
      }
    } else {
      window.alert("Something Went Wrong")
    }
  }

  useEffect(() => {
    validateManufacturerLocalData();
    getLRData(0);
    getAllFields();
  }, [])

  async function handleMediaUpload(e) {
    let newFiles = [];
    let imageCount = 0;
    Array.from(e.target.files).map((ff) => {
      if (ff.size < 9961472) {
        newFiles.push(ff);
        if(ff.type.split("/")[0] === "image") {
          imageCount++;
        }
      }
    });
  }

  function findDetails(kArray, kName) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    let ind = lInfoArray[selectedNow][`${kArray}`].findIndex(obj => Object.keys(obj)[0] === kName);
    if (ind === -1) {
      return "";
    } else {
      return lInfoArray[selectedNow][`${kArray}`][ind][`${kName}`]
    }
  }

  async function handleVariant(e) {
    let newFiles = [];
    let imageCount = 0;
    Array.from(e.target.files).map((ff) => {
      if (ff.size < 9961472) {
        newFiles.push(ff);
        if(ff.type.split("/")[0] === "image") {
          imageCount++;
        }
      }
    });
    if(imageCount === 0 && lInfoArray[selectedNow].media_urls.length === 0) {
      window.alert("Select At least one image.")
    } else {
      await createVariant(newFiles)
    }
  }

  async function createVariant(mFiles) {
    const S3_URI = "https://zeepty-products.s3.ap-south-1.amazonaws.com/";
    if (mFiles.length === 0) {
      window.alert("Please Upload At Least One Image")
    } else {
    //   const json = await uploadMultipleFilesToS3(mFiles);
    //   if (json.success) {
    //     let mUrls = [];
    //     for (let i = 0; i < json.fileKeys.length; i++) {
    //       mUrls.push(S3_URI + json.fileKeys[i]);
    //     }
    //     let lr_id = uuidv4();
    //     let l_id = lInfoArray[0]['listing_id'];
    //     let obj = {
    //       listing_request_id: lr_id,
    //       listing_status: "Draft",
    //       request_type: "Create",
    //       listing_id: l_id,
    //       manufacturer_id: localStorage.getItem('manufacturer_id'),
    //       media_urls: mUrls,
    //       weight: lInfoArray[0]['weight'],
    //       price: lInfoArray[0]['price'],
    //       mrp: lInfoArray[0]['mrp'],
    //       hsn_code: lInfoArray[0]['hsn_code'],
    //       gst_percent: lInfoArray[0]['gst_percent'],
    //       vertical: lInfoArray[0]['vertical'],
    //       category: lInfoArray[0]['category'],
    //       sub_category: lInfoArray[0]['sub_category'],
    //       sub_category2: lInfoArray[0]['sub_category2'],
    //     }

    //     const json2 = await saveListingRequest(obj);

    //     if (json2.success) {
    //       getLRData(lInfoArray.length); /// HERE
    //     } else {
    //       window.alert('Something went wrong');
    //     }
    //   } else {
    //     window.alert('Something went wrong');
    //   }
    }
  }

  function makeVariantActive(index) {
    setSelectedMedia(lInfoArray[index]['media_urls'][0]);
    setMediaUrls(lInfoArray[index]['media_urls']);
    setSelectedNow(index);
  }

  const sizeRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (sizeRef.current && !sizeRef.current.contains(event.target)) {
        setSizeModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sizeRef]);

  async function deleteLinfo() {
    const json = await deleteListingRequest(lInfoArray[selectedNow]);
    if (json.success) {
      setSelectedNow(0);
      lInfoArray.splice(selectedNow, 1);
      setLInfoArray([...lInfoArray]);
      setMediaUrls(lInfoArray[0]['media_urls']);
      setSelectedMedia(lInfoArray[0]['media_urls'][0]);

      console.log("msz: ", json.msz);
      let arr = []
      for (let i = 0; i < json.msz.media_urls.length; i++) {
        arr.push(json.msz.media_urls[i].replace("https://zeepty-products.s3.ap-south-1.amazonaws.com/", ""));
      }
      await deleteMultipleFilesS3(arr);
    }
  }

  function checkSizeSelected(sName) {
    sName = sName.replace(/\s+/g, "_").toLowerCase()
    let ind = lInfoArray[selectedNow]['product_size'].findIndex(obj => obj['size'] === sName);
    if (ind === -1) {
      return false;
    } else {
      return true;
    }
  }

  function selectSize(sName) {
    let obj = {
      size: sName.replace(/\s+/g, "_").toLowerCase(),
      inventory: '',
      sku_id: ''
    };

    for (let i = 0; i < allSize.fields.length; i++) {
      obj[`${allSize.fields['name']}`] = "";
    }
    lInfoArray[selectedNow]['product_size'].push(obj);
    setLInfoArray([...lInfoArray]);
    checkProductSizeError(lInfoArray[selectedNow]['product_size']);
  }

  function unselectSize(sName) {
    sName = sName.replace(/\s+/g, "_").toLowerCase();
    let ind = lInfoArray[selectedNow]['product_size'].findIndex(obj => obj['size'] === sName);
    if (ind === -1) {
    } else {
      lInfoArray[selectedNow]['product_size'].splice(ind, 1);
      setLInfoArray([...lInfoArray]);
    }
    checkProductSizeError(lInfoArray[selectedNow]['product_size']);
  }

  function editSizeValue(sName, kName, vName) {
    sName = sName.replace(/\s+/g, "_").toLowerCase()
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    let ind = lInfoArray[selectedNow]['product_size'].findIndex(obj => obj['size'] === sName);
    if (ind === -1) {
    } else {
      lInfoArray[selectedNow]['product_size'][ind][`${kName}`] = vName;
      setLInfoArray([...lInfoArray]);
    }
    console.log(":::", lInfoArray[selectedNow]);
  }

  function deleteAllSize() {
    lInfoArray[selectedNow]['product_size'] = [];
    setLInfoArray([...lInfoArray]);
  }

  function checkIfFilled() {
    let isErr = false;
    for (let i = 0; i < lInfoArray.length; i++) {
      if (lInfoArray[i]['media_urls'].length < 3) {
        isErr = true;
        if (errorArray[i].includes("media_urls") === false) {
          errorArray[i].push("media_urls");
        }
      }

      if (lInfoArray[i]['product_size'].length === 0) {
        isErr = true;
        if (errorArray[i].includes("product_size") === false) {
          errorArray[i].push("product_size");
        }
      }

      for (let j = 0; j < allFields.length; j++) {
        if (lInfoArray[i][allFields[j]] === "" || lInfoArray[i][allFields[j]] === null || lInfoArray[i][allFields[j]] === undefined) {
          isErr = true;
          if (errorArray[i].includes(allFields[j]) === false) {
            errorArray[i].push(allFields[j]);
          }
        }
      }

      for (let k = 0; k < lInfoArray[i]['product_size'].length; k++) {
        if (lInfoArray[i]['product_size'][k].inventory === "" || lInfoArray[i]['product_size'][k].inventory === null || lInfoArray[i]['product_size'][k].inventory === undefined) {
          isErr = true;
          if (errorArray[i].includes(lInfoArray[i]['product_size'][k].size) === false) {
            errorArray[i].push(lInfoArray[i]['product_size'][k].size);
          }
        }
      }

      for (let l = 0; l < productFields.length; l++) {
        let ind = lInfoArray[i]['product_details'].findIndex(obj => Object.keys(obj)[0] === productFields[l]);
        if (ind === -1) {
          isErr = true;
          if (errorArray[i].includes(productFields[l]) === false) {
            errorArray[i].push(productFields[l]);
          }
        } else {
          if (lInfoArray[i]['product_details'][ind][`${productFields[l]}`] === "" || lInfoArray[i]['product_details'][ind][`${productFields[l]}`] === null || lInfoArray[i]['product_details'][ind][`${productFields[l]}`] === undefined) {
            isErr = true;
            if (errorArray[i].includes(productFields[l]) === false) {
              errorArray[i].push(productFields[l]);
            }
          }
        }
      }
    }
    setErrorArray([...errorArray]);
    if (isErr === false) {
      saveAllListingRequest();
    } else {

    }
  }

  function checkNumberError(val, kName, lowerBound) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    if (parseInt(val) < lowerBound || val === "") {
      if (errorArray[selectedNow].includes(kName) === false) {
        errorArray[selectedNow].push(kName);
        setErrorArray([...errorArray])
      }
    } else {
      let ind = errorArray[selectedNow].findIndex((obj => obj === kName))
      if (ind >= 0) {
        errorArray[selectedNow].splice(ind, 1)
      }
      setErrorArray([...errorArray])
    }
  }

  function checkTextError(val, kName) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    if (val === "") {
      if (errorArray[selectedNow].includes(kName) === false) {
        errorArray[selectedNow].push(kName);
        setErrorArray([...errorArray])
      }
    } else {
      let ind = errorArray[selectedNow].findIndex((obj => obj === kName))
      if (ind >= 0) {
        errorArray[selectedNow].splice(ind, 1)
      }
      setErrorArray([...errorArray])
    }
  }

  function checkProductSizeError(psArray) {
    if (psArray.length === 0) {
      if (errorArray[selectedNow].includes("product_size") === false) {
        errorArray[selectedNow].push("product_size");
      }
    } else {
      let ind = errorArray[selectedNow].findIndex((obj => obj === "product_size"))
      if (ind >= 0) {
        errorArray[selectedNow].splice(ind, 1)
      }
    }
    setErrorArray([...errorArray])
  }


  async function saveAllListingRequest() {
    for (let i = 0; i < lInfoArray.length; i++) {
      lInfoArray[i]['listing_status'] = "Pending";
      if(lInfoArray[i]['style_code'] === "" || lInfoArray[i]['style_code'] === undefined || lInfoArray[i]['style_code'] === null){
        lInfoArray[i]['style_code'] = uuidv4();
      }
    }
    setLInfoArray([...lInfoArray]);
    let obj = { listing_request_Array: lInfoArray };
    const json = await editMultipleListingRequest(obj);
    if (toDelete.length != 0) {
      setToDelete([]);
    }
    if (json.success) {
      window.open('/supplier/listing/request','_self')
    } else {
      window.alert("Something Went Wrong, Failed To Save Changes")
    }
  }

  async function saveAsDraft() {
    let obj = { listing_request_Array: lInfoArray };
    const json = await editMultipleListingRequest(obj);
    if (toDelete.length != 0) {
      setToDelete([]);
    }
    if (json.success) {
      window.open('/supplier/listing/draft','_self')
    } else {
      window.alert("Something Went Wrong, Failed To Save Changes")
    }
  }

  function styleCodeValid (sCode) {
    let ind = lInfoArray.findIndex((obj => obj['style_code'] === sCode));

    if (ind !== -1) {
      if (errorArray[selectedNow].includes('style_code') === false) {
        errorArray[selectedNow].push('style_code');
        setErrorArray([...errorArray])
      }
    } else {
      let ind2 = errorArray[selectedNow].findIndex((obj => obj === 'style_code'))
      if (ind2 >= 0) {
        errorArray[selectedNow].splice(ind2, 1)
      }
      setErrorArray([...errorArray])
    }
    handleChangeLInfo(selectedNow, 'style_code', sCode);
  }

  function skuidValid (sName,nSkuid) {
    sName = sName.replace(/\s+/g, "_").toLowerCase();
    let ind;
    let str = sName + '_skuid';

    for(let i = 0; i<lInfoArray.length; i++){
      ind = lInfoArray[i]['product_size'].findIndex((obj => obj['sku_id'] === nSkuid));
      if(ind !== -1){
        break;
      }
    }

    if (ind !== -1) {
      if (errorArray[selectedNow].includes(str) === false) {
        errorArray[selectedNow].push(str);
        setErrorArray([...errorArray])
      }
    } else {
      let ind2 = errorArray[selectedNow].findIndex((obj => obj === str))
      if (ind2 >= 0) {
        errorArray[selectedNow].splice(ind2, 1)
      }
      setErrorArray([...errorArray])
    }
    editSizeValue(sName, 'sku_id', nSkuid)
  }

  function handleCheckErrorArray (str) {
    let ind = checkErrorArray[selectedNow].findIndex((obj => obj === str))
    if(ind === -1){
      checkErrorArray[selectedNow].push(str);
    } else{
      checkErrorArray[selectedNow].splice(ind,1)
    }
    setCheckErrorArray([...checkErrorArray])
  }

  return (
    lInfoArray === undefined ? <div></div> :
      <div>
        <div className="rp-titlebar">
          <i onClick={()=>{window.history.back()}} className="fa-solid fa-arrow-left" style={{ color: 'white', fontSize: '26px', paddingLeft: '2vw' }}></i>
          <p>Go Back</p>
        </div>

        <div className="addProductInfo">

          <div className="productPhotos">
          {lInfoArray.length > 1 ? <div onClick={deleteLinfo} className="aibDelete">
              <i style={{ fontSize: '16px' }} class="fa-solid fa-trash"></i>
              <p className="aibDeleteT1">Delete Product {selectedNow + 1}</p>
            </div> : null}
            <div className="picso">
              {selectedMedia === undefined ? <div className="imageaddLayout"></div> : selectedMedia.slice(-1) === "i" ? <img className="imageaddLayout" src={selectedMedia === undefined ? "" : selectedMedia} alt="jacket"></img>
                : selectedMedia.slice(-1) === "v" ? <video className="videoLayout" controls>
                  <source src={selectedMedia === undefined ? "" : selectedMedia} type="video/mp4" />
                  <source src={selectedFile === undefined ? "" : selectedMedia} type="video/webm" />
                  <source src={selectedFile === undefined ? "" : selectedMedia} type="video/ogg" />
                  Your browser does not support the video tag.
                </video> : <div></div>}
            </div>
            <p style={{ alignSelf: 'center' }} className={errorArray[selectedNow].includes("media_urls") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide at least 3 photos</p>
            <input className="uploadPhoto" type="file" onChange={handleMediaUpload} accept="image/*, video/*" size={1} multiple />            <div className="smallImages">
              {mediaUrls.map((p, index) => (
                <SImageReport key={{ p, index }} index={index} data={(p)} setMediaUrls={setMediaUrls} mediaUrls={mediaUrls} selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} index1={index1} index2={index2} setIndex1={setIndex1} setIndex2={setIndex2} lInfoArray={lInfoArray} setLInfoArray={setLInfoArray} selectedNow={selectedNow} toDelete={toDelete} setToDelete={setToDelete} checkErrorArray={checkErrorArray} handleCheckErrorArray={handleCheckErrorArray} />
              ))}
            </div>
          </div>

          <div className="addInfo1">

            <div className="lrp-vBox">
              {lInfoArray.map((lInfo, index) => (
                <div onClick={() => { makeVariantActive(index) }} className={selectedNow === index ? "lrp-v" : "lrp-vInactive"}>
                  {lInfo['media_urls'].length === 0 ? <div className="lrp-vImg">+Add</div> : lInfo['media_urls'][0].slice(-1) === "i" ? <img className="lrp-vImg" src={lInfo['media_urls'][0]} alt=" "></img>
                    : <video className="lrp-vVideo">
                      <source src={lInfo['media_urls'][0]} type="video/mp4" />
                      <source src={lInfo['media_urls'][0]} type="video/webm" />
                      <source src={lInfo['media_urls'][0]} type="video/ogg" />
                      Your browser does not support the video tag.
                    </video>}
                  <p className={selectedNow === index ? "lrp-vT1" : "lrp-vT1Inactive"}>Product {index + 1}</p>
                </div>
              ))}

            <div className="lrp-vAddBox">
                <input type="file" className="lrp-vAddInput" id="lrp-vAddInput" onChange={handleVariant} accept="image/*, video/*" size={1} multiple />
                <label for="lrp-vAddInput" className="lrp-vT2">Add Variant</label>
              </div>


            </div>

            <div key={selectedNow} className="lrp-iBox">
              <p className="lrp-ipHead">Product, Price and Stock</p>
              <div className="lrp-ipBox">
                <div className="lrp-ip">
                  <span className="lrp-ipT1">Product Name<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('product_name') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    <input type="text" className={errorArray[selectedNow].includes("product_name") ? "lrp-ipInputError" : "lrp-ipInput"} onChange={(e) => { checkTextError(e.target.value, 'product_name'); handleChangeLInfo(selectedNow, 'product_name', e.target.value) }}></input>
                  </div>
                  <p className={errorArray[selectedNow].includes("product_name") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Product Name</p>
                </div>
                <div className="lrp-ip">
                  <span className="lrp-ipT1">Net Weight(in gms)<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                      {checkErrorArray.includes('weight') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    <input value={lInfoArray[selectedNow]['weight']} type="number" className={errorArray[selectedNow].includes("weight") ? "lrp-ipInputError" : "lrp-ipInput"} onChange={(e) => {
                    checkNumberError(e.target.value, "weight", 10);
                    handleChangeLInfo(selectedNow, 'weight', e.target.value)
                  }}></input>
                  </div>
                  <p className={errorArray[selectedNow].includes("weight") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Net Weight (gms) value above 10</p>
                </div>
                <div className="lrp-ip">
                  <span className="lrp-ipT1">Price<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('price') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}

                    <input value={lInfoArray[selectedNow]['price']} type="number" className={errorArray[selectedNow].includes("price") ? "lrp-ipInputError" : "lrp-ipInput"} onChange={(e) => { checkNumberError(e.target.value, "price", 0); handleChangeLInfo(selectedNow, 'price', e.target.value) }}></input>
                  </div>
                  <p className={errorArray[selectedNow].includes("price") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Price</p>
                </div>
                <div className="lrp-ip">
                  <span className="lrp-ipT1">MRP<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('mrp') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}

                    <input value={lInfoArray[selectedNow]['mrp']} type="number" className={errorArray[selectedNow].includes("mrp") ? "lrp-ipInputError" : "lrp-ipInput"} onChange={(e) => { checkNumberError(e.target.value, "mrp", 0); handleChangeLInfo(selectedNow, 'mrp', e.target.value) }}></input>
                  </div>
                  <p className={errorArray[selectedNow].includes("mrp") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Mrp</p>
                </div>
                <div className="lrp-ip">
                  <span className="lrp-ipT1">HSN Code<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('hsn_code') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}

                    <select className={errorArray[selectedNow].includes("hsn_code") ? "lrp-ipDDError" : "lrp-ipDD"} defaultValue={lInfoArray[selectedNow]['hsn_code']} value={lInfoArray[selectedNow]['hsn_code']} onChange={(e) => { checkTextError(e.target.value, 'hsn_code'); handleChangeLInfo(selectedNow, 'hsn_code', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                  </div>
                  
                  <p className={errorArray[selectedNow].includes("hsn_code") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide HSN Code</p>
                </div>
                <div className="lrp-ip">
                  <span className="lrp-ipT1">GST %<span className="lrp-ipT2"> *</span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('gst_percent') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}

                    <select className={errorArray[selectedNow].includes("gst_percent") ? "lrp-ipDDError" : "lrp-ipDD"} defaultValue={lInfoArray[selectedNow]['gst_percent']} value={lInfoArray[selectedNow]['gst_percent']} onChange={(e) => { checkTextError(e.target.value, 'gst_percent'); handleChangeLInfo(selectedNow, 'gst_percent', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                  </div>
                  
                  <p className={errorArray[selectedNow].includes("gst_percent") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide HSN Code</p>
                </div>

                <div className="lrp-ip">
                  <span className="lrp-ipT1">Style Code (optional) <span className="lrp-ipT2"></span></span>
                  <div className="lrp-ip-D1">
                  {checkErrorArray.includes('style_code') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    <input value={lInfoArray[selectedNow]['style_code']} type="text" className={errorArray[selectedNow].includes("style_code") ? "lrp-ipInputError" : "lrp-ipInput"}onChange={(e) => styleCodeValid(e.target.value)}></input>
                  </div>
                  <p className={errorArray[selectedNow].includes("style_code") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Style Code of one or more product is same</p>
                </div>

                <div className="lrp-ip">
                  <span className="lrp-ipT1">Size<span className="lrp-ipT2"> *</span></span>
                  <div onClick={() => { setSizeModal(true) }} className={errorArray[selectedNow].includes("product_size") ? "lrp-ipInputSizeError" : "lrp-ipInputSize"}>
                    <p className="lrp-ipInputT1">{
                      lInfoArray[selectedNow]['product_size'].map((ss) => (
                        `${ss.size.split("_").map((word) => {if(ss.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ss.size.toUpperCase()}}).join(" ")},`
                      ))
                    }</p>
                    <i style={{ fontSize: '12px', alignSelf: 'flex-end' }} class="fa-solid fa-chevron-down"></i>
                  </div>
                  <p className={errorArray[selectedNow].includes("product_size") ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Size</p>
                  <div ref={sizeRef} className={sizeModal ? "lrp-ipInputSizeDD" : "lrp-ipInputSizeDDInactive"}>
                    {allSize.options.map((s) => (
                      <div onClick={() => { if (checkSizeSelected(s)) { unselectSize(s) } else { selectSize(s) } }} className="lrp-ipInputSizeDDI">
                        <div className={checkSizeSelected(s) ? "lrp-ipInputSizeDDIC" : "lrp-ipInputSizeDDICInactive"}><i style={{ fontSize: '12px', color: 'white' }} class="fa-solid fa-check"></i></div>
                        <p className="lrp-ipInputSizeDDIT1">{s}</p>
                      </div>
                    ))}

                    <div className="lrp-ipInputSizeDDB">
                      <p onClick={deleteAllSize} className="lrp-ipInputSizeDDBL">Clear All</p>
                      {/* <div className="lrp-ipInputSizeDDBR">Apply</div> */}
                    </div>
                  </div>
                </div>

              </div>

              <div className={lInfoArray[selectedNow]['product_size'].length === 0 ? "lrp-ipSTableInactive" : "lrp-ipSTable"}>
                <div className="lrp-ipSTableTB">
                  <div className="lrp-ipSTableTBD5">Action</div>
                  <div className="lrp-ipSTableTBD1">Size</div>
                  <div className="lrp-ipSTableTBD2">Inventory*</div>
                  <div className="lrp-ipSTableTBD3">SKU ID(optional)</div>
                  {allSize.fields.map((f) => (
                    <div className="lrp-ipSTableTBD4">{f.name} ({f.unit})</div>
                  ))}
                </div>
                {lInfoArray[selectedNow]['product_size'].map((ff) => (
                  <div className="lrp-ipSTableBody" >
                    <div onClick={()=>{handleCheckErrorArray(ff.size.split("_").map((word) => {if(ff.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ff.size.toUpperCase()}}).join(" "))}} className="lrp-ipSTableBodyD5">
                    {checkErrorArray[selectedNow].includes(ff.size.split("_").map((word) => {if(ff.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ff.size.toUpperCase()}}).join(" ")) ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    </div>
                    <div className="lrp-ipSTableBodyD1">{ff.size.split("_").map((word) => {if(ff.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ff.size.toUpperCase()}}).join(" ")}</div>
                    <div className="lrp-ipSTableBodyD2">
                      <input onChange={(e) => { checkNumberError(e.target.value, ff.size, 1); editSizeValue(ff.size, 'inventory', e.target.value) }} value={ff.inventory} type="number" className={errorArray[selectedNow].includes(ff.size.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ipSTableBodyD2IError" : "lrp-ipSTableBodyD2I"}></input>
                      <p className={errorArray[selectedNow].includes(ff.size.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide Inventory value above 1</p>
                    </div>
                    <div className="lrp-ipSTableBodyD3">
                      <input onChange={(e) => { skuidValid(ff.size,e.target.value) }} value={ff.sku_id} type="text" className={errorArray[selectedNow].includes(`${ff.size.replace(/\s+/g, "_").toLowerCase()}_skuid`) ? "lrp-ipSTableBodyD3IError" : "lrp-ipSTableBodyD3I"}></input>
                      <p className={errorArray[selectedNow].includes(`${ff.size.replace(/\s+/g, "_").toLowerCase()}_skuid`) ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>SKU ID of one or more product is same</p>
                    </div>
                    {allSize.fields.map((ld) => (
                      <div className="lrp-ipSTableBodyD4">
                        <select  defaultValue={ff[`${ld.name.replace(/\s+/g, "_").toLowerCase()}`]} onChange={(e) => { editSizeValue(ff.size, ld.name, e.target.value) }} className="lrp-ipSTableBodyD4DD">
                          {["", "A", "B", "C"].map((oo) => (
                            <option className="option" value={oo}>{oo}</option>
                          ))}
                        </select>
                      </div>
                    ))}

                  </div>
                ))}
              </div>

              <div className="lrp-Brand">
              {checkErrorArray.includes('brand') ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
              <div className="lrp-Brand-Select">
              <span className="lrp-ipT1">Select Brand</span>
                  <select className={errorArray[selectedNow].includes("brand") ? "lrp-ipDDError" : "lrp-ipDD"} defaultValue={lInfoArray[selectedNow]['brand']} value={lInfoArray[selectedNow]['brand']} onChange={(e) => { setSelectCustomBrand(false); handleChangeLInfo(selectedNow, 'brand', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                </div>
                <p className="lrp-Brand-Or">or</p>
              { !selectCustomBrand ? <div onClick={()=>{setSelectCustomBrand(true)}} className="lrp-Brand-Custom-Button">+ Add Custom Brand</div> : <div className="lrp-Brand-Custom">
                  <span className="lrp-ipT1">Custom Brand</span>
                  <input value={lInfoArray[selectedNow]['brand']} type="text" className={errorArray[selectedNow].includes("brand") ? "lrp-ipInputError" : "lrp-ipInput"} onChange={(e) => { handleChangeLInfo(selectedNow, 'brand', e.target.value) }}></input>
                </div>}
              </div>

              <p style={{ marginTop: '4vh' }} className="lrp-ipHead">Product Details</p>
              <div className="lrp-ipBox">
                {mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions.map((opt) => (
                  opt.required ? <div>
                    <div className="lrp-ip">
                      <span className="lrp-ipT1">{opt.name}<span className="lrp-ipT2">{opt.required ? " *" : ""}</span></span>
                      <div className="lrp-ip-D1">
                      {checkErrorArray[selectedNow].includes(opt.name) ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    {opt.type === "Text" ? <input  type="text" className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ipInputError" : "lrp-ipInput"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }}></input>
                        : opt.type === "Integer" ? <input  type="number" className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ipInputError" : "lrp-ipInput"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }}></input>
                          : opt.type === "Dropdown" ? <select  className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ipDDError" : "lrp-ipDD"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }} name={opt.name} defaultValue={lInfoArray[selectedNow]['product_details'][`${opt.name}`]}>
                            {opt.options.map((oo) => (
                              <option className="option" value={oo}>{oo}</option>
                            ))}
                          </select> : null}
                  </div>
                      
                      <p className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "lrp-ErrorT1" : "lrp-ErrorT1Inactive"}>Mandatory field, Please provide {opt.name}</p>
                    </div>
                  </div> : null
                ))}
              </div>

              <p style={{ marginTop: '4vh' }} className="lrp-ipHead">Other Details</p>
              <div className="lrp-ipBox">
                {mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions.map((opt) => (
                  opt.required === false ? <div>
                    <div className="lrp-ip">
                      <span className="lrp-ipT1">{opt.name}<span className="lrp-ipT2">{opt.required ? " *" : ""}</span></span>
                      <div className="lrp-ip-D1">
                      {checkErrorArray[selectedNow].includes(opt.name) ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
                    {opt.type === "Text" ? <input  type="text" className="lrp-ipInput" value={findDetails('other_details', opt.name)} onChange={(e) => handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value)}></input>
                        : opt.type === "Integer" ? <input  type="number" className="lrp-ipInput" value={findDetails('other_details', opt.name)} onChange={(e) => handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value)}></input>
                          : opt.type === "Dropdown" ? <select  className="lrp-ipDD" value={findDetails('other_details', opt.name)} onChange={(e) => { handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value) }} name={opt.name} defaultValue={lInfoArray[selectedNow]['other_details'][`${opt.name}`]}>
                            {opt.options.map((oo) => (
                              <option className="option" value={oo}>{oo}</option>
                            ))}
                          </select> : null}
                  </div>
                      
                    </div>
                  </div> : null
                ))}
              </div>

            </div>



            <div className="lrp-Action">
            <div onClick={()=>{window.history.back()}} className="lrp-ActionL">Back</div>
              <div onClick={()=>{checkIfFilled()}} className="lrp-ActionR">Submit Again</div>
            </div>
          </div>
        </div>
      </div>
  )
}