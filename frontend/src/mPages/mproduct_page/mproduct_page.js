import React,{useEffect,useState} from "react";
import MNavBar from "../../mComponents/mnavBar/mnavBar";
import LayoutSplit from "../../mComponents/mproduct_page/mobilelayoutSplit/layoutSplit";
import "./mproduct_page.css"
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';



const MProductPage = ()=> {

  const [isLocalHandled, setIsLocalHandled] = useState(false);

  async function handleisLocalHandled() {
    let json = await checkAndHandleLocalUserInfo();
    if(json.success){
      setIsLocalHandled(true);
    }
  }
    useEffect(() => {
      let c_id = localStorage.getItem("customer_id");
      if(c_id === undefined || c_id === null){
        handleisLocalHandled()
      } else{
        setIsLocalHandled(true)
      }
      console.log("UIN: ",JSON.parse(localStorage.getItem("userInfo")))
      }, []);
    return ( isLocalHandled ?
    <>
      <div className="mobileproductDes">
        <MNavBar isCartVisible={true}/>
        <LayoutSplit></LayoutSplit>
      </div>
    </> : <></>
  );
};


export default MProductPage;
