import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Drawer from '../../components/drawer/drawer';
import shoe from './shoe.png'
import policy from './policy.png'
import support from './support.png'
import './orders.css'

const orders = () => {
  return (
    <div id='content-wrap'>
        <Drawer />
        <div className="orderArea">
            <nav className="nav">
                <AiOutlineArrowLeft id='arrowIcon' />
                <span style={{ fontSize: '1.7rem', fontWeight: '700' }}>Your Orders</span>
            </nav>
            <header>
                <main className="detailLeft">
                    <img src={shoe} alt="" />
                    <div className="proDetails">
                        <h4>bOAt</h4>
                        <p>Wireless Pone</p>
                        <p style={{ color: '#2FB84D', fontWeight: '600', marginTop: '2rem' }}>Arriving 2 Dec</p>
                    </div>
                </main>
                <main className="detailRight">
                    <div className="statusBar">
                        <div className="statusItem">
                            <div className="imgWrapper">
                                <div className="statusCircle" style={{ backgroundColor: '#008000' }}></div>
                                <div className="statusLine"></div>
                            </div>
                            <div className="statusInfo">
                                <p style={{ fontWeight: 'bold' }}>Order Confirmed</p>
                                <p>Order Placed on 31 Dec</p>
                            </div>
                        </div>
                        <div className="statusItem">
                            <div className="imgWrapper">
                                <div className="statusCircle" style={{ backgroundColor: '#EEEEEE' }}></div>
                                <div className="statusLine"></div>
                            </div>
                            <div className="statusInfo">
                                <p style={{ fontWeight: 'bold' }}>Order Confirmed</p>
                                <p>Order Placed on 31 Dec</p>
                            </div>
                        </div>
                        <div className="statusItem">
                            <div className="imgWrapper">
                                <div className="statusCircle" style={{ backgroundColor: '#EEEEEE' }}></div>
                                <div className="statusLine"></div>
                            </div>
                            <div className="statusInfo">
                                <p style={{ fontWeight: 'bold' }}>Order Confirmed</p>
                                <p>Order Placed on 31 Dec</p>
                            </div>
                        </div>
                        <div className="statusItem">
                            <div className="imgWrapper">
                                <div className="statusCircle" style={{ backgroundColor: '#EEEEEE' }}></div>
                                {/* <div className="statusLine"></div> */}
                            </div>
                            <div className="statusInfo">
                                <p style={{ fontWeight: 'bold' }}>Order Confirmed</p>
                                <p>Order Placed on 31 Dec</p>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="cancelBtn">
                    <button>Cancel</button>
                </div>
            </header>
            <div className="ads">
                <div className="addressLeft">
                    <h4>Shipping Address</h4>
                    <p>Full Name</p>
                    <p style={{ width: '20rem' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus</p>
                </div>
                <div className="addressRight">
                    <h4>Order Details</h4>
                    <p>Order ID</p>
                    <p>Order Placed on</p>
                    <p>Total Amount</p>
                    <p>Payment Mode</p>
                </div>
            </div>
            <footer>
                <div>
                    <img src={policy} alt="" />
                    <p>Return and Cancellation Policies</p>
                </div>
                <div>
                    <img src={support} alt="" />
                    <p>Help Support</p>
                </div>
            </footer>
        </div>
    </div>
  )
}

export default orders