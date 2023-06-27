import React, { useEffect, useRef, useState } from 'react'
import "./listingTable.css"
import Modal from 'react-modal';
import { editListingES, getListingVariantInformation } from '../../../store/action/listingaction';
import AddVariantModal from '../../addVariantModal/addVariantModal';
export const ListingTable = ({props,mode}) => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: 'vh',
      width :'30vw',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const customStyles2 = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const customStyles3 = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '0px',
      maxHeight: '70vh',
      maxWidth: "80vw",
      overflowX: "hidden",
      transform: 'translate(-50%, -50%)',
      overflow: 'scroll'
    },
  };

  const [drop1,setDrop1] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const [modalIsOpen2, setIsOpen2] = useState(false);

  const [modalIsOpen3, setIsOpen3] = useState(false);

  const d1Ref = useRef(null);

  const [pInfo, setPInfo] = useState(props);

  const [editMode, setEditMode] = useState('');

  const [newPrice,setNewPrice] = useState("");
  const [newStock,setNewStock] = useState("");


  function openModal(mName) {
    setEditMode(mName);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (d1Ref.current && !d1Ref.current.contains(event.target)) {
        setDrop1(false);
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [d1Ref]);


  async function editInfo () {

    let newSizeInfo = props.product_size;
    if(newStock < 0){
      newSizeInfo.inventory = 0;
    } else {
      newSizeInfo.inventory = newStock;
    }

    let obj = {
      listing_id: props.listing_id,
      sku_id: props.sku_id,
      style_code: props.style_code,
      type: editMode === "Price" ? "price" : "inventory",
      price: newPrice,
      product_size: newSizeInfo
    }

    const json = await editListingES(obj);

    if(json.success) {
      let newInfo = pInfo;
      newInfo.price = newPrice;
      newInfo.product_size.inventory = newStock;
      setPInfo(newInfo);
      setIsOpen(false);
      if(editMode !== "Price") {
        window.location.reload();
      } 
    } else {
      window.alert("Something Went Wrong");
    }
  }

  async function handlActiveStatus () {

    let obj = {
      listing_id: props.listing_id,
      sku_id: props.sku_id,
      style_code: props.style_code,
      type: "active",
      active: mode === "inActive" ? true : false,
    }

    const json = await editListingES(obj);
    if(json.success) {
        window.location.reload();
    } else {
      window.alert("Something Went Wrong");
    }
  }

  function getSize() {
    return pInfo.product_size.size.split("_").map((word) => {
        if(pInfo.product_size.size.includes("_")){
            return word.charAt(0).toUpperCase() + word.slice(1)
        } else{
            return pInfo.product_size.size.toUpperCase()
        }
    }).join(" ")
}


  return (

  
    <>
        <div className='ltable'>
            <img className='ltable-img' src={pInfo.media_urls[0]}/>

            <div className='ltable-info'>
                <span className='ltable-info-skuid'>SKU ID: <span className='ltable-info-skuid-value'>{pInfo.sku_id}</span></span>
                <span className='ltable-info-stylecode'>Style Code: <span className='ltable-info-stylecode-value'>{pInfo.style_code}</span></span>
                <span className='ltable-info-brand'>{pInfo.brand}<span className='ltable-info-brand-name'>{pInfo.product_name.substring(0,25)}</span></span>
            </div>

            <div onClick={()=>{openModal("Price")}} className='ltable-price'>
                <i class="fa-sharp fa-solid fa-pen-to-square" style={{fontSize: "20px",color: "orange"}}></i>
                <p className='ltable-price-sp'>₹{pInfo.price}</p>
                <p className='ltable-price-mrp'>MRP ₹{pInfo.mrp}</p>
            </div>

            <div onClick={()=>{openModal("Stock")}} className='ltable-stock'>
                <i class="fa-sharp fa-solid fa-pen-to-square" style={{fontSize: "20px",color: "orange"}}></i>
                <span className='ltable-stock-size'>Size: <span className='ltable-stock-size-value'>{getSize()}</span></span>
                <span className='ltable-stock-inventory'>Stock: <span className='ltable-stock-inventory-value'>{pInfo.product_size.inventory}</span></span>
            </div>

            <div className='ltable-category'>
                <p className='ltable-category-text'>{pInfo.sub_category2}</p>
            </div>

            <div onClick={()=>{ if(pInfo['blacklisted'] === true ){}else{setDrop1(true)}}} className="ltable-more">
            
            {pInfo['blacklisted'] ? null : <div ref={d1Ref} >
            <i className="fa-solid fa-ellipsis-vertical" style={{cursor:'pointer'}} ></i>
            <div className= { drop1? 'ltable-more-active' : 'ltable-more-inactive'}>
                {/* <p onClick={()=>{}} className='minIPOSHDDText'>Edit</p> */}
                <p onClick={()=>{setIsOpen3(true)}} className='ltable-more-active-text'>Add Variant</p>
                <p onClick={()=>{setIsOpen2(true)}}  className='ltable-more-active-text'>{mode === "inActive"? "Make Active" : "Make Inactive"}</p>
            </div>
            </div>}
            
            </div>

        </div>

        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >        
      <div className="modalHeading">
      <h2 className='deletepo'>New {editMode}</h2>
      <i className="fa-sharp fa-solid fa-pen-to-square" style={{color:'D0C7F7',marginLeft:'10px',marginTop:'5px'}}>   </i>
      </div>
      <input value={editMode==="Price"?newPrice:newStock} onChange={(e)=>{if(editMode === "Price") {setNewPrice(e.target.value)} else{setNewStock(e.target.value)}}} className='editLMInput'></input>

      <div className="modalOption">
          <p onClick={()=>{closeModal()}} className='modalYesi'>Cancel</p>
          <p onClick={()=>{editInfo()}} className='modalNoi'>Save</p>
      </div>
      
    </Modal>

    <Modal
        isOpen={modalIsOpen2}
        ariaHideApp={false}
        onRequestClose={()=>{setIsOpen2(false)}}
        style={customStyles2}
      >        
      <div className="modalHeadingL1">

      <div className={mode === "inActive"?'modaliconL2' : 'modaliconL1'}><i class={mode === "inActive"?"fa-solid fa-check":"fa-solid fa-pause" }></i></div>
      <h2 className='deleteL1'>{mode === "inActive"? "Make Active" : "Make Inactive"}</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='modalDesL1'>Are You Sure Want to make this product {mode === "inActive"?"Active":"Inactive"}?</div>
      <div className="modalOptionL1">
        <p onClick={()=>{
          setIsOpen2(false);
        }} className='modalNoL1'>No</p>
        <p onClick={handlActiveStatus} className='modalYesL1'>Yes</p>
          
      </div>
      
    </Modal>

    <Modal
        isOpen={modalIsOpen3}
        ariaHideApp={false}
        onRequestClose={()=>{setIsOpen3(false)}}
        style={customStyles3}>
          <AddVariantModal listing_info={pInfo} setIsOpen3={setIsOpen3}/>
    </Modal>
    
    </>
  )
}
