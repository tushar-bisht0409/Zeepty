import { useEffect, useState } from "react";
import { useDispatch, useSelector,connect } from "react-redux";
import './rTitle_bar.css'
import { UPDATE_RETURN_MODE } from "../../../store/action/type";

const  RTitleBar= ({data}) => {
    const [modevalue,setMode] = useState('scheduled')

    const dispatch = useDispatch();

    useEffect(()=>{
    },[]);
    
    const handleMode = (mMode)=>{
        setMode(mMode);
        dispatch({
            type:UPDATE_RETURN_MODE,
            payload: mMode
        })
      }
   
    return (

    <div className="rTitleBar">
            <div onClick={()=>{handleMode("scheduled")}} className={modevalue==="scheduled" ? "rTitleBar-active":"rTitleBar-inactive" }>
                <p className={modevalue==="scheduled" ? "rTitleBar-active-T1":"rTitleBar-inactive-T1" }>Scheduled</p>
                <div className={data['scheduled'].length===0 ? "rTitleBar-inactive-count":"rTitleBar-active-count"}>( {data['scheduled'].length} )</div>
            </div>
            <div onClick={()=>{handleMode("transit")}} className={modevalue==="transit" ? "rTitleBar-active":"rTitleBar-inactive" }>
                <p className={modevalue==="transit" ? "rTitleBar-active-T1":"rTitleBar-inactive-T1" }>In Transit</p>
                <div className={data['transit'].length===0 ? "rTitleBar-inactive-count":"rTitleBar-active-count"}>( {data['transit'].length} )</div>
            </div>
            
            <div onClick={()=>{handleMode("delivered")}} className={modevalue==="delivered" ? "rTitleBar-active":"rTitleBar-inactive" }>
                <p className={modevalue==="delivered" ? "rTitleBar-active-T1":"rTitleBar-inactive-T1" }>Delivered</p>
                <div className={data['delivered'].length===0 ? "rTitleBar-inactive-count":"rTitleBar-active-count"}>( {data['delivered'].length} )</div>
            </div>

            <div onClick={()=>{handleMode("lost")}} className={modevalue==="lost" ? "rTitleBar-active":"rTitleBar-inactive" }>
                <p className={modevalue==="lost" ? "rTitleBar-active-T1":"rTitleBar-inactive-T1" }>Lost</p>
                <div className={data['lost'].length===0 ? "rTitleBar-inactive-count":"rTitleBar-active-count"}>( {data['lost'].length} )</div>
            </div>
          </div>
          
    )

}

function mapStateToProps(state){
    const data = state.returnReducer;
    console.log(data)
    return {data:data}
}

export default connect(mapStateToProps)(RTitleBar)