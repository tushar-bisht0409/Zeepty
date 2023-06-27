import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import Myproduct from "../../myproduct/myproduct.js";
import { ListingTable } from "../listingTable/listingTable.js";
import './inactiveListingTable.css'
import { useParams } from "react-router-dom";
import InactiveListingTableItem from "./inactiveListingTableItem/inactiveListingTableItem.js";

 function InactiveListingTable({data}) {

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
              <div className="inatable">
                <div className="inatable-all">
                    
                  {data.map((item)=>(
                    <div onClick={()=>{setSelected(item)}} className={item.listing_id === selected.listing_id && item.style_code === selected.style_code ? "inatable-all-item-active" : "inatable-all-item-inactive"}>
                    <img src={item.media_urls[0]} className="inatable-all-item-img"/>
                      <div className="inatable-all-item-right">
                      <span className="inatable-all-item-right-brand">{item.brand} <span className="inatable-all-item-right-name">{item.product_name}</span></span>
                      <span className="inatable-all-item-right-key">Category: <span className="inatable-all-item-right-value">{item.sub_category2}</span></span>
                      <span className="inatable-all-item-right-key">Style Code: <span className="inatable-all-item-right-value">{item.style_code}</span></span>
                      <span className="inatable-all-item-right-key">Listing ID: <span className="inatable-all-item-right-value">{item.listing_id}</span></span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="inatable-body">

                {/* <div className="inatable-body-bottombar">
                      <p className="inatable-body-bottombar-text">Edit Listing</p>
                      <div className="inatable-body-bottombar-cancel">Cancel</div>
                      <div className="inatable-body-bottombar-apply">Edit</div>
                    </div> */}

                  <div className="inatable-body-titlebar">
                    <p className="inatable-body-titlebar-info">Product</p>
                    <p className="inatable-body-titlebar-size">Size</p>
                    <p className="inatable-body-titlebar-stock">Stock</p>
                    <p className="inatable-body-titlebar-actions">Actions</p>
                  </div>

                  <div className="inatable-body-all">
                    {selected.skus.map((item2)=>(
                    <InactiveListingTableItem item={item2}/>
                    ))}

                  </div>

                </div>

              </div>

       </>
    )
}


export default InactiveListingTable;