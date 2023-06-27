import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AccInfo from '../../mComponents/muserInfo_page/AccInfo/AccInfo'
import HelloUser from '../../mComponents/muserInfo_page/HelloUser/HelloUser'
import Help from '../../mComponents/muserInfo_page/Help/Help'
import Policy from '../../mComponents/muserInfo_page/Policy/Policy'
import { getCustomerInfo } from '../../store/actions/user_action'
import './mcustomerInfo_page.css'
import MBottomNavBar from '../../mComponents/mBottomNavBar/mBottomNavBar'
import { checkAndHandleLocalUserInfo } from '../../store/actions/notLoggedInUser_action';


const MCustomerInfoPage = () => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState(undefined)

    async function getData() {
        let obj = {
            customer_id: localStorage.getItem("customer_id")
          }
        const json = await getCustomerInfo(obj);
        console.log("New Data: ",json);
        if(json.success === true){
            setUserData(json.msz);
        }
    }

    useEffect(()=>{
      let c_id = localStorage.getItem("customer_id");
      if(c_id === undefined || c_id === null){
        checkAndHandleLocalUserInfo();
        window.open('/auth','_self')
      }
        getData();
    },[])
  return (
    userData === undefined ?<div></div>:
    <div>
        <HelloUser item={userData}/>
        <Help />
        <AccInfo item={userData} getData={getData}/>
        <Policy />
        <MBottomNavBar bMode={"Profile"} />
    </div>
  )
}

export default MCustomerInfoPage