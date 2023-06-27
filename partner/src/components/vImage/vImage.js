import React ,{useState,useEffect}from "react";
import "./vImage.css";
const VImage = ({index,data,files,setFiles,index1, setIndex1,index2, setIndex2}) => {

  function deleteFile() {
    files.splice(index,1);
    URL.revokeObjectURL(data);
    setFiles([...files]);
}


function swapPosition() {
  console.log(index1,":::",index2)
  if(index2 != undefined || index2 != null){
  let temp = files[index1];
  files[index1] = files[index2];
  files[index2] = temp; 
  setFiles([...files]);
  }
}
  return (
    <div draggable={true} onDragStart={()=>{setIndex1(index)}} onDragEnd={()=>{swapPosition();}} onDragOver={()=>{setIndex2(index)}} className="vBox" >
      <i onClick={deleteFile} id="vIcon" class="fa-solid fa-circle-xmark"></i>
      {data.type.split('/')[0] === "image" ? <img className={"vImageInActive"} src={URL.createObjectURL(data)} alt=""></img>
      : <video  className={"vImageInActive"} >
      <source src={URL.createObjectURL(data)} type="video/mp4"/>
      <source src={URL.createObjectURL(data)} type="video/webm"/>
      <source src={URL.createObjectURL(data)} type="video/ogg"/>
    Your browser does not support the video tag.
    </video> }
    </div>
 
 );
};

export default VImage;
