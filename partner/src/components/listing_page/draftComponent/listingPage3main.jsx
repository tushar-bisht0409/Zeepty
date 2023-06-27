import React ,{useEffect,useState} from 'react'
import Title_Bar from "./Title_Bar"
import Items from "./Items.jsx"

import './listingPage3main.css'

import { useDispatch,connect, useSelector } from 'react-redux'

const ListingPage3main = (props) => {
  

  return (
    <div className='lp3mBox'>
        
      <Title_Bar />

      <div key={props.data.length} className='lp3mAll'>
      {props.data.map((d,index)=>
          { return <Items item={d} arrAll={props.data}/>}
        )}
      </div>
      
  

      </div>
  )
}

function mapStateToProps(state) {
  const listinginfo = state.savelistingInRedux;
  console.log("SDSD",listinginfo)
  return {data: listinginfo.draft};
}
export default connect(mapStateToProps)(ListingPage3main);
