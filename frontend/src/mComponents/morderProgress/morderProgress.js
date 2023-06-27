import React from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai';
import './morderProgress.css'

export default function MOrderProgress ({circleIndex}) {
  return (
<div className="mopBox">
                        <div className="mopItem">
                            <div className="mopItemL">
                                <div className="mopItemLCircleActive"></div>
                                <div className={circleIndex >1 ? "mopItemLLineActive" : "mopItemLLineInActive"}></div>
                            </div>
                            <div className="mopItemR">
                                <p className='mopItemRT1'>Order Confirmed</p>
                                <p className='mopItemRT2'>Order Placed on 31 Dec</p>
                            </div>
                        </div>
                        <div className="mopItem">
                            <div className="mopItemL">
                                <div className={circleIndex >1 ? "mopItemLCircleActive" : "mopItemLCircleInActive"}></div>
                                <div className={circleIndex >2 ?"mopItemLLineActive" : "mopItemLLineInActive"}></div>
                            </div>
                            <div className="mopItemR">
                                <p className='mopItemRT1'>Shipped</p>
                                <p className='mopItemRT2'>Expected by 31 Dec</p>
                            </div>
                        </div>
                        <div className="mopItem">
                            <div className="mopItemL">
                            <div className={circleIndex >2 ? "mopItemLCircleActive" : "mopItemLCircleInActive"}></div>
                                <div className={circleIndex >3 ?"mopItemLLineActive" : "mopItemLLineInActive"}></div>
                            </div>
                            <div className="mopItemR">
                                <p className='mopItemRT1'>Out for delivery</p>
                                <p className='mopItemRT2'>Expected by 31 Dec</p>
                            </div>
                        </div>
                        <div className="mopItem">
                            <div className="mopItemL">
                            <div className={circleIndex >3 ? "mopItemLCircleActive" : "mopItemLCircleInActive"}></div>
                            </div>
                            <div className="mopItemR">
                                <p className='mopItemRT1'>Delivered</p>
                                <p className='mopItemRT2'>Expected by 31 Dec</p>
                            </div>
                        </div>
                        </div>

  );
}