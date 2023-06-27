import React, {useState} from "react";
import Drawer from "../../components/drawer/drawer";
import LeftNav from "../../components/leftnav/lefnav";
import "./payment_page.css";

const PaymentPage = () => {
  return (
    <div id='content-wrap'>
        <Drawer mode={"payments"} />
        <div style={{width: '75vw',marginLeft: '25vw'}} className="right">
            <div className="bankDetails">
                <h2>Your Bank Details</h2>
                <div className="bank">
                    <span style={{ fontWeight: '600' }}>Account Number: </span><span>74r293480918443</span>
                    <span id="a" style={{ fontWeight: '600' }}>Account Number: </span><span>74r293480918443</span>
                    <p><span style={{ fontWeight: '600' }}>Benificiery Number: </span><span>74r293480918443</span></p>
                </div>
            </div>
            <div className="sub-parent">
                <div className="subPayment">
                    <h2>Next Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
                <div className="subPayment right-parent">
                    <h2>Last Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
            </div>
            <div className="sub-parent">
                <div className="subPayment">
                    <h2>Total Outstanding Payment</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>1 Jan</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
                <div className="subPayment right-parent">
                    <h2>Request Payment Report</h2>
                    <div id="check">
                        <p>Estimated value of next payments. This may change due to return that come in before the next payment</p>
                        <button style={{ background: 'orange', border: 'none', padding: '1rem', color: 'white', fontWeight: '600' }}>Request Report</button>
                    </div>
                    <span style={{ fontWeight: '600', marginRight: '1.5rem' }}>Amount</span> <span>Rs. 500000</span>
                    <p style={{ color: 'orange', position: 'relative', top: '0.8rem', marginLeft: '26rem' }}>View Details</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage