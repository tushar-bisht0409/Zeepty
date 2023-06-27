import React from 'react'
import './Policy.css'
import lang from '../../../assets/lang.png'
import policy from '../../../assets/policy.png'

const Policy = () => {
  return (
    <>
        <div className="policy">
            <div className="policyItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-earth-asia"></i>
                <p className="policyItemText">Change Language</p>
            </div>
            <div className="policyItem">
            <i style={{fontSize: '20px', color: '#554BDA'}} class="fa-solid fa-shield"></i>
                <p className="policyItemText">Terms & Conditions</p>
            </div>
        </div>
        <div id='btn'>
            <button>Logout</button>
        </div>
    </>
  )
}

export default Policy