import { useEffect, useState } from "react";
import { useSelector, useStore, connect, Provider, useDispatch } from "react-redux";
import RScheduled from "../rScheduled/rScheduled";
import RInfoTitleBar from "../rInfo_titleBar/rInfo_titleBar";
import RTransit from "../rTransit/rTransit";
import RDelivered from "../rDelivered/rDelivered";
import RLost from "../rLost/rLost";
import nothingHere from '../../../assets/supplier/images/nothingHere.png'
import './rInfo_box.css'

const RInfoBox = ({ data, mode }) => {

    return (
        <>
            {
                (data === undefined) ?
                    null : data.length === 0 ? 
                    <div className="riBox-nothing">
        <img className="riBox-nothing-img" src={nothingHere}></img>
      </div> :
                    <>
                        <RInfoTitleBar />
                        {data.map((d) => {
                            return (
                                <div>{mode === "scheduled" ? <RScheduled item={d} /> : mode === "transit" ? <RTransit item={d} /> : mode === "delivered" ? <RDelivered item={d} /> : mode === "lost" ? <RLost item={d} /> : null}</div>
                            )
                        })}
                    </>

            }

        </>
    )
}

function mapStateToProps(state) {
    const data = state.returnReducer;
    let product;
    if (data.mode == "scheduled")
        product = data.scheduled;
    else if (data.mode == "transit")
        product = data.transit;
    else if (data.mode == "delivered")
        product = data.delivered;
    else if (data.mode == "lost")
        product = data.lost;
    return { data: product, mode: data.mode }
}

export default connect(mapStateToProps)(RInfoBox)