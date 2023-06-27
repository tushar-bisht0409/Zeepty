import RightTop from "./rightTop";
import Todo from "./todo";
import Insights from "./insights";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";
import StatsGraph from "../statsGraph/statsGraph";
import GstinBox from "./gstinBox/gstinBox";
import UploadFirstListingBox from "./uploadFirstListingBox/uploadFirstListingBox";
import LiveFirstListingBox from "./listingRequestBox/listingRequestBox";
import UploadMoreListingBox from "./uploadMoreListingBox/uploadMoreListingBox";
import FirstOrderBox from "./firstOrderBox/firstOrderBox";
import TodoBox from "./todoBox/todoBox";
import HomeWelcomebar from "./homeWelcomebar/homeWelcomebar";

export default function RightContent({stage, pendingorder , outofstock,lowstock,orderinfo, productinfo, listingRequestInfo, manufacturerInfo, draftRequest, pendingRequest, rejectedRequest, approvedRequest }) {
    
    return (
        <div style={{width: '80vw',marginLeft: '20vw'}}>
            <HomeWelcomebar item={manufacturerInfo}/>
            {stage === 0 ? <UploadFirstListingBox/> : null}
            {stage === 1 || stage === 2 ? <LiveFirstListingBox item={listingRequestInfo}/> : null}
            {stage === 1 || stage === 2 ? <UploadMoreListingBox /> : null}
            {stage === 3 ? <FirstOrderBox item={orderinfo}/> : null}
            {stage === 4 ? <UploadMoreListingBox /> : null}
            {stage === 4 ? <TodoBox  pendingorder={pendingorder} outofstock={outofstock} lowstock={lowstock} draftRequest={draftRequest} pendingRequest={pendingRequest} approvedRequest={approvedRequest} rejectedRequest={rejectedRequest}/> : null}
            {stage === 4 ? <StatsGraph/> : null}
            {/* <GstinBox/> */}
            <div style={{paddingBottom: '10vh'}}></div>
        </div>
    )
}