import "./ratingReviews.css";
import React, { useEffect, useState } from "react";
// import ProductImages from "./shirt.jpg";
import ReviewCard from "../mobilereviewCard/reviewCard";
import { getProductRatingInfo, getReviews } from "../../../store/actions/product_action";
// import RatingBox from "../../ratingBox/ratingBox";


const RatingReviews = ({item}) => {


  const [ratingInfo, setRatingInfo] = useState(undefined);
  const [reviews, setReviews] = useState([]);

  function getRatingWidth (rating) {
    if(ratingInfo.count === 0){
      return "0vw";
    }else{
    let ind = ratingInfo.ratings.findIndex((obj)=> obj.rating === rating);
    if(ind === -1){
      return "0vw";
    } else{
      console.log(rating,": ",(ratingInfo.ratings[ind].count/ratingInfo.count)*5)
      return ((ratingInfo.ratings[ind].count/ratingInfo.count)*55).toString() +"vw";
    }
  }
  }

  async function handleRatingInfo(){
    const obj = {product_id: item.product_id};
    const json = await getProductRatingInfo(obj);
    if(json.success){
      setRatingInfo(json.rating_info[0])
    } else{
      window.alert("Something Went Wrong")
    }
  }

  async function handleReviews () {
    const obj = {
      type: 'product_id',
      product_id: item.product_id
    }

    const json = await getReviews(obj);
    if(json.success){
      setReviews(json.msz)
    }
  }

  useEffect(()=>{
    handleRatingInfo();
    handleReviews()
  },[])

  return (
    ratingInfo === undefined ? <div></div> :
   <div className="mrar">
       <div className="mobileratingReviews">Ratings & Reviews</div>
    <div id="mobileratingBoxO">
      <div className="mobileratingReviews-Circle">
        <p className="mobilerateCountBig">{ratingInfo.averageRating}</p>
        <i style={{alignSelf: 'center', margin: '4px' , fontSize: '25vw', color: "#554BDA"}} class="fa-solid fa-circle-notch"></i>
      </div>
    <div className="mobileratingAllBox">
      <div className="mobileratingSingle">
        <div className="mobileratingLine">
          <div style={{width: `${getRatingWidth(1)}`, height:'1vh',backgroundColor: 'orange',borderRadius: '10px'}}></div>
        </div>
      <p>1</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "orange"}} class="fa-solid fa-star"></i>
      </div>
      <div className="mobileratingSingle">
        <div className="mobileratingLine">
          <div style={{width: `${getRatingWidth(2)}`, height:'1vh',backgroundColor: 'orange',borderRadius: '10px'}}></div>
        </div>
      <p>2</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "orange"}} class="fa-solid fa-star"></i>
      </div>
      <div className="mobileratingSingle">
        <div className="mobileratingLine">
          <div style={{width: `${getRatingWidth(3)}`, height:'1vh',backgroundColor: 'orange',borderRadius: '10px'}}></div>
        </div>
      <p>3</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "orange"}} class="fa-solid fa-star"></i>
      </div>
      <div className="mobileratingSingle">
        <div className="mobileratingLine">
          <div style={{width: `${getRatingWidth(4)}`, height:'1vh',backgroundColor: 'orange',borderRadius: '10px'}}></div>
        </div>
      <p>4</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "orange"}} class="fa-solid fa-star"></i>
      </div>
      <div className="mobileratingSingle">
        <div className="mobileratingLine">
          <div style={{width: `${getRatingWidth(5)}`, height:'1vh',backgroundColor: 'orange',borderRadius: '10px'}}></div>
        </div>
      <p>5</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "orange"}} class="fa-solid fa-star"></i>
      </div>
    </div>
    </div>
    <div className="mobilereviewBoxBig">
      {reviews.map((d)=>(
        <ReviewCard item={d}></ReviewCard>
      ))}
    </div>

   </div>
  );
};

export default RatingReviews;