import React ,{useState,useEffect}from "react";
import { deleteFileS3 } from "../../store/action/upload_file_action";
import "./sImageReport.css";
const SImageReport = ({index,data,mediaUrls,setMediaUrls,selectedMedia,setSelectedMedia,index1,index2,setIndex1,setIndex2,lInfoArray,selectedNow,setLInfoArray,toDelete,setToDelete,checkErrorArray}) => {

  async function deleteFile() {
    toDelete.push(data.replace("https://zeepty-products.s3.ap-south-1.amazonaws.com/", ""));
    setToDelete([...toDelete]);
    mediaUrls.splice(index,1);
    if(data===selectedMedia){
      setSelectedMedia(undefined);
    }
    setMediaUrls([...mediaUrls]);
    lInfoArray[selectedNow]['media_urls'] = mediaUrls;
    setLInfoArray([...lInfoArray])
}

function markSelected() {
  setSelectedMedia(data);
}

function swapPosition() {
  if(index2 != undefined || index2 != null){
    if(index1 === 0 || index2 === 0){
      if(mediaUrls[index1].slice(-1) === "v" || mediaUrls[index2].slice(-1) === "v" ){
        window.alert("Video cannot be at first position")
      } else {
        let temp = mediaUrls[index1];
        mediaUrls[index1] = mediaUrls[index2];
        mediaUrls[index2] = temp; 
        setMediaUrls([...mediaUrls]);
      }
    } else{
      let temp = mediaUrls[index1];
      mediaUrls[index1] = mediaUrls[index2];
      mediaUrls[index2] = temp; 
      setMediaUrls([...mediaUrls]);
    }
  }
}

// useEffect(()=>{

// },[selectedMedia])

  return (
    <div draggable={true} onDragStart={()=>{setIndex1(index)}} onDragEnd={()=>{swapPosition();}} onDragOver={()=>{setIndex2(index)}} onClick={markSelected} className="sir" >
      <i onClick={deleteFile} id="sIconR" class="fa-solid fa-circle-xmark"></i>
      {data.slice(-1) === "i" ? <img className={checkErrorArray.includes(data) ? "sir-Error" : selectedMedia===data?"sir-Active":"sir-InActive"} src={data} alt=""></img>
      : <video  className={selectedMedia===data?"sir-Active":"sir-InActive"} >
      <source src={data} type="video/mp4"/>
      <source src={data} type="video/webm"/>
      <source src={data} type="video/ogg"/>
    Your browser does not support the video tag.
    </video> }
    <div className="sir-checkout">
    {checkErrorArray.includes(data) ? <i style={{color: "red", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-exclamation"></i> : <i style={{color: "transparent", fontSize: '20px',marginRight: '4px'}} class="fa-solid fa-circle-check"></i>}
    </div>
    </div>
 
    // </Link>
  );
};

export default SImageReport;
