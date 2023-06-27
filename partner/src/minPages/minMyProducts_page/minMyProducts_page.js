import React, { useEffect, useRef, useState } from 'react'
import './minMyProducts_page.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom'
import { getAllSellerProduct, searchSellerProduct } from '../../store/action/search_action'
import MINStoreProductCard from '../../minComponents/minStoreProductCard/minStoreProductCard';
import MINProductCard from '../../minComponents/minProductCard/minProductCard';
import errorOccurred from '../../assets/influencer/images/errorOccurred.png'
import nothingHere from '../../assets/influencer/images/nothingHere.png'
import { getproduct_info } from '../../store/action/productaction';
import Fuse from 'fuse.js';

const MINMyProductsPage = () => {

  const [items, setItems] = useState([]);
  const [products, setProducts] = useState({live: [],inactive: [], blocked: []});
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [loader1, setLoader1] = useState(true);
  const [isError, setIsError] = useState(false);

  const params = useParams();

  const [sortMode, setSortMode] = useState('Relevance');

  const [filterParams, setFilterParams] = useState({ filterArray: [] });

  const [cModalIsOpen, setCModalIsOpen] = useState(false);

  const [storeStage, setStoreStage] = useState(3);

  const [mode, setMode] = useState("Live");

    function handleMode(newMode) {
        setMode(newMode);
    }

  useEffect(() => {
    applyFilters(sortMode);
  }, []);

  async function applyFilters(sbMode) {

    let obj = {
      seller_id: localStorage.getItem('influencer_id'),
      type: 'seller_id'
  }

  const json = await getproduct_info(obj);


    // let obj = {
    //     seller_id: localStorage.getItem('influencer_id'),
    //     sortBy: sbMode,
    //     keyword: params.keyword,
    //     filterArray: filterParams.filterArray,
    //     ratingThreshold: filterParams['ratingThreshold'],
    //     minPrice: filterParams['minPrice'],
    //     maxPrice: filterParams['maxPrice'],
    //     discountThreshold: filterParams['discountThreshold']
    // }

    // const json = await getAllSellerProduct(obj);
    if (json.success) {
      groupProduct(json.msz)
    } else {
      setIsError(true);
    }
    setLoader1(false);
  }

  function groupProduct(list) {
    for(let i = 0; i<list.length; i++){
      if(list[i].blacklisted === false && list[i].active === true){
        products.live.push(list[i]);
      } else if(list[i].blacklisted === false && list[i].active === false){
        products.inactive.push(list[i]);
      } else if(list[i].blacklisted === true){
        products.blocked.push(list[i]);
      } 
    }
    setProducts(products);
  }

  async function handleLocalSearch(kWord) {
    setKeyword(kWord);
    const fuseOptions = {
      keys: ['brand', 'product_name', 'product_details.description'],
      includeScore: true,
      threshold: 0.2, // Adjust the threshold value for desired fuzziness
    };
    const fuse = new Fuse(products[`${mode.toLowerCase()}`], fuseOptions);
  
    const results = fuse.search(keyword);
  
    const matchedItems = results.map(result => result.item);
    setSearchResults(matchedItems);
    console.log("seasa: ",results)
  }

  return (
    <div className='minMP'>
      <div className='minMP-topbar'>
        <div onClick={()=>{window.history.back()}} className='minMP-topbar-L'>
            <i onClick={()=>{window.history.back()}} style={{fontSize: '14px',color: '#554BDA', cursor: 'pointer'}} class="fa-solid fa-arrow-left"></i>
            <p className='minMP-topbar-L-T1'>My Products</p>
        </div>

        <div onClick={()=>{window.open('/creator/collections','_self')}} className='minMP-topbar-R'>
            <p className='minMP-topbar-R-T1'>Collections</p>
        </div>
        </div>

        <div className='minMP-tabbar'>
            <div onClick={()=>{handleMode("Live")}} className={mode === "Live" ? 'minMP-tabbar-active' : 'minMP-tabbar-inactive'}>Live</div>
            <div onClick={()=>{handleMode("Inactive")}} className={mode === "Inactive" ? 'minMP-tabbar-active' : 'minMP-tabbar-inactive'}>Inactive</div>
            <div onClick={()=>{handleMode("Blocked")}} className={mode === "Blocked" ? 'minMP-tabbar-active' : 'minMP-tabbar-inactive'}>Blocked</div>
        </div>

        {isError ? <div className="minMP-error">
        <img onClick={()=>{window.location.reload()}} className="minMP-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="minMP-error-refresh">Refresh</div>
      </div> : loader1 ? <div className='minMP-loader1'></div> : products[`${mode.toLowerCase()}`].length === 0 ? <div className="minMP-nothing">
         <img onClick={()=>{window.location.reload()}} className="minMP-nothing-img" src={nothingHere}></img>
       </div> : <>
        <div className='minMP-searchbar'>
          <input value={keyword} onChange={(e)=>{handleLocalSearch(e.target.value)}} placeholder='Search Product ...' className='minMP-searchbar-input' type='text'/>
          <div className='minMP-searchbar-icon'>
            <i style={{fontSize: '12px',color: 'white'}} class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

         {keyword.trim() === "" ? null : searchResults.length === 0 ? 
         <p className='minMP-noResults'>No search results for '{keyword}'</p> : 
         <div className="minMP-productBox">{searchResults.map((p) => (
            <MINStoreProductCard item={p}/>
          ))}</div>
          }

          {searchResults.length === 0 || keyword.trim() === "" ? <div className="minMP-productBox">
          {products[`${mode.toLowerCase()}`].map((p) => (
            <MINStoreProductCard item={p}/>
          ))}
        </div>: null}
        </>}

    </div>
  )
}

export default MINMyProductsPage