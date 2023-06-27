import React, { useState } from "react";
import AddProgress from "../../components/addProgress/addProgress";
import VImage from "../../components/vImage/vImage";
import { uploadMultipleFilesToS3 } from "../../store/action/upload_file_action";
import "./vertical_page.css";
import {v4 as uuidv4} from 'uuid';
import { saveListingRequest } from "../../store/action/listingaction";
import { S3_URI } from "../../store/action/type";


export default function VerticalPage() {
    const vertical = [
        {
            "MENS WEAR": {
                "img": "Image URL",
                "categories": ["Western Wear", "bottomwear", "activewear", "regis"]
            },
        },
        {
            "footwear": {
                "img": "Image URL",
                "categories": ["sneakers", "sandal"]
            }
        },
        {
            "electronics": {
                "img": "Image URL",
                "categories": ["desktop", "mobile"]
            }
        }

    ]


    const category = {
        "bottomwear": ["trousers", "shorts"],
        "Western Wear": ["Top Wear", "shirt", "bra", "sandow"],
        "activewear": ["love", "rage"],
        "regis": ["geralt", "triss"],
        "sneakers": ["aa", "bb"],
        "sandal": ["A", "D"],
        "desktop": ["SS", "XX"],
        "mobile": ["OO", "pp"],
    }

    const subCategory = {
        "trousers": ["trousers", "shorts"],
        "shorts": ["top", "shirt", "bra", "sandow"],
        "Top Wear": ["T-shirts", "rage"],
        "shirt": ["geralt", "triss"],
        "bra": ["aa", "bb"],
        "sandow": ["A", "D"],
        "love": ["SS", "XX"],
        "rage": ["OO", "pp"],
    }

    const [selectverticalIndex, setVerticalIndex] = useState(null);
    const [selectVertical, setSelectVertical] = useState("");
    const [selectCategory, setSelectCategory] = useState("");
    const [selectSubCategory, setSelectSubCategory] = useState("");
    const [selectSubCategory2, setSelectSubCategory2] = useState("");
    const [loading, setLoading] = useState(false);

    const [index1, setIndex1] = useState();
    const [index2, setIndex2] = useState();

    const [files, setFiles] = useState([]);

  function handleChange(e) {
    // console.log(e.target.files[0]);
    Array.from(e.target.files).map((ff)=>{
      if(ff.size<9961472){
      files.push(ff);
      }
    });
    setFiles([...files]);
}


    async function uploadMedia () {
        if(loading === false) {
            setLoading(true)
        if(files.length===0){
            window.alert("Please Upload At Least One Image")
        } else{
           const json = await uploadMultipleFilesToS3(files);
           if(json.success){
           let mUrls = [];
           for(let i= 0;i<json.fileKeys.length;i++){
            mUrls.push(S3_URI+json.fileKeys[i]);
           }
           console.log("mUrls: ",mUrls);
           let lr_id = uuidv4();
           let l_id = uuidv4();
           let obj = {
            listing_request_id: lr_id,
            listing_status: "Draft",
            request_type: "Create",
            listing_id: l_id,
            manufacturer_id: localStorage.getItem('manufacturer_id'),
            media_urls: mUrls,
            vertical: selectVertical,
            category: selectCategory,
            sub_category: selectSubCategory,
            sub_category2: selectSubCategory2,
           }
           
           const json2 = await saveListingRequest(obj);

           if(json2.success) {
            window.open(`/supplier/editlisting/${l_id}`,'_self')
           } else{
            window.alert('Something went wrong');
           }
        } else{
            window.alert('Something went wrong');
        }
        }
    }
    }

    return (
        <div className="vpBox">

            <div className="vpTB">
                <i style={{ color: 'white', fontSize: '20px' }} class="fa-solid fa-arrow-left"></i>
                <p className="vpTBT1">Add Single Listing</p>
            </div>

            <AddProgress mode1={"active"} mode2={"inActive"} mode3={"inActive"} />

            <p className="vpVBT1">Search Category</p>

            <input className="vpVBSearch" type="text" placeholder="Search For Product Category" />

            <div className="vpVBRow">

                <div className="vpVB1">

                    {vertical.map((p, index) => (
                        <div className={index === selectverticalIndex ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectCategory(""); setSelectSubCategory(""); setSelectSubCategory2(""); setSelectVertical(Object.keys(p)[0]); setVerticalIndex(index) }}>
                            {Object.keys(p)[0]}</div>
                    ))}

                </div>

                <div className="vpVB2">
                    {selectverticalIndex === null ? <div></div> : vertical[selectverticalIndex][selectVertical]["categories"].map((c, index) => (
                        <div className={c === selectCategory ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Category"); setSelectSubCategory(""); setSelectSubCategory2(""); setSelectCategory(c) }}>{c}</div>
                    ))}
                </div>

                <div className="vpVB3">
                    {selectCategory === "" ? <div></div> : category[selectCategory].map((d, index) => (
                        <div className={d === selectSubCategory ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectSubCategory2(""); setSelectSubCategory(d) }}>{d}</div>
                    ))}
                </div>

                <div className="vpVB4">
                    {selectSubCategory === "" ? <div></div> : subCategory[selectSubCategory].map((e, index) => (
                        <div className={e === selectSubCategory2 ? "vpVBItem" : "vpVBItemInactive"} onClick={() => { console.log("Verticla"); setSelectSubCategory2(e) }}>{e}</div>
                    ))}
                </div>

                {selectSubCategory2 === "" ? <div></div> : <div className="vpIB">
                    <div className="vpIBD1">{selectVertical} / {selectCategory} / {selectSubCategory} / {selectSubCategory2}</div>
                    <div className="vpIBUpload">
                        <div className="vpIBUploadImages">
                            {files.map((p, index) => (
                                <VImage key={{ p, index }} index={index} data={(p)} setFiles={setFiles} files={files} index1={index1} setIndex1={setIndex1} index2={index2} setIndex2={setIndex2} />
                            ))}
                        </div>
                        <input className="vpIBUploadInput" type="file" onChange={handleChange} accept="image/*, video/*" size={1} multiple />
                    </div>
                    <div onClick={()=>{uploadMedia();}} className={files.length === 0 ? "vpIBButtonInactive" : "vpIBButton"}>Add Product Details</div>
                </div>}

            </div>


        </div>
    )
}