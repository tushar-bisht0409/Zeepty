import arrow from '../../images/arrow.png'
import graph from '../../images/graph.png'

export default function Insights() {
    return (
        <div id="insights">
            <div id="head">
                <p>Business Insights</p>
                <div id="time">
                    <p>Daily</p>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div id="graphImg">
                <img src={graph} alt="" />
            </div>
            <div id="list_box" className='listInsight'>
                <div id="list">
                    <span>Views (Date)</span>
                    <p>0000<span id='rate'>80.00%</span></p>
                </div>
                <div id="list">
                    <span>Views (Date)</span>
                    <p>0000<span id='rate'>80.00%</span></p>
                </div>
                <div id="list">
                    <span>Views (Date)</span>
                    <p>0000<span id='rate'>80.00%</span></p>
                </div>
            </div>
        </div>
    )
}