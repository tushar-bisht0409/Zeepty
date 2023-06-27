import React, { useEffect, useRef, useState } from 'react'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar';
import MINProductRevCard from '../../minComponents/minProductRevCard/minProductRevCard';
import './minInsights_page.css'

import money_bag from '../../in_images/money_bag.png';

import money_wings from '../../in_images/money_wings.png';


const MINInsightsPage = () => {

    const arr = [1,2,3,4,5];

    const [drop1,setDrop1] = useState(false);

    const [drop1value,setDrop1value] = useState('Daily');

    const d1Ref = useRef(null);

    function changeDrop1 (dValue){
        console.log("isCHanged")
        setDrop1value(dValue);
        setDrop1(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (d1Ref.current && !d1Ref.current.contains(event.target)) {
            setDrop1(false);
          }
        }
      
        document.addEventListener("mousedown", handleClickOutside);
      
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [d1Ref]);


  return (
    <div className='minIPBox'>

<div className='minIPTB'>
            <p className='minIPTBT1'>Insights</p>
        </div>

        <div className='minIPSum'>
            <div className='minIPSumHeadBox'>
                <p className='minIPSumHeadT1'>Summary</p>
                <div className='minIPSumHeadRB'>
                    <p className='minIPSumHeadRBT1'>View Details</p>
                    <i style={{backgroundColor: '#554BDA',color: 'white',borderRadius:'50%',fontSize:'10px',padding: '2px',alignItems: 'center'}} class="fa-solid fa-arrow-right"></i>
                </div>
            </div>

            <div className='minIPSumBody'>
                <div className='minIPSumBodyB1'>
                    <div className='minIPSumBodyB11'>
                        <p className='minIPSumBodyB11T'>Today's Earning</p>
                        <i style={{fontSize:'16px',}} class="fa-solid fa-hand-holding-dollar"></i>
                    </div>
                    <p className='minIPSumBodyB12T'>Rs. 9999</p>
                </div>

                <div className='minIPSumBodyB2'>
                    <div className='minIPSumBodyB21'>
                        <p className='minIPSumBodyB21T'>Today Sold </p>
                        <i style={{fontSize:'16px',}} class="fa-solid fa-box-open"></i>
                    </div>
                    <p className='minIPSumBodyB22T'>100</p>
                </div>
            </div>
        </div>

        <div className='minIPPoster'>
        </div>

        <div className='minIPRevBox'>
            <div className='minIPRev'>Revenue</div>
            
            <div className='minIPRevBody'>

                <div className='minIPRevBodyB1'>
                    <div className='minIPRevBodyB1H'>
                        <p className='minIPRevBodyB1HT1'>Upcoming</p>
                        <img className='minIPLogo1' src={money_wings}/>
                    </div>
                    <p className='minIPRevBodyB1MT1'>Rs.9999</p>
                    <div className='minIPRevBodyB1LT1'>View</div>
                </div>

                <div className='minIPRevBodyB2'>
                    <div className='minIPRevBodyB2H'>
                        <p className='minIPRevBodyB2HT1'>Balance</p>
                        <img className='minIPLogo1' src={money_bag}/>
                    </div>
                    <p className='minIPRevBodyB2MT1'>Rs.9999</p>
                    <div className='minIPRevBodyB2LT1'>Withdraw</div>
                </div>
            </div>
        </div>



        <div className='minIPOSBox'>
            <div className='minIPOSH'>
                <p className='minIPOSHL'>Products & Orders Stats</p>
                <div onClick={()=>{setDrop1(true);}} className='minIPOSHR'>
                    <p className='minIPOSHRT1'>{drop1value}</p>
                    <i style={{fontSize:'12px'}} class="fa-solid fa-caret-down"></i>
                </div>
            </div>

            <div ref={d1Ref} className= { drop1? 'minIPOSHDD' : 'minIPOSHDDInactive'}>
                <p onClick={()=>{changeDrop1('Daily')}} className='minIPOSHDDText'>Daily</p>
                <p onClick={()=>{changeDrop1('Weekly')}}  className='minIPOSHDDText'>Weekly</p>
                <p onClick={()=>{changeDrop1('Monthly')}}  className='minIPOSHDDText'>Monthly</p>
                <p onClick={()=>{changeDrop1('All')}}  className='minIPOSHDDText'>All</p>
            </div>
            
            <div className='minIPOSBody'>

                <div className='minIPOSBodyB1'>
                    <div className='minIPOSBodyB1H'>
                        <p className='minIPOSBodyB1HT1'>Total Orders</p>
                        <i class="fa-solid fa-dollar"></i>
                    </div>
                    <p className='minIPOSBodyB1MT1'>99</p>
                    <div className='minIPOSBodyB1LT1'>(Tap to view in detail)</div>
                </div>

                <div className='minIPOSBodyB2'>
                    <div className='minIPOSBodyB2H'>
                        <p className='minIPOSBodyB2HT1'>Total Orders</p>
                        <i class="fa-solid fa-box"></i>
                    </div>
                    <p className='minIPOSBodyB2MT1'>99</p>
                    <div className='minIPOSBodyB2LT1'>(Tap to view in detail)</div>
                </div>
            </div>
        </div>

        <div className='minIPLTBox'>
            
            <div className='minIPLTBody'>

                <div className='minIPLTBodyB1'>
                    <div className='minIPLTBodyB1H'>
                        <p className='minIPLTBodyB1HT1'>Lifetime Sales</p>
                        <i class="fa-solid fa-dollar"></i>
                    </div>
                    <p className='minIPLTBodyB1MT1'>9999</p>
                </div>

                <div className='minIPLTBodyB2'>
                    <div className='minIPLTBodyB2H'>
                        <p className='minIPLTBodyB2HT1'>Lifetime Revenue</p>
                        <i class="fa-solid fa-dollar"></i>
                    </div>
                    <p className='minIPLTBodyB2MT1'>Rs. 99999</p>
                </div>
            </div>
        </div>

        <div className='minIPRO'>
        <div className='minIPROHeadBox'>
                <p className='minIPROHeadT1'>Recent Orders</p>
                <div className='minIPROHeadRB'>
                    <p className='minIPROHeadRBT1'>View All</p>
                    <i style={{backgroundColor: '#554BDA',color: 'white',borderRadius:'50%',fontSize:'10px',padding: '2px',alignItems: 'center'}} class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className='minIPROBody'>
                {arr.map((itm)=>(
                    <MINProductRevCard item={itm}/>
                ))}
            </div>
        </div>

        <MINBottomNavBar bMode={"Insights"}/>

        </div>
  )
}

export default MINInsightsPage