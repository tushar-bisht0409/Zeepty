import React, { useEffect, useState } from 'react'
import { getproduct_info } from '../../store/action/productaction';
import './minAddLooks.css'
import MINAddProductCard from './minAddProductCard/minAddProductCard';
import {v4 as uuidv4} from 'uuid';
import { delete_looks_draft, edit_looks_draft, get_looks_draft, save_looks, save_looks_draft } from '../../store/action/looks_action';
import { uploadFile, uploadMultipleFilesToS3 } from '../../store/action/upload_file_action';
import Modal from 'react-modal';
import { useRef } from 'react';
import { S3_URI } from '../../store/action/type';
import MINFullScreenLoader from '../minFullScreen_loader/minFullScreen_loader';


const MINAddLooks = ({ setModalIsOpen }) => {

    const [rows, setRows] = useState(1);

    const [captionText, setCaptionText] = useState("");

    const [allProducts,setAllProducts] = useState([]);

    const [selectedArray, setSelectedArray] = useState([]);

    const [mode, setMode] = useState("Main");

    const [lookFile, setLookFile] = useState(undefined);

    const [looksDraft, setLooksDraft] = useState([]);

    const [dModalIsOpen,setDModalIsOpen] = useState(false);

    const [loader1, setLoader1] = useState(true);

    const [loader2, setLoader2] = useState(false);

    const [closeCount, setCloseCount] = useState(0);

    const [draftMode,setDraftMode] = useState("New");

    const [currentDraft, setCurrentDraft] = useState(undefined)

    const fileInputRef = useRef(null);

    function handelUpload(e) {
      setLookFile(e.target.files[0]);
      get_seller_products();
      setMode("New");
  }

  async function get_drafts() {
    let obj = {
      seller_id: localStorage.getItem('influencer_id'),
      type: 'seller_id'
  }
  const json = await get_looks_draft(obj);
  setLoader1(false);
  if(json.success) {
    setLooksDraft(json.msz)
  } else if(json.success===false){
    if(json.err){
    setLooksDraft(undefined);
    } else {
      fileInputRef.current.click();
    }
  }
}

  function handleCaptionChange(event) {

    setCaptionText(event.target.value);

    //Manage Caption Area Height
    const textareaLineHeight = window.innerWidth*0.04; // adjust this value as needed
    const previousRows = event.target.rows;
    event.target.rows = 1; // reset the number of rows to 1
    const currentRows = Math.ceil(event.target.scrollHeight / textareaLineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    setRows(currentRows);
  }

  const customStyles = {
    content: {
      alignSelf: 'center',
      margin: '30vh 4vw 0vh 4vw',
      width: '92vw',
      height: 'fit-content',
      padding: '3vh 8vw',
    },
    overlay: {zIndex: 1000,backgroundColor: 'rgb(0,0,0,0.5)'}
  };

  async function get_seller_products () {
    let obj = {
        seller_id: localStorage.getItem('influencer_id'),
        type: 'unique_product_id'
    }
    const json = await getproduct_info(obj);
    if(json.success) {
        setAllProducts(json.msz)
    }
  }

  async function postNow () {

    let json1;
    let json2;
    let obj = {
      caption: captionText,
      seller_id: localStorage.getItem('influencer_id'),
      media_url: "",
      looks_id: uuidv4(),
      products: selectedArray,
  }

    if(draftMode === "Edit") {
      obj.media_url = currentDraft.media_url;
      json2 = await save_looks(obj);
        if(json2.success){
          let obj2 = {
            looks_draft_id: currentDraft.looks_draft_id,
          }
          await delete_looks_draft(obj2);
          setLoader2(false);
          window.open('/minstore','_self')
        } else {
          setLoader2(false)
          return window.alert('Something went wrong');
        }
    } else {
      json1 = await uploadMultipleFilesToS3([lookFile]);
      if(json1.success){
        obj.media_url = S3_URI + json1.fileKeys[0];
        json2 = await save_looks(obj);
        if(json2.success){
          setLoader2(false);
          window.open('/minstore','_self')
        } else {
          setLoader2(false)
          return window.alert('Something went wrong');
        }
      }
    }
  }

  async function saveDraft () {
    setLoader2(true)
    let json1;
    let json2;
    let obj = {
      caption: captionText,
      seller_id: localStorage.getItem('influencer_id'),
      media_url: "",
      looks_draft_id: uuidv4(),
      products: selectedArray,
  }

    json1 = await uploadMultipleFilesToS3([lookFile]);
    if(json1.success){
      obj.media_url = S3_URI + json1.fileKeys[0];
      json2 = await save_looks_draft(obj);
      if(json2.success){
        setLoader2(false);
        goToNewDrafts();
      } else {
        setLoader2(false)
        return window.alert('Something went wrong');
      }
    } else {
      setLoader2(false)
      return window.alert('Something went wrong');
    }
    
  }

  function openDraft(draft_info) {
    for(let i = 0; i<draft_info.products.length;i++){
      selectedArray.push(draft_info.products[i]);
    }
    setSelectedArray([...selectedArray]);
    setCaptionText(draft_info.caption);
    setLookFile(draft_info.media_url);
    setDraftMode("Edit");
    setMode("New");
    setCurrentDraft(draft_info);
    get_seller_products();
  }

  async function editDraft () {
    setLoader2(true);
    let obj = {
        caption: captionText,
        looks_draft_id: currentDraft.looks_draft_id, 
        products: selectedArray,
    }
    const json2 = await edit_looks_draft(obj);
    if(json2.success) {
      setLoader2(false);
      goToNewDrafts();
    } else{
      setLoader2(false);
      return window.open("Something Went Wrong")
    }
  }

  async function deleteDraft (d_id,ind) {

    setLoader2(true);
    let obj = {
        looks_draft_id: d_id,
    }
    const json2 = await delete_looks_draft(obj);
    if(json2.success) {
      looksDraft.splice(ind,1);
      setLooksDraft([...looksDraft]);
      setLoader2(false);
    } else {
      setLoader2(false);
      window.alert("Something Went Wrong")
    }
  }

  async function goToNewDrafts() {
    setRows(1);
    setCaptionText("");
    setAllProducts([]);
    setSelectedArray([]);
    setMode("Main");
    setLookFile(undefined);
    setLooksDraft([]);
    setLoader1(true);
    setDraftMode("New");
    get_drafts();
  }

  useEffect(()=>{
    get_drafts();
  },[])
 
    return (

    mode === "Main" ? 
      <div className='minALBox'>
        {loader2 ? <MINFullScreenLoader/> : null}
        <div className='minALTB'>
                <p className='minALTBT1'>New Look</p>
                <i onClick={() => { setModalIsOpen(false); }} style={{
                    fontSize: '25px',
                    color: 'black'
                }} class="fa-solid fa-xmark"></i>
            </div>
        <div className='minALMAdd1Box'>
            <input ref={fileInputRef} className="minALMUpload1" type="file" onChange={handelUpload} accept="video/*" size={1}/>
            <div className='minALMAdd1'>
              <p className='minALMAdd1T1'>+ Add New Look</p>
            </div>
          </div>

          {loader1 ? null : <p className='minALMDraftHead'>Drafts</p>}

          {loader1 ? null  : looksDraft.length === 0 ? <p className='minALMDraftNo'>No Drafts!</p> : null}

          { loader1 ? <div className='minALLoader1'></div> : looksDraft.map((p,index)=>(
            <div className='minALMDraftItem'>
              <video onClick={()=>{ openDraft(p) }} className="minALMDraftItemVideo">
                <source src={p.media_url} type="video/mp4" />
                <source src={p.media_url} type="video/webm" />
                <source src={p.media_url} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
            <div onClick={()=>{ openDraft(p) }} className='minALMDraftItemCaption'>{p.caption === "" || p.caption === undefined ? "No Caption!" : p.caption}</div>
            <div onClick={()=>{deleteDraft(p.looks_draft_id,index)}} className='minALMDraftItemTrash'>
            <i style={{fontSize: '16px',color: 'grey'}} class="fa-solid fa-trash"></i>
            </div>
            </div>
          ))}
      </div> :
        <div className='minALBox'>
            <div onClick={() => {setDModalIsOpen(true)}} className='minALTB2'>
            <i style={{
                    fontSize: '20px',
                    color: 'black'
                }} class="fa-solid fa-arrow-left"></i>
                <p className='minALTB2T1'>New Look</p>
            </div>

            <video className="minALVideo" controls>
                <source src={draftMode === "New" ? lookFile === undefined ? "" : URL.createObjectURL(lookFile) : lookFile} type="video/mp4" />
                <source src={draftMode === "New" ? lookFile === undefined ? "" : URL.createObjectURL(lookFile) : lookFile} type="video/webm" />
                <source src={draftMode === "New" ? lookFile === undefined ? "" : URL.createObjectURL(lookFile) : lookFile} type="video/ogg" />
                Your browser does not support the video tag.
            </video>

            <textarea value={captionText} onChange={handleCaptionChange} className='minALCaption' cols="40" rows={rows} placeholder='Write a caption...' ></textarea>

            <div className='minALAP'>
            <i style={{fontSize:'16px',color: 'orange'}} class="fa-solid fa-bag-shopping"></i>
            <p className='minALAPT1'>Add Products</p>
            </div> 

            <div className="minALProductGrid">
          {allProducts.map((p) => (
            <MINAddProductCard  item={p} selectedArray={selectedArray} setSelectedArray={setSelectedArray} />
          ))}
        </div>

        <div className='minALSearchMore'>
        <i class="fa-solid fa-search"></i>
            <p className='minALSearchMoreT1'>Search More Products</p>
        </div>

        <div className='minALAction'>
          <div onClick={()=>{if(draftMode === "Edit"){editDraft()}else{saveDraft()}}} className='minALActionDraft'>Save Draft</div>
          <div onClick={()=>{postNow()}} className='minALActionPost'>Post</div>
        </div>
        

        <Modal
        className="minALDModal"
        isOpen={dModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setDModalIsOpen(false)}}
        style={customStyles}>
          <>
          <div className='minALDModalHead'>
          <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-cloud"></i>
          <p className='minALDModalHeadT1'>Save as Draft</p>
          </div>

          <p className='minALDModalBodyT1'>Do you want to save this look as a draft?</p>

          <div className='minALDModalAction'>
            <p onClick={()=>{setDModalIsOpen(false);setMode("Main")}} className='minALDModalActionN'>No</p>
            <p onClick={()=>{if(draftMode === "Edit"){editDraft()}else{saveDraft()}}} className='minALDModalActionY'>Yes</p>
          </div>
          </>
        </Modal>

        </div>
    )
}

export default MINAddLooks