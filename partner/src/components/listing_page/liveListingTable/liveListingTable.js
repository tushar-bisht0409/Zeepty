import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import Myproduct from "../../myproduct/myproduct.js";
import { ListingTable } from "../listingTable/listingTable.js";
import './liveListingTable.css'
import { useParams } from "react-router-dom";
import LiveListingTableItem from "./liveListingTableItem/liveListingTableItem.js";

 function LiveListingTable({data}) {

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
              <div className="lltable">
                <div className="lltable-all">
                    
                  {data.map((item)=>(
                    <div onClick={()=>{setSelected(item)}} className={item.listing_id === selected.listing_id && item.style_code === selected.style_code ? "lltable-all-item-active" : "lltable-all-item-inactive"}>
                    <img src={item.media_urls[0]} className="lltable-all-item-img"/>
                      <div className="lltable-all-item-right">
                      <span className="lltable-all-item-right-brand">{item.brand} <span className="lltable-all-item-right-name">{item.product_name}</span></span>
                      <span className="lltable-all-item-right-key">Category: <span className="lltable-all-item-right-value">{item.sub_category2}</span></span>
                      <span className="lltable-all-item-right-key">Style Code: <span className="lltable-all-item-right-value">{item.style_code}</span></span>
                      <span className="lltable-all-item-right-key">Listing ID: <span className="lltable-all-item-right-value">{item.listing_id}</span></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lltable-body">

                {/* <div className="lltable-body-bottombar">
                      <p className="lltable-body-bottombar-text">Edit Listing</p>
                      <div className="lltable-body-bottombar-cancel">Cancel</div>
                      <div className="lltable-body-bottombar-apply">Edit</div>
                    </div> */}

                  <div className="lltable-body-titlebar">
                    <p className="lltable-body-titlebar-info">Product</p>
                    <p className="lltable-body-titlebar-size">Size</p>
                    <p className="lltable-body-titlebar-stock">Stock</p>
                    <p className="lltable-body-titlebar-actions">Actions</p>
                  </div>

                  <div className="lltable-body-all">
                    {selected.skus.map((item2)=>(
                    <LiveListingTableItem item={item2}/>
                    ))}

                  </div>

                </div>

              </div>

       </>
    )
}


export default LiveListingTable;