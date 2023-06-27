import React, {useEffect,useState} from "react";
import { useDispatch, useSelector,connect } from "react-redux";

import Myproduct from "../../myproduct/myproduct.js";
import { ListingTable } from "../listingTable/listingTable.js";
import './inStock_subPage.css'
import { useParams } from "react-router-dom";
import LiveListingTable from "../liveListingTable/liveListingTable.js";

 function InStockSubPage({data}) {

  const params = useParams();

    // const [data,setData]= useState([]);
    const [loading,setLoading]=useState(false);
    const [mode,setMode] = useState("outOfStock");
    const [listing,setListing] = useState(undefined);
    const [isEdited, setIsEdited] = useState(false)
    // const newData = useSelector((state)=> state)
    // console.log("newData",newData)

    // useEffect(()=>{

    //     const getdata = async()=>{
    //       const json = await dispatch(getlisting(`manufacturerID`,'m1','',''))  //manufacturer id sellerid type
    //       // console.log("json: ",json);
    
    //       if(json.success == true){
    //         setLoading(true);
    //         setData(json.msz)
    //       }
    //     }
    //     getdata();
    
    //   },[]);
    
    useEffect(()=>{
         setLoading(true);
        groupListing(data.outOfStock)
        if(params.sub_mode === "inStock"){
          setMode("inStock")
        } else if(params.sub_mode === "lowOnStock"){
          setMode("lowOnStock")
        } else {
          setMode("outOfStock")
        }
    },[data]);

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
      listing === undefined ? null :
       <>
              <Myproduct  mode = {mode} setlisting={setListing} data={data} setmode={setMode} groupListing={groupListing}/>
              <LiveListingTable data={listing}/>
               {/* {
            listing == undefined? <div>Loading</div> :(
                <>
              <div className="listing-body-titlebar">
                  <div className="listing-body-titlebar-listingInfo">Listing Information</div>
                  <div className="listing-body-titlebar-price">Price</div>
                  <div className="listing-body-titlebar-stock">Stock</div>
                  <div className="listing-body-titlebar-category">Category</div>
                  <div className="listing-body-titlebar-more"></div>
              </div>
                 {listing.map((d)=>
                  (
                  <ListingTable key={d._id}  props={d} mode={mode} />
                )
                 )}
                 
                </>
            )
            
        } */}

       </>
    )
}

function mapStateToProps(state) {
  const listinginfo = state.savelistingInRedux;
  return {data: listinginfo};
}
export default connect(mapStateToProps)(InStockSubPage);