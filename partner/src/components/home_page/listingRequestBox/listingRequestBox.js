import { useEffect, useState } from 'react';
import { getListingRequest } from '../../../store/action/listingaction';
import './listingRequestBox.css'

export default function ListingRequestBox({item,mode}) {

    const youtubeWidth = window.innerWidth * 0.25;
    const youtubeHeight = window.innerHeight * 0.30;

    const [listingRequest,setListingRequest] = useState([]);
    const [selectedListingRequest,setSelectedListingRequest] = useState([]);

    const [loader1,setLoader1] = useState(true);

    async function handleItem() {
                if(mode === "draft"){
                for(let i =0; i<item.length; i++){
                    if(item[i].documents[0].listing_status === "Draft"){
                        listingRequest.push(item[i]);
                    }
                }} else{
                    for(let i =0; i<item.length; i++){
                        if(item[i].documents[0].listing_status !== "Draft"){
                            listingRequest.push(item[i]);
                        }
                    }
                }

                if(listingRequest.length >=2){
                    selectedListingRequest.push(listingRequest[0]);
                    selectedListingRequest.push(listingRequest[1]);
                } else{
                    selectedListingRequest.push(listingRequest[0]);
                }
                setSelectedListingRequest([...selectedListingRequest])
            setListingRequest([...listingRequest]);
            console.log("sdns: ",item)
            setLoader1(false)
    }

    useEffect(()=>{
        handleItem()
    },[])

    function convertDate(str) {
        const timestamp = new Date(str);
        const options = {
          year: "2-digit",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        };
    
        return timestamp.toLocaleString("en-US", options);
      }

    return (
        loader1 ? 
        <div className='lrb'>
            <div className='lrb-loader1'></div>
        </div> :
        <div className='lrb'>
            {/* <div className='lrb-head'>
                <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-bookmark"></i>
                <p className='lrb-head-text'>Listing Would Be Live Soon</p>
            </div> */}
            <div className='lrb-body'>
                <div className='lrb-body-left'>
                    <div className='lrb-body-left-titlebar'>
                        <p className='lrb-body-left-titlebar-listing'>Listing</p>
                        <p className='lrb-body-left-titlebar-status'>Action</p>
                    </div>

                    {selectedListingRequest.map((item)=>(
                        <div className='lrb-body-left-item'>
                            <div className='lrb-body-left-item-listing'>
                                <div className='lrb-body-left-item-listing-box'>
                                    <img className='lrb-body-left-item-listing-box-img' src={item.documents[0].media_urls[0]}/>
                                    <p className='lrb-body-left-item-listing-box-count'>( {item.count} )</p>
                                </div>
                                <div className='lrb-body-left-item-listing-info'>
                                    <p className='lrb-body-left-item-listing-info-brand'>{item.documents[0].brand}</p>
                                    <p className='lrb-body-left-item-listing-info-name'>{item.documents[0].product_name}</p>
                                    <p className='lrb-body-left-item-listing-info-category'>{item.documents[0].sub_category2}</p>
                                </div>
                            </div>

                            <div className='lrb-body-left-item-mid'>
                                <span className='lrb-body-left-item-mid-key'>ID: <span className='lrb-body-left-item-mid-value'>{item.documents[0].listing_id}</span></span>
                                <div style={{height: '2px'}}></div>
                                <span className='lrb-body-left-item-mid-key'>Created On: <span className='lrb-body-left-item-mid-value'>{convertDate(item.documents[0].createdAt)}</span></span>
                            </div>

                            {item.documents[0].listing_status === "Draft"? <div onClick={()=>{window.open(`/supplier/editlisting/${item.documents[0].listing_id}`,'_self')}} className='lrb-body-left-item-edit'>Edit Draft</div>
                            :<div onClick={()=>{
                                if(item.documents[0].listing_status === "Rejected"){
                                    window.open(`/supplier/listingreport/${item.documents[0].listing_id}`,'_self');
                                }
                            }} className={item.documents[0].listing_status === "Pending" || item.documents[0].listing_status === "Hold"?'lrb-body-left-item-status-text-pending':item.documents[0].listing_status === "Approved"?'lrb-body-left-item-status-text-approved':item.documents[0].listing_status === "Rejected"?'lrb-body-left-item-status-text-rejected':null}>{item.documents[0].listing_status}{item.documents[0].listing_status === "Rejected" ? <span className='lrb-body-left-item-status-text-rejected-see'>(Tap to see report)</span> : null}
                            </div>}

                        </div>
                    ))}

                    {listingRequest.length>2 ? <p className='lrb-body-more'>View More</p>: null}
                </div>

                <div className='lrb-body-right'>
                    <p className='lrb-body-right-text'>{mode === "draft"? "Complete your drafts and submmit them for quality check. " : "Your listing will go live after quality checks (QC) are done. It usually takes around 10-12 hours."}</p>
                    <div onClick={()=>{window.open('/supplier/uploadlisting/draft','_self')}} className='lrb-body-right-button'>{mode === "draft"? "Manage Drafts" : "Add More Listings"}</div>
                </div>
            </div>
        </div>
    )
}