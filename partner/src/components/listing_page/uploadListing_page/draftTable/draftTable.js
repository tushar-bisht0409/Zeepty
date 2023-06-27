import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import './draftTable.css'
import FullScreenLoader from '../../../fullScreen_loader/fullScreen_loader';
import { UPDATE_DRAFT_INFO } from '../../../../store/action/type';
import { deleteMultipleListingRequest } from '../../../../store/action/listingaction';
const DraftTable = ({item,arrAll}) => {

  const dispatch = useDispatch();

  const [loader1, setLoader1] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  const customdropStyle = {
    dropdownContent :{
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    
  }
  
  const [modalIsOpen, setIsOpen] = useState(false);

  const [drop1,setDrop1] = useState(false);

    const d1Ref = useRef(null);

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

  function openModal() {
    setIsOpen(true);
  }

 
  function closeModal() {
    setIsOpen(false);
  }

  function convertDate(str) {
    const timestamp = new Date(str);
    const options = {
      year: "2-digit",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    return timestamp.toLocaleString("en-US", options);
  }

  function openEditPage() {
    window.open(`/supplier/editlisting/${item.listing_id}`,'_self')
  }

  async function deleteDraft() {
    setIsOpen(false)
    setLoader1(true)
    let obj = {
      type: "listing_id",
      listing_ids: [item.listing_id]
    }
   const json = await deleteMultipleListingRequest(obj);
   console.log("json: ",json)
   if(json.success) {
    dispatch({
      type: UPDATE_DRAFT_INFO,
      payload:{
        oldInfoArray: arrAll,
        newInfo : item,
        action: "REMOVE"
      }
  });
  window.open('/supplier/listing/draft','_self')
   } else{
    window.alert("Something Went Wrong")
   }
   setLoader1(false)
  }

  return (
    <>
   {loader1 ? <FullScreenLoader/> : null}
    <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
      >        
      <div className="modalHeading">

      <i style={{ color: "red",marginRight:'1vw'}}  class="fa-solid fa-trash"></i>
      <h2 className='delete'>Delete</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='modalDes'>Are You Sure Want to Delete this Product? You won't be able to recover it.</div>
      <div className="modalOption">
          <p onClick={deleteDraft} className='modalYes'>Yes</p>
          <p onClick={()=>{setIsOpen(false)}} className='modalNo'>No</p>
      </div>
      
    </Modal>
   
    <div className="draftitems">
        <div className='draftimg'>
            <img className='draftitemsImg' src={item.media_urls[0]} alt="" />
        </div>
        <div className='draftitemInfo'>
            <span className='draftitemInfo-count'>Count: <span className='draftitemInfo-count-value'>{item['local_count']}</span></span>
        <div className='draftitemBrand'>{item['brand']}</div>
        <div className='draftitemsTitle'>{item["product_name"] === "" || item["product_name"] === undefined ? "___" : item['product_name']}</div>
        </div>
        <div className='draftitemsCat'>{item.sub_category2}</div>
        <div className='draftitemsSKu'>{item['listing_request_id']}</div>
        <div className='draftitemsCreated'>{convertDate(item.createdAt)}</div>
        <div className='draftitemsModified'>{convertDate(item.updatedAt)}</div>
          <div className='draftitemsMore'>
            <div onClick={openEditPage} className='draftitemsMore-edit'>Edit</div>
            <div onClick={ openModal} className='draftitemsMore-delete'>
                <i class="fa-solid fa-trash"/>
            </div>
          </div>
        </div>
        
   
   
        </>
  )
}

export default DraftTable