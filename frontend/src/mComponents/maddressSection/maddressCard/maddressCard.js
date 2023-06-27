import React, { useState } from 'react'
import "./maddressCard.css"
import Modal from 'react-modal';
import { API_URI } from '../../../store/actions/auth_action';
import { useEffect } from 'react';
export default function MAddressCard({selectedAddress,setSelectedAddress,item,refreshData}) {

    const [isSelected,setIsSelected] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [uName, setUName] = useState("");
    const [uPhone, setUPhone] = useState("");
    const [uAltPhone, setUAltPhone] = useState("");
    const [postalcode, setPostalCode] = useState("");
    const [aline, setAline] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [hMode, setHMode] = useState("home");

    const customStyles = {
      content: {
        alignSelf: 'center',
        padding: '0px',
      },
    };

    function handleSelection() {
      if(!isSelected){
        setSelectedAddress(item)
        setIsSelected(true);
      }
    }

    const deleteAddress = async () =>{
      const uData = JSON.parse(localStorage.getItem('userInfo'));
      try {
        const response1 = await fetch(`${API_URI}/editcustomerinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'delete',
            subType: 'addresses',
            customer_id: localStorage.getItem('customer_id'),
            address_id: item.address_id,
          }),
        });
        const json1 = await response1.json();
        if (json1.success) {
          refreshData();
        }
      } catch (error) {
        console.log(error);
      }
    }

    const editAddress = async () => {
      const uData = JSON.parse(localStorage.getItem('userInfo'));
      try {
        const response1 = await fetch(`${API_URI}/editcustomerinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'delete',
            subType: 'addresses',
            customer_id: localStorage.getItem('customer_id'),
            address_id: item.address_id,
          }),
        });
        const json1 = await response1.json();
        if (json1.success) {
        const response2 = await fetch(`${API_URI}/editcustomerinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'add',
            subType: 'addresses',
            customer_id: localStorage.getItem('customer_id'),
            address: {
              address_id: item.address_id,
              full_name: uName,
              phone_number: uPhone,
              alternate_phone_number: uAltPhone,
              address_line: aline,
              landmark: landmark,
              city: city,
              postalcode: postalcode,
              country: "",
              mode: hMode,
            },
          }),
        });
        const json2 = await response2.json();
        if (json2.success) {
          setModalIsOpen(false);
          refreshData();
        }
      }
      } catch (error) {
        console.log(error);
      }
    };

    const setOldValues = async () => {
      console.log("oset: ",item);
      setUName(item.full_name);
      setAline(item.address_line);
      setLandmark(item.landmark);
      setCity(item.city);
      setUPhone(item.phone_number);
      setUAltPhone(item.alternate_phone_number);
      setPostalCode(item.postalcode);
      setHMode(item.mode);
    };

    useEffect(()=>{
      if(selectedAddress===undefined){
        setIsSelected(false);
      }
      else if(selectedAddress.address_id === item.address_id){
        setIsSelected(true);
      }
    },[])
    return (
        <div className='masAddressBox'>
            <div className='masAddressBoxTop'>
            <div className='masAddressBoxTopLeft'>
            <div onClick={handleSelection} className='mac-checkBox'>
          {isSelected?<i style={{ fontSize: '10px', color: 'white',height:'15px',width: '15px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA'}}
           class="fa-solid fa-check"></i>
            :<div></div>}
          </div>
            <p className='masAddressTextName'>{item.full_name}</p>
            </div>
            <div className='masAddressBoxTopRight'>
          {item.mode==="home"?<i style={{fontSize: '15px', color: '#554BDA',height:'20px',width: '20px',display: 'flex', justifyContent: 'center', alignSelf: 'center'}}
           class="fa-solid fa-house"></i>
            :<i style={{fontSize: '15px', color: '#554BDA',height:'20px',width: '20px',display: 'flex', justifyContent: 'center', alignSelf: 'center'}}
            class="fa-solid fa-briefcase"></i>}
            <p className='masAddressTextMode'>{item.mode.toUpperCase()}</p>
            </div>
            </div>
            <p className='masAddressText'>{item.address_line},{item.landmark},{item.city}</p>
            <p className='masAddressText'>{item.phone_number}</p>
            {item.alternate_phone_number == ""?null : <p className='masAddressText'>{item.alternate_phone_number} (Alternate Contact No.)</p>}
            <div className='masPCRow'>
            <p className='masAddressTextPC'>Pin Code:</p>
            <p className='masAddressTextPC2'>{item.postalcode}</p>
            </div>
            <div className='masActionBox'>
                <div onClick={()=>{
                  if(selectedAddress===undefined){}else{
                  if(selectedAddress.addressID === item.addressID){
                    setSelectedAddress(undefined);
                  }
                }
                  deleteAddress();
                }} className='masActionButton'>Remove</div>
                <div onClick={()=>{
                  setOldValues();
                  setModalIsOpen(true);
                }}
                  className='masActionButton'>Edit</div>
            </div>
            <Modal
        onAfterClose={()=>{}}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={()=>{console.log("NNN: ",uName)}}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>   
        <div className='mnewAddress-modal-head'>
        <p className='mnewAddress-modal-headText'>Add New Address</p>
        <i onClick={()=>{setModalIsOpen(false);}} style={{
          fontSize: '25px',
          color: 'black'
        }} class="fa-solid fa-xmark"></i>
        </div>
      <div className="mnewAddress-modal">
        <p className='mnewAddress-modal-contactText'>Contact Details</p>
        <input onChange={(val)=>{setUName(val.target.value);}} className='mnewAddress-modal-input' value={uName} placeholder='Name*' type='text'/>
        <input onChange={(val)=>{setUPhone(val.target.value);}} className='mnewAddress-modal-input' value={uPhone} placeholder='Mobile Number*' type='text'/>
        <input onChange={(val)=>{setUAltPhone(val.target.value);}} className='mnewAddress-modal-input' value={uAltPhone} placeholder='Alternate Mobile Number(Optional)' type='text'/>

        <p className='mnewAddress-modal-addressText'>Address</p>
        <input onChange={(val)=>{setPostalCode(val.target.value);}} className='mnewAddress-modal-input' value={postalcode} placeholder='Pin Code*' type='text'/>
        <input onChange={(val)=>{setAline(val.target.value);}} className='mnewAddress-modal-input' value={aline} placeholder='Address*' type='text'/>
        <input onChange={(val)=>{setLandmark(val.target.value);}} className='mnewAddress-modal-input' value={landmark} placeholder='Landmark(Optional)' type='text'/>
        <input onChange={(val)=>{setCity(val.target.value);}} className='mnewAddress-modal-input' value={city} placeholder='City*' type='text'/>

        <p className='mnewAddress-modal-modeHeadText'>SAVE ADDRESS AS</p>
        <div className='mnewAddress-modal-modeBox'>
        <div onClick={()=>{setHMode('home');}} className={hMode==="home"?'mnewAddress-modal-modeHeadButton-active':'mnewAddress-modal-modeHeadButton-inActive'}>Home</div>
        <div style={{width: '2vw'}}></div>
        <div onClick={()=>{setHMode('work');}} className={hMode==="work"?'mnewAddress-modal-modeHeadButton-active':'mnewAddress-modal-modeHeadButton-inActive'}>Work</div>
        </div>
      </div>
      <div className='mnewAddress-modal-bottomBox'>
      <div onClick={()=>{
          editAddress();
      }} className='mnewAddress-modal-addButton'>Edit Address</div>   
      </div> 
    </Modal>
            </div>
    );
}