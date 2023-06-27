import React ,{useEffect,useState}from "react";
import './mexplorehome_subPage.css'

const  MExploreHomeSubPage =({setMode})=> {
    
    return (
      <div onClick={()=>{setMode("Search")}} className="mehsp">
        <div className="mehsp-topbar">
        <div className="mehsp-topbar-body">
          <input className="mehsp-topbar-body-input" placeholder="Search Here" type="search"/>
          <div className='mehsp-topbar-body-icon'>
            <i style={{ fontSize: '15px',color: 'white'}} class="fa-solid fa-search"></i>
          </div>
        </div>
        
      </div>
      </div>
    );
  }


export default  MExploreHomeSubPage;
