import React,{useEffect,useState} from "react";
import "./placeOrder_page.css"
import CategoryBar from "../../components/categoryBar/categoryBar";
import NavBar from "../../components/navBar/navBar";
import Productcard from "../../components/productcard/productcard"
import Availability from "../../components/availability/availability";
import PriceDetails from "../../components/priceDetails/priceDetails"
import GiftCard from '../../components/giftCard/giftCard';
import { getCustomerInfo } from "../../store/actions/user_action";
import {useSelector, useDispatch, connect} from "react-redux"
import { API_URI } from "../../store/actions/auth_action";
import CartProgress from "../../components/cartProgress/cartProgress";
import SelectedAddress from "../../components/selectedAddress/selectedAddress";
import AddressSection from "../../components/addressSection/addressSection";

const PlaceOrder_page = ({itemsSelected}) => {
  const dispatch = useDispatch();
  const [items,setItems] = useState(undefined);
  const [userInfo,setUserInfo] = useState(JSON.parse(localStorage.getItem('userInfo')));

  const [selectedAddress, setSelectedAddress] = useState(undefined);

  const  [currentPoint, setCurrentPoint] = useState('Cart');

  const getdata = async()=>{
    let obj = {
      customer_id: localStorage.getItem("customer_id")
    }
  const json = await getCustomerInfo(obj);
    if(json.success){
    setUserInfo(json.msz);
    setItems(json.msz.cart);
    getSelectedAddress(json.msz.addresses, json.msz.selectedAddressID);
    } else{
      setItems([]);
    }
  }

  useEffect(()=>{
    if(userInfo === null || userInfo === undefined){
      setItems([]);
    } else{
      getdata();
  }
  },[]);
  
  async function getSelectedAddress(addressList, selectedID){
    for(let i =0 ;i<addressList.length;i++){
      if(addressList[i].addressID === selectedID){
        setSelectedAddress(addressList[i]);
        break;
      }
  }
}


async function changeSelectedAddress (){
        try {
          const response = await fetch(`${API_URI}/edituserinfo`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'selectedAddressID',
              userID: userInfo.userID,
              addressID: selectedAddress.addressID
            }),
          });
          const json = await response.json();
          if (json.success) {
            setCurrentPoint('Cart');
          }
        } catch (error) {
          console.log(error);
        }
      };
      function changeMode(newMode){
        setCurrentPoint(newMode);
      }

  return (
    items===undefined?<div></div>:
    currentPoint === "Address"? 
    <>
    <NavBar/>
    <CartProgress mode1={"active"} mode2={"inActive"} mode3={"inActive"} on1={changeMode} on2={changeMode} on3={()=>{}}></CartProgress>
    <div className="addressSection">
    <AddressSection setUserInfo={setUserInfo} selectedAddress={selectedAddress} setSelectedAddress={setSelectedAddress} addresses={userInfo.addresses}></AddressSection>
    </div>
    <div onClick={()=>{
      if(selectedAddress === undefined){
      }else{
        changeSelectedAddress();
      }
    }} className='poBottomButton'>Place Order</div>
    </>
    :<>
         <NavBar/>
     <CartProgress mode1={"completed"} mode2={"active"} mode3={"inActive"} on1={changeMode} on2={changeMode} on3={()=>{}}></CartProgress>
        <div className="product-Container">
          <div className="container-Left">
            <div className="availability-Component">
            <SelectedAddress setCurrentPoint={setCurrentPoint} item={selectedAddress}></SelectedAddress>
            </div>
            <div className="items-Selected">
              <div className="number">{itemsSelected.length}{`/`}{items.length} Items Selected</div>
              <div className="b-t-n"></div>
            </div>
            {userInfo.cart === undefined ? <div></div>:
            <div className="productcard-Component">
             {items.map((p)=>(
              //isselected
                <Productcard item={p} selected={true} quantity={1} cart={userInfo.cart}/>
             ))} 
            </div>}
          </div>
          <div className="container-Right">
            <GiftCard/>
            <PriceDetails/>
          </div>
        </div>
      
        </>
  )
}


function mapStateToProps(state) {
  const cartProduct = state.cartProduct;
  let data = cartProduct.cartProduct;
  return {itemsSelected: data };
}
export default connect(mapStateToProps)(PlaceOrder_page);
