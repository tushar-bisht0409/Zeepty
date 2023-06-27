import "./App.css";
import ProductListPage from "./pages/productList_page/productList_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ProductDescriptionPage from "./pages/productDescription_page/productDescription_page";
import CartPage from "./pages/cart_page/cart_page";
import PlaceOrder_page from "./pages/placeOrder_page/placeOrder_page";
import HomePage from "./pages/home_page.js/home_page";
import PlaceOrderMobile_page from "./pages/placeOrderMobile_page/placeOrderMobile_page"
import ProductListMobile_page from "./pages/productListMobile_page/productListMobile_page"
import Signup from "./pages/Signup_page/Signup";
import Login from "./pages/login/login";
import UserInfo from './pages/user_info/userInfo'
import YourOrder from "./pages/yourOrder1/yourOrder1"
import YourOrder2 from "./pages/yourOrder2/yourOrder2";
import YourOrder3 from "./pages/yourOrder3/yourOrder3";
import YourOrder4 from "./pages/yourOrder4/yourOrder4"; 
import YourOrder5 from "./pages/yourOrder5/yourOrder5";
import Orders from "./pages/orders/orders";
import MHomePage from "./mPages/mhome_page/mhome_page";
import MCartPage from "./mPages/mcart_page/mcart_page";
import MUserInfoPage from "./mPages/mcustomerInfo_page/mcustomerInfo_page";
import MOrderPage from "./mPages/morder_page/morder_page";
import MOrderInfoPage from "./mPages/morderInfo_page/morderInfo_page";
import MAuthPage from "./mPages/mauth_page/mauth_page";
import MSearchPage from "./mPages/msearch_page/msearch_page";
import MProductPage from "./mPages/mproduct_page/mproduct_page";
import MCustomerInfoPage from "./mPages/mcustomerInfo_page/mcustomerInfo_page";
import MWishlistPage from "./mPages/mwishlist_page/mwishlist_page";
import MExplorePage from "./mPages/mexplore_page/mexplore_page";
import MStorePage from "./mPages/mstore_page/mstore_page";
import MLooksPage from "./mPages/mlooks_page/mlooks_page";
import MPaymentVerificationPage from "./mPages/mpaymentVerification_page/mpaymentVerification_page";

class App extends React.Component {

  componentDidMount() {
    //  this.props.dispatch(fetchAuthStatus());
  } 

  render() {
    return (
      <>
        <Router>
          <Routes>

            {/* Mobile Routes Start */}

            <Route exact path="/" element={<MHomePage />}>
            </Route>
            <Route exact path="/paymentverification" element={<MPaymentVerificationPage />}>
            </Route>
            <Route exact path="/explore" element={<MExplorePage />}>
            </Route>
            <Route exact path="/explore/:keyword" element={<MExplorePage />}>
            </Route>
            <Route exact path="/auth" element={<MAuthPage />}>
            </Route>
            <Route exact path="/search/:keyword" element={<MSearchPage />}>
            </Route>
            <Route exact path="/product/:product_id/:style_code" element={<MProductPage />}>
            </Route>
            <Route exact path="/cart" element={<MCartPage />}>
            </Route>
            <Route exact path="/user" element={<MCustomerInfoPage />}>
            </Route>
            <Route exact path="/wishlist" element={<MWishlistPage />}>
            </Route>
            <Route exact path="/order" element={<MOrderPage />}>
            </Route>
            <Route exact path="/order/:order_id" element={<MOrderInfoPage />}>
            </Route>
            <Route exact path="/store/:seller_id" element={<MStorePage />}>
            </Route>
            <Route exact path="/looks" element={<MLooksPage />}>
            </Route>
            <Route exact path="/looks/:looks_id" element={<MLooksPage />}>
            </Route>


            {/* Mobile Routes End */}
            <Route exact path="/" element={<HomePage />}>
            </Route>
            <Route exact path="/Signup" element={<Signup />}> </Route>
            <Route exact path="/Login" element={<Login />}> </Route>
            <Route exact path="/0" element={<ProductListPage />}>
            </Route>
            <Route exact path="/1/:productID/:SKUID" element={<ProductDescriptionPage />}>
            </Route>
            <Route exact path="/placeorder" element={<PlaceOrder_page />}>
          </Route>
            <Route exact path="/cart" element={<CartPage />}>
            </Route>
            <Route path='/userInfo' element={<UserInfo />} />
            <Route path='/all' element={<YourOrder />} />
            <Route path='/ordered' element={<YourOrder2 />} />
            <Route path='/delivered' element={<YourOrder3 />} />
            <Route path='/cancelled' element={<YourOrder4 />} />
            <Route path='/returned' element={<YourOrder5 />} />
            <Route path='/orders' element={<Orders />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
