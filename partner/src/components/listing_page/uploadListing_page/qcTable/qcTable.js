import React, { useRef, useEffect, useState } from 'react'
import Modal from 'react-modal';
import './qcTable.css'

const QCTable = ({item}) => {

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


    <div className="qcTable-Item">
        <div className='qcTable-ItemImgBox'>
            <img className='qcTable-ItemImg' src={item.media_urls[0]} alt="" />
            
        </div>
        <div className='qcTable-ItemInfo'>
        <span className='qcTable-ItemInfo-count'>Count: <span className='qcTable-ItemInfo-count-value'>{item['local_count']}</span></span>
        <div className='qcTable-ItemBrand'>{item['brand']}</div>
        <div className='qcTable-ItemTitle'>{item['product_name']}</div>
        </div>
        <div className='qcTable-ItemCat'>{item.sub_category2}</div>
        <div className='qcTable-ItemSKu'>{item.listing_request_id}</div>
        <div className='qcTable-ItemMfg'>{convertDate(item.updatedAt)}</div>
        <div className='qcTable-ItemType'>{item.request_type}</div>
        {item.listing_status === "Rejected" ? <div className='qcTable-ItemStatus'style={{fontSize: 'small', fontWeight: '500', color:item.listing_status=="Pending"?"orange":(item.listing_status=="Rejected")?'red':'green'}}>
            <p className='qcTable-∂-text'>{item.listing_status}</p>
            <div onClick={()=>{window.open(`/supplier/listingreport/${item.listing_id}`,'_self')}} className='qcTable-ItemStatus-see'>See Report</div>
            </div> : <div className='qcTable-ItemStatus'style={{fontSize: 'small', fontWeight: '500', color:item.listing_status=="Pending"?"orange":(item.listing_status=="Rejected")?'red':'green'}}>{item.listing_status}</div>
        }

        </div>
        
        </>
        )
      }
      
export default QCTable