import logo from '../../images/Ellipse 211.png'
import {Link} from "react-router-dom"
import notice from '../../images/notice.png'
import support from '../../images/support.png'
import home from '../../images/home.png'
import order from '../../images/order.png'
import ret from '../../images/ret.png'
import listing from '../../images/listing.png'

export default function LeftNav({props}) {
    let home_page = "not_active";
    let listing_page = "not_active";
    let orderpage = "not_active";
    let returnpage = "not_active";
    let payments = "not_active";
    if(props =="home" ){
        home_page = "active";
    }
    else if(props == "listing"){
        listing_page = "active";
    }
    else if(props == "order"){
        orderpage = "active";
    }
    else if(props =="return"){
        returnpage = "active";
    }
    else if(props == "payments") {
        payments = "active"
    }

    return (
        <div id="left">
            <div id="company_info">
                <img src={logo} alt="" />
                <h1>Seller Company</h1>
            </div>
            <div id="company_support">
                <div id="support_item">
                    <img src={notice} alt="" />
                    <p>Notices</p>
                </div>
                <div id="support_item">
                    <img src={support} alt="" />
                    <p>Support</p>
                </div>
            </div>
            <div id="nav_list">
                <div id="nav_item" className={home_page}>
                    <img src={home} alt="" />
                    <Link to={`/`} style={{ textDecoration: 'none' }}>
                    <p>Home</p>
                    </Link>
                    
                </div>
                <div id="nav_item" className={orderpage}>
                    <img src={order} alt="" />
                    <Link to="/0" style={{ textDecoration: 'none' }}>
                    <p>Order</p>
                    </Link>
                </div>
                <div id="nav_item" className={returnpage}>
                    <img src={ret} alt="" />
                    <Link to="/1" style={{ textDecoration: 'none' }}>
                    <p>Return</p>
                    </Link>
                </div>
                <div id="nav_item" className={listing_page}>
                    <img src={listing} alt="" />
                    <Link to="/2" style={{ textDecoration: 'none' }}>
                    <p>Listing</p>
                    </Link>
                </div>
                <div id="nav_item" className={payments}>
                    <img src={listing} alt="" />
                    <Link to="/3" style={{ textDecoration: 'none' }}>
                    <p>Payments</p>
                    </Link>
                </div>
            </div>
                <div className='container'>
               <button  className='logout_btn' >LogOut</button>
                </div>
            
        </div>
    )
}