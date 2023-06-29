import React, {useEffect,useState} from "react";
import "./listingPageMain.css";
import { useDispatch, useSelector } from "react-redux";
import { getlisting_info,saveListingInRedux } from "../../../../store/action/listingaction";
import InActive_subPage from "../../inActive_subPage/inActive_subPage";
import Blacklisted_subPage from "../../blacklisted_subPage/blacklisted_subPage";
import InStock_subPage from "../../inStock_subPage/inStock_subPage";
import errorOccurred from '../../../../assets/supplier/images/errorOccurred.png';
import nothingHere from '../../../../assets/supplier/images/nothingHere.png';

const  ListingPageMain = ({mMode}) =>{
  const dispatch = useDispatch();

  const [state,setState] = useState(mMode);

  const data = useSelector((state)=>{return state.savelistingInRedux});

  const[isError, setIsError] = useState(false);
  const[isNoData, setIsNoData] = useState(false);
  const [loader1, setLoader1] = useState(true);
  
  const getListing = async ()=> {
    let obj = {
      type: "manufacturer_id",
      manufacturer_id: localStorage.getItem('manufacturer_id')
    }
    const json = await getlisting_info(obj);
    if(json.success){
     await dispatch(saveListingInRedux(json.msz,localStorage.getItem('manufacturer_id')));
    } else if(json.success === false){
      if(json["err"] === null || json["err"] === undefined){
        await dispatch(saveListingInRedux([],localStorage.getItem('manufacturer_id')));
        setIsNoData(true)
      }else{
        setIsError(true)
      }
    }
    setLoader1(false)
  }
  useEffect(()=>{
    getListing();
},[])



const handleMode = (mMode)=>{
  setState(mMode)
}


    return(
        <>
        <div style={{width: '80vw',marginLeft: '20vw'}}>

          <div className="lpmain-titlebar">
            <div onClick={()=>{handleMode("listing")}} className={state==="listing" ? "lpmain-titlebar-active":"lpmain-titlebar-inactive" }>Live ( {data.inStock.length} )</div>
            <div onClick={()=>{handleMode("inActive")}} className={state==="inActive" ? "lpmain-titlebar-active":"lpmain-titlebar-inactive" }>In Active ( {data.inActive.length} )</div>
            <div onClick={()=>{handleMode("blacklisted")}} className={state==="blacklisted" ? "lpmain-titlebar-active":"lpmain-titlebar-inactive" }>Blacklisted ( {data.blacklisted.length} )</div>
          </div>
        {/* <div className="listpagenavBar">
        <ul>
        <li onClick={()=>{handleMode("listing")}} className="listpagenavlistitem"><div className={state==="listing" ? "listingMode":"listingModeInactive" }>Listing</div></li>
        <li onClick={()=>{handleMode("request")}} className="listpagenavlistitem"><div className={state==="request" ? "listingMode":"listingModeInactive" }>Request</div></li>
        <li onClick={()=>{handleMode("draft")}} className="listpagenavlistitem"><div className={state==="draft" ? "listingMode":"listingModeInactive" }>Draft</div></li>
        </ul>
        </div> */}

        {/* <div className="searchButt">
        <input className="noosubmit" type="search" placeholder="Enter product name, URL"></input>
        <div className="listpagebtn3">
          <Link to={`/selectvertical`}>
        <button type="button" className="addnewbutonn">ADD NEW PRODUCT</button>
          </Link>
        </div>
        </div> */}

        {/* <div onClick={()=>{window.open('/supplier/vertical','_self')}} className="lpmain-addbox">
          <div className="lpmain-addbox-left">
            <div className="lpmain-addbox-left-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
            <p className="lpmain-addbox-left-text">Add more listings to get more orders.</p>
          </div>
          <div className="lpmain-addbox-right">
            <div className="lpmain-addbox-right-button">Add Listing</div>
          </div>
        </div> */}
      

        {isError ? <div className="lpmain-error">
        <img onClick={()=>{window.location.reload()}} className="lpmain-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="lpmain-error-refresh">Refresh</div>
      </div> : isNoData ? <div className="lpmain-nodata">
        <img onClick={()=>{window.open('/supplier/vertical','_self')}}  className="lpmain-nodata-img" src={nothingHere}></img>
        <div onClick={()=>{window.open('/supplier/vertical','_self')}} className="lpmain-nodata-text">+ Adding Listing</div>
        </div> : loader1 ? <div className="lpmain-loader1"></div> :   
            state == "listing"?
              <InStock_subPage />
            : state == "inActive" ? <InActive_subPage/>:(<Blacklisted_subPage/> )        
        } 
        </div>
        
       
        </>
    )
}

export default ListingPageMain;