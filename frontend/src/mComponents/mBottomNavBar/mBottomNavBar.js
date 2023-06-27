import React, { useEffect, useState } from 'react'
import './mBottomNavBar.css'

const MBottomNavBar = ({bMode}) => {

  return (
    <div className='mbnBox'>
        <div onClick={()=>{
          window.open(`/`,'_self');
        }} className='mbnItem'>
        <i  style={{color: bMode === "Home"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-house"></i>
        <p className={bMode === "Home"? 'mbnItemTextActive' :'mbnItemText'}>Home</p>
        </div>

        <div onClick={()=>{
          window.open(`/explore`,'_self');
        }} className='mbnItem'>
        <i  style={{color: bMode === "Explore"? '#554BDA' : 'grey',fontSize:'18px'}} class="fa-solid fa-compass"></i>
        <p className={bMode === "Explore"? 'mbnItemTextActive' :'mbnItemText'}>Explore</p>
        </div>

        <div onClick={()=>{
          window.open(`/`,'_self');
        }} className='mbnItem'>
        <i  style={{color: bMode === "Looks"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-clapperboard"></i>
        <p className={bMode === "Looks"? 'mbnItemTextActive' :'mbnItemText'}>Looks</p>
        </div>

        <div onClick={()=>{
          window.open(`/cart`,'_self');
        }} className='mbnItem'>
        <i  style={{color: bMode === "Cart" ? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-cart-shopping"></i>
        <p className={bMode === "Cart"? 'mbnItemTextActive' :'mbnItemText'}>Cart</p>
        </div>

        <div onClick={()=>{
          window.open(`/user`,'_self');
        }} className='mbnItem'>
        <i  style={{color: bMode === "Profile"? '#554BDA' : 'grey',fontSize:'16px'}} class="fa-solid fa-user"></i>
        <p className={bMode === "Profile"? 'mbnItemTextActive' :'mbnItemText'}>Profile</p>
        </div>
    </div>
  )
}

export default MBottomNavBar