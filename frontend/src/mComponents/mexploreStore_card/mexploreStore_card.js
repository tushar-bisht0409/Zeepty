import React ,{useEffect,useState}from "react";
import './mexploreStore_card.css'
import { getStoreInformation } from "../../store/actions/seller_action";

const  MExploreStoreCard =({item})=> {

  const [data, setData] = useState(undefined);

  function formatNumber(num) {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num;
  }

  async function getData(){
    const obj = {
      seller_id: item._source.seller_id
    }
    const json = await getStoreInformation(obj);
    console.log("Data: ",json)
    if(json.success){
      setData(json.msz)
    } else{
      window.alert("Something Went Wrong")
    }
  }

  function routeToStorePage() {
    window.open(`/store/${item._source.seller_id}`)
  }

  useEffect(()=>{
    getData();
  },[])
    return ( data === undefined ? null :
      <div onClick={routeToStorePage} className="mesc">

        <div className="mesc-topbox">
        <img className="mesc-topbox-img" src={data.seller_info.profile_image} />
        <div className="mesc-topbox-info">
            <p className="mesc-topbox-info-displayname">{data.seller_info.display_name}</p>
            <p className="mesc-topbox-info-name">{data.seller_info.user_name}</p>
        </div>
        <div className="mesc-topbox-view">View Store</div>
        </div>

        <div className="mesc-bottombox">

          <div className="mesc-bottombox-rating">
            <div className="mesc-bottombox-rating-box">
              <p className="mesc-bottombox-rating-box-count">{data.ratings.length === 0 ? "0" : data.ratings.average_rating}</p>
              <i style={{alignSelf: 'center', fontSize: '8px',marginLeft: '2px', color: "#FFB800"}} className="fa-solid fa-star"></i>
            </div>
            <p className="mesc-bottombox-rating-total">{data.ratings.length === 0 ? "ratings" : `${formatNumber(data.ratings.num_rating)} ratings`}</p>
          </div>

          <div className="mesc-bottombox-followers">
            <p className="mesc-bottombox-followers-count">{formatNumber(data.seller_info.followers.length)}</p>
            <p className="mesc-bottombox-followers-title">Follorwers</p>
          </div>

          <div className="mesc-bottombox-products">
            <p className="mesc-bottombox-products-count">{data.products.length}</p>
            <p className="mesc-bottombox-products-title">Products</p>
          </div>

        </div>
      </div>
    );
  }


export default  MExploreStoreCard;


{/* <div className="mesc">
        <img className="mesc-img" src={"https://pbs.twimg.com/profile_images/1219128281594781696/rmUV4Kja_400x400.jpg"} />
        <div className="mesc-info">
            <p className="mesc-info-displayname">Display Name</p>
            <p className="mesc-info-name">Name</p>
        </div>

            <MRatingBox/>
            <div className="mesc-info-products">
            <i style={{fontSize: '14px',color: 'green', alignSelf: 'center'}} class="fa-solid fa-bag-shopping"></i>
            <p className="mesc-info-products-count">20</p>
            <p className="mesc-info-products-products"> Products</p>
            </div>
      </div> */}