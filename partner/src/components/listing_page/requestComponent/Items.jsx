import React, { useRef, useEffect, useState } from 'react'
import Modal from 'react-modal';
import './Items.css'

const Items = ({item}) => {

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
  
  const [dropContent,setDropContent] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

 
  function closeModal() {
    setIsOpen(false);
  }
  function opendrop() {
    setDropContent(true);
  }

 
  function closedrop() {
    setDropContent(false);
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

  return (
    <>

<Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >        
      <div className="modalHeading">

      <button className='modalicon'><i style={{ color: "red"}}  class="fa-solid fa-trash"></i></button>
      <h2 className='delete'>Delete</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='modalDes'>Are You Sure Want to Delete this Product? You won't recover it</div>
      <div className="modalOption">
          <p className='modalYes'>Yes</p>
          <p className='modalNo'>No</p>
      </div>
      
    </Modal>


    <div className="requestItem">
        <div className='requestItemImgBox'>
            <img className='requestItemImg' src={item.media_urls[0]} alt="" />
            
        </div>
        <div className='requestItemInfo'>
        <div className='requestItemBrand'>{item['brand']}</div>
        <div className='requestItemTitle'>{item['product_name']}</div>
        </div>
        <div className='requestItemCat'>{item.sub_category2}</div>
        <div className='requestItemSKu'>{item.listing_request_id}</div>
        <div className='requestItemMfg'>{convertDate(item.updatedAt)}</div>
        <div className='requestItemType'>{item.request_type}</div>
        <div className='requestItemStatus'style={{fontSize: 'small', fontWeight: '500', color:item.listing_status=="Pending"?"orange":(item.listing_status=="Rejected")?'red':'green'}}>{item.listing_status}</div>
        {item.listing_status=="Rejected" ? <div ref={d1Ref} className='requestItemMore' onClick={()=>{ setDrop1(!drop1)}}>
          <i className="fa-solid fa-ellipsis-vertical" >
          <div className={drop1?"requestdropdown-content":"requestdropdown-contentInactive"}>
          <div className="requestdcontent">
            <p onClick={()=>{window.open(`/supplier/listingreport/${item.listing_id}`,'_self')}} className='requestcontentitem'>See Report</p>
            </div>
            </div>
          </i>
          </div> : <div className='requestItemMore'>
          <i style={{color: item.listing_status=="Approved" ?"green":"orange"}} className={ item.listing_status=="Approved" ? "fa-solid fa-check" : "fa-solid fa-clock"} ></i></div>}
        </div>
        
        </>
        )
      }
      
export default Items