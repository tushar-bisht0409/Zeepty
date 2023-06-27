import React, { useEffect, useState } from 'react'
import { get_looks } from '../../../store/action/looks_action';
import './minLooks_subPage.css'
import Modal from 'react-modal';
import MINAddLooks from '../../minAddLooks/minAddLooks';


const MINLooksSubPage = () => {

  const [looks, setLooks] = useState(undefined);

  const [lModalIsOpen,setLModalIsOpen] = useState(false);

  async function get_data() {
    let obj = {
      type: 'seller_id',
      seller_id: localStorage.getItem('influencer_id')
    }
    const json = await get_looks(obj);
    console.log(json)
    if (json.success) {
      setLooks(json.msz);
    } else if (json.success === false && json.err === null) {
      setLooks([]);
    }
    console.log("SAL ", json)
  }

  useEffect(() => {
    get_data();
  }, []);


const customStyles = {
  content: {
    alignSelf: 'center',
    padding: '0px',
    margin: '0px'
  },
  overlay: {zIndex: 1000}
};

  return (
    looks === undefined ? <div></div> :
      <div className='minLSSBox'>
        {looks.length === 0 ?
          <div onClick={()=>{setLModalIsOpen(true)}} className='minLSSAdd1Box'>
            <div className='minLSSAdd1'>
              <p className='minLSSAdd1T1'>+ Add Some Looks Now</p>
            </div>
          </div> : null}
        {looks.map((item) => (
          <div className='minLSS'>
            <video className='minLSSVideo'>
              <source src={item.media_url} type="video/mp4"></source>
              <source src={item.media_url} type="video/ogg"></source>
              <source src={item.media_url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}

        {looks.length === 0 ? null : <div onClick={()=>{setLModalIsOpen(true)}} className='minLSSAdd2'>
          <i style={{ color: "#554BDA", fontSize: "12vw" }} class="fa-solid fa-circle-plus"></i>
        </div>}

        <Modal
        className="minLSSCreateModal"
        isOpen={lModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setLModalIsOpen(false)}}
        style={customStyles}>
         <MINAddLooks setModalIsOpen={setLModalIsOpen} />
        </Modal>

      </div>
  )
}

export default MINLooksSubPage