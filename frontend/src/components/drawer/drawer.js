import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import "./drawer.css"

import notice from '../../images/notice.png'
import support from '../../images/support.png'

export default function Drawer({mode}) {
    

    const[home,setHome] = useState('inActive');
    const[listing,setListing] = useState('inActive');
    const[order,setOrder] = useState('inActive');
    const[payment,setPayment] = useState('inActive');
    const[ret,setRet] = useState('inActive');

    useEffect(()=>{
        if(mode =="home" ){
            setHome("isActive");
        }
        else if(mode == "listing"){
            setListing("isActive");
        }
        else if(mode == "order"){
            setOrder("isActive");
        }
        else if(mode =="return"){
            setRet("isActive");
        }
        else if(mode == "payments") {
            setPayment("isActive");
        }
    },[]);

    return (
        <div id="drawer">
            <div id="companyAbout">
                {/* <img src={logo} alt="" /> */}
                <h1>Seller Company</h1>
            </div>
            <div id="companySupport">
                <div id="supportItem">
                    <img src={notice} alt="" />
                    <p>Notices</p>
                </div>
                <div id="supportItem">
                    <img src={support} alt="" />
                    <p>Support</p>
                </div>
            </div>
            <div id="drawerOptions">
                <div id="drawerItem" className={home}>
                <i id='drawerIcon' className="fa fa-home"></i>
                    <Link to={`/`} style={{textDecoration: 'none' }}>
                    <p style={{color: home === "isActive"? '#7465B6': 'white', fontWeight: 'bold', fontSize: '22px' }} >Home</p>
                    </Link>
                    
                </div>
                <div id="drawerItem" className={order}>
                <i id='drawerIcon' class="fa fa-archive" aria-hidden="true"></i>
                    <Link to="/all" style={{ textDecoration: 'none' }}>
                    <p style={{color: order === "isActive"? '#7465B6': 'white', fontWeight: 'bold', fontSize: '22px' }}>Order</p>
                    </Link>
                </div>
            </div>
                <div className='logoutBox'>
               <button  className='logoutBtn' >LogOut</button>
                </div>
            
        </div>
    )
}