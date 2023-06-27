import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { v4 as uuidv4 } from 'uuid';
import "./addVariantModal.css"
import { getListingVariantInformation } from '../../store/action/listingaction';

import SImage from "../sImage/sImage";
import { useParams } from "react-router-dom";
import { deleteListingRequest, editListingRequest, editMultipleListingRequest, getListingRequest, saveListingRequest } from "../../store/action/listingaction";
import { saveListing } from "../../store/action/productaction";
import { deleteMultipleFilesS3, uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import { mensWear } from "./cat";
import { S3_URI } from "../../store/action/type";
import AVMSImage from "./avmSImage/avmSImage";

const allSize = {
  options: ['S', 'M', 'L', 'XL', 'XXl', 'Free Size'],
  fields: [
    { name: 'Chest Length', unit: 'Inch', options: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] },
    { name: 'Waist Length', unit: 'Inch', options: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], }
  ]
}

export default function AddVariantModal({listing_info,setIsOpen3}) {

  const params = useParams();

    const [listings, setListings] = useState([]);
    const [selected_listing, setSelected_listing] = useState(listing_info);


    const [colorArray, setColorArray] = useState([]);
    const [sizeArray, setSizeArray] = useState([]);

    const [allVariants, setAllVariants] = useState([]);
    const [selectedColor, setSelectedColor] = useState("Select Color");
    const [selectedSize, setSelectedSize] = useState("Select Size");
    const [allColor, setAllColor] = useState(["Select Color", "Beige", "Black", "Blue", "Green", "Red"]);
    const [availableSize, setAvailableSize] = useState(["Select Size", "XXS", "XS", "S", "M", "L", "XL", "XXL", "Free Size"]);

    const [lInfoArray, setLInfoArray] = useState([]);

  const dispatch = useDispatch();

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

    if(imageCount === 0 && lInfoArray[selectedNow].media_urls.length === 0) {
      window.alert("Select At least one image.")
    } else {
      const json = await uploadMultipleFilesToS3(newFiles);
      if (json.success) {
        for (let i = 0; i < json.fileKeys.length; i++) {
          lInfoArray[selectedNow]['media_urls'].push(S3_URI + json.fileKeys[i]);
        }
        setMediaUrls(lInfoArray[selectedNow]['media_urls']);
        setSelectedMedia(lInfoArray[selectedNow]['media_urls'][0]);
        setLInfoArray([...lInfoArray])

        const json2 = await editListingRequest(lInfoArray[selectedNow]);
        if (json2.success) {
          console.log("Done");
          if (lInfoArray[selectedNow]['media_urls'].length > 2) {
            let ind = errorArray[selectedNow].findIndex((obj => obj === "media_urls"))
            if (ind >= 0) {
              errorArray[selectedNow].splice(ind, 1)
            }
            setErrorArray([...errorArray])
          }
        } else {
          window.alert("Something Went Wrong, Failed To Save Changes")
        }
      } else {
        window.alert('Something went wrong');
      }
    }
  }


  const saveData = async (e) => {
    e.preventDefault();
    const data = await dispatch(saveListing({}));
  }

  async function getLRData() {
      errorArray.push([]);
      setErrorArray([...errorArray]);
      setSelectedNow(0)
      setMediaUrls([]);
      setSelectedMedia("");
      let new_info = listing_info;
      new_info['product_size'] = [];
      if(!colorArray.includes(selectedColor)){
        new_info.media_urls = [];
      }
      lInfoArray.push(new_info);
      setLInfoArray([...lInfoArray])
  }

  useEffect(() => {
    getLRData();
    getAllFields();
  }, [])


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

  function findDetails(kArray, kName) {
    kName = kName.replace(/\s+/g, "_").toLowerCase();
    let ind = lInfoArray[selectedNow][`${kArray}`].findIndex(obj => Object.keys(obj)[0] === kName);
    if (ind === -1) {
      return "";
    } else {
      return lInfoArray[selectedNow][`${kArray}`][ind][`${kName}`]
    }
  }

  // async function handleVariant(e) {
  //   let newFiles = [];
  //   let imageCount = 0;
  //   Array.from(e.target.files).map((ff) => {
  //     if (ff.size < 9961472) {
  //       newFiles.push(ff);
  //       if(ff.type.split("/")[0] === "image") {
  //         imageCount++;
  //       }
  //     }
  //   });
  //   if(imageCount === 0 && lInfoArray[selectedNow].media_urls.length === 0) {
  //     window.alert("Select At least one image.")
  //   } else {
  //     await createVariant(newFiles)
  //   }
  // }

  // async function createVariant(mFiles) {
  //   const S3_URI = "https://zeepty-products.s3.ap-south-1.amazonaws.com/";
  //   if (mFiles.length === 0) {
  //     window.alert("Please Upload At Least One Image")
  //   } else {
  //     const json = await uploadMultipleFilesToS3(mFiles);
  //     if (json.success) {
  //       let mUrls = [];
  //       for (let i = 0; i < json.fileKeys.length; i++) {
  //         mUrls.push(S3_URI + json.fileKeys[i]);
  //       }
  //       let lr_id = uuidv4();
  //       let l_id = lInfoArray[0]['listing_id'];
  //       let obj = {
  //         listing_request_id: lr_id,
  //         listing_status: "Draft",
  //         request_type: "Create",
  //         listing_id: l_id,
  //         manufacturer_id: localStorage.getItem('manufacturer_id'),
  //         media_urls: mUrls,
  //         weight: lInfoArray[0]['weight'],
  //         price: lInfoArray[0]['price'],
  //         mrp: lInfoArray[0]['mrp'],
  //         hsn_code: lInfoArray[0]['hsn_code'],
  //         gst_percent: lInfoArray[0]['gst_percent'],
  //         vertical: lInfoArray[0]['vertical'],
  //         category: lInfoArray[0]['category'],
  //         sub_category: lInfoArray[0]['sub_category'],
  //         sub_category2: lInfoArray[0]['sub_category2'],
  //       }

  //       const json2 = await saveListingRequest(obj);

  //       if (json2.success) {
  //         getLRData(lInfoArray.length);
  //       } else {
  //         window.alert('Something went wrong');
  //       }
  //     } else {
  //       window.alert('Something went wrong');
  //     }
  //   }
  // }

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
      lInfoArray[i]["listing_request_id"] = uuidv4();
      lInfoArray[i]["request_type"] = "Variant";
      lInfoArray[i]['listing_status'] = "Pending";
      if(lInfoArray[i]['style_code'] === "" || lInfoArray[i]['style_code'] === undefined || lInfoArray[i]['style_code'] === null){
        lInfoArray[i]['style_code'] = uuidv4();
      }
    }
    setLInfoArray([...lInfoArray]);
    // let obj = { listing_request_Array: lInfoArray };
    const json = await saveListingRequest(lInfoArray[selectedNow]);
    if (toDelete.length != 0) {
      await deleteMultipleFilesS3(toDelete);
      setToDelete([]);
    }
    if (json.success) {
      console.log("ss: sds", json)
      window.open('/supplier/listing/request','_self')
    } else {
      window.alert("Something Went Wrong, Failed To Save Changes")
    }
  }

  async function saveAsDraft() {
    let obj = { listing_request_Array: lInfoArray };
    const json = await editMultipleListingRequest(obj);
    if (toDelete.length != 0) {
      await deleteMultipleFilesS3(toDelete);
      setToDelete([]);
    }
    if (json.success) {
      window.open('/supplier/listing/draft','_self')
    } else {
      window.alert("Something Went Wrong, Failed To Save Changes")
    }
  }

  function styleCodeValid (sCode) {
    let ind = listings.findIndex((obj => obj['style_code'] === sCode));

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
      ind = listings.findIndex((obj => obj['sku_id'] === nSkuid));
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

    async function handleListingVariant() {
        setSelectedColor("Select Color");
        setSelectedSize("Select Size");
        setAllColor(["Select Color", "Beige", "Black", "Blue", "Green", "Red"]);
        setAvailableSize(["Select Size", "XXS", "XS", "S", "M", "L", "XL", "XXL", "Free Size"]);
        let obj = { listing_id: listing_info.listing_id };
        const json = await getListingVariantInformation(obj);
        if (json.success) {
            setAllVariants(json.msz);
            setListings(json.listings);
            colorArray.length = 0;
            sizeArray.length = 0;
            for (let i = 0; i < json.msz.length; i++) {
                if (colorArray.includes(json.msz[i]['color']) === false) {
                    colorArray.push(json.msz[i]['color']);
                }
                if (sizeArray.includes(json.msz[i]['size']) === false) {
                    sizeArray.push(json.msz[i]['size']);
                }
            }
            const newAllColor = allColor.filter((item) => !colorArray.includes(item));
            setAllColor(newAllColor);
            setColorArray([...colorArray]);
            setSizeArray([...sizeArray]);
        } else {
            window.alert("Something Went Wrong")
        }
    }

    function handleColorSelect(sColor) {
        let arrSizes = ["Select Size", "XXS", "XS", "S", "M", "L", "XL", "XXL", "Free Size"];
        sizeArray.length = 0;
        for (let i = 0; i < allVariants.length; i++) {
            if (allVariants[i]['color'] === sColor) {
                sizeArray.push(allVariants[i].size)
            }
        }
        const newAllSize = arrSizes.filter((item) => !sizeArray.includes(item.replace(/\s+/g, "_").toLowerCase()));
        setAvailableSize(newAllSize);
        setSizeArray([...sizeArray]);
        setSelectedColor(sColor);
        if(colorArray.includes(sColor)){
            handleSelectListing(sColor);
        } else{
          let new_info = lInfoArray[selectedNow];
          new_info['style_code'] = "";
          setLInfoArray([...lInfoArray])
            // setSelected_listing({})
        }
    }

    function handleSelectListing(sColor){
        let ind = listings.findIndex((obj) => {
            let i = obj['product_details'].findIndex(iobj=> Object.keys(iobj)[0] === "color")
            console.log("SFF: ",i)
            if(i!== -1){
                if(obj['product_details'][i].color === sColor){
                    return true;
                } else {
                    return false;
                }
            }
            return false;
        });
        if (ind === -1) {
        } else {
        setSelected_listing(listings[ind]);
        lInfoArray.length = 0;
        let new_info = listings[ind];
        new_info['product_size'] = [];
        lInfoArray.push(new_info)
        setLInfoArray([...lInfoArray])
        }
        console.log("ASA: ",ind)
    }

    function sizeToShow(sSize) {
        return sSize.split("_").map((word) => {
            if (sSize.includes("_")) {
                return word.charAt(0).toUpperCase() + word.slice(1)
            } else {
                return sSize.toUpperCase()
            }
        }).join(" ")
    }

    useEffect(()=>{
        handleListingVariant()
    },[]);

    return (
      lInfoArray.length === 0 ? <div></div> :
        <div className='avm'>
            <div className='avm-avtopbar'>
                <p className='avm-avtopbar-text'>Add Variant</p>
                <i onClick={() => { setIsOpen3(false) }} id="avm-avtopbar-xmark" class="fa-solid fa-xmark"></i>
            </div>
            <div className='avm-av'>
                { colorArray.includes(selectedColor) ? lInfoArray[selectedNow].media_urls === undefined ? <div></div> :<img className='avm-av-img' src={lInfoArray[selectedNow].media_urls[0]} /> : <div className='avm-av-left'>
                  
                    <div className="avm-av-left-media">
            <div className="avm-av-left-media-div">
              {selectedMedia === undefined ? <div className="avm-av-left-media-div-layout"></div> : selectedMedia.slice(-1) === "i" ? <img className="avm-av-left-media-div-layout" src={selectedMedia === undefined ? "" : selectedMedia} alt="jacket"></img>
                : selectedMedia.slice(-1) === "v" ? <video className="avm-av-left-media-div-videoLayout" controls>
                  <source src={selectedMedia === undefined ? "" : selectedMedia} type="video/mp4" />
                  <source src={selectedFile === undefined ? "" : selectedMedia} type="video/webm" />
                  <source src={selectedFile === undefined ? "" : selectedMedia} type="video/ogg" />
                  Your browser does not support the video tag.
                </video> : <div></div>}
            </div>
            <p style={{ alignSelf: 'center' }} className={errorArray[selectedNow].includes("media_urls") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide at least 3 photos</p>
            <input className="avm-av-left-media-upload" type="file" onChange={handleMediaUpload} accept="image/*, video/*" size={1} multiple />
            <div className="avm-av-left-media-smallImages">
              {mediaUrls.map((p, index) => (
                <AVMSImage key={{ p, index }} index={index} data={(p)} setMediaUrls={setMediaUrls} mediaUrls={mediaUrls} selectedMedia={selectedMedia} setSelectedMedia={setSelectedMedia} index1={index1} index2={index2} setIndex1={setIndex1} setIndex2={setIndex2} lInfoArray={lInfoArray} setLInfoArray={setLInfoArray} selectedNow={selectedNow} toDelete={toDelete} setToDelete={setToDelete} canDelete={true} />
              ))}
            </div>
          </div>
          <div className="avm-av-left-media-smallImages">

              </div>
                </div>}
              
                <div className='avm-av-right'>
                    {/* <p className='avm-av-right-brand'>{selected_listing.brand}</p>
                    <p className='avm-av-right-name'>{selected_listing.product_name}</p> */}
                    <p className='avm-av-right-hint'>Select atleast one of the following attribute to create variant</p>

                    <p className='avm-av-right-selectColor'>Select Color</p>
                    <div className='avm-av-right-colorbox'>
                        {colorArray.map((item) => (
                            <p onClick={() => { handleColorSelect(item) }} className={item === selectedColor ? "avm-av-right-colorbox-item-active" : "avm-av-right-colorbox-item-inactive"}>{item}</p>
                        ))}
                        <select defaultValue={selectedColor} onChange={(e) => { handleColorSelect(e.target.value) }} className={allColor.includes(selectedColor) && selectedColor !== "Select Color" ? "avm-av-right-dropdown1-active" : "avm-av-right-dropdown1-inactive"}>
                            {allColor.map((oo) => (
                                <option className="option" value={oo}>{oo}</option>
                            ))}
                        </select>
                    </div>

                    {/* <div className='avm-av-right-selectSize'>
                        <p className='avm-av-right-selectSize-text'>Select Size</p>
                        {selectedColor === "Select Color" ? null :
                            <select defaultValue={selectedSize} onChange={(e) => { setSelectedSize(e.target.value) }} className={true ? "avm-av-right-selectSize-dropdown2-active" : "avm-av-right-selectSize-dropdown2-inactive"}>
                                {availableSize.map((oo) => (
                                    <option className="option" value={oo}>{oo}</option>
                                ))}
                            </select>}
                    </div> */}
                    {selectedColor === "Select Color" ? <p className='avm-av-right-selectSize-colorfirst'>Please select color first.</p> : null}
                    {selectedColor === "Select Color" || sizeArray.length === 0 ? null : <p className='avm-av-right-sizeExist'>These sizes in {selectedColor} color already exist.</p>}
                    {selectedColor === "Select Color" ? null : <div className='avm-av-right-sizebox'>
                        {sizeArray.map((item) => (
                            <div className='avm-av-right-sizebox-item'>{sizeToShow(item)}</div>
                        ))}
                    </div>}

                    {selectedColor === "Select Color" ? null : <div className="avm-addInfo">

            <div key={selectedNow} className="avm-iBox">
              <p className="avm-ipHead">Product, Price and Stock</p>
              <div className="avm-ipBox">
                <div className="avm-ip">
                  <span className="avm-ipT1">Product Name<span className="avm-ipT2"> *</span></span>
                  <input value={lInfoArray[selectedNow]['product_name']} type="text" className={errorArray[selectedNow].includes("product_name") ? "avm-ipInputError" : "avm-ipInput"} onChange={(e) => { checkTextError(e.target.value, 'product_name'); handleChangeLInfo(selectedNow, 'product_name', e.target.value) }}></input>
                  <p className={errorArray[selectedNow].includes("product_name") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Product Name</p>
                </div>
                <div className="avm-ip">
                  <span className="avm-ipT1">Net Weight(in gms)<span className="avm-ipT2"> *</span></span>
                  <input value={lInfoArray[selectedNow]['weight']} type="number" className={errorArray[selectedNow].includes("weight") ? "avm-ipInputError" : "avm-ipInput"} onChange={(e) => {
                    checkNumberError(e.target.value, "weight", 10);
                    handleChangeLInfo(selectedNow, 'weight', e.target.value)
                  }}></input>
                  <p className={errorArray[selectedNow].includes("weight") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Net Weight (gms) value above 10</p>
                </div>
                <div className="avm-ip">
                  <span className="avm-ipT1">Price<span className="avm-ipT2"> *</span></span>
                  <input value={lInfoArray[selectedNow]['price']} type="number" className={errorArray[selectedNow].includes("price") ? "avm-ipInputError" : "avm-ipInput"} onChange={(e) => { checkNumberError(e.target.value, "price", 0); handleChangeLInfo(selectedNow, 'price', e.target.value) }}></input>
                  <p className={errorArray[selectedNow].includes("price") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Price</p>
                </div>
                <div className="avm-ip">
                  <span className="avm-ipT1">MRP<span className="avm-ipT2"> *</span></span>
                  <input value={lInfoArray[selectedNow]['mrp']} type="number" className={errorArray[selectedNow].includes("mrp") ? "avm-ipInputError" : "avm-ipInput"} onChange={(e) => { checkNumberError(e.target.value, "mrp", 0); handleChangeLInfo(selectedNow, 'mrp', e.target.value) }}></input>
                  <p className={errorArray[selectedNow].includes("mrp") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Mrp</p>
                </div>
                <div className="avm-ip">
                  <span className="avm-ipT1">HSN Code<span className="avm-ipT2"> *</span></span>
                  <select className={errorArray[selectedNow].includes("hsn_code") ? "avm-ipDDError" : "avm-ipDD"} defaultValue={lInfoArray[selectedNow]['hsn_code']} value={lInfoArray[selectedNow]['hsn_code']} onChange={(e) => { checkTextError(e.target.value, 'hsn_code'); handleChangeLInfo(selectedNow, 'hsn_code', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                  <p className={errorArray[selectedNow].includes("hsn_code") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide HSN Code</p>
                </div>
                <div className="avm-ip">
                  <span className="avm-ipT1">GST %<span className="avm-ipT2"> *</span></span>
                  <select className={errorArray[selectedNow].includes("gst_percent") ? "avm-ipDDError" : "avm-ipDD"} defaultValue={lInfoArray[selectedNow]['gst_percent']} value={lInfoArray[selectedNow]['gst_percent']} onChange={(e) => { checkTextError(e.target.value, 'gst_percent'); handleChangeLInfo(selectedNow, 'gst_percent', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                  <p className={errorArray[selectedNow].includes("gst_percent") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide HSN Code</p>
                </div>

                <div className="avm-ip">
                  <span className="avm-ipT1">Style Code (optional) <span className="avm-ipT2"></span></span>
                  <input disabled={colorArray.includes(selectedColor) ? true : false} value={lInfoArray[selectedNow]['style_code']} type="text" className={errorArray[selectedNow].includes("style_code") ? "avm-ipInputError" : "avm-ipInput"}onChange={(e) => styleCodeValid(e.target.value)}></input>
                  <p className={errorArray[selectedNow].includes("style_code") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Style Code of one or more product is same</p>
                </div>

                <div className="avm-ip">
                  <span className="avm-ipT1">Size<span className="avm-ipT2"> *</span></span>
                  <div onClick={() => { setSizeModal(true) }} className={errorArray[selectedNow].includes("product_size") ? "avm-ipInputSizeError" : "avm-ipInputSize"}>
                    <p className="avm-ipInputT1">{
                      lInfoArray[selectedNow]['product_size'].map((ss) => (
                        `${ss.size.split("_").map((word) => {if(ss.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ss.size.toUpperCase()}}).join(" ")},`
                      ))
                    }</p>
                    <i style={{ fontSize: '12px', alignSelf: 'flex-end' }} class="fa-solid fa-chevron-down"></i>
                  </div>
                  <p className={errorArray[selectedNow].includes("product_size") ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Size</p>
                  <div ref={sizeRef} className={sizeModal ? "avm-ipInputSizeDD" : "avm-ipInputSizeDDInactive"}>
                    {allSize.options.map((s) => (
                      availableSize.includes(s) ? 
                      <div onClick={() => { if (checkSizeSelected(s)) { unselectSize(s) } else { selectSize(s) } }} className="avm-ipInputSizeDDI">
                        <div className={checkSizeSelected(s) ? "avm-ipInputSizeDDIC" : "avm-ipInputSizeDDICInactive"}><i style={{ fontSize: '12px', color: 'white' }} class="fa-solid fa-check"></i></div>
                        <p className="avm-ipInputSizeDDIT1">{s}</p>
                      </div> 
                      : null
                    ))}

                    <div className="avm-ipInputSizeDDB">
                      <p onClick={deleteAllSize} className="avm-ipInputSizeDDBL">Clear All</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className={lInfoArray[selectedNow]['product_size'].length === 0 ? "avm-ipSTableInactive" : "avm-ipSTable"}>
                <div className="avm-ipSTableTB">
                  <div className="avm-ipSTableTBD1">Size</div>
                  <div className="avm-ipSTableTBD2">Inventory*</div>
                  <div className="avm-ipSTableTBD3">SKU ID(optional)</div>
                  {allSize.fields.map((f) => (
                    <div className="avm-ipSTableTBD4">{f.name} ({f.unit})</div>
                  ))}
                  <div className="avm-ipSTableTBD5">Action</div>
                </div>
                {lInfoArray[selectedNow]['product_size'].map((ff) => (
                  <div className="avm-ipSTableBody" >
                    <div className="avm-ipSTableBodyD1">{ff.size.split("_").map((word) => {if(ff.size.includes("_")){return word.charAt(0).toUpperCase() + word.slice(1)} else{return ff.size.toUpperCase()}}).join(" ")}</div>
                    <div className="avm-ipSTableBodyD2">
                      <input onChange={(e) => { checkNumberError(e.target.value, ff.size, 1); editSizeValue(ff.size, 'inventory', e.target.value) }} value={ff.inventory} type="number" className={errorArray[selectedNow].includes(ff.size.replace(/\s+/g, "_").toLowerCase()) ? "avm-ipSTableBodyD2IError" : "avm-ipSTableBodyD2I"}></input>
                      <p className={errorArray[selectedNow].includes(ff.size.replace(/\s+/g, "_").toLowerCase()) ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide Inventory value above 1</p>
                    </div>
                    <div className="avm-ipSTableBodyD3">
                      <input onChange={(e) => { skuidValid(ff.size,e.target.value) }} value={ff.sku_id} type="text" className={errorArray[selectedNow].includes(`${ff.size.replace(/\s+/g, "_").toLowerCase()}_skuid`) ? "avm-ipSTableBodyD3IError" : "avm-ipSTableBodyD3I"}></input>
                      <p className={errorArray[selectedNow].includes(`${ff.size.replace(/\s+/g, "_").toLowerCase()}_skuid`) ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>SKU ID of one or more product is same</p>
                    </div>
                    {allSize.fields.map((ld) => (
                      <div className="avm-ipSTableBodyD4">
                        <select defaultValue={ff[`${ld.name.replace(/\s+/g, "_").toLowerCase()}`]} onChange={(e) => { editSizeValue(ff.size, ld.name, e.target.value) }} className="avm-ipSTableBodyD4DD">
                          {["", "A", "B", "C"].map((oo) => (
                            <option className="option" value={oo}>{oo}</option>
                          ))}
                        </select>
                      </div>
                    ))}

                    <div onClick={() => { unselectSize(ff.size) }} className="avm-ipSTableBodyD5">
                      <i style={{ fontSize: '16px' }} class="fa-solid fa-trash"></i>
                    </div>

                  </div>
                ))}
              </div>

              <p className='avm-av-right-sizeExist'>These sizes in {selectedColor} color already exist.</p>
              <div className='avm-av-right-sizebox'>
                        {sizeArray.map((item) => (
                            <div className='avm-av-right-sizebox-item'>{sizeToShow(item)}</div>
                        ))}
                    </div>

          <div className="avm-Brand">
              <div className="avm-Brand-Select">
              <span className="avm-ipT1">Select Brand</span>
                  <select className={errorArray[selectedNow].includes("brand") ? "avm-ipDDError" : "avm-ipDD"} defaultValue={lInfoArray[selectedNow]['brand']} value={lInfoArray[selectedNow]['brand']} onChange={(e) => { setSelectCustomBrand(false); handleChangeLInfo(selectedNow, 'brand', e.target.value) }}>
                    {["", "A", "B", "C"].map((oo) => (
                      <option className="option" value={oo}>{oo}</option>
                    ))}
                  </select>
                </div>
                <p className="avm-Brand-Or">or</p>
              { !selectCustomBrand ? <div onClick={()=>{setSelectCustomBrand(true)}} className="avm-Brand-Custom-Button">+ Add Custom Brand</div> : <div className="avm-Brand-Custom">
                  <span className="avm-ipT1">Custom Brand</span>
                  <input value={lInfoArray[selectedNow]['brand']} type="text" className={errorArray[selectedNow].includes("brand") ? "avm-ipInputError" : "avm-ipInput"} onChange={(e) => { handleChangeLInfo(selectedNow, 'brand', e.target.value) }}></input>
                </div>}
              </div>

              <p style={{ marginTop: '4vh' }} className="avm-ipHead">Product Details</p>
              <div className="avm-ipBox">
                {mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions.map((opt) => (
                  opt.name === "Color" ? null : opt.required ? <div>
                    <div className="avm-ip">
                      <span className="avm-ipT1">{opt.name}<span className="avm-ipT2">{opt.required ? " *" : ""}</span></span>
                      {opt.type === "Text" ? <input type="text" className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "avm-ipInputError" : "avm-ipInput"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }}></input>
                        : opt.type === "Integer" ? <input type="number" className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "avm-ipInputError" : "avm-ipInput"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }}></input>
                          : opt.type === "Dropdown" ? <select className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "avm-ipDDError" : "avm-ipDD"} value={findDetails('product_details', opt.name)} onChange={(e) => { checkTextError(e.target.value, opt.name); handleChangeLInfoDetails(selectedNow, 'product_details', opt.name, e.target.value) }} name={opt.name} defaultValue={lInfoArray[selectedNow]['product_details'][`${opt.name}`]}>
                            {opt.options.map((oo) => (
                              <option className="option" value={oo}>{oo}</option>
                            ))}
                          </select> : null}
                      <p className={errorArray[selectedNow].includes(opt.name.replace(/\s+/g, "_").toLowerCase()) ? "avm-ErrorT1" : "avm-ErrorT1Inactive"}>Mandatory field, Please provide {opt.name}</p>
                    </div>
                  </div> : null
                ))}
              </div>

              <p style={{ marginTop: '4vh' }} className="avm-ipHead">Other Details</p>
              <div className="avm-ipBox">
                {mensWear["MENS WEAR"]["Western Wear"]["Top Wear"]["T-shirts"].allOptions.map((opt) => (
                  opt.name === "Brand" ? null : opt.required === false ? <div>
                    <div className="avm-ip">
                      <span className="avm-ipT1">{opt.name}<span className="avm-ipT2">{opt.required ? " *" : ""}</span></span>
                      {opt.type === "Text" ? <input type="text" className="avm-ipInput" value={findDetails('other_details', opt.name)} onChange={(e) => handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value)}></input>
                        : opt.type === "Integer" ? <input type="number" className="avm-ipInput" value={findDetails('other_details', opt.name)} onChange={(e) => handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value)}></input>
                          : opt.type === "Dropdown" ? <select className="avm-ipDD" value={findDetails('other_details', opt.name)} onChange={(e) => { handleChangeLInfoDetails(selectedNow, 'other_details', opt.name, e.target.value) }} name={opt.name} defaultValue={lInfoArray[selectedNow]['other_details'][`${opt.name}`]}>
                            {opt.options.map((oo) => (
                              <option className="option" value={oo}>{oo}</option>
                            ))}
                          </select> : null}
                    </div>
                  </div> : null
                ))}
              </div>

            </div>

            <div className='avm-av-right-bottom'>
                        <div onClick={()=>{setIsOpen3(false)}} className='avm-av-right-bottom-cancel'>Cancel</div>
                        <div onClick={checkIfFilled} className='avm-av-right-bottom-add'>Add Variant</div>
                    </div>

            {/* <div className="avm-Action">
              <div onClick={saveAsDraft} className="avm-ActionL">Save and Go Back</div>
              <div onClick={checkIfFilled} className="avm-ActionR">Submit Listing</div>
            </div> */}
          </div>}

                </div>
            </div>
        </div>
    )
}

