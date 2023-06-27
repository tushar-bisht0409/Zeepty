import React, { useEffect, useState } from 'react'
import './mlooks_subPage.css'
import { useParams } from 'react-router-dom';
import { get_looks } from '../../../store/actions/looks_action';


const MLookSubPage = () => {

  const [looks, setLooks] = useState(undefined);

  
  const params = useParams();

  async function get_data() {
    let obj = {
      type: 'seller_id',
      seller_id: params.seller_id
    }
    const json = await get_looks(obj);
    console.log(json)
    if (json.success) {
      setLooks(json.msz);
    } else if (json.success === false && json.err === null) {
      setLooks([]);
    }
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
      <div className='mLSSBox'>
        {looks.length === 0 ?
          <div className='mLSSAdd1Box'>
            <div className='mLSSAdd1'>
              <p className='mLSSAdd1T1'>No Looks Yet!</p>
            </div>
          </div> : null}
        {looks.map((item) => (
          <div className='mLSS'>
            <video className='mLSSVideo'>
              <source src={item.media_url} type="video/mp4"></source>
              <source src={item.media_url} type="video/ogg"></source>
              <source src={item.media_url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}

      </div>
  )
}

export default MLookSubPage