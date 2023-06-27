import "./ratingReviews.css";
import React from "react";
import ProductImages from "./shirt.jpg";
import ReviewCard from "../reviewCard/reviewCard";
import RatingBox from "../../ratingBox/ratingBox";


const RatingReviews = () => {

  const reviews = [
    1,2,3,4,5
  ]
  return (
   <div>
       <div id="ratingHeading" className="ratingReviews">Ratings & Reviews</div>
    <div id="ratingBoxO">
      <p className="rateCountBig">4.5</p>
    <i style={{alignSelf: 'center', margin: '4px' , fontSize: '15vh', color: "green"}} class="fa-solid fa-circle-notch"></i>
    <div className="ratingAllBox">
      <div className="ratingSingle">
        <div className="ratingLine">
          <div style={{width: '5vw', height:'1vh',backgroundColor: '#FAE847',borderRadius: '10px'}}></div>
        </div>
      <p>1</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "#FAE847"}} class="fa-solid fa-star"></i>
      </div>
      <div className="ratingSingle">
        <div className="ratingLine">
          <div style={{width: '5vw', height:'1vh',backgroundColor: '#FAE847',borderRadius: '10px'}}></div>
        </div>
      <p>2</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "#FAE847"}} class="fa-solid fa-star"></i>
      </div>
      <div className="ratingSingle">
        <div className="ratingLine">
          <div style={{width: '5vw', height:'1vh',backgroundColor: '#FAE847',borderRadius: '10px'}}></div>
        </div>
      <p>3</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "#FAE847"}} class="fa-solid fa-star"></i>
      </div>
      <div className="ratingSingle">
        <div className="ratingLine">
          <div style={{width: '5vw', height:'1vh',backgroundColor: '#FAE847',borderRadius: '10px'}}></div>
        </div>
      <p>4</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "#FAE847"}} class="fa-solid fa-star"></i>
      </div>
      <div className="ratingSingle">
        <div className="ratingLine">
          <div style={{width: '5vw', height:'1vh',backgroundColor: '#FAE847',borderRadius: '10px'}}></div>
        </div>
      <p>5</p>
      <i style={{alignSelf: 'center', marginLeft: '2px' , fontSize: '12px', color: "#FAE847"}} class="fa-solid fa-star"></i>
      </div>
    </div>
    </div>
    <div className="reviewBoxBig">
      {reviews.map((d)=>(
        <ReviewCard reviewID={d}></ReviewCard>
      ))}
    </div>
   {/* <div className="feedback">
   <div id="ratingHeading" className="ratingReviews">Ratings & Reviews</div>
   <div id="rating" className="ratingReviews"><mark>3.9<i style={{alignSelf: 'center', margin: '2px' , fontSize: '10px', color: "white"}} className="fa-solid fa-star" ></i></mark></div>
   <div id="ratingNumbers">5,076 ratings and 572 reviews</div>
   <button type="button" id="rateProduct">Rate Product</button>
   </div>

   <div className="insideRatingsReviews">
   <div className="customersFelt">
   <div id="customerReviews">
    <p>What our customers felt:</p>
   </div>
   <div className="emojiSection">
   <div id="emoji"><p Style="font-size:17px"> &#128578;</p></div>
   <button id="bttn1" className="bttn1" type="button">Fabric Qaulity</button>
   <button id="bttn2" className="bttn1" type="button">Style</button>
   <button id="bttn3" className="bttn1" type="button">Fabric</button>
   </div>
   <div className="button2">
   <button id="bttn4" className="bttn2" type="button">True to Specs</button>
   <button id="bttn5" className="bttn2" type="button">Stitching Quality</button>
   </div>
   <div className="sedEmoji">
   <div id="emoji"><p Style="font-size:17px"> &#128528;</p></div>
   <button id="bttn6" className="bttn1" type="button">Colour</button>
   <button id="bttn7" className="bttn1" type="button">Finishing</button>
   </div>
   </div>



   <div className="imagesByCustomers">
   <div id="customerImages">
    <p>Images uploaded by customers:</p>
   </div>
   <img className="img1" src={ProductImages} alt="cr7"></img>
   <img className="img1" src={ProductImages} alt="cr7"></img>
   <img className="img1" src={ProductImages} alt="cr7"></img>
   <img className="img1" src={ProductImages} alt="cr7"></img>
   <img className="img1" src={ProductImages} alt="cr7"></img>
   </div>
   </div>



   <div className="userReview">
   <div id="rating1"><mark id="mark1">4.9<i style={{alignSelf: 'center', margin: '2px' , fontSize: '9px', color: "white"}} className="fa-solid fa-star" ></i></mark></div>
   <div id="review1">Very good quality</div>
   </div>
   <div className="reviewImages">
   <img className="rimages" src={ProductImages} alt="product"></img>
   <img className="rimages" src={ProductImages} alt="product"></img>
   </div>

   <div className="nameDate">
   <div id="name">Rohit Gairola</div>
   <div id="date">Jul, 2000</div>
   </div>

   


   <div className="userReview1">
   <div id="rating1"><mark id="mark1">3.9<i style={{alignSelf: 'center', margin: '2px' , fontSize: '9px', color: "white"}} className="fa-solid fa-star" ></i></mark></div>
   <div id="review1">Very good quality</div>
   </div>
   <div className="reviewImages">
   <img className="rimages" src={ProductImages} alt="product"></img>
   <img className="rimages" src={ProductImages} alt="product"></img>
   </div>

   <div className="nameDate">
   <div id="name">Sachin Sajwan</div>
   <div id="date">Jul, 2020</div>
   </div>

   


   <div className="userReview2">
   <div id="rating1"><mark id="mark1">4.1<i style={{alignSelf: 'center', margin: '2px' , fontSize: '9px', color: "white"}} className="fa-solid fa-star" ></i></mark></div>
   <div id="review1">Very good quality</div>
   </div>
   <div className="reviewImages">
   <img className="rimages" src={ProductImages} alt="product"></img>
   <img className="rimages" src={ProductImages} alt="product"></img>
   </div>

   <div className="nameDate">
   <div id="name">Vinicius Jr.</div>
   <div id="date">Jul, 2022</div>
   </div>

   <div className="reviewPlus">
   <div className="allReviews">All 500 reviews</div>
   <div className="plus">+</div>
   </div>


   <div className="questionAnswers">
   <div className="qaHeading">Questions and Answers</div>
   <div className="question1">Q: What is life?</div>
   <div className="answer1">A: life is sed</div>
   </div>
   <div className="nameDate">
   <div id="name">Vinicius Jr.</div>
   </div>

   <div className="questionAnswers2">
   <div className="question1">Q: What is life?</div>
   <div className="answer1">A: life is sed</div>
   </div>
   <div className="nameDate">
   <div id="name">Vinicius Jr.</div>
   </div>


   <div className="questionAnswers2">
   <div className="question1">Q: What is life?</div>
   <div className="answer1">A: life is sed</div>
   </div>
   <div className="nameDate">
   <div id="name">Vinicius Jr.</div>
   </div>


   <div className="reviewPlus">
   <div className="allReviews">All Questions</div>
   <div className="plus">+</div>
   </div>
    */}


   </div>
  );
};

export default RatingReviews;