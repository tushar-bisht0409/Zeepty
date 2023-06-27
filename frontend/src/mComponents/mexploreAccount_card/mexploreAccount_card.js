import React ,{useEffect,useState}from "react";
import './mexploreAccount_card.css'
import { getSellerInfo } from "../../store/actions/seller_action";

const  MExploreAccountCard =({item})=> {

  const [data, setData] = useState(undefined);

  async function getData(){
    const obj = {
      seller_id: item._source.seller_id
    }
    const json = await getSellerInfo(obj);

    if(json.success){
      setData(json.msz)
    } else{
      window.alert("Something Went Wrong")
    }
  }


  // function handleClick() {
  //   window.history.pushState("", "", "new_path");
  // }

  useEffect(()=>{
    getData();
  },[]);

  function routeToStorePage() {
    window.open(`/store/${item._source.seller_id}`)
  }
    
    return ( data === undefined ? null :
      <div onClick={routeToStorePage} className="meac">
        <img className="meac-img" src={data.profile_image} />
        <div className="meac-info">
            <p className="meac-info-username">{data.user_name}</p>
            <p className="meac-info-name">{data.display_name}</p>
        </div>
      </div>
    );
  }


export default  MExploreAccountCard;
