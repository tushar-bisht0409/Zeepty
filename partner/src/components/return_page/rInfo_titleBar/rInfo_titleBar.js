import { connect } from "react-redux";
import "./rInfo_titleBar.css";
const RInfoTitleBar = ({ mode }) => {
  return (
    <>
      {mode === "scheduled" ? <div className="ritbbox">
        <p className="ritbbox-orderid"></p>
        <p className="ritbbox-info">Product Information</p>
        <p className="ritbbox-quantity">Quantity</p>
        <p className="ritbbox-price">Price</p>
        <p className="ritbbox-dispatch">Time</p>
      </div> : mode === "transit" ?
        <div className="ritbbox">
          <p className="ritbbox-orderid"></p>
          <p className="ritbbox-info">Product Information</p>
          <p className="ritbbox-quantity">Quantity</p>
          <p className="ritbbox-price">Price</p>
          <p className="ritbbox-dispatch">Time</p>
        </div> : mode === "ofd" ?
          <div className="ritbbox">
            <p className="ritbbox-orderid"></p>
            <p className="ritbbox-info">Product Information</p>
            <p className="ritbbox-quantity">Quantity</p>
            <p className="ritbbox-price">Price</p>
            <p className="ritbbox-dispatch">Time</p>
          </div> : mode === "delivered" ?
            <div className="ritbbox">
              <p className="ritbbox-orderid"></p>
              <p className="ritbbox-info">Product Information</p>
              <p className="ritbbox-quantity">Quantity</p>
              <p className="ritbbox-price">Price</p>
              <p className="ritbbox-dispatch">Time</p>
            </div> : mode === "lost" ?
            <div className="ritbbox">
              <p className="ritbbox-orderid"></p>
              <p className="ritbbox-info">Product Information</p>
              <p className="ritbbox-quantity">Quantity</p>
              <p className="ritbbox-price">Price</p>
              <p className="ritbbox-dispatch">Action</p>
            </div> : null}
    </>
  );
};

function mapStateToProps(state){
    const data = state.returnReducer;
    return {mode:data.mode}
}

export default connect(mapStateToProps)(RInfoTitleBar)
