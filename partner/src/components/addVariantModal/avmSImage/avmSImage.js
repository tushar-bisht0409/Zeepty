import React ,{useState,useEffect}from "react";
import "./avmSImage.css";
const AVMSImage = ({index,data,mediaUrls,setMediaUrls,selectedMedia,setSelectedMedia,index1,index2,setIndex1,setIndex2,lInfoArray,selectedNow,setLInfoArray,toDelete,setToDelete,canDelete}) => {

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

  return (
    <div draggable={true} onDragStart={()=>{setIndex1(index)}} onDragEnd={()=>{swapPosition();}} onDragOver={()=>{setIndex2(index)}} onClick={markSelected} className="avmSBox" >
      {canDelete ? <i onClick={deleteFile} id="avmSIcon" class="fa-solid fa-circle-xmark"></i> : null}
      {data.slice(-1) === "i" ? <img className={selectedMedia===data?"avmSImageActive":"avmSImageInActive"} src={data} alt=""></img>
      : <video  className={selectedMedia===data?"avmSImageActive":"avmSImageInActive"} >
      <source src={data} type="video/mp4"/>
      <source src={data} type="video/webm"/>
      <source src={data} type="video/ogg"/>
    Your browser does not support the video tag.
    </video> }
    </div>
 
  );
};

export default AVMSImage;
