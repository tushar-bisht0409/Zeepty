import React, { useEffect, useState } from 'react'
import './minBottomNavBar.css'

const MINBottomNavBar = ({bMode}) => {

  return (
    <div className='minbnBox'>
        <div onClick={()=>{
          window.open(`/creator/home`,'_self');
        }} className='minbnItem'>
        <i  style={{color: bMode === "Home"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-house"></i>
        <p className={bMode === "Home"? 'minbnItemTextActive' :'minbnItemText'}>Home</p>
        </div>

        {/* <div className='minbnItem'>
        <i  style={{color: bMode === "Notification"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-bell"></i>
        <p className={bMode === "Notification"? 'minbnItemTextActive' :'minbnItemText'}>Notification</p>
        </div> */}

        <div onClick={()=>{
          window.open(`/minstore`,'_self');
        }} className='minbnItem'>
        <i  style={{color: bMode === "Store"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-store"></i>
        <p className={bMode === "Store"? 'minbnItemTextActive' :'minbnItemText'}>Store</p>
        </div>

        <div onClick={()=>{
          window.open(`/minwish`,'_self');
        }} className='minbnItem'>
        <i  style={{color: bMode === "Wishlist" ? '#554BDA' : 'grey',fontSize:'16px'}} class={bMode === "Wishlist"?"fa-solid fa-heart":"fa-regular fa-heart"}></i>
        <p className={bMode === "Wishlist"? 'minbnItemTextActive' :'minbnItemText'}>Wishlist</p>
        </div>

        <div onClick={()=>{
          window.open(`/minins`,'_self');
        }} className='minbnItem'>
        <i  style={{color: bMode === "Insights"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-chart-line"></i>
        <p className={bMode === "Insights"? 'minbnItemTextActive' :'minbnItemText'}>Insights</p>
        </div>

        <div onClick={()=>{
          window.open(`/creator/profile`,'_self');
        }} className='minbnItem'>
        <i  style={{color: bMode === "Profile"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-user"></i>
        <p className={bMode === "Profile"? 'minbnItemTextActive' :'minbnItemText'}>Profile</p>
        </div>

    </div>
  )
}

export default MINBottomNavBar