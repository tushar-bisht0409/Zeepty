import React ,{useEffect,useState}from "react";
import { useParams } from "react-router-dom";
import Drawer from "../../components/drawer/drawer";
// import RightContent from "../../components/listing_page/RIghtContent";
// import AddProductInfoBox from "../../components/listing_page/addProductInfoBox/addProductInfoBox";
// import AddProductPage from "../../components/listing_page/addProductPage/addProductPage";
import ListingPageMain from "../../components/listing_page/listingPage1/listingPageMain/listingPageMain";
import { validateManufacturerLocalData } from "../../store/action/auth_action";


const ListingPage =()=> {

  const params = useParams();

  const [mode,setMode] = useState(undefined)

  useEffect(()=>{
    validateManufacturerLocalData();

    if(params["mode"]=== "listing") {
      setMode("listing");
    } else if(params["mode"]=== "request") {
      setMode("request");
    } else if(params["mode"]=== "draft") {
      setMode("draft");
    } else {
      setMode("listing");
    }
  },[])

    return (
      mode===undefined ? <div></div> :
      <div id="content-wrap">
        <Drawer mode={"listing"} />
        {/* <SelectVertical></SelectVertical> */}
        <ListingPageMain mMode={mode} subMode={params.sub_mode}/>
      </div>
    );
  }


export default ListingPage;
