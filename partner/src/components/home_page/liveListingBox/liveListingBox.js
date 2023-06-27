import { useEffect, useState } from 'react';
import { getListingRequest } from '../../../store/action/listingaction';
import './liveListingBox.css'

export default function LiveListingBox({item}) {

    const youtubeWidth = window.innerWidth * 0.25;
    const youtubeHeight = window.innerHeight * 0.30;

    const [listings,setListings] = useState([]);

    const [loader1,setLoader1] = useState(true);

    async function handleItem() {
        console.log("SASA: ",item)
                if(item.length >=2){
                    listings.push(item[0]);
                    listings.push(item[1]);
                } else{
                    listings.push(item[0]);
                }
                setListings([...listings]);
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
        <div className='llb'>
            <div className='llb-loader1'></div>
        </div> :
        <div className='llb'>
            {/* <div className='llb-head'>
                <i style={{color: 'orange',fontSize: '26px'}} class="fa-solid fa-bookmark"></i>
                <p className='llb-head-text'>Listing Would Be Live Soon</p>
            </div> */}
            <div className='llb-body'>
                <div className='llb-body-left'>
                    <div className='llb-body-left-titlebar'>
                        <p className='llb-body-left-titlebar-listing'>Listing</p>
                        <p className='llb-body-left-titlebar-status'>ID</p>
                    </div>

                    {listings.map((item)=>(
                        <div className='llb-body-left-item'>
                            <div className='llb-body-left-item-listing'>
                                <div className='llb-body-left-item-listing-box'>
                                    <img className='llb-body-left-item-listing-box-img' src={item.media_urls[0]}/>
                                </div>
                                <div className='llb-body-left-item-listing-info'>
                                    <p className='llb-body-left-item-listing-info-brand'>{item.brand}</p>
                                    <p className='llb-body-left-item-listing-info-name'>{item.product_name}</p>
                                    <p className='llb-body-left-item-listing-info-category'>{item.sub_category2}</p>
                                </div>
                            </div>

                            <div className='llb-body-left-item-mid'>
                                <span className='llb-body-left-item-mid-key'>ID: <span className='llb-body-left-item-mid-value'>{item.listing_id}</span></span>
                                <div style={{height: '2px'}}></div>
                                <span className='llb-body-left-item-mid-key'>Created On: <span className='llb-body-left-item-mid-value'>{convertDate(item.createdAt)}</span></span>
                            </div>

                            {/* <div className='llb-body-left-item-edit'>Manage Listing</div> */}

                        </div>
                    ))}

                    {/* {item.length>2 ? <p className='llb-body-more'>View More</p>: null} */}
                </div>

                <div className='llb-body-right'>
                    <p className='llb-body-right-text'>Congratulations! Your Listings are live. You will get your first order soon.</p>
                    <div onClick={()=>{window.open('/supplier/listing','_self')}} className='llb-body-right-button'>Manage Listings</div>
                </div>
            </div>
        </div>
    )
}