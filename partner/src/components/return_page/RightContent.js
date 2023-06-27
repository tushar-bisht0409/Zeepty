import React from 'react'
import ReturnGraph from './ReturnGraph'
import ReturnOverview from './ReturnOverview'   
import ReturnTrack from './ReturnTrack'

export default function RightContent() {
  return (
    <div style={{width: '75vw',marginLeft: '25vw'}}>
        <ReturnOverview />
        <div id='returnIt'>
            <ReturnTrack />
            <ReturnGraph />
        </div>
    </div>
  )
}
