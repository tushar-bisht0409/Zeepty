import React ,{useEffect,useState}from "react";
import Drawer from "../../components/drawer/drawer";
import "./return_page.css"
import RTitleBar from "../../components/return_page/rTitle_bar/rTitle_bar";
import { getMyReturns } from "../../store/action/order_action";
import { useDispatch } from "react-redux";
import RInfoBox from "../../components/return_page/rInfo_box/rInfo_box";
import errorOccurred from '../../assets/supplier/images/errorOccurred.png';
import nothingHere from '../../assets/supplier/images/nothingHere.png';
import { validateManufacturerLocalData } from "../../store/action/auth_action";


const ReturnPage =()=> {

  const dispatch = useDispatch();

  const[isError, setIsError] = useState(false);
  const[isNoData, setIsNoData] = useState(false);
  const [loader1, setLoader1] = useState(true);

  const handleGetMyReturns = async()=>{
    const obj = {
        type: 'manufacturer_id',
        manufacturer_id: localStorage.getItem("manufacturer_id")
    }
    const json = await dispatch(getMyReturns(obj,"scheduled"));

      if(json.success === true){
      } else if(json.success === false && json.err === null || json.err === undefined) {
          setIsNoData(true);
      } else {
          setIsError(true);
      }
    setLoader1(false);
}

useEffect(()=>{
    handleGetMyReturns();
    validateManufacturerLocalData();
},[]);

    return (
      <>
              <Drawer mode={"return"}/>

              

      <div className="return"> 
        <div className="return-top">
          <p className="return-top-head">Return Orders</p>
          <div className="return-top-body">
            <p className="return-top-body-head">Return Rate</p>
            <p className="return-top-body-rate">0.0%</p>
            <p className="return-top-body-summary">0 orders returned out of 0 delivered</p>
          </div>
        </div>

        {loader1 ? <div className="return-loader1"></div>: null}

        {isError ? <div className="return-error">
        <img onClick={()=>{window.location.reload()}} className="return-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="return-error-refresh">Refresh</div>
      </div> : isNoData ? <div className="return-nothing">
        <img className="return-nothing-img" src={nothingHere}></img>
      </div> : null}

        {isError || isNoData ? null : <RTitleBar/>}
        {isError || isNoData ? null : <RInfoBox/>}

        {/* <RightContent /> */}
        
      </div>
      </>
    );
  }


export default ReturnPage;
