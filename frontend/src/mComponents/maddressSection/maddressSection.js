import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomerInfo } from '../../store/actions/user_action';
import Modal from 'react-modal';
import MAddressCard from './maddressCard/maddressCard';
import "./maddressSection.css"
import { API_URI } from '../../store/actions/auth_action';
import {v4 as uuidv4} from 'uuid';

export default function MAddressSection({setUserInfo, selectedAddress, setSelectedAddress, addresses,changeSelectedAddress}) {

    const [items, setItems] = useState(addresses);

    async function refreshData() {
      let obj = {
        customer_id: localStorage.getItem("customer_id")
      }
    const json = await getCustomerInfo(obj);
    if(json.success){
        setUserInfo(json.msz);
        setItems(json.msz.addresses);
    }
    }

    const customStyles = {
        content: {
          alignSelf: 'center',
          padding: '0px',
        },
      };

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [uName, setUName] = useState("");
    const [uPhone, setUPhone] = useState("");
    const [uAltPhone, setUAltPhone] = useState("");
    const [pincode, setpincode] = useState("");
    const [aline, setAline] = useState("");
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [hMode, setHMode] = useState("home");

    const addAddress = async () => {
        const uData = JSON.parse(localStorage.getItem('userInfo'));
        try {
          const response = await fetch(`${API_URI}/editcustomerinfo`, {
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
                address_id: uuidv4(),
                full_name: uName,
                phone_number: uPhone,
                alternate_phone_number: uAltPhone,
                address: aline,
                landmark: landmark,
                city: city,
                pincode: pincode,
                country: "",
                mode: hMode,
              },
            }),
          });
          const json = await response.json();
          if (json.success) {
            refreshData();
            setModalIsOpen(false);
          }
        } catch (error) {
          console.log(error);
        }
      };

    const resetOldValues = async () => {
        setUName("");
        setAline("");
        setLandmark("");
        setCity("");
        setUPhone("");
        setUAltPhone("");
        setpincode("");
        setHMode("home");
      };

      useEffect(()=>{
        if(addresses.length === 0){
          setModalIsOpen(true)
        }
      },[])
    return (
        <div className='masBigBox'>
            <div className='masHead'>
                <p className='mselectAdrTitle'>Select Address</p>
                <div onClick={()=>{setModalIsOpen(true)}} className='manaButton'>+ Add New Address</div>
            </div>
            {items.length === 0 ? <p onClick={()=>{setModalIsOpen(true)}} className='masNoAddress'>No Address Save Yet! Add New?</p> :null}
            {items.map((itm,index)=>{
                return <div key={selectedAddress===undefined? itm.address_id+index : itm.address_id==selectedAddress.address_id? itm.address_id+index: itm.address_id}>
                <MAddressCard selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} refreshData={refreshData} item={itm} changeSelectedAddress={changeSelectedAddress}></MAddressCard>
                </div>
            })}
            <Modal
        onAfterClose={()=>{}}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={()=>{console.log("NNN: ",uName)}}
        onRequestClose={()=>{resetOldValues(); setModalIsOpen(false)}}
        style={customStyles}>   
        <div className='mnewAddress-modal-head'>
        <p className='mnewAddress-modal-headText'>Add New Address</p>
        <i onClick={()=>{setModalIsOpen(false);}} style={{
          fontSize: '25px',
          color: 'black'
        }} class="fa-solid fa-xmark"></i>
        </div>
      <div className='mnewAddress-modal'>
        <p className='mnewAddress-modal-contactText'>Contact Details</p>
        <input onChange={(val)=>{setUName(val.target.value);}} className='mnewAddress-modal-input' value={uName} placeholder='Name*' type='text'/>
        <input onChange={(val)=>{setUPhone(val.target.value);}} className='mnewAddress-modal-input' value={uPhone} placeholder='Mobile Number*' type='text'/>
        <input onChange={(val)=>{setUAltPhone(val.target.value);}} className='mnewAddress-modal-input' value={uAltPhone} placeholder='Alternate Mobile Number(Optional)' type='text'/>

        <p className='mnewAddress-modal-addressText'>Address</p>
        <input onChange={(val)=>{setpincode(val.target.value);}} className='mnewAddress-modal-input' value={pincode} placeholder='Pin Code*' type='text'/>
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
          addAddress();
      }} className='mnewAddress-modal-addButton'>Add Address</div>   
      </div> 
    </Modal>
        </div>
    );
}