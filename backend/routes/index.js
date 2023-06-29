const express = require("express");
const router = express.Router();
const authenticate_action = require("../methods/authenticate_action");
const customerinfo_action = require("../methods/customerInfo_action");
const product_action = require("../methods/product_action");
const order_action = require("../methods/order_action");
const review_action = require("../methods/review_action");
const listing_action = require("../methods/listing_action");
const seller_action=require("../methods/sellerInfo_action");
const manufacturer_action=require("../methods/manufacturerInfo_action");
const listingrequest_action = require("../methods/listingRequest_action")
const productrequest_action = require("../methods/productRequest_action")

const es_post_action = require("../methods/Elastic_Cloud/ES_post_action")

const es_product_action = require("../methods/Elastic_Cloud/ES_product_action");

const es_listing_action = require("../methods/Elastic_Cloud/ES_listing_action");

const es_seller_action = require("../methods/Elastic_Cloud/ES_seller_action");

const looks_action = require("../methods/looks_action");
const looks_draft_action = require("../methods/looks_draft_action");

const delhivery_action = require("../methods/delhivery_action");

const cashfree_action = require("../methods/cashfree_action")

const phonepe_action = require("../methods/payment/phonepe_action")

const vertical_action = require("../methods/vertical_action");


// POST / Adding New User(SIGN UP)
router.post('/adduser', authenticate_action.addNew);

// GET / SEND OTP
router.get('/sendotp', authenticate_action.sendOTP);

// GET / Check If Is User Valid
router.get('/isvaliduser', authenticate_action.isValidUser);

// GET / Verify OTP
router.get('/verifyotp', authenticate_action.verifyOTP);

// POST / Verify Authentication (Login And Signup) OTP
router.post('/authenticationotp', authenticate_action.authenticationOTP);

// POST / Authenticating User(LOG IN)
router.get('/verifypassword', authenticate_action.verifyPassword); 

// POST / Change Password
router.post('/changepassword', authenticate_action.changePassword); 

// POST / Saving New User Information 
router.post('/savecustomerinfo', customerinfo_action.postCustomerInfo);

//GET / Get User Info
router.get('/getcustomerinfo', customerinfo_action.getCustomerInfo);

//POST / Edit User Info
router.post('/editcustomerinfo', customerinfo_action.editCustomerInfo);

//POST / Add Cart And Wishlist Data
router.post('/addcartandwishlistdata', customerinfo_action.addCartAndWishlistData);

//POST / Saving New Product Information
router.post('/saveproduct', product_action.postProduct);

//POST / Posting new seller information
router.post('/savesellerinfo',seller_action.postSellerInfo);

//POST / Posting Seller Store Information
router.post('/savestoreinfo',seller_action.saveStoreInfo);

//POST / Handle Follow And Following
router.post('/handlefollowers', seller_action.handleFollowers);

//GET / Check If A Seller User Name Is Unique Or Not
router.get('/checkissellerusernameunique', seller_action.checkIsStoreNameUnique);


//GET / Get Seller Store Information
router.get('/getstoreinformation',seller_action.getStoreInformation);

//GET / Get Insight Page Data
router.get('/insightspagedata',seller_action.getInsightsPageData)

// //POST Launch Store (Saving Products and Store URL)
// router.post('/launchstore',seller_action.launchStore);

//POST / Edit Seller Info
router.post('/editsellerinfo', seller_action.editSellerInfo);

//GET / Get Manufacturer Info
router.get('/getmanufacturerinfo', manufacturer_action.getManufacturerInfo);

//POST / Save Manufacturer Info
router.post('/savemanufacturerinfo', manufacturer_action.postManufacturerInfo);

//POST / Edit Manufacturer Info
router.post('/editmanufacturerinfo', manufacturer_action.editManufacturerInfo);

// GET / Validate And Get Manufacturer Info
router.get('/validateandgetmanufacturer', manufacturer_action.validateAndGetManufacturer);

//GET / Check If A Manufacturer Store Name Is Unique Or Not
router.get('/checkisstorenameunique', manufacturer_action.checkIsStoreNameUnique);

//GET / Get Manufacturer Summary For Home Screen
router.get('/getmanufacturersummary', manufacturer_action.getManufacturerSummary);

//GET / Get Seller Info
router.get('/getsellerinfo', seller_action.getSellerInfo);

//POST / Saving Many Product Information
router.post('/savemanyproduct', product_action.postManyProducts);

//POST / Saving Product Information In Mongo DB and Elastic Search CLoud
router.post('/postproductmdes', product_action.postProductInMongoAndElastic);

//POST / Saving Many Product Information In Mongo DB and Elastic Search CLoud
router.post('/postmultipleproductmdes', product_action.postMultipleProductInMongoAndElastic);

//GET / Get Product By Duration
router.get('/getproductbyduration', order_action.getOrderByDuration);

//GET / Get Product Info
router.get('/getproduct', product_action.getProduct);

//POST / Edit Product Info
router.post('/editproduct', product_action.editProduct);

//POST / Edit Product Info In Mongo DB and Elastic Search
router.post('/editproductes', product_action.editProductES);

//POST / Saving New Listing Information
router.post('/savelisting', listing_action.postListing);

//POST / Saving New Listing Information in Mongo DB and Elastic Search
router.post('/savelistinges', listing_action.postListingInMongoAndElastic);


//GET / Get Listing Info
router.get('/getlisting', listing_action.getListing);

//POST / Edit Listing Info
router.post('/editlisting', listing_action.editListing);

//POST / Edit Listing Info In MongoDB and Elastic Search
router.post('/editlistinges', listing_action.editListingES);

//POST / Listing Count Management
router.post('/listingcount', listing_action.countManagement);

//GET / Get Listing and Listing Request SKUIDs and Style Codes
router.get('/getskuandstyleids', listing_action.getSkuAndStyleIds);

//POST / Accept Listing Request Admin Panel
router.post('/acceptlistingrequest', listing_action.acceptListingRequest);

//POST / Change Listing Active Status
router.post('/changeactivestatus', listing_action.changeActiveStatus);

//GET / Get A Listing Color And Size Information
router.get('/getlistingcolorandsizeinformation', listing_action.getListingColorAndSizeInformation);

//POST / Saving New Listing Request Information
router.post('/savelistingrequest', listingrequest_action.postListingRequest);

//GET / Get Listing Request Info
router.get('/getlistingrequest', listingrequest_action.getListingRequest);

//POST / Edit Listing Request Info
router.post('/editlistingrequest', listingrequest_action.editListingRequest);

//POST / Edit Multiple Listing Request Info
router.post('/editmultiplelistingrequest', listingrequest_action.editMultipleListingRequest);

//POST / Delete Listing Request Info
router.post('/deletelistingrequest', listingrequest_action.deleteListingRquest);

//POST / Delete Multiple Listing Request Info
router.post('/deletemultiplelistingrequest', listingrequest_action.deleteMultipleListingRquest);

//POST / Saving New Product Request Information
router.post('/saveproductrequest', productrequest_action.postProductRequest);

//GET / Get Product Request Info
router.get('/getproductrequest', productrequest_action.getProductRequest);

//POST / Edit Product Request Info
router.post('/editproductrequest', productrequest_action.editProductRequest);

// POST / Saving New Order Information
router.post('/saveorder', order_action.postOrder);

//GET / Get Order Info
router.get('/getorder', order_action.getOrder);

//POST / Change Orders Status
router.post('/changeorderstatus', order_action.changeOrderStatus);

//POST / Claim Orders Lost
router.post('/claimorderlost', order_action.claimOrderLost);

// POST / Saving Review Information
router.post('/savereview', review_action.postReview);

//GET / Get Rating and Review Info
router.get('/getreview', review_action.getReview);

//GET / Get Product Rating Info
router.get('/getproductratinginfo', review_action.getProductRatingInfo);

//POST / Count Management of product
router.post('/countmanagement', product_action.countManagement);

// POST / Saving New Looks Information
router.post('/savelooks', looks_action.postLooks);

//GET / Get Looks Info
router.get('/getlooks', looks_action.getLooks);

// POST / Saving New Looks Draft Information
router.post('/savelooksdraft', looks_draft_action.postLooksDraft);

//GET / Get Looks Draft Info
router.get('/getlooksdraft', looks_draft_action.getLooksDraft);

// POST / Edit Looks Draft Information
router.post('/editlooksdraft', looks_draft_action.editLooksDraft);

// POST / Edit Looks Draft Information
router.post('/deletelooksdraft', looks_draft_action.deleteLooksDraft);







//                          #### ELASTIC SEARCH ####                         //


//POST / Elastic Search Create Index
router.post('/escreateindex', es_post_action.createIndex);

//POST / Elastic Search Save Multiple Documents In An Index
router.post('/essaveinbulkelastic', es_post_action.saveInBulkElastic);

//GET / Elastic Search Get All Documents Of An Index
router.get('/esgetalldocs', es_post_action.getAllDocuments);

//POST / Elastic Search Search Product and Sort Them
router.post('/essearchproduct', es_product_action.searchProduct);

//POST / Elastic Search Edit Product
router.post('/eseditproduct', es_product_action.editProductElastic);

//POST / Elastic Search Search Seller Product and Sort Them
router.post('/essearchsellerproduct', es_product_action.searchSellerProduct);

//POST / Elastic Search Get All Seller Product and Sort Them
router.post('/esgetallsellerproduct', es_product_action.getAllSellerProduct);

//POST / Elastic Search Search Listing and Sort Them
router.post('/essearchlisting', es_listing_action.searchListing);

//POST / Elastic Search Edit Listing
router.post('/eseditlisting', es_listing_action.editListingElastic);

//POST / Elastic Search Search By Vertical Name
router.post('/searchlistingbyvertical', es_listing_action.searchListingByVertical);

//POST / Elastic Search Edit Seller
router.post('/eseditseller', es_seller_action.editSellerElastic);

//POST / Elastic Search Search Seller Store And Influencer
router.post('/essearchseller', es_seller_action.searchStoreAndInfluencer);






//                          #### DELHIVERY ####                         //

//GET / Delhivery Check Pincode Serviceability
router.get('/checkpincodeserviceabilitydelhivery', delhivery_action.checkPincodeServiceability);

//GET / Delhivery Fetch Waybill
router.get('/fetchwaybilldelhivery', delhivery_action.fetchWaybill);

//GET / Delhivery Calculate Shipping Cost
router.get('/calculateshippingcostdelhivery', delhivery_action.calculateShippingCost);

//POST / Delhivery Create Warehouse
router.post('/createwarehousedelhivery', delhivery_action.createWarehouse);

//POST / Delhivery Create Pickup Request
router.post('/createpickuprequestdelhivery', delhivery_action.createPickupRequest);

//Post / Delhivery Generate Shipping Label
router.post('/generateshippinglabeldelhivery', delhivery_action.generateShippingLabel);

//GET / Delhivery Track Shipment
router.get('/trackshipmentdelhivery', delhivery_action.trackShipment);

// POST / Delhivery Create Shipment
router.post('/createshipmentdelhivery', delhivery_action.createShipment)

// POST / Delhivery Edit Shipment
router.post('/editshipmentdelhivery', delhivery_action.editShipment)

// POST / Delhivery Cancel Track Shipment
router.post('/cancelshipmentdelhivery', delhivery_action.cancelShipment)

// POST / Delhivery NDR Action
router.post('/ndractiondelhivery', delhivery_action.NDRAction)

//GET / Delhivery NDR Status
router.get('/ndrstatusdelhivery', delhivery_action.NDRStatus);

//POST / Save Vertical Information
router.post('/savevertical', vertical_action.postVertical);

//POST / Save Multiple Vertical Information
router.post('/savemultiplevertical', vertical_action.postMultipleVerticals);

//GET / Get Vertical Information
router.get('/getvertical', vertical_action.getVertical);


//                         #### CASHFREE ####                      //

//POST / Cashfree Create Payment Order
router.post('/creatpaymentordercashfree', cashfree_action.creatPaymentOrder)

//                         #### Phonepe ####                      //

//POST / Phonepe Create Payment Order
router.post('/creatpaymentphonepe', phonepe_action.makePayment);

//GET / Phone Check Payment Status
router.get('/checkpaymentstatus', phonepe_action.checkPaymentStatus);


module.exports = router;