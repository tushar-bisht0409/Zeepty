import logo from '../../images/Ellipse 211.png'
import {Link} from "react-router-dom"
import { useEffect, useState } from 'react'
import "./drawer.css"


export default function Drawer({mode}) {
    

    const[home,setHome] = useState('inActive');
    const[listing,setListing] = useState('inActive');
    const[order,setOrder] = useState('inActive');
    const[payment,setPayment] = useState('inActive');
    const[ret,setRet] = useState('inActive');
    const[uploads,setUploads] = useState('inActive');
    const[settings,setSettings] = useState('inActive');
    const[notices,setNotices] = useState('inActive');
    const[support,setSupport] = useState('inActive');

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
        else if(mode == "uploads") {
            setUploads("isActive");
        } 
        else if(mode == "settings") {
            setSettings("isActive");
        }
        else if(mode == "notices") {
            setNotices("isActive");
        }
        else if(mode == "support") {
            setSupport("isActive");
        }
    },[]);

    async function logout() {
        localStorage.clear();
        window.open('/supplier/auth','self');
    }

    function routeToPage(str) {
        window.open(`/supplier/${str}`,'_self')
    }

    return (
        <div className="ddrawerBox">
            <div className="dcompanyAbout">
                <img className='dcompanyAbout-img' src={logo} alt="" />
                <p className='dcompanyAbout-text'>Seller Company</p>
            </div>
            <div className="dcompanySupport">
                <div onClick={()=>{routeToPage("notices")}} className={notices=== "isActive" ? "dsupportItem-active" : "dsupportItem"}>
                <i style={{fontSize: '16px',alignSelf: 'center'}} id='ddrawerIcon2' class="fa-solid fa-bell"></i>
                    <p>Notices</p>
                </div>
                <div onClick={()=>{routeToPage("support")}} className={support=== "isActive" ? "dsupportItem-active" : "dsupportItem"}>
                <i style={{fontSize: '16px',alignSelf: 'center'}} id='ddrawerIcon2' class="fa-solid fa-phone"></i>
                    <p>Support</p>
                </div>
            </div>
            <div className="ddrawerOptions">
                <div onClick={()=>{routeToPage("home")}} className={home=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-home"></i>
                    <p style={{color: home === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }} >Home</p>
                </div>
                <div onClick={()=>{routeToPage("order")}} className={order=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-archive" aria-hidden="true"></i>
                    <p style={{color: order === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Order</p>
                </div>
                <div onClick={()=>{routeToPage("return")}} className={ret=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-truck" aria-hidden="true"></i>
                    <p style={{color: ret === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Return</p>
                </div>
                <div onClick={()=>{routeToPage("listing")}} className={listing=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-th-list" aria-hidden="true"></i>
                    <p style={{color: listing === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Listing</p>
                </div>
                <div onClick={()=>{routeToPage("uploadlisting")}} className={uploads=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-upload" aria-hidden="true"></i>
                    <p style={{color: uploads === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Upload Listing</p>
                </div>
                <div onClick={()=>{routeToPage("payment")}} className={payment=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-inr" aria-hidden="true"></i>
                    <p style={{color: payment === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Payments</p>
                </div>
                <div onClick={()=>{routeToPage("settings")}} className={settings=="isActive" ? "ddrawerItemActive" : "ddrawerItemInActive" }>
                <i id='ddrawerIcon' class="fa fa-gear" aria-hidden="true"></i>
                    <p style={{color: settings === "isActive"? '#554BDA': 'white', fontWeight: 'bold', fontSize: '14px' }}>Settings</p>
                </div>
            </div>
                {/* <div className="dlogoutBoxP">
               <button onClick={logout} className="dlogoutBtnP">LogOut</button>
                </div> */}
            
        </div>
    )
}