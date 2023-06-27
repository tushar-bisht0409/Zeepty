import React ,{useEffect,useState}from "react";
import CategoryBar from "../../components/categoryBar/categoryBar";
import NavBar from "../../components/navBar/navBar";
import {useSelector, useDispatch} from "react-redux"
import Card from "../../components/card/card";
import { Link } from "react-router-dom";
import { getCustomerInfo } from "../../store/actions/user_action";
import './mhome_page.css'
import MBottomNavBar from "../../mComponents/mBottomNavBar/mBottomNavBar";
import { checkAndHandleLocalUserInfo } from "../../store/actions/notLoggedInUser_action";

const logo = "https://www.chrequipment.co.uk/wp-content/uploads/2017/06/chr-equipment-cadbury-logo-news.jpg"

const  MHomePage =()=> {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onGetUserInfo = async () => {
    let obj = {
      customer_id: localStorage.getItem("customer_id")
    }
  const json = await getCustomerInfo(obj);
    if(json.success ===true){
    }else{
      window.alert("Something Went Wrong")
    }
  };

  function handleSearch() {
    if(keyword != undefined) {
    if(keyword.trim() !== "")
    window.open(`/search/${keyword}`,'_self');
  }
}

useEffect(() => {
  let c_id = localStorage.getItem("customer_id");
  if(c_id === undefined || c_id === null){
    setIsLoggedIn(false);
    checkAndHandleLocalUserInfo();
  } else {
    setIsLoggedIn(true);
    onGetUserInfo();
  }
}, []);


    return (
      <div className="mhp">
      <div className="mhp-topbar">
        <div className="mhp-topbar-top">
        <img className="mhp-topbar-top-logo" src={logo}/>
        <div className="mhp-topbar-top-right">
         <i onClick={()=>{window.open('wishlist','_self')}} style={{color: 'white',fontSize: '18px',marginRight: "8vw"}} class="fa-solid fa-heart"></i>
         {isLoggedIn? <i style={{color: 'white',fontSize: '18px'}} class="fa-solid fa-bell"></i> : null}
          {isLoggedIn ? null : <div onClick={()=>{window.open(`/auth`,'_self');}} className="mhp-topbar-top-right-login">Login</div>}
        </div>
        </div>

        <div className="mhp-topbar-bottom">
          <input value={keyword} onKeyDown={(val)=>{if(val.key === 'Enter') {handleSearch()}}} onChange={(e)=>{setKeyword(e.target.value)}} className="mhp-topbar-bottom-input" placeholder="Search Here" type="search"/>
          <div onClick={()=>{handleSearch()}} className='mhp-topbar-bottom-icon'>
            <i style={{ fontSize: '15px',color: 'white'}} class="fa-solid fa-search"></i>
          </div>
        </div>
        
      </div>
        <Link to="/m1">
          Go To Product List Page
        </Link>
      
      <MBottomNavBar bMode={"Home"}/>
        
      </div>
    );
  }


export default  MHomePage;
