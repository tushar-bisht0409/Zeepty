import React ,{useEffect,useState}from "react";
import CategoryBar from "../../components/categoryBar/categoryBar";
import NavBar from "../../components/navBar/navBar";
import {useSelector, useDispatch} from "react-redux"
import Card from "../../components/card/card";
import { Link } from "react-router-dom";
import { getCustomerInfo } from "../../store/actions/user_action";

const  HomePage =()=> {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const onGetUserInfo = async () => {
    let obj = {
      customer_id: localStorage.getItem("customer_id")
    }
  const json = await getCustomerInfo(obj);
    if(json.success ===true){

    }else{
      //error handling
    }
    console.log(json.msz);
  };

useEffect(() => {
    onGetUserInfo();
}, []);
    return (
      <>
        <NavBar/>
        <CategoryBar/>
        <Link to="/0">
          Go To Product List Page
        </Link>
      
        
      </>
    );
  }


export default  HomePage;
