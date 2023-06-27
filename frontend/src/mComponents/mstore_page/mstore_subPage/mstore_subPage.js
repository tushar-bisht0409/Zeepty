import React, { useEffect, useState } from 'react'
import './mstore_subPage.css'
import Modal from 'react-modal';
import { useParams } from 'react-router-dom'
import { getAllSellerProduct } from '../../../store/actions/search_action';
import MCard from '../../mCard/mcard';

const MINStoreSubPage = () => {

    const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState(undefined);

  const params = useParams();

  const [sortMode, setSortMode] = useState('Relevance');

  const [filterMode, setFilterMode] = useState('Price');

  const [filterTempParams, setFilterTempParams] = useState({});

  const [filterParams, setFilterParams] = useState({ filterArray: [] });

  const [filterOptions, setFilterOptions] = useState(["Under ₹199", "₹200 - ₹399", "₹400 - ₹599", "₹600 - ₹799", "₹800 - ₹999", "₹1000 - ₹1499", "₹1500 & above"])

  const [sModalIsOpen, setSModalIsOpen] = useState(false);

  const [fModalIsOpen, setFModalIsOpen] = useState(false);

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

  useEffect(() => {
    let u_data = JSON.parse(localStorage.getItem('userInfo'));
    if(u_data === undefined || u_data === null) {
      setWishlist([]);
    } else {
      setWishlist(u_data.wishlist);
    }
    applyFilters(sortMode);
  }, []);

  function handleSortBy(sortBy) {
    setSortMode(sortBy);
    setSModalIsOpen(false);
    applyFilters(sortBy);
  }

  async function applyFilters(sbMode) {
    let obj = {
        seller_id: localStorage.getItem('influencer_id'),
        sortBy: sbMode,
        keyword: params.keyword,
        filterArray: filterParams.filterArray,
        ratingThreshold: filterParams['ratingThreshold'],
        minPrice: filterParams['minPrice'],
        maxPrice: filterParams['maxPrice'],
        discountThreshold: filterParams['discountThreshold']
    }

    const json = await getAllSellerProduct(obj);
    console.log("SSL : : ",json)
    if (json.success) {
      setItems(json.msz);
    }
  }

  return (
      <div className='mSSSBox'>
        <div className="mSSS_categorybar">
        <div className="mSSS_items items_left">
          <div onClick={() => { setSModalIsOpen(true) }} className='mSSSCBBox'>
            <p className='mSSSCBBoxT'>Sort By</p>
            <i style={{ fontSize: '12px' }} class="fa-solid fa-chevron-down"></i>
          </div>
          <div onClick={() => { setFModalIsOpen(true) }} className='mSSSCBBox'>
            <p className='mSSSCBBoxT'>Filters</p>
            <i style={{ fontSize: '12px', position: 'relative' }} class="fa-solid fa-sliders">{filterParams.filterArray.length === 0 ? <div></div> : <div className={'minSSSCBBoxIA'}></div>}</i>
          </div>
          {filterParams.filterArray.length === 0 ? <div></div> : <div onClick={() => {
            filterParams.filterArray = [];
            setFilterParams(filterParams);
            setFilterTempParams({});
            setSortMode("Relevance")
            applyFilters("Relevance");
          }} className='mSSSCBBoxC'>
            <p className='mSSSCBBoxCT'>Clear Filters</p>
            <i style={{ fontSize: '14px' }} class="fa-solid fa-xmark"></i>
          </div>}
        </div>

      </div>
        <div className="mSSS_mobile_cart">
          { wishlist === undefined || items == undefined ? null : items.map((p) => (
            <MCard item={p} wishlist={wishlist} />
          ))}

        </div>

      <Modal
        className="mSSSSModal"
        isOpen={sModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => { setSModalIsOpen(false) }}
        style={sCustomStyles}
        overlayclassName="mSSSSModalOverLay">
        <>
          <p className='mSSSSModalH'>SORT BY</p>
          <div onClick={() => { handleSortBy('Relevance') }} className='mSSSSModalHItem'>
            <p className='mSSSSModalHItemT'>Relevance</p>
            <div className='mSSSSModalHItemCB'>
              {sortMode === "Relevance" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('Popularity') }} className='mSSSSModalHItem'>
            <p className='mSSSSModalHItemT'>Popularity</p>
            <div className='mSSSSModalHItemCB'>
              {sortMode === "Popularity" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('PriceLowToHigh') }} className='mSSSSModalHItem'>
            <p className='mSSSSModalHItemT'>Price Low To High</p>
            <div className='mSSSSModalHItemCB'>
              {sortMode === "PriceLowToHigh" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('PriceHighToLow') }} className='mSSSSModalHItem'>
            <p className='mSSSSModalHItemT'>Price High To Low</p>
            <div className='mSSSSModalHItemCB'>
              {sortMode === "PriceHighToLow" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
          <div onClick={() => { handleSortBy('NewestFirst') }} className='mSSSSModalHItem'>
            <p className='mSSSSModalHItemT'>Newest First</p>
            <div className='mSSSSModalHItemCB'>
              {sortMode === "NewestFirst" ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }}
                class="fa-solid fa-check"></i>
                : <div></div>}
            </div>
          </div>
        </>
      </Modal>

      <Modal
        className="mSSSFModal"
        isOpen={fModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => { setFModalIsOpen(false) }}
        style={fCustomStyles}
        overlayclassName="mSSSFModalOverLay">
        <>
          <div className='mSSSFModalH'>
            <p className='mSSSFModalHT1'>Filters</p>
            <i onClick={() => { setFModalIsOpen(false); }} style={{ fontSize: '25px', color: 'black' }} class="fa-solid fa-xmark"></i>
          </div>
          <div className='mSSSFModalB'>
            <div className='mSSSFModalBL'>
              <div onClick={() => { handleFilterMode("Price") }} className={filterMode === "Price" ? 'minSSSFModalBLIActive' : "minSSSFModalBLI"}>Price{filterTempParams[`Price`] === "" || filterTempParams[`Price`] === null || filterTempParams[`Price`] === undefined ? "" : " \u2713"}</div>
              <div onClick={() => { handleFilterMode("Discount") }} className={filterMode === "Discount" ? 'minSSSFModalBLIActive' : "minSSSFModalBLI"}>Discount{filterTempParams[`Discount`] === "" || filterTempParams[`Discount`] === null || filterTempParams[`Discount`] === undefined ? "" : " \u2713"}</div>
              <div onClick={() => { handleFilterMode("Rating") }} className={filterMode === "Rating" ? 'minSSSFModalBLIActive' : "minSSSFModalBLI"}>Rating{filterTempParams[`Rating`] === "" || filterTempParams[`Rating`] === null || filterTempParams[`Rating`] === undefined ? "" : " \u2713"}</div>
            </div>
            <div className='mSSSFModalBR'>
              {filterOptions.map((itm, index) => (
                <div key={filterTempParams[`${filterMode}`] === itm ? index.toString() : itm} onClick={() => {
                  handleFilterOptions(filterMode, itm);
                }} className='mSSSFModalBRItem'>
                  <div className='mSSSSModalHItemCB'>
                    {filterTempParams[`${filterMode}`] === itm ? <i style={{ fontSize: '10px', color: 'white', height: '12px', width: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#554BDA' }} class="fa-solid fa-check"></i>
                      : <div></div>}
                  </div>
                  <p className='mSSSFModalBRItemT1'>{itm}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='mSSSFModalF'>
            <div onClick={() => {
              filterParams.filterArray = [];
              setFilterParams(filterParams);
              setFilterTempParams({});
              setSortMode("Relevance")
              applyFilters("Relevance");
            }} className='mSSSFModalFD1'>Clear Filters</div>
            <div onClick={() => {
              setFModalIsOpen(false);
              applyFilters(sortMode);
            }} className='mSSSFModalFD2'>Apply Filters</div>
          </div>
        </>
      </Modal>
      </div>
  )
}

export default MINStoreSubPage