import React ,{useEffect,useState}from "react";
import './mexoploresearch_subPage.css';
import { useParams } from "react-router-dom";
import MExploreAccountCard from "../../mexploreAccount_card/mexploreAccount_card";
import MExploreStoreCard from "../../mexploreStore_card/mexploreStore_card";
import { searchSeller } from "../../../store/actions/search_action";


const  MExploreSearchSubPage =({setMode})=> {

    const [keyword, setKeyword] = useState();

    const [tabMode, setTabMode] = useState("Influencer");

    const [isSearchPressed, setSearchPressed] = useState(false);

    const params = useParams();

    const [influencers, setInfluencers] = useState(undefined);
    const [stores, setStores] = useState(undefined);

    async function handleSearchSeller (tMode="Influencer") {

      setSearchPressed(true);

      const obj = {
        "filterString": tMode,
        "keyword": keyword
      }
      const json = await searchSeller(obj);
      if(json.success) {
        if(tMode === "Influencer"){
          setInfluencers(json.msz);
        } else {
          setStores(json.msz);
        }
      } else{
        window.alert("Something Went Wrong");
      }
    }


    useEffect(()=>{
      if(params.keyword !== undefined){
        console.log("SEarch")
      }
    },[])
    
    return (
      <div className="messp">
        <div className="messp-topbar">
        <i onClick={()=>{setMode("Home")}} style={{fontSize: '5vw', color: 'white'}} class="fa-solid fa-arrow-left-long"></i>
        <div className="messp-topbar-body">
          <input autoFocus value={keyword} onKeyDown={(val)=>{if(val.key === 'Enter') {handleSearchSeller()}}} onChange={(e)=>{setKeyword(e.target.value)}} className="messp-topbar-body-input" placeholder="Search Here" type="search"/>
          <div onClick={()=>{handleSearchSeller()}} className='messp-topbar-body-icon'>
            <i style={{ fontSize: '15px',color: 'white'}} class="fa-solid fa-search"></i>
          </div>
        </div>
      </div>

      <div className="messp-tabbar">
        <div onClick={()=>{setTabMode("Influencer")}} className={ tabMode === "Influencer" ? "messp-tabbar-itemActive" : "messp-tabbar-itemInactive"}>Influencer</div>
        <div onClick={()=>{setTabMode("Store"); if(stores === undefined) {handleSearchSeller("Store")}}} className={ tabMode === "Store" ? "messp-tabbar-itemActive" : "messp-tabbar-itemInactive"}>Store</div>
      </div>

      {isSearchPressed ? <div className={ tabMode === "Influencer" ? "messp-accounts" : "messp-stores"}>
        {tabMode === "Influencer" ? influencers === undefined ? <div className="messp-loader1"></div> : 
        influencers.map((item)=>(
                <MExploreAccountCard item={item}/>
        )): stores === undefined ? <div className="messp-loader1"></div> : 
        stores.map((item)=>(
          <MExploreStoreCard item={item}/>
          ))}
      </div> : null}

      </div>
    );
  }


export default  MExploreSearchSubPage;
