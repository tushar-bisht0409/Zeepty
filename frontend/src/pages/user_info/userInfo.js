import Drawer from "../../components/drawer/drawer";

import React, {useState} from "react";
import "./userInfo.css";


export default function UserInfo() {
    return(
        <div id="content-wrap">
        <Drawer mode={"userInfo"} />
        <div className="main1" style={{ height: '100vh' }}>

        <nav id="navbar">
            <input type="text" placeholder="search for products" />
            <li>Become a Seller</li>
            <li>Cart</li>
        </nav>
        
        <div id="accountInfo">
            <div style={{ position: 'relative', top: '1rem', display: 'flex', alignItems: 'center', left: '4rem', width: 'fit-content', gap: '1rem' }}>
                <div id="userDP" style={{ width: '4rem', height: '4rem',  background: 'black', borderRadius: '50%' }}></div>
                <h2>Hello, User</h2>
            </div>
        <div className="accountInfo">Account Information</div>
        <div className="mobileInfo">
        <div className="subHead">Mobile</div>
        <div className="data" id="mobNum">99999999999</div>
        </div>
        <div className="name1">
        <div className="subHead">Name</div>
        <div className="data" id="Namee">Name</div>
        <div className="pen12"><i className="fa fa-pencil"></i></div>
        </div>
        <div className="emailDetails">
        <div className="subHead">Email</div>
        <div className="data" id="email">rohitgairola123@gmail.com</div>
        <div className="pen13"><i className="fa fa-pencil"></i></div>
        </div>

        <div id="changePassword">Change Password</div>
        </div>

        <div id="footer-wrapper">
            <div className="changeLanguage">
            <div></div>
            <div className="changeLan" style={{ color: 'black', fontSize: '1.4rem' }}>Change Language</div>
            </div>
            
            <div className="tc">
            <div></div>
            <div className="termsC" style={{ color: 'black', fontSize: '1.4rem' }}>Terms & Policies</div>
            </div>
        </div>

        
        </div>

        </div>
    )
}