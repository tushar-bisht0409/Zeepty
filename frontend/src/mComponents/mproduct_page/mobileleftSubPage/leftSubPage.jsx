import "./leftSubPage.css";
import React,{useEffect,useState} from "react";


const LeftSubPage = ({products}) => {

  const [selectedImage, setSelectedImage] = useState(products[0].media_urls[0]);
  
    return (
      products===undefined?<div></div>:
   <div className="mobileleftSubPage">
    
    {selectedImage.slice(-1) === "i" ?    <img className="mobilebigImage" src={selectedImage}  alt="football pic"></img>
        : <video className="mobilebigImage" controls>
        <source src={selectedImage} type="video/mp4" />
        <source src={selectedImage} type="video/webm" />
        <source src={selectedImage} type="video/ogg" />
        Your browser does not support the video tag.
      </video>}
   
   <div className="mobileparentOfImages">
    {products[0].media_urls.map((iurl)=>(
        iurl.slice(-1) === "i" ? <img onClick={()=>{setSelectedImage(iurl)}} className={selectedImage===iurl? "mobileimgSmallActive":"mobileimgSmall"} src={iurl}  alt="pic"></img>
        : <video onClick={()=>{setSelectedImage(iurl)}} className={selectedImage===iurl? "mobileimgSmallActive":"mobileimgSmall"}>
        <source src={iurl} type="video/mp4" />
        <source src={iurl} type="video/webm" />
        <source src={iurl} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    ))}
   </div>
   </div>
  );
};

export default LeftSubPage;