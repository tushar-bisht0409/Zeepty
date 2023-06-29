import UploadFirstListingBox from "../uploadFirstListingBox/uploadFirstListingBox";
import UploadMoreListingBox from "../uploadMoreListingBox/uploadMoreListingBox";
import FirstOrderBox from "../firstOrderBox/firstOrderBox";
import TodoBox from "../todoBox/todoBox";
import './homeRightBox.css'
import HomeWelcomebar from "../homeWelcomebar/homeWelcomebar";
import StatsGraph from "../../statsGraph/statsGraph";
import { useEffect, useState } from "react";
import ListingRequestBox from "../listingRequestBox/listingRequestBox";
import LiveListingBox from "../liveListingBox/liveListingBox";

export default function HomeRightBox({stage, pendingorder , outofstock,lowstock,orderinfo, productinfo, listingRequestInfo, manufacturerInfo, draftRequest, pendingRequest, rejectedRequest, approvedRequest }) {

    const [mode, setMode] = useState("");

    useEffect(()=>{
        if(stage === 1){
            let newMode = "draft";
            for(let i =0; i<listingRequestInfo.length; i++){
                if(listingRequestInfo[i].documents[0].listing_status != "Draft"){
                    newMode = "pending";
                    break;
                }
                setMode(newMode);
            }
        } else if(stage === 2){
            setMode("live")
        } else if(stage === 3){
            if(orderinfo.length > 1){
                setMode("orders") 
            }
        } 
    },[])
    return (
        <div className="hrBox">
            <HomeWelcomebar item={manufacturerInfo}/>
            {stage === 4 ? null : <div className="hrBox-titlebar">
                <div className={"hrBox-titlebar-active"}>
                    <div style={{backgroundColor: stage === 0 || stage === 1 ? '#554BDA' : 'green'}} className="hrBox-titlebar-active-circle">
                        { stage === 0 || stage === 1 ? <p className="hrBox-titlebar-active-circle-text">1</p> : <i class="fa-solid fa-check"></i>}
                    </div>
                    <p className="hrBox-titlebar-active-text">Upload your first listing</p>
                </div>

                <div className={stage <2 ? "hrBox-titlebar-inactive" : "hrBox-titlebar-active"}>
                    <div style={{backgroundColor: stage >2 ? 'green' : stage ===2 ? '#554BDA' : 'grey'}} className="hrBox-titlebar-active-circle">
                        {stage >2 ? <i class="fa-solid fa-check"></i> : <p className="hrBox-titlebar-active-circle-text">2</p>}
                    </div>
                    <p className="hrBox-titlebar-active-text">Listing will be live soon</p>
                </div>

                <div className={stage <3 ? "hrBox-titlebar-inactive" : "hrBox-titlebar-active"}>
                    <div style={{backgroundColor: stage >3 ? 'green' : stage ===3 ? '#554BDA' : 'grey'}} className="hrBox-titlebar-active-circle">
                        {stage >3 ? <i class="fa-solid fa-check"></i> : <p className="hrBox-titlebar-active-circle-text">3</p>}
                    </div>
                    <p className="hrBox-titlebar-active-text">Process your first order</p>
                </div>
            </div>}
            
            {stage === 0 || stage === 4? null : <div className="hrBox-tabbar">
                <div onClick={()=>{setMode("draft")}} className={mode === "draft" ? "hrBox-tabbar-active" : "hrBox-tabbar-inactive" }>Drafts</div>
                {stage >1 ? <div onClick={()=>{setMode("pending")}} className={mode === "pending" ? "hrBox-tabbar-active" : "hrBox-tabbar-inactive" }>QC Pending</div>: <div className="hrBox-tabbar-locked">
                <i class="fa-solid fa-lock"></i>
                QC Pending
                    </div>}
                {productinfo.length > 0 ? <div onClick={()=>{setMode("live")}} className={mode === "live" ? "hrBox-tabbar-active" : "hrBox-tabbar-inactive" }>Live</div>:<div className="hrBox-tabbar-locked">
                <i class="fa-solid fa-lock"></i>
                Live
                    </div>}
                {stage >2 ? <div onClick={()=>{setMode("orders")}} className={mode === "orders" ? "hrBox-tabbar-active" : "hrBox-tabbar-inactive" }>Orders</div>:<div className="hrBox-tabbar-locked">
                <i class="fa-solid fa-lock"></i>
                Orders
                    </div>}
                </div>}

            {stage === 0 ? <UploadFirstListingBox/> : null}
            {mode === "draft" ? <ListingRequestBox item={listingRequestInfo} mode={"draft"}/> : null}
            {mode === "pending" ? <ListingRequestBox item={listingRequestInfo} mode={""}/> : null}
            {mode === "live" && stage>1 ? <LiveListingBox item={productinfo} /> : null}
            {mode === "live" ? <UploadMoreListingBox /> : null}
            {mode === "orders" ? <FirstOrderBox item={orderinfo}/> : null}
            {stage === 4 ? <TodoBox  pendingorder={pendingorder} outofstock={outofstock} lowstock={lowstock} draftRequest={draftRequest} pendingRequest={pendingRequest} approvedRequest={approvedRequest} rejectedRequest={rejectedRequest}/> : null}
            {stage === 4 ? <UploadMoreListingBox /> : null}
            {/* {stage === 4 ? <StatsGraph/> : null} */}
            {/* <GstinBox/> */}
            <div style={{paddingBottom: '10vh'}}></div>
        </div>
    )
}