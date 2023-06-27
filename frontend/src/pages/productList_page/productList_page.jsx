import React ,{useEffect,useState}from "react";
import "./ProductList_page.css"
import CategoryBar from "../../components/categoryBar/categoryBar";
import NavBar from "../../components/navBar/navBar";
import SideBar from "../../components/filterBar/filterBar"
import ProductCardList from "../../components/productCardList/ProductCardList"
import Availability from "../../components/availability/availability";
import Sortbar from "../../components/sortbar/sortbar";
import Items from "../../components/items/items";
import {getproduct_info, searchProductTemp} from "../../store/actions/product_action"
import {useSelector, useDispatch} from "react-redux"
import Card from "../../components/card/card";
import logo from "./logo.jpg";
import { getCustomerInfo } from "../../store/actions/user_action";


const ProductListPage =()=> {
  const dispatch = useDispatch();
  const [items, setItems] = useState([]);
  const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));
  // const [userInfo,setUserInfo] = useState(useSelector((state) => state.userInfo));  
  console.log('local',userInfo);

useEffect(() => {
        const getProducts = async () => {
        const keyword ='Supernova';
        const json = await dispatch(searchProductTemp(keyword));
        console.log("asasa", json);
        setItems(json.msz);
      };
      
      getProducts();
}, []);
    return (
      <>
        <NavBar/>
        <CategoryBar/>  
        <div style={{ border: '5px solid #D9D9D9' }}>
        <div className="product-content">
          <SideBar/>
            <div className="sort-item">
              <Sortbar/>
              {userInfo.wishlist === undefined ? <div></div>:
              <div className="itemsList">
       {items.map((p) => (
        <Card item={p} wishlist={userInfo.wishlist} />
      ))}
    </div>}

            </div>
        </div>
        </div>
        
      
        
      </>
    );
  }


export default ProductListPage;
