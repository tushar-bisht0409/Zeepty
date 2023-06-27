import "./reviewCard.css";
import React from "react";
import { useEffect } from "react";
import { getOtherCustomerInfo } from "../../../store/actions/user_action";
import { useState } from "react";
import MRatingBox from "../../mratingBox/mratingBox";
import {useSelector, useDispatch} from "react-redux"



const ReviewCard = ({item}) => {

    const [uData,setUData] = useState(undefined);

    const getUser = async()=>{
        let obj = {
            customer_id: item.customer_id
          }
        const json = await getOtherCustomerInfo(obj);
        if(json.success){
            setUData(json.msz);
        }
    }

    function convertDate(str) {
      const timestamp = new Date(str);
      const options = {
        year: "2-digit",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
  
      return timestamp.toLocaleString("en-US", options);
    }

    useEffect(()=>{
        getUser();
    },[]);

  return (
    <div className="mobilereviewCardBox">
   <div className="mobilereviewCardBoxTop">
    <div className="mobilereviewCardBoxL">
        <MRatingBox stars={item.rating} ></MRatingBox>
        {uData===undefined?<div></div>:<p className="mobileurName">{uData.name}</p>}
        {/* {uData===undefined?<div></div>: <img className="mobileurImage" src={"https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"}/>} */}
    </div>
    <i style={{color: 'grey', fontSize: '16px',}} className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="mobilereviewCardText">{item.text}</div>
   <div className="mobilereviewCardMedia">
    {item.media_urls.map((media)=>(
      media.slice(-1) === "i" ? <img className="mobilereviewCardMedia-media" src={media}/>
        : <video className="mobilebigImage">
        <source src={media} type="video/mp4" />
        <source src={media} type="video/webm" />
        <source src={media} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    ))}
   </div>
   <div className="mobilereviewCardTime">{convertDate(item.createdAt)}</div>
   </div>
  );
};

export default ReviewCard;