import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import './inActive_subPage.css'
import { useParams } from "react-router-dom";
import { ListingTable } from "../listingTable/listingTable";
import InactiveListingTable from "../inactiveListingTable/inactiveListingTable";

import nothingHere from '../../../assets/supplier/images/nothingHere.png'


 function InActiveSubPage({data}) {

    const params = useParams();

    // const [data,setData]= useState([]);
    const [loading,setLoading]=useState(false);
    const [mode,setMode] = useState("inActive");
    const [listing,setListing] = useState(undefined);
    
    useEffect(()=>{
         setLoading(true);
        groupListing(data.inActive)
    },[data])

    function groupListing (list) {
      let idArr = [];
      let newList = [];
      for(let i = 0; i<list.length; i++) {
        let ind = idArr.findIndex((obj)=> obj.listing_id === list[i].listing_id && obj.style_code === list[i].style_code)
        if(ind!== -1){
          newList[ind].skus.push(list[i]);
        } else{
          idArr.push({listing_id: list[i].listing_id, style_code: list[i].style_code});
          let newInfo ={ ...{skus: [list[i]]}, ...list[i]};
          newList.push(newInfo)
        }
      }
      setListing(newList);
    }
      

    return(
       <>
              
              
               {
            listing == undefined? null :(
                <>
                 
                 {listing.length === 0 ? <div className="inactive-nodata">
                <img className="inactive-nodata-img" src={nothingHere}></img>
                </div> : <InactiveListingTable data={listing}/>}
                </>
            )
            
        }

       </>
    )
}

function mapStateToProps(state) {
  const listinginfo = state.savelistingInRedux;
  return {data: listinginfo};
}
export default connect(mapStateToProps)(InActiveSubPage);