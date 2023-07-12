import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCustomerInfo } from '../../store/actions/user_action';
import Modal from 'react-modal';
import AddressCard from './addressCard/addressCard';
import "./addressSection.css"
import { API_URI } from '../../store/actions/auth_action';
import {v4 as uuidv4} from 'uuid';

export default function AddressSection({setUserInfo, selectedAddress, setSelectedAddress, addresses}) {

    const [items, setItems] = useState(addresses);

    const dispatch = useDispatch();

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
          height: '80vh',
          width: '30vw',
          alignSelf: 'center',
          left: '35vw',
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
          const response = await fetch(`${API_URI}/edituserinfo`, {
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
                addressID: uuidv4(),
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

    return (
        <div className='asBigBox'>
            <div className='asHead'>
                <p className='selectAdrTitle'>Select Address</p>
                <div onClick={()=>{setModalIsOpen(true)}} className='anaButton'>+ Add New Address</div>
            </div>
            {items.map((itm,index)=>{
                return <div key={selectedAddress===undefined? itm.addressID+index : itm.addressID==selectedAddress.addressID? itm.addressID+index: itm.addressID}>
                <AddressCard selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} refreshData={refreshData} item={itm}></AddressCard>
                </div>
            })}
            <Modal
        onAfterClose={()=>{}}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={()=>{console.log("NNN: ",uName)}}
        onRequestClose={()=>{resetOldValues(); setModalIsOpen(false)}}
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
          addAddress();
      }} className='newAddress-modal-addButton'>Add Address</div>   
      </div> 
    </Modal>
        </div>
    );
}