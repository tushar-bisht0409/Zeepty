import { useEffect, useRef, useState } from "react";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
  } from "recharts";

  import './statsGraph.css'



export default function StatsGraph() {

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
        <div className="sgraphBox">
            <div className="sgraphTB">
                <p className="sgraphTBLT1">Bussiness Insights</p>
                <div onClick={()=>{setDrop1(!drop1);}} className='sgraphTBR'>
                    <p className='sgraphTBRT1'>{drop1value}</p>
                    <i style={{fontSize:'12px'}} class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            <div ref={d1Ref} className= { drop1? 'sgraphTBRDD' : 'sgraphTBRDDInactive'}>
                <p onClick={()=>{changeDrop1('Daily')}} className='sgraphTBRDDText'>Daily</p>
                <p onClick={()=>{changeDrop1('Weekly')}}  className='sgraphTBRDDText'>Weekly</p>
                <p onClick={()=>{changeDrop1('Monthly')}}  className='sgraphTBRDDText'>Monthly</p>
                <p onClick={()=>{changeDrop1('All')}}  className='sgraphTBRDDText'>All</p>
            </div>

            <div className="sgraphGB">
            <LineChart width={window.innerWidth * 0.6} height={window.innerWidth * 0.3} data={[{click: 30, order: 5, month: '1'},{click: 60, order: 20,month: '2'},{click: 20, order: 2,month: '3'}]}>
            <XAxis dataKey="month"/>
            <YAxis />
            <Line type="linear" dataKey="click" stroke="#8884d8" />
            <Line type="linear" dataKey="order" stroke="#82ca9d" />
            </LineChart>
            </div>

            <div className="sgraphSB">
                <div className="sgraphSBB1">
                    <span className="sgraphSBB1T1">Views <span className="sgraphSBB1T1T1">({drop1value})</span></span>
                    <div className="sgraphSBB1B">
                    <p className="sgraphSBB1BT1">1000</p>
                    <div className="sgraphSBB1BD">
                    <i style={{fontSize:'12px', color: 'green'}} class="fa-solid fa-caret-up"></i>
                    <p className="sgraphSBB1BDT1G">80.00%</p>
                    </div>
                    </div>
                </div>

                <div className="sgraphSBB2">
                <span className="sgraphSBB2T1">Orders <span className="sgraphSBB2T1T1">({drop1value})</span></span>
                    <div className="sgraphSBB2B">
                    <p className="sgraphSBB2BT1">1000</p>
                    <div className="sgraphSBB2BD">
                    <i style={{fontSize:'12px', color: 'red'}} class="fa-solid fa-caret-down"></i>
                    <p className="sgraphSBB2BDT1R">80.00%</p>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}