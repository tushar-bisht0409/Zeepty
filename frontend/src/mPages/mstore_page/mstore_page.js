import React, { useEffect, useState } from 'react'
import MLooksSubPage from '../../mComponents/mstore_page/mlooks_subPage/mlooks_subPage';
import MStoreSubPage from '../../mComponents/mstore_page/mstore_subPage/mstore_subPage';
import { getStoreInformation } from '../../store/actions/seller_action';
import './mstore_page.css'
import { useParams } from 'react-router-dom';
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';
import { handleFollowers } from '../../store/actions/seller_action';

const MStorePage = () => {

    const [mode, setMode] = useState('Looks');
    const [loader1, setLoader1] = useState(true);

    const [storeInfo,setStoreInfo] = useState(undefined);
    const [social_accounts,setSocial_accounts] = useState([]);
    const [isfollowing,setisfollowing] = useState(false);
    const [followLoading, setFollowLoading] = useState(true);
    async function handlefollowapi(){
        if(!followLoading){
        setFollowLoading(true)
        let c_id = localStorage.getItem('customer_id');
        const obj={
            "type":isfollowing? "":"add",
    "seller_id": params.seller_id,
    "customer_id": c_id
        }
    const json  =  await handleFollowers(obj);
      if(json.success){
        let newInfo = storeInfo;
        if(isfollowing){
            const ind = newInfo.seller_info.followers.findIndex((element) => element === c_id);
            if (ind !== -1) {
                newInfo.seller_info.followers.splice(ind, 1);
              }
        } else {
            newInfo.seller_info.followers.push(c_id)
        }
        setStoreInfo(newInfo);
        setisfollowing(!isfollowing);      
      }
      setFollowLoading(false) 
    }

    }

    const params = useParams();

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

    function getSocialMediaData(socialArray) {

        //     account_type: String,
        //     user_name: String

        let max1 = 0;
        let max2 = 0;
        let accounts_to_show = {1: {},2: {}}

        socialArray.map((social)=>{
            if(social.account_type === "Instagram"){
                let f = 100;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#cd486b";
                    accounts_to_show["1"].icon = "fa-brands fa-instagram";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#cd486b";
                    accounts_to_show["2"].icon = "fa-brands fa-instagram";
                }
            } else if(social.account_type === "Facebook"){
                let f = 90;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#4267B2";
                    accounts_to_show["1"].icon = "fa-brands fa-facebook";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#4267B2";
                    accounts_to_show["2"].icon = "fa-brands fa-facebook";
                }
            } else if(social.account_type === "Youtube"){
                let f = 95;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#FF0000";
                    accounts_to_show["1"].icon = "fa-brands fa-youtube";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#FF0000";
                    accounts_to_show["2"].icon = "fa-brands fa-youtube";
                }
            } else if(social.account_type === "Whatsapp"){
                let f = 80;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#25D366";
                    accounts_to_show["1"].icon = "fa-brands fa-whatsapp";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#25D366";
                    accounts_to_show["2"].icon = "fa-brands fa-whatsapp";
                }
            } else if(social.account_type === "Twitter"){
                let f = 85;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#1DA1F2";
                    accounts_to_show["1"].icon = "fa-brands fa-twitter";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#1DA1F2";
                    accounts_to_show["2"].icon = "fa-brands fa-twitter";
                }
            } else if(social.account_type === "Snapchat"){
                let f = 90;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#FFFC00";
                    accounts_to_show["1"].icon = "fa-brands fa-snapchat";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#FFFC00";
                    accounts_to_show["2"].icon = "fa-brands fa-snapchat";
                }
            } else if(social.account_type === "Telegram"){
                let f = 100;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#0088cc";
                    accounts_to_show["1"].icon = "fa-brands fa-telegram";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#0088cc";
                    accounts_to_show["2"].icon = "fa-brands fa-telegram";
                }
            } else if(social.account_type === "Discord"){
                let f = 100;
                if(f>max1){
                    max2 = max1;
                    max1 = f;
                    accounts_to_show["1"].account_name = social.account_type;
                    accounts_to_show["1"].color = "#7289da";
                    accounts_to_show["1"].icon = "fa-brands fa-discord";
                } else if(f > max2){
                    max2 = f;
                    accounts_to_show["2"].account_name = social.account_type;
                    accounts_to_show["2"].color = "#7289da";
                    accounts_to_show["2"].icon = "fa-brands fa-discord";
                }
            }
        });

        accounts_to_show["1"]['followers'] = max1;
        accounts_to_show["2"]['followers'] = max2;
        
        social_accounts.pop();
        social_accounts.pop();
        social_accounts.push(accounts_to_show["1"]);
        social_accounts.push(accounts_to_show["2"]);
        setSocial_accounts([...social_accounts]);        
    }

    async function getStoreData() {
            let obj = {
                seller_id: params.seller_id
            };
            const json = await getStoreInformation(obj);
            if(json.success) {
                setStoreInfo(json.msz);
               if(json.msz.seller_info.followers.includes(localStorage.getItem('customer_id'))){
                setisfollowing(true);
               }
               else{
                setisfollowing(false);
               }
               setFollowLoading(false)
                getSocialMediaData(json.msz.seller_info.accounts)
                setLoader1(false);
            } else{
                setLoader1(false);
                return window.alert("Something Went Wrong");
            }
    }

    useEffect(()=>{
        let c_id = localStorage.getItem("customer_id");
      if(c_id === undefined || c_id === null){
        checkAndHandleLocalUserInfo();
      }
        getStoreData();
    },[])
 
  return ( <> {loader1 ? <div className='mSTLoader1'></div> : 
  storeInfo === undefined ? <div>Nothing Here!</div> :
    <div className='mSTBox'> 
    <div className='mSTTB'>
    <div className='mSTTBTopL'>
        {social_accounts.map((acc,index)=>(
            <div className='mSTTBTopLT'>
                <i style={{color: acc.color,fontSize: '16px'}} class={acc.icon}/>
                <p className='mSTTBTopLTText'>{formatNumber(acc.followers)}</p>
            </div>
        ))}
        </div> 
        <div className='mSTTBTopR'>
            <i style={{color: 'white', fontSize:'25px'}} class='fa-solid fa-share-nodes'/>
        </div>
        <div className='mSTTBMid'>
            <div className='mSTTBMidImageBox'>
            <img className='mSTTBMidImage' src={storeInfo.seller_info.profile_image}/>
            <p className='mSTTBMidName'>{storeInfo.seller_info.display_name}</p>
            </div>
            <div className='mSTTBMidF'>
                <span className='mSTTBMidFT1'>{formatNumber(storeInfo.seller_info.followers.length)} <span className='mSTTBMidFT2'>Followers</span></span>
                <div onClick={handlefollowapi} className={!isfollowing ? "mSTTBMidFButtonFollow": "mSTTBMidFButtonFollowing"}>Follow</div>
            </div>
        </div>
        <div className='mSTTBBottom'>
            <div className='mSTTBBottomL'>
                <div className='mSTTBBottomLT'>
                    <p className='mSTTBBottomLTText'>{storeInfo.ratings.length === 0 ? "0" : storeInfo.ratings.average_rating}</p>
                    <i style={{fontSize: '8px', color: 'green'}} class='fa-solid fa-star'/>
                </div>
                <div className='mSTTBBottomLB'>
                {storeInfo.ratings.length === 0 ? "No Ratings Yet!" : `by ${formatNumber(storeInfo.ratings.num_rating)} users`}
                </div>
            </div>
            <div className='mSTTBBottomM'>
                <p className='mSTTBBottomMText'>Know More</p>
                <i style={{fontSize: '8px', color: 'black'}} class='fa-solid fa-circle-info' />
            </div>
            <div className='mSTTBBottomR'>
                <div className='mSTTBBottomRT'>
                    <p className='mSTTBBottomRTText'>{storeInfo.products.length}</p>
                    <i style={{fontSize: '8px', color: 'orange'}} class='fa-solid fa-bag-shopping'/>
                </div>
                <div className='mSTTBBottomRB'>
                    Products
                </div>
            </div>
        </div>
    </div>

    <div className='mSTS'>
        <div className='mSTSBar'>
            <div onClick={()=>{setMode("Looks")}} className={mode ==="Looks" ? 'mSTSBarItemActive' : 'mSTSBarItem'}>
                <i style={{color: mode ==="Looks" ? "white": "lightgrey", fontSize: '15px'}} class='fa-solid fa-video'/>
                <p className={mode ==="Looks" ? 'mSTSBarItemTextActive' : 'mSTSBarItemText'}>Looks</p>
            </div>

            <div onClick={()=>{setMode("Store")}} className={mode ==="Store" ? 'mSTSBarItemActive' : 'mSTSBarItem'}>
                <i style={{color: mode ==="Store" ? "white": "lightgrey", fontSize: '15px'}} class='fa-solid fa-store'/>
                <p className={mode ==="Store" ? 'mSTSBarItemTextActive' : 'mSTSBarItemText'}>Store</p>
            </div>

        </div>
    </div>

    {mode==="Looks"? <MLooksSubPage/> : <MStoreSubPage/>} 

    </div>}

    </>
  )
}

export default MStorePage