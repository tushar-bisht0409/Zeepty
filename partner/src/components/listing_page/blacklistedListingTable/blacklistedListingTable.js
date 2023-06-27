import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import Myproduct from "../../myproduct/myproduct.js";
import { ListingTable } from "../listingTable/listingTable.js";
import './blacklistedListingTable.css'
import { useParams } from "react-router-dom";
import BlacklistedListingTableItem from "./blacklistedListingTableItem/blacklistedListingTableItem.js";

 function BlacklistedListingTable({data}) {

    const [loading,setLoading]=useState(false);
    const [selected,setSelected] = useState(undefined);
    const [isEdited, setIsEdited] = useState(false);
    
    useEffect(()=>{
        if(data !== undefined) {
            if(data.length > 0){
                setSelected(data[0]);
            } else{
              setSelected(undefined)
            }
        }
    },[data]);

    return(
      selected === undefined ? null :
       <>
              <div className="blacktable">
                <div className="blacktable-all">
                    
                  {data.map((item)=>(
                    <div onClick={()=>{setSelected(item)}} className={item.listing_id === selected.listing_id && item.style_code === selected.style_code ? "blacktable-all-item-active" : "blacktable-all-item-inactive"}>
                    <img src={item.media_urls[0]} className="blacktable-all-item-img"/>
                      <div className="blacktable-all-item-right">
                      <span className="blacktable-all-item-right-brand">{item.brand} <span className="blacktable-all-item-right-name">{item.product_name}</span></span>
                      <span className="blacktable-all-item-right-key">Category: <span className="blacktable-all-item-right-value">{item.sub_category2}</span></span>
                      <span className="blacktable-all-item-right-key">Style Code: <span className="blacktable-all-item-right-value">{item.style_code}</span></span>
                      <span className="blacktable-all-item-right-key">Listing ID: <span className="blacktable-all-item-right-value">{item.listing_id}</span></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="blacktable-body">

                {/* <div className="blacktable-body-bottombar">
                      <p className="blacktable-body-bottombar-text">Edit Listing</p>
                      <div className="blacktable-body-bottombar-cancel">Cancel</div>
                      <div className="blacktable-body-bottombar-apply">Edit</div>
                    </div> */}

                  <div className="blacktable-body-titlebar">
                    <p className="blacktable-body-titlebar-info">Product</p>
                    <p className="blacktable-body-titlebar-size">Size</p>
                    <p className="blacktable-body-titlebar-stock">Stock</p>
                    <div className="blacktable-body-all-blacklisted">
                      <div className="blacktable-body-all-blacklisted-head">
                        <div className="blacktable-body-all-blacklisted-head-icon">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                      <p className="blacktable-body-all-blacklisted-head-text">Blacklisted</p>
                      </div>
                      <p className="blacktable-body-all-blacklisted-body">Contact support for assistance</p>
                    </div>
                    {/* <p className="blacktable-body-titlebar-actions">Actions</p> */}
                  </div>

                  <div className="blacktable-body-all">
                    
                    {selected.skus.map((item2)=>(
                    <BlacklistedListingTableItem item={item2}/>
                    ))}

                  </div>

                </div>

              </div>

       </>
    )
}


export default BlacklistedListingTable;