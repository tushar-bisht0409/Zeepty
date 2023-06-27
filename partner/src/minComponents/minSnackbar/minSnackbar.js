import React ,{useState,useEffect}from "react";
import "./minSnackbar.css";

const MINSnackbar = ({msz,backgroundColor,color,okColor,setShowSnackbar}) => {

  return (
    <div style={{backgroundColor: backgroundColor === undefined ? "#181818" : backgroundColor, color: color === undefined ? "white" : color}} className="snackbar">
        <p className="snackbar-msz">{msz}</p>
        <div onClick={()=>{setShowSnackbar(false)}} style={{color: okColor === undefined ? "white" : okColor}} className="snackbar-ok">Ok</div>
    </div>
  );
};

export default MINSnackbar;
