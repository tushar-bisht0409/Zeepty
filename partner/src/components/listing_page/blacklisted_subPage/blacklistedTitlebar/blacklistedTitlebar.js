import React from 'react'
import "./blacklistedTitlebar.css"

export default function BlacklistedTitlebar({data, mode, setMode, groupListing}) {
  
    console.log(data);
const handlePoor =()=>{
  setMode("poor")
  groupListing(data.poor)
}
const handleOthers =()=>{
    setMode("others")
    groupListing(data.others)
}

  return (
        <div className='blacktb'>
          <div className={mode == "poor"?"blacktb_active": 'blacktb_inactive'} onClick={handlePoor}>Poor Quality( {data.poor.length} )</div>
          <div className={mode == "others"?"blacktb_active": 'blacktb_inactive'} onClick={handleOthers}>Others ( {data.others.length} )</div>
        </div>
  )
}

