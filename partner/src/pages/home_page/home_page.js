import React ,{useEffect,useState}from "react";
import LeftNav from "../../components/leftnav/lefnav";
import RightContent from "../../components/home_page/rightContent";
import {useSelector, useDispatch} from "react-redux"
import { getlisting } from "../../store/action/productaction";
import { GET_ORDER_INFO } from "../../store/action/type";
import Drawer from "../../components/drawer/drawer";
import FullScreenLoader from "../../components/fullScreen_loader/fullScreen_loader";
import './home_page.css'
import { getManufacturerSummary, validateAndGetManufacturer } from "../../store/action/manufacturer_action";
import { getOrders } from "../../store/action/order_action";
import errorOccurred from '../../assets/supplier/images/errorOccurred.png'
import HomeRightBox from "../../components/home_page/homeRightBox/homeRightBox";
const  HomePage =()=> {
  const dispatch = useDispatch();
  const [orderinfo,setorderinfo] = useState([]);
  const [productinfo,setproductinfo] = useState([]);
  const [listingRequestInfo, setListingRequestInfo] = useState([])
  const [manufacturerInfo, setManufacturerInfo] = useState({})

  const [loading,setLoading] = useState(false);

  const [stage, setStage] = useState(0);

  const [loader1, setLoader1] = useState(false);

  const [pendingorder, setPendingorder] = useState(0);
  const [outofstock, setOutofstock] = useState(0);
  const [lowstock, setLowstock] = useState(0);

  const [draftRequest, setDraftRequest] = useState(0);
  const [pendingRequest, setPendingRequest] = useState(0);
  const [rejectedRequest, setRejectedRequest] = useState(0);
  const [approvedRequest, setApprovedRequest] = useState(0);

  const[isError, setIsError] = useState(false);



  // Stage = 0 ; // Zero Products Live And Zero Listing Request (Add First Listing)
  // Stage = 1 ; // Zero Products Live But Non-Zero Listing Request (Add More Listings)
  // Stage = 2 ; // Product Live But Zero Orders (Add More Listings)
  // Stage = 3 ; // Got First Order But First Order Is Not Shipped (Process First Order)
  // Stage = 4 ; // First Order Is Shipped And Getting Multiple Orders (TO DO Box and Statistics)

  async function handleValidateAndGetManufacturer() {
    setIsError(false)
    const m_id = localStorage.getItem('manufacturer_id');
    if(m_id === "" || m_id === null || m_id === undefined){
        window.open('/supplier/auth','_self')
    } else {
      const gstin_verified = localStorage.getItem('gstin_verified');
      if(gstin_verified === 'true') {
        handlegetManufacturerSummary();
      } else {
        window.open('/supplier/fillinfo','_self');
      }
    }
}

const handlegetManufacturerSummary = async()=>{
  let m_id = localStorage.getItem("manufacturer_id")

  const obj = {
    type: 'manufacturer_id',
    manufacturer_id: m_id
  }

  const json = await getManufacturerSummary(obj);
  
  console.log("sds: ",json)

  console.log(json)
 
  if(json.success == true){
      setManufacturerInfo(json.msz.manufacturer_info)
      setorderinfo(json.msz.orders);
      setproductinfo(json.msz.listings);
      setListingRequestInfo(json.msz.listing_request);
      setStage(4)
      setLoading(true);
      let index;
      let po = 0;
      let lo = 0;
      let oo = 0;
      let ro = 0;

      for (index = 0; index < json.msz.orders.length; index++)
    {
        if(json.msz.orders[index].order_status === "Pending"){
          po++;
        }
      }
      for(index = 0 ;index<json.msz.listings.length;index++)
      {
        if(json.msz.listings[index].product_size.inventory == 0){
          oo++;
        }
        if(json.msz.listings[index].product_size.inventory <= 50){
          lo++;
        }
    }

    setPendingorder(po);
        setLowstock(lo);
        setOutofstock(oo);

        po = 0;
        lo = 0;
        oo = 0;
        ro = 0;

        for(let i = 0; i<json.msz.listing_request.length; i++){
          if(json.msz.listing_request[i].listing_status === "Pending" || json.msz.listing_request[i].listing_status === "OnHold"){
            po++;
          } else if(json.msz.listing_request[i].listing_status === "Draft") {
            lo++
          } else if(json.msz.listing_request[i].listing_status === "Rejected"){
            ro++;
          }else if(json.msz.listing_request[i].listing_status === "Approved"){
            oo++;
          }
        }

        setDraftRequest(lo);
        setPendingRequest(po);
        setApprovedRequest(oo);
        setRejectedRequest(ro);
        
    } else {
      setIsError(true);
  }
}

  useEffect(()=>{
    handleValidateAndGetManufacturer();
  },[]);
  
    return (
       
        <div className='hp-content-wrap'>
          <Drawer mode={"home"}></Drawer>

        {isError ? <div className="hp-error">
        <img onClick={()=>{window.location.reload()}} className="hp-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="hp-error-refresh">Refresh</div>
      </div> : loader1 ? <div className="hpLoader1"></div> : loading ?(<HomeRightBox stage={stage} pendingorder={pendingorder} outofstock={outofstock} lowstock={lowstock} orderinfo={orderinfo} productinfo={productinfo} listingRequestInfo={listingRequestInfo} manufacturerInfo={manufacturerInfo} draftRequest={draftRequest} pendingRequest={pendingRequest} approvedRequest={approvedRequest} rejectedRequest={rejectedRequest} />) :(<div>Loading</div>)
        }

      </div>
    );
  }


export default  HomePage;
