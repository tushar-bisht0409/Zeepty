import React, { useState } from 'react'
import './AccInfo.css'

import Modal from 'react-modal';
import { API_URI } from '../../../store/actions/auth_action';


const AccInfo = ({item,getData}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [mMode, setmMode] = useState("name");

  const [nName, setNName] = useState("");

  const [nEmail, setNEmail] = useState("");
    
    const customStyles = {
      content: {
        alignSelf: 'center',
        padding: '0px',
        marginTop: '25vh',
        height: '20vh',
        width: '80vw',
      },
    };

    async function saveData(mType) {
        try {
          await fetch(`${API_URI}/editcustomerinfo`, {
            method: 'POST', headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              type: mType,
              customer_id: localStorage.getItem('customer_id'),
              name: nName,
              email: nEmail
            })}).then(async(res)=> {
              const json = await res.json();
            if(json.success)
            {
              getData();
            }
            });
        } catch (error) {
          console.log(error);
          return {"msz": "Something went wrong", "success": false}
        }
    }

  return (
    <div className="accInfo">
        <p className='accInfoHeadText'>Account Information</p>
          <div className='mInfoBox'>
            <p className='mInfoBoxHead'>Mobile</p>
            <p className='mInfoBoxText'>{item.phone}</p>
            {/* <i style={{color:'#554BDA'}} class="fa-solid fa-pen"></i> */}
          </div>
          <div className='mInfoBox'>
            <p className='mInfoBoxHead'>Name</p>
            <p className='mInfoBoxText'>{item.name}</p>
            <i onClick={()=>{setmMode("name"); setModalIsOpen(true)}} style={{fontSize: '12px', color:'#554BDA'}} class="fa-solid fa-pen"></i>
          </div>
          <div className='mInfoBox'>
            <p className='mInfoBoxHead'>Email</p>
            <p className='mInfoBoxText'>{item.email}</p>
            <i onClick={()=>{setmMode("email"); setModalIsOpen(true)}} style={{fontSize: '12px',color:'#554BDA'}} class="fa-solid fa-pen"></i>
          </div>
          <Modal
        onAfterClose={()=>{}}
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>   
        <div className='mmodalBox'>
        <div className='mmodalHead'>
          <p className='mmodalHeadText'>{mMode==="name"? "Name":"Email"}</p>
          <i style={{fontSize: '12px', color:'#554BDA'}} class="fa-solid fa-pen"></i>
        </div>
        <input onChange={(val)=>{if(mMode==="name"){setNName(val.target.value)} else{setNEmail(val.target.value)}}} className='mmodalInput' placeholder={mMode==="name"?'Enter New Name':'Enter New Email'} type={'text'}/>
        <div className='mmodalActionBox'>
          <p onClick={()=>{setModalIsOpen(false)}} className='mmodalActionC'>Cancel</p>
          <p onClick={()=>{setModalIsOpen(false);saveData(mMode);}} className='mmodalActionS'>Save</p>
        </div>
        </div>
    </Modal>
    </div>
  )
}

export default AccInfo