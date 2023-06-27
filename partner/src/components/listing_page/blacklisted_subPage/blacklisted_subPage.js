import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import './blacklisted_subPage.css'
import { useParams } from "react-router-dom";
import { ListingTable } from "../listingTable/listingTable";
import BlacklistedListingTable from "../blacklistedListingTable/blacklistedListingTable";
import BlacklistedTitlebar from "./blacklistedTitlebar/blacklistedTitlebar";

 function BlacklistedSubPage({data}) {

  const params = useParams();

    const [group_data,setGroup_data]= useState({poor:[],others:[]});
    const [loading,setLoading]=useState(false);
    const [mode,setMode] = useState("blacklisted");
    const [listing,setListing] = useState(undefined);
    
    useEffect(()=>{
      for(let i = 0; i<data.blacklisted.length; i++) {
        console.log(i,": ",data.blacklisted[i].blacklisted_for)
        if(data.blacklisted[i].blacklisted_for === "Poor Quality"){
          group_data.poor.push(data.blacklisted[i]);
        } else{
          group_data.others.push(data.blacklisted[i]);
        }
        setGroup_data(group_data);
      }
         setLoading(true);
         setMode("poor")
         groupListing(group_data.poor);
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
            listing == undefined? <div>Loading</div> :(
                <>
                <BlacklistedTitlebar data={group_data} mode={mode} setMode={setMode} groupListing={groupListing}/>
                 <BlacklistedListingTable data={listing}/>
                 
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
export default connect(mapStateToProps)(BlacklistedSubPage);