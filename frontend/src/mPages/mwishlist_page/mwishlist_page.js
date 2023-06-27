import React,{useEffect,useState} from "react";
import "./mwishlist_page.css"
import { getCustomerInfo } from "../../store/actions/user_action";
import MWishlistCard from "../../mComponents/mwishlistCard/mwishlistCard"
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';


const MWishlistPage = ()=> {

    const [wishlist, setWishlist] = useState(undefined)

    async function getWishListProducts () {
        let c_id = localStorage.getItem('customer_id');
        if(c_id === undefined || c_id === null || c_id === ""){
            const jsonLocal = await checkAndHandleLocalUserInfo();
            if(jsonLocal.success){
                setWishlist(jsonLocal.userInfo.wishlist);
            } else{
                window.alert('Something Went Wrong');
            }
        } else {
            let obj = {customer_id: c_id};
            let json = await getCustomerInfo(obj);
            console.log(json)
            if(json.success) {
                setWishlist(json.msz.wishlist);
            } else { 
                
            }
        }
    }
    useEffect(() => {
        getWishListProducts()
      }, []);

      console.log("Wishlist", wishlist)
    return (
        wishlist === undefined ? <div></div> : 
      <div className="mwp">

        <div className="mwp-topbar">
            <i onClick={()=>{window.history.back()}} style={{fontSize: '18px', color: 'white'}} class="fa-solid fa-arrow-left-long"></i>
            <p className="mwp-topbar-head">Wishlist</p>
        </div>

        <div className="mwp-body">
            {wishlist.map((item)=>(
                <MWishlistCard item={item}/>
            ))}
        </div>

      </div>
      );
};


export default MWishlistPage;
