import React, { useState } from 'react'
import BuyerInfoDetails from "./BuyerInfo";
import Modal from 'react-modal';
import { UPDATE_SELECTED_ARRAY } from '../../store/action/type';
import { connect, useDispatch, useSelector } from 'react-redux';
const OrderBoxComponent = (d) => {
  // console.log("d",d)
const dispatch = useDispatch();
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
      const [check,setcheck] = useState(false);
    const [dropContent,setDropContent] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [cancelmodalIsOpen, setcancelIsOpen] = useState(false);
// console.log('d',d.props.orderID)
  function openModal() {
    setIsOpen(true);
  }
  function opencancelModal() {
    setcancelIsOpen(true);
  }

 
  function closeModal() {
    setIsOpen(false);
  }
  function closecancelModal() {
    setcancelIsOpen(false);
  }
  function opendrop() {
    setDropContent(true);
  }

 
  function closedrop() {
    setDropContent(false);
  }

  const handleCheckbox = ()=>{
    
    if(!check)
    {
      setcheck(true)
      dispatch({
        type:UPDATE_SELECTED_ARRAY,
        payload:{
          action:'ADD',
          orderID: d.props.orderID
        }
      })}
      else{
          setcheck(false);
          dispatch({
            type:UPDATE_SELECTED_ARRAY,
            payload:{
              action:'REMOVE',
              orderID: d.props.orderID
            }
          })
        }
  }
// console.log(useSelector(state => state.saveorderinfo))

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
      <h2 className='delete'>Ready TO Ship</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='modalDes'>Ready TO Ship? Order will mark as ready to ship and dilivery partner will assigned for order pickup</div>
      <div className="modalOption">
          <p className='modalYes'>Yes</p>
          <p className='modalNo'>No</p>
      </div>
      
    </Modal>
    <Modal
        isOpen={cancelmodalIsOpen}
        // onAfterOpen={afterOpenModal}
        ariaHideApp={false}
        onRequestClose={closecancelModal}
        style={customStyles}
        contentLabel="Example Modal"
      >        
      <div className="modalHeading">

      <button className='modalicon'><i style={{ color: "red"}}  class="fa-solid fa-trash"></i></button>
      <h2 className='delete'>Cancel</h2>
      </div>
      {/* <i class="fa-solid fa-trash"></i> */}

      <div className='modalDes'>Are You Sure want to cancel order? You won't able to recover it</div>
      <div className="modalOption">
          <p className='modalYes'>Yes</p>
          <p className='modalNo'>No</p>
      </div>
      
    </Modal>

   <div className="OrderBox">
    {/* product check box */}
            <input className="checkbox" onClick={handleCheckbox} type="checkbox" />
            <div className="OrderDetailBox">
               { d.props.sellerProducts.map((s)=>(
                     <BuyerInfoDetails key={s._id} orderId={d.props.orderID} props={s}/>
                ))}
                

            </div>
            <div className="BuyerInfo">
                
                <div className="addressDetails">

                
                <div className="buyerName">
                    <p className='title'>Name:</p>
                    <p>{d.props.shippingAddress.fullName}</p>
                </div>
                <div className="buyerAddress "><p className='title'> Address:</p>
                <p>{d.props.shippingAddress.line1}</p></div>
                <div className="buyerLandmark">
                    <p className='title'>Landmark:</p>
                    <p className='buyerDesc'>{d.props.shippingAddress.landmark}</p>
                </div>
                <div className="buyerpincode">
                    <p className='title'>Code</p>
                    <p>{d.props.shippingAddress.pincode}</p>
                </div>
                <div className="buyerCity">
                    <p className='title'>City</p>
                    <p>{d.props.shippingAddress.city}</p>
                </div>
                </div>
                
                <div className="orderMore" onClick={()=> { return dropContent?setDropContent(false):setDropContent(true)}}>
                <i className="fa-solid fa-ellipsis-vertical" >
                    <div className="order_dropdown-content" style={{ display : (dropContent? 'block':'none')}}>
                    <div className="dcontent">
                        <p onClick={opencancelModal}>Cancel</p>
                        <p onClick={ openModal}>Ready TO Ship</p>
                        </div>
                        </div>
                    </i>
                    </div>

            </div>
        </div>
            

        
   </>
  )
}

function mapStateToProps(state) {
  const data = state.saveorderinfo;
  // console.log(data.mode," : ",data)
  let product;
  if(data.mode == "pending")
      product= data.pending;
  else if(data.mode == "RTS")
      product  = data.RTS;
  else if(data.mode == "shipped")
      product  = data.shipped;
  else if(data.mode == "cancelled")
      product  = data.cancelled;
  return {data:product}
}

export default connect(mapStateToProps)(OrderBoxComponent)