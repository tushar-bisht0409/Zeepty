import React, { useEffect } from 'react';
import "./notices_page.css";
import Drawer from '../../components/drawer/drawer';
import { validateManufacturerLocalData } from '../../store/action/auth_action';

const NoticesPage = () => {

  useEffect(()=>{
    validateManufacturerLocalData();
  },[])

  return (
    <>
      <Drawer mode={"notices"} />
      <div className='noticeS'>
        <div>
          <img id='dip' src="https://www.equipashop.com/images/repeated-sale-large-poster-760mm-x-1524mm-p1423-3572_image.jpg" />
        </div>
        <div className='ninfobox'>
          <div id='boldnotice'>LEAVE REQUEST FOR HOLI FESTIVAL</div>
          <div id='lightnotice'>Dear valued suppliers,</div>
          <div id='lnotice'>
            We inform you about a temporary downtime of our Returns tracking panel, which will occur from 12 pm March 24th till March 24th at midnight.
            During this time, we will perform scheduled maintenance and upgrades to our system to improve its performance and provide a better user experience. While we strive to keep our system up and running at all times, this maintenance requires us to temporarily suspend any new updates to the Returns tracking panel.
            I.e. Returns/RTO shipments statuses won't be updated during downtime.
          </div>
        
        </div>
      </div>
    </>
  );
}

export default NoticesPage;
