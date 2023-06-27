import "./reviewCard.css";
import React from "react";
import { useEffect } from "react";
import { getCustomerInfo } from "../../../store/actions/user_action";
import { useState } from "react";
import RatingBox from "../../ratingBox/ratingBox";
import {useSelector, useDispatch} from "react-redux"



const ReviewCard = ({reviewID}) => {

    const [uData,setUData] = useState(undefined);
    const dispatch = useDispatch();

    const getUser = async()=>{
        let obj = {
            customer_id: localStorage.getItem("customer_id")
          }
        const json = await getCustomerInfo(obj);
        if(json.success){
            setUData(json.msz);
        }
    }

    useEffect(()=>{
        getUser();
    },[]);

  return (
    <div className="reviewCardBox">
   <div className="reviewCardBoxTop">
    <div className="reviewCardBoxL">
        <RatingBox stars={3} ></RatingBox>
        {uData===undefined?<div></div>:<p className="urName">{uData.name}</p>}
        {uData===undefined?<div></div>: <img className="urImage" src={uData.imageUrl===""?"https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg":uData.imageUrl}/>}
    </div>
    <i style={{color: 'grey', fontSize: '20px',}} className="fa-solid fa-ellipsis-vertical"></i>
   </div>
   <div className="reviewCardText">
    sahsjashj sj ajsjasnkaj sjjabsjasbja jasnkajskaj ajnskajjka sjasnk
   </div>
   <div className="reviewCardTime">
    10:00 p.m, 10 Jan 2022
   </div>
   </div>
  );
};

export default ReviewCard;