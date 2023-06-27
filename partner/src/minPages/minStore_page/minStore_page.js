import React, { useEffect, useState } from 'react'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar'
import MINLooksSubPage from '../../minComponents/minStore_page/minLooks_subPage/minLooks_subPage';
import MINStoreSubPage from '../../minComponents/minStore_page/minStore_subPage/minStore_subPage';
import { getStoreInformation } from '../../store/action/seller_action';
import './minStore_page.css'


const MINStorePage = () => {

    const [mode, setMode] = useState('Looks');
    const [loader1, setLoader1] = useState(true);

    const [storeInfo,setStoreInfo] = useState(undefined);
    const [social_accounts,setSocial_accounts] = useState([]);

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
        let i_id = localStorage.getItem('influencer_id');
        if(i_id === "" || i_id === undefined || i_id === null) {
            localStorage.clear();
            window.open('/creator/auth','_self');
        } else {
            let obj = {
                seller_id: i_id
            };
            const json = await getStoreInformation(obj);
            if(json.success) {
                setStoreInfo(json.msz);
                getSocialMediaData(json.msz.seller_info.accounts)
                setLoader1(false);
            } else{
                setLoader1(false);
                return window.alert("Something Went Wrong");
            }
        }
    }

    useEffect(()=>{
        getStoreData();
    },[])
 
  return ( <> {loader1 ? <div className='minSTLoader1'></div> : 
  storeInfo === undefined ? <div>Nothing Here!</div> :
    <div className='minSTBox'> 
    <div className='minSTTB'>
    <div className='minSTTBTopL'>
        {social_accounts.map((acc,index)=>(
            <div className='minSTTBTopLT'>
                <i style={{color: acc.color,fontSize: '16px'}} class={acc.icon}/>
                <p className='minSTTBTopLTText'>{formatNumber(acc.followers)}</p>
            </div>
        ))}
        </div> 
        <div className='minSTTBTopR'>
            <i style={{color: 'white', fontSize:'25px'}} class='fa-solid fa-share-nodes'/>
        </div>
        <div className='minSTTBMid'>
            <div className='minSTTBMidImageBox'>
            <img className='minSTTBMidImage' src={storeInfo.seller_info.profile_image}/>
            <p className='minSTTBMidName'>{storeInfo.seller_info.display_name}</p>
            </div>
            <div className='minSTTBMidF'>
                <span className='minSTTBMidFT1'>{formatNumber(storeInfo.seller_info.followers.length)} <span className='minSTTBMidFT2'>Followers</span></span>
            </div>
        </div>
        <div className='minSTTBBottom'>
            <div className='minSTTBBottomL'>
                <div className='minSTTBBottomLT'>
                    <p className='minSTTBBottomLTText'>{storeInfo.ratings.length === 0 ? "0" : storeInfo.ratings[0].average_rating}</p>
                    <i style={{fontSize: '8px', color: 'green'}} class='fa-solid fa-star'/>
                </div>
                <div className='minSTTBBottomLB'>
                {storeInfo.ratings.length === 0 ? "No Ratings Yet!" : `by ${formatNumber(storeInfo.ratings[0].num_rating)} users`}
                </div>
            </div>
            <div className='minSTTBBottomM'>
                <p className='minSTTBBottomMText'>Know More</p>
                <i style={{fontSize: '8px', color: 'black'}} class='fa-solid fa-circle-info' />
            </div>
            <div className='minSTTBBottomR'>
                <div className='minSTTBBottomRT'>
                    <p className='minSTTBBottomRTText'>{storeInfo.products.length}</p>
                    <i style={{fontSize: '8px', color: 'orange'}} class='fa-solid fa-bag-shopping'/>
                </div>
                <div className='minSTTBBottomRB'>
                    Products
                </div>
            </div>
        </div>
    </div>

    <div className='minSTS'>
        <div className='minSTSBar'>
            <div onClick={()=>{setMode("Looks")}} className={mode ==="Looks" ? 'minSTSBarItemActive' : 'minSTSBarItem'}>
                <i style={{color: mode ==="Looks" ? "white": "lightgrey", fontSize: '15px'}} class='fa-solid fa-video'/>
                <p className={mode ==="Looks" ? 'minSTSBarItemTextActive' : 'minSTSBarItemText'}>Looks</p>
            </div>

            <div onClick={()=>{setMode("Store")}} className={mode ==="Store" ? 'minSTSBarItemActive' : 'minSTSBarItem'}>
                <i style={{color: mode ==="Store" ? "white": "lightgrey", fontSize: '15px'}} class='fa-solid fa-store'/>
                <p className={mode ==="Store" ? 'minSTSBarItemTextActive' : 'minSTSBarItemText'}>Store</p>
            </div>

        </div>
    </div>

    {mode==="Looks"? <MINLooksSubPage/> : <MINStoreSubPage/>} 

    </div>}

    <MINBottomNavBar bMode={'Store'}/>

    </>
  )
}

export default MINStorePage