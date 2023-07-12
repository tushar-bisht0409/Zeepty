import React, { useState } from 'react'
import "./addressCard.css"
import Modal from 'react-modal';
import { API_URI } from '../../../store/actions/auth_action';
import { useEffect } from 'react';
export default function AddressCard({selectedAddress,setSelectedAddress,item,refreshData}) {

    const [isSelected,setIsSelected] = useState(false);

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [uName, setUName] = useState("");
    const [uPhone, setUPhone] = useState("");
    const [uAltPhone, setUAltPhone] = useState("");
    const [pincode, setpincode] = useState("");
    const [aline, setAline] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [hMode, setHMode] = useState("home");

    const customStyles = {
      content: {
        height: '80vh',
        width: '30vw',
        alignSelf: 'center',
        left: '35vw',
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
        const response1 = await fetch(`${API_URI}/edituserinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'delete',
            subType: 'addresses',
            userID: uData.userID,
            addressID: item.addressID,
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
        const response1 = await fetch(`${API_URI}/edituserinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'delete',
            subType: 'addresses',
            userID: uData.userID,
            addressID: item.addressID,
          }),
        });
        const json1 = await response1.json();
        if (json1.success) {
        const response2 = await fetch(`${API_URI}/edituserinfo`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'add',
            subType: 'addresses',
            userID: uData.userID,
            address: {
              addressID: item.addressID,
              fullName: uName,
              phoneNumber: uPhone,
              alternatePhoneNumber: uAltPhone,
              addressLine: aline,
              landmark: landmark,
              city: city,
              pincode: pincode,
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
      setUName(item.fullName);
      setAline(item.addressLine);
      setLandmark(item.landmark);
      setCity(item.city);
      setUPhone(item.phoneNumber);
      setUAltPhone(item.alternatePhoneNumber);
      setpincode(item.pincode);
      setHMode(item.mode);
    };

    useEffect(()=>{
      if(selectedAddress===undefined){
        setIsSelected(false);
      }
      else if(selectedAddress.addressID === item.addressID){
        setIsSelected(true);
      }
    },[])
    return (
        <div className='asAddressBox'>
            <div className='asAddressBoxTop'>
            <div className='asAddressBoxTopLeft'>
            <div onClick={handleSelection} className='ac-checkBox'>
          {isSelected?<i style={{ fontSize: '20px', color: 'white',height:'25px',width: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA'}}
           class="fa-solid fa-check"></i>
            :<div></div>}
          </div>
            <p className='asAddressTextName'>{item.fullName}</p>
            </div>
            <div className='asAddressBoxTopRight'>
          {item.mode==="home"?<i style={{fontSize: '20px', color: '#554BDA',height:'25px',width: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}
           class="fa-solid fa-house"></i>
            :<i style={{fontSize: '20px', color: '#554BDA',height:'25px',width: '25px',display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            class="fa-solid fa-briefcase"></i>}
            <p className='asAddressTextMode'>{item.mode.toUpperCase()}</p>
            </div>
            </div>
            <p className='asAddressText'>{item.addressLine},{item.landmark},{item.city}</p>
            <p className='asAddressText'>{item.phoneNumber}</p>
            {item.alternatePhoneNumber == ""?null : <p className='asAddressText'>{item.alternatePhoneNumber} (Alternate Contact No.)</p>}
            <div className='asPCRow'>
            <p className='asAddressTextPC'>Pin Code:</p>
            <p className='asAddressTextPC2'>{item.pincode}</p>
            </div>
            <div className='asActionBox'>
                <div onClick={()=>{
                  if(selectedAddress===undefined){}else{
                  if(selectedAddress.addressID === item.addressID){
                    setSelectedAddress(undefined);
                  }
                }
                  deleteAddress();
                }} className='asActionButton'>Remove</div>
                <div onClick={()=>{
                  setOldValues();
                  setModalIsOpen(true);
                }}
                  className='asActionButton'>Edit</div>
            </div>
            <Modal
        onAfterClose={()=>{}}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={()=>{console.log("NNN: ",uName)}}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>   
        <div className='newAddress-modal-head'>
        <p className='newAddress-modal-headText'>Add New Address</p>
        <i onClick={()=>{setModalIsOpen(false);}} style={{
          fontSize: '25px',
          color: 'black'
        }} class="fa-solid fa-xmark"></i>
        </div>
      <div className="newAddress-modal">
        <p className='newAddress-modal-contactText'>Contact Details</p>
        <input onChange={(val)=>{setUName(val.target.value);}} className='newAddress-modal-input' value={uName} placeholder='Name*' type='text'/>
        <input onChange={(val)=>{setUPhone(val.target.value);}} className='newAddress-modal-input' value={uPhone} placeholder='Mobile Number*' type='text'/>
        <input onChange={(val)=>{setUAltPhone(val.target.value);}} className='newAddress-modal-input' value={uAltPhone} placeholder='Alternate Mobile Number(Optional)' type='text'/>

        <p className='newAddress-modal-addressText'>Address</p>
        <input onChange={(val)=>{setpincode(val.target.value);}} className='newAddress-modal-input' value={pincode} placeholder='Pin Code*' type='text'/>
        <input onChange={(val)=>{setAline(val.target.value);}} className='newAddress-modal-input' value={aline} placeholder='Address*' type='text'/>
        <input onChange={(val)=>{setLandmark(val.target.value);}} className='newAddress-modal-input' value={landmark} placeholder='Landmark(Optional)' type='text'/>
        <input onChange={(val)=>{setCity(val.target.value);}} className='newAddress-modal-input' value={city} placeholder='City*' type='text'/>

        <p className='newAddress-modal-modeHeadText'>SAVE ADDRESS AS</p>
        <div className='newAddress-modal-modeBox'>
        <div onClick={()=>{setHMode('home');}} className={hMode==="home"?'newAddress-modal-modeHeadButton-active':'newAddress-modal-modeHeadButton-inActive'}>Home</div>
        <div style={{width: '2vw'}}></div>
        <div onClick={()=>{setHMode('work');}} className={hMode==="work"?'newAddress-modal-modeHeadButton-active':'newAddress-modal-modeHeadButton-inActive'}>Work</div>
        </div>
      </div>
      <div className='newAddress-modal-bottomBox'>
      <div onClick={()=>{
          editAddress();
      }} className='newAddress-modal-addButton'>Edit Address</div>   
      </div> 
    </Modal>
            </div>
    );
}