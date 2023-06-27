import React from 'react'
import HomePage from './pages/home_page/home_page';
import InHomePage from './inpages/home_page/home_page';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const ipmerge = () => {
  return (
    <div className='ipmerge'>
        <div className='ipComp'>
            <div className='in'>
                <Link to="/partnerRegister">Partner</Link>
            </div>
            <div className='in'>
                <Link to="/in">Influencer</Link>
            </div>
        </div>
        {/* <Router> */}
            <Routes>
                {/* <Route path="/" element={<IPMerge />} /> */}
                <Route path='/partner' element={<HomePage />} />
                <Route path='/in' element={<InHomePage />} />
            </Routes>
        {/* </Router> */}
    </div>
  )
}

export default ipmerge