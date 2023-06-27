import React,{useEffect,useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import NavBar from "../../components/navBar/navBar";
import LayoutSplit from "../../components/productDescPage/layoutSplit/layoutSplit.js";
import CategoryBar from "../../components/categoryBar/categoryBar";
import { SAVE_PRODUCT_PROPS} from "../../store/actions/type"
import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";
import { API_URI } from "../../store/actions/auth_action";



const ProductDescriptionPage = ()=> {
// const params = useParams();

// const [posts, setData] = useState([])
// console.log("id",params.productID)
    
// useEffect(()=> {
   
// const getdata = async()=>{
  
//   try {
//     const response = await fetch(`${API_URI}/getProduct?type=${encodeURIComponent(`productID`)}&productID=${encodeURIComponent(`${params.productID}`)}`, {
//         method: 'GET'});

//     const res = await response.json();
//     console.log("res",res.msz)
//     // console.log(res.msz[0].productID)
//       setData(res.data)
   
// }
  
//    catch (error) {
//     console.log(error);
//     // return {"msz": "Something went wrong", "success": false, "manufacturerID": ""}
//   }
// };
// getdata();

// }, [params.productID])


    useEffect(() => {
      // onGetUserInfo();
      }, []);
    return (
    <>
      {/* <Header /> */}
      <NavBar></NavBar>
      <CategoryBar></CategoryBar>
      <LayoutSplit></LayoutSplit>
      
    </>
    // <div>{props.location.query}</div>
  );
};


export default ProductDescriptionPage;
