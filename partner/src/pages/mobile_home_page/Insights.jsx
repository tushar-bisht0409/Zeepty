import React from 'react'

export default function Insights() {
  let views = 0
  let analytics = 0

  return (
    <div className="insights">
        <div className="insight_top">
            <p>Business Insights</p>
            <select name="insight" id="insight">
                <option value="daily">Daily</option>
                <option value="monthly">Monthy</option>
                <option value="yearly">Yearly</option>
            </select>
        </div>
        <div className="graph"></div>
        <div className="views">
          <div className="box1">
            <div id="view">
              <p>Views</p>
              <p>{views}</p>
            </div>
            {/* <p>{analytics}</p> */}
          </div>
          <div className="box1">
            <div id="view">
              <p>Views</p>
              <p>{views}</p>
            </div>
            {/* <p>{analytics}</p> */}
          </div>
        </div>
    </div>
  )
}
