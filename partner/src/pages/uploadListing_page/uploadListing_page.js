import React, { useState,useEffect } from "react";
import "./uploadListing_page.css";
import Drawer from "../../components/drawer/drawer";
import { connect, useDispatch } from "react-redux";
import { saveRequestInRedux } from "../../store/action/listingaction";
import DraftTable from "../../components/listing_page/uploadListing_page/draftTable/draftTable";
import DraftTitleBar from "../../components/listing_page/uploadListing_page/draftTitlebar/draftTitlebar";
import QCTitlebar from "../../components/listing_page/uploadListing_page/qcTitlebar/qcTitlebar";
import QCTable from "../../components/listing_page/uploadListing_page/qcTable/qcTable";
import { useParams } from "react-router-dom";
import errorOccurred from '../../assets/supplier/images/errorOccurred.png'
import nothingHere from '../../assets/supplier/images/nothingHere.png'
import { validateManufacturerLocalData } from "../../store/action/auth_action";

 function UploadListingPage({data}) {

    const dispatch = useDispatch()

  const [state,setState] = useState("draft")

  const params = useParams();

  const[isError, setIsError] = useState(false);
  const[isNoData, setIsNoData] = useState(false);
  const [loader1, setLoader1] = useState(true);
  
  const getRequest = async ()=> {
    let obj = {
      type: "manufacturer_id",
      manufacturer_id: localStorage.getItem('manufacturer_id')
    }
    const json = await dispatch(saveRequestInRedux(obj));
    if(json.success){
    } else if(json.success === false && json.err === null || json.err === undefined) {
      setIsNoData(true);
  } else {
      setIsError(true);
  }
  setLoader1(false);
  }

  useEffect(()=>{
    getRequest();
},[])

useEffect(()=>{
  validateManufacturerLocalData();

   if(params.mode === "rejected"){
     setState("rejected")
   } else if(params.mode === "pending"){
     setState("pending")
   } else if(params.mode === "approved"){
    setState("approved");
  } else {
    setState("draft")
  }
},[data])

const handleMode = (mMode)=>{
    setState(mMode)
  }
  

    return (
        <div className="ulpage">
            <Drawer mode={"uploads"}/>




  

            {loader1 ? <div className="ulPage-loader1"></div> :
<div style={{width: '80vw',marginLeft: '20vw'}}>

          <div className="ulPage-titlebar">
            <div onClick={()=>{handleMode("draft")}} className={state==="draft" ? "ulPage-titlebar-active":"ulPage-titlebar-inactive" }>Drafts ( {data.draft.length} )</div>
            <div onClick={()=>{handleMode("pending")}} className={state==="pending" ? "ulPage-titlebar-active":"ulPage-titlebar-inactive" }>Pending ( {data.pending.length} )</div>
            <div onClick={()=>{handleMode("rejected")}} className={state==="rejected" ? "ulPage-titlebar-active":"ulPage-titlebar-inactive" }>Rejected ( {data.rejected.length} )</div>
            <div onClick={()=>{handleMode("approved")}} className={state==="approved" ? "ulPage-titlebar-active":"ulPage-titlebar-inactive" }>Approved ( {data.approved.length} )</div>
          </div>
        


        <div onClick={()=>{window.open('/supplier/vertical','_self')}} className="ulPage-addbox">
          <div className="ulPage-addbox-left">
            <div className="ulPage-addbox-left-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
            <p className="ulPage-addbox-left-text">Add more listings to get more orders.</p>
          </div>
          <div className="ulPage-addbox-right">
            <div className="ulPage-addbox-right-button">Add Listing</div>
          </div>
        </div>

        {isError || isNoData || loader1 ? null : state === "draft" ? <DraftTitleBar/> : <QCTitlebar/>}

        { isError ? <div className="ulPage-error">
        <img onClick={()=>{window.location.reload()}} className="ulPage-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="ulPage-error-refresh">Refresh</div>
      </div> : isNoData ? <div className="ulPage-nodata">
        <img className="ulPage-nodata-img" src={nothingHere}></img>
        </div> : <div>
            {data[`${state}`].map((item) => (
                state === "draft" ? <DraftTable item={item} arrAll={data[`${state}`]}/> : <QCTable item={item}/> 

            ))}
            </div>}

        {/* {   
            state == "listing"?(
              <ListingPageSecondC />
            ):(state == "inActive" ? <InActive_subPage/>:(<Blacklisted_subPage/> ))         
        }  */}
        </div>}

        </div>
    )
}

function mapStateToProps(state) {
    const listinginfo = state.savelistingInRedux;
    return {data: listinginfo};
  }

export default connect(mapStateToProps)(UploadListingPage)