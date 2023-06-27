import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HomePage from "./pages/home_page/home_page";
import OrderPage from "./pages/order_page/order_page";
import ReturnPage from "./pages/return_page/return_page";
import ListingPage from "./pages/listing_page/listing_page";
import ProductImage from "./components/listing_page/listingPage2/ProductImage"
import ListingPage3main from "./components/listing_page/draftComponent/listingPage3main";

import BankAccount from "./pages/payment_page/payment_page";
import AuthPage from "./pages/auth_page/auth_page";
import GstInfoPage from "./pages/gstInfo_page/gstInfo_page";
import VerticalPage from "./pages/vertical_page/vertical_page";
import NewListingPage from "./pages/newListing_page/newListing_page";
import SplashPage from "./pages/splash_page/splash_page";

import MINAuthPage from "./minPages/minAuth_page/minAuth_page";
import MINHomePage from "./minPages/minHome_page/minHome_page";
import MINSaveInfoPage from "./minPages/minSaveInfo_page/minSaveInfo_page";
import MINLooksPage from "./minPages/minLooks_page/minLooks_page";
import MINStorePage from "./minPages/minStore_page/minStore_page";
import MINInsightsPage from "./minPages/minInsights_page/minInsights_page";
import MinSearchPage from "./minPages/minSearch_page/minSearch_page";
import MINWishlistPage from "./minPages/minWishlist_page/minWishlist_page";
import NewVariantPage from "./pages/newVariant_page/newVariant_page";
import ListingReportPage from "./pages/listingReport_page/listingReport_page";
import PaymentPage from "./pages/payment_page/payment_page";
import MINOrdersPage from "./minPages/minOrders_page/minOrders_page";
import MINProfilePage from "./minPages/minProfile_page/minProfile_page";
import MINMyProductsPage from "./minPages/minMyProducts_page/minMyProducts_page";
import UploadListingPage from "./pages/uploadListing_page/uploadListing_page";
import SettingPage from "./pages/setting_page/setting_page";
import MINQCPage from "./minPages/minQC_page/minQC_page";
import MINCollectionsPage from "./minPages/minCollections_page/minCollections_page";
import MINNotificationsPage from "./minPages/minNotifications_page/minNotifications_page";


function App() {

  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1067;

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize);
    
    
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

    return (
      <>
        <Router>
          {
             <Routes>

              <Route exact path="/*" element={<SplashPage />}>
              </Route>

              <Route exact path="/supplier" element={<SplashPage />}>
              </Route>

              <Route exact path="/supplier/auth" element={<AuthPage />}>
              </Route>

              <Route exact path="/supplier/fillinfo" element={<GstInfoPage />}>
              </Route>

              <Route exact path="/supplier/home" element={<HomePage />}>
              </Route>

              <Route exact path="/supplier/listing" element={<ListingPage />}>
              </Route>

              <Route exact path="/supplier/listing/:mode" element={<ListingPage />}>
              </Route>

              <Route exact path="/supplier/listing/listing/:sub_mode" element={<ListingPage />}>
              </Route>

              <Route exact path="/supplier/vertical" element={<VerticalPage />}>
              </Route>

              <Route exact path="/supplier/editlisting/:listing_id" element={<NewListingPage />}>
              </Route>

              {/* <Route exact path="/supplier/newvariant/:listing_id" element={<NewVariantPage />}>
              </Route> */}

              <Route exact path="/supplier/listingreport/:listing_id" element={<ListingReportPage />}>
              </Route>

              <Route exact path="/supplier/order" element={<OrderPage />}>
              </Route>

              <Route exact path="/supplier/return" element={<ReturnPage />}>
              </Route>

              <Route exact path="/supplier/payment" element={<PaymentPage />}>
              </Route>

              <Route exact path="/supplier/uploadlisting" element={<UploadListingPage />}>
              </Route>

              <Route exact path="/supplier/uploadlisting/:mode" element={<UploadListingPage />}>
              </Route>

              <Route exact path="/supplier/settings" element={<SettingPage />}>
              </Route>

              {/* MOBILE INFLUENCER ROUTES STARTS*/}

              <Route exact path="/creator/home" element={<MINHomePage />}>
              </Route>

              <Route exact path="/creator/auth" element={<MINAuthPage />}>
              </Route>

              <Route exact path="/creator/notifications" element={<MINNotificationsPage />}>
              </Route>

              <Route exact path="/minsaveinfo" element={<MINSaveInfoPage/>}>
              </Route>

              <Route exact path="/minsearch/:keyword" element={<MinSearchPage />}>
              </Route>

              <Route exact path="/minlooks" element={<MINLooksPage/>}>
              </Route>

              <Route exact path="/minstore" element={<MINStorePage/>}>
              </Route>

              <Route exact path="/minwish" element={<MINWishlistPage/>}>
              </Route>

              <Route exact path="/minins" element={<MINInsightsPage/>}>
              </Route>

              <Route exact path="/creator/profile" element={<MINProfilePage />}>
              </Route>

              <Route exact path="/creator/products" element={<MINMyProductsPage />}>
              </Route>

              <Route exact path="/creator/orders" element={<MINOrdersPage />}>
              </Route>

              <Route exact path="/creator/qc" element={<MINQCPage />}>
              </Route>

              <Route exact path="/creator/collections" element={<MINCollectionsPage />}>
              </Route>


              {/* MOBILE INFLUENCER ROUTES ENDS*/}
              
              
             </Routes>

          }
        
        </Router>
      </>
    );
  
}

export default App;
