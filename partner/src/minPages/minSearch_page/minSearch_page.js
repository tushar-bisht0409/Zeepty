import React from 'react'
import "./minSearch_page.css"
import MINProductCard from '../../minComponents/minProductCard/minProductCard'
import MINNavBar from '../../minComponents/minNavBar/minNavBar'
import { useEffect } from 'react'
import { useState } from 'react'
import Modal from 'react-modal';
import { useParams } from 'react-router-dom'
import { searchListing } from '../../store/action/search_action'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar'
import MINCreateStore from '../../minComponents/minCreateStore/minCreateStore'
import { editSellerInfo, getSellerInfo } from '../../store/action/seller_action'
import { postMultipleProductInMongoAndElastic } from '../../store/action/productaction'


const MinSearchPage = () => {

  const [items, setItems] = useState([]);
  const [sellerInfo, setSellerInfo] = useState(JSON.parse(localStorage.getItem('sellerInfo')));

  const params = useParams();

  const [sortMode, setSortMode] = useState('Relevance');

  const [filterMode, setFilterMode] = useState('Price');

  const [filterTempParams, setFilterTempParams] = useState({});

  const [filterParams, setFilterParams] = useState({ filterArray: [] });

  const [filterOptions, setFilterOptions] = useState(["Under ₹199", "₹200 - ₹399", "₹400 - ₹599", "₹600 - ₹799", "₹800 - ₹999", "₹1000 - ₹1499", "₹1500 & above"])

  const [sModalIsOpen, setSModalIsOpen] = useState(false);

  const [fModalIsOpen, setFModalIsOpen] = useState(false);

  const [cModalIsOpen, setCModalIsOpen] = useState(false);

  const [storeStage, setStoreStage] = useState(3);

  const [loader1, setLoader1] = useState(false);

  const sCustomStyles = {
    content: {
      alignSelf: 'center',
      padding: '0px',
      margin: '0px',
      paddingBottom: '4vh'
    },
  };

  const fCustomStyles = {
    content: {
      alignSelf: 'center',
      padding: '0px',
      margin: '0px',
    },
  };

  // Stage 1 = Saved Nothing, So on clicking Add Product Button Create Modal will appear

  // Stage 2 = Saved Profile Image and Categories, Display Product count and on clicking
  // Add Product Button Edit Product Info and Save it locally and on added 3 products
  // Make Launch Button Visible 

  // Stage 3 = Store Launched, On Add Button Clicked, Directly Add product to Mongo Database

  function identifyStage() {
    const u_data = JSON.parse(localStorage.getItem("sellerInfo"));

    if (u_data.profile_image === undefined || u_data.profile_image === null || u_data.profile_image === "") {
      setStoreStage(1);
    } else if (u_data.store_url === "") {
      setStoreStage(2);
    } else {
      setStoreStage(3);
    }

  }

  function handleFilterMode(fMode) {
    if (fMode === "Price") {
      setFilterOptions(["Under ₹199", "₹200 - ₹399", "₹400 - ₹599", "₹600 - ₹799", "₹800 - ₹999", "₹1000 - ₹1499", "₹1500 & above"]);
    } else if (fMode === "Discount") {
      setFilterOptions(["10% or more", "20% or more", "30% or more", "40% or more", "50% or more", "60% or more", "70% or more", "80% or more", "90% or more"]);
    } else if (fMode === "Rating") {
      setFilterOptions(["2 \u2605 and above", "3 \u2605 and above", "4 \u2605 and above"])
    }
    setFilterMode(fMode);
  }

  function handleFilterOptions(filterBy, fParam) {
    let newTempParams = filterTempParams;
    if (filterParams.filterArray.includes(filterBy) === false) {
      filterParams.filterArray.push(filterBy);
      console.log("A1")
    }
    if (filterTempParams[`${filterBy}`] === fParam) {
      newTempParams = {
        ...newTempParams,
        [`${filterBy}`]: ""
      }
      let i = 0;
      for (i = 0; i < filterParams.filterArray.length; i++) {
        if (filterParams.filterArray[i] === filterBy) {
          break;
        }
      }
      filterParams.filterArray.splice(i, 1);
      console.log("B1")

    } else {
      // filterTempParams[`${filterBy}`] = fParam;
      newTempParams = {
        ...newTempParams,
        [`${filterBy}`]: fParam
      }
      console.log("C1")
      if (filterBy === "Price") {
        if (fParam === "Under ₹199") {
          filterParams['minPrice'] = 0;
          filterParams['maxPrice'] = 199;
        } else if (fParam === "₹200 - ₹399") {
          filterParams['minPrice'] = 200;
          filterParams['maxPrice'] = 399;
        } else if (fParam === "₹400 - ₹599") {
          filterParams['minPrice'] = 400;
          filterParams['maxPrice'] = 599;
        } else if (fParam === "₹600 - ₹799") {
          filterParams['minPrice'] = 600;
          filterParams['maxPrice'] = 799;
        } else if (fParam === "₹800 - ₹999") {
          filterParams['minPrice'] = 800;
          filterParams['maxPrice'] = 999;
        } else if (fParam === "₹1000 - ₹1499") {
          filterParams['minPrice'] = 1000;
          filterParams['maxPrice'] = 1499;
        } else if (fParam === "₹1500 & above") {
          filterParams['minPrice'] = 1500;
          filterParams['maxPrice'] = 100000;
        }
      } else if (filterBy === "Discount") {
        if (fParam === "10% or more") {
          filterParams['discountThreshold'] = 0.1;
        } else if (fParam === "20% or more") {
          filterParams['discountThreshold'] = 0.2;
        } else if (fParam === "30% or more") {
          filterParams['discountThreshold'] = 0.3;
        } else if (fParam === "40% or more") {
          filterParams['discountThreshold'] = 0.4;
        } else if (fParam === "50% or more") {
          filterParams['discountThreshold'] = 0.5;
        } else if (fParam === "60% or more") {
          filterParams['discountThreshold'] = 0.6;
        } else if (fParam === "70% or more") {
          filterParams['discountThreshold'] = 0.7;
        } else if (fParam === "80% or more") {
          filterParams['discountThreshold'] = 0.8;
        } else if (fParam === "90% or more") {
          filterParams['discountThreshold'] = 0.9;
        }
      } else if (filterBy === "Rating") {
        if (fParam === "2 \u2605 and above") {
          filterParams['ratingThreshold'] = 2;
        } else if (fParam === "3 \u2605 and above") {
          filterParams['ratingThreshold'] = 3;
        } else if (fParam === "4 \u2605 and above") {
          filterParams['ratingThreshold'] = 4;
        }
      }
    }

    setFilterParams(filterParams);
    setFilterTempParams(newTempParams);
    console.log(filterParams);

  }

  const [pCount, setPCount] = useState(0);

  useEffect(() => {

    let lpCount = localStorage.getItem("product_count");
    if (lpCount === null || lpCount === undefined) {
      setPCount(0);
    } else {
      setPCount(parseInt(lpCount));
    }

    identifyStage();
    applyFilters(sortMode);
  }, []);

  function handleSortBy(sortBy) {
    setSortMode(sortBy);
    setSModalIsOpen(false);
    applyFilters(sortBy);
  }

  async function applyFilters(sbMode) {
    let obj = {
      sortBy: sbMode,
      keyword: params.keyword,
      filterArray: filterParams.filterArray,
      ratingThreshold: filterParams['ratingThreshold'],
      minPrice: filterParams['minPrice'],
      maxPrice: filterParams['maxPrice'],
      discountThreshold: filterParams['discountThreshold']
    }

    const json = await searchListing(obj);
    console.log('JJS: ',json)
    if (json.success) {
      setItems(json.msz);
    }
  }

  const cCustomStyles = {
    content: {
      alignSelf: 'center',
      padding: '0px',
      margin: '0px'
    },
    overlay: {zIndex: 1000}
  };

  async function handleLaunch() {

    setLoader1(true);
    const json = await getSellerInfo(localStorage.getItem("influencer_id"));
    if(json.success){
      let allListings = JSON.parse(localStorage.getItem("product_selected"));
      let listingidArr = [];
      let pricesArr = [];
      for(let i = 0;i<allListings.length; i++){
        listingidArr.push(allListings[i].listing_id);
        pricesArr.push(
          {
            listing_id: allListings[i].listing_id,
            price: allListings[i].price
          }
        );
      }

        let obj = {
          listing_ids: listingidArr,
          seller_id: localStorage.getItem("influencer_id"),
          prices: pricesArr,
        };

        const json1 = await postMultipleProductInMongoAndElastic(obj);

        if(json1.success) {
          let obj2 = {
            type: 'store_url',
            seller_id: localStorage.getItem("influencer_id"),
            store_url: `www.xyz.com/${json.msz.user_name}`
          }
          const json2 = await editSellerInfo(obj2);
          if(json2.success) {
            let u_info = JSON.parse(localStorage.getItem("sellerInfo"));
            u_info.store_url = `www.xyz.com/${json.msz.user_name}`;
            localStorage.getItem("sellerInfo",JSON.stringify(u_info));
            window.open('/creator/home');
          } else {
            setLoader1(false)
            return window.alert("Something Went Wrong");
          }
        } else {
          setLoader1(false)
          return window.alert("Something Went Wrong");
        }
      }else{
        setLoader1(false)
          return window.alert("Something Went Wrong");
      }
        setLoader1(false)
  }

  return (
    <div style={{ overflow: sModalIsOpen || fModalIsOpen ? "hidden" : "scroll" }} className='minSPBox'>
      <MINNavBar applyFilters={applyFilters} showCount={storeStage <3 ? true : false} pCount={pCount}/>

      {storeStage < 3 ? <div className='minSP-banner'>
            <i class="fa-solid fa-bag-shopping"></i>
            <p className='minSP-banner-text'>Add At Least 3 Products To Launch Your Store</p>
          </div> : null}

      <div className="minSP_categorybar">
        <div className="minSP_items items_left">
          <div onClick={() => { setSModalIsOpen(true) }} className='minSPCBBox'>
            <p className='minSPCBBoxT'>Sort By</p>
            <i style={{ fontSize: '12px' }} class="fa-solid fa-chevron-down"></i>
          </div>
          <div onClick={() => { setFModalIsOpen(true) }} className='minSPCBBox'>
            <p className='minSPCBBoxT'>Filters</p>
            <i style={{ fontSize: '12px', position: 'relative' }} class="fa-solid fa-sliders">{filterParams.filterArray.length === 0 ? <div></div> : <div className={'minSPCBBoxIA'}></div>}</i>
          </div>
          {filterParams.filterArray.length === 0 ? <div></div> : <div onClick={() => {
            filterParams.filterArray = [];
            setFilterParams(filterParams);
            setFilterTempParams({});
            setSortMode("Relevance")
            applyFilters("Relevance");
          }} className='minSPCBBoxC'>
            <p className='minSPCBBoxCT'>Clear Filters</p>
            <i style={{ fontSize: '14px' }} class="fa-solid fa-xmark"></i>
          </div>}
        </div>

      </div>
      {sellerInfo.wishlist === undefined || items === undefined ? <div></div> :
        <div style={{margin: storeStage<3 ? '2vh 2vw' : '15vh 2vw'}} className="minSP_mobile_cart">
          {items.map((p) => (
            <MINProductCard setCModalIsOpen={setCModalIsOpen} storeStage={storeStage} item={p._source} wishlist={sellerInfo.wishlist} />
          ))}

        </div>}

      <Modal
        className="minSPSModal"
        isOpen={sModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => { setSModalIsOpen(false) }}
        style={sCustomStyles}
        overlayClassName="minSPSModalOverLay">
        <>
          <p className='minSPSModalH'>SORT BY</p>
          <div onClick={() => { handleSortBy('Relevance') }} className='minSPSModalHItem'>
            <p className='minSPSModalHItemT'>Relevance</p>
            <div className='minSPSModalHItemCB'>
              {sortMode === "Relevance" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('Popularity') }} className='minSPSModalHItem'>
            <p className='minSPSModalHItemT'>Popularity</p>
            <div className='minSPSModalHItemCB'>
              {sortMode === "Popularity" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('PriceLowToHigh') }} className='minSPSModalHItem'>
            <p className='minSPSModalHItemT'>Price Low To High</p>
            <div className='minSPSModalHItemCB'>
              {sortMode === "PriceLowToHigh" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('PriceHighToLow') }} className='minSPSModalHItem'>
            <p className='minSPSModalHItemT'>Price High To Low</p>
            <div className='minSPSModalHItemCB'>
              {sortMode === "PriceHighToLow" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('NewestFirst') }} className='minSPSModalHItem'>
            <p className='minSPSModalHItemT'>Newest First</p>
            <div className='minSPSModalHItemCB'>
              {sortMode === "NewestFirst" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
        </>
      </Modal>

      <Modal
        className="minSPFModal"
        isOpen={fModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => { setFModalIsOpen(false) }}
        style={fCustomStyles}
        overlayClassName="minSPFModalOverLay">
        <>
          <div className='minSPFModalH'>
            <p className='minSPFModalHT1'>Filters</p>
            <i onClick={() => { setFModalIsOpen(false); }} style={{ fontSize: '25px', color: 'black' }} class="fa-solid fa-xmark"></i>
          </div>
          <div className='minSPFModalB'>
            <div className='minSPFModalBL'>
              <div onClick={() => { handleFilterMode("Price") }} className={filterMode === "Price" ? 'minSPFModalBLIActive' : "minSPFModalBLI"}>Price{filterTempParams[`Price`] === "" || filterTempParams[`Price`] === null || filterTempParams[`Price`] === undefined ? "" : " \u2713"}</div>
              <div onClick={() => { handleFilterMode("Discount") }} className={filterMode === "Discount" ? 'minSPFModalBLIActive' : "minSPFModalBLI"}>Discount{filterTempParams[`Discount`] === "" || filterTempParams[`Discount`] === null || filterTempParams[`Discount`] === undefined ? "" : " \u2713"}</div>
              <div onClick={() => { handleFilterMode("Rating") }} className={filterMode === "Rating" ? 'minSPFModalBLIActive' : "minSPFModalBLI"}>Rating{filterTempParams[`Rating`] === "" || filterTempParams[`Rating`] === null || filterTempParams[`Rating`] === undefined ? "" : " \u2713"}</div>
            </div>
            <div className='minSPFModalBR'>
              {filterOptions.map((itm, index) => (
                <div key={filterTempParams[`${filterMode}`] === itm ? index.toString() : itm} onClick={() => {
                  handleFilterOptions(filterMode, itm);
                }} className='minSPFModalBRItem'>
                  <div className='minSPSModalHItemCB'>
                    {filterTempParams[`${filterMode}`] === itm ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }} class="fa-solid fa-check"></i>
                      : <div></div>}
                  </div>
                  <p className='minSPFModalBRItemT1'>{itm}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='minSPFModalF'>
            <div onClick={() => {
              filterParams.filterArray = [];
              setFilterParams(filterParams);
              setFilterTempParams({});
              setSortMode("Relevance")
              applyFilters("Relevance");
            }} className='minSPFModalFD1'>Clear Filters</div>
            <div onClick={() => {
              setFModalIsOpen(false);
              applyFilters(sortMode);
            }} className='minSPFModalFD2'>Apply Filters</div>
          </div>
        </>
      </Modal>

      <MINBottomNavBar bMode={"Home"} />

      <Modal
        className="minSPCreateModal"
        isOpen={cModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setCModalIsOpen(false)}}
        style={cCustomStyles}>
         <MINCreateStore setModalIsOpen={setCModalIsOpen} />
        </Modal>

        {pCount>=3 && storeStage === 2? loader1? <div className='minSPLoader1'></div> : <div onClick={()=>{
            handleLaunch();
          }} className='minSPLaunch'>Launch Store</div>:null}

    </div>
  )
}

export default MinSearchPage