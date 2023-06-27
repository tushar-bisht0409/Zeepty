import "./orderHead.css";
const OrderHead = ({ mode }) => {

  return (
    <>
      {mode === "pending" ? <div className="oh-box">
        <p className="oh-box-orderid"></p>
        <p className="oh-box-info">Product Information</p>
        <p className="oh-box-quantity">Quantity</p>
        <p className="oh-box-price">Price</p>
        <p className="oh-box-dispatch">Dispatch By</p>
      </div> : mode === "RTS" ?
        <div className="oh-box">
          <p className="oh-box-orderid"></p>
          <p className="oh-box-info">Product Information</p>
          <p className="oh-box-quantity">Quantity</p>
          <p className="oh-box-price">Price</p>
          <p className="oh-box-dispatch">Action</p>
        </div> : mode === "shipped" ?
          <div className="oh-box">
            <p className="oh-box-orderid"></p>
            <p className="oh-box-info">Product Information</p>
            <p className="oh-box-quantity">Quantity</p>
            <p className="oh-box-price">Price</p>
            <p className="oh-box-dispatch">Time</p>
          </div> : mode === "cancelled" ?
            <div className="oh-box">
              <p className="oh-box-orderid"></p>
              <p className="oh-box-info">Product Information</p>
              <p className="oh-box-quantity">Quantity</p>
              <p className="oh-box-price">Price</p>
              <p className="oh-box-dispatch">Time</p>
            </div> : mode === "delivered" ?
            <div className="oh-box">
              <p className="oh-box-orderid"></p>
              <p className="oh-box-info">Product Information</p>
              <p className="oh-box-quantity">Quantity</p>
              <p className="oh-box-price">Price</p>
              <p className="oh-box-dispatch">Time</p>
            </div> : null}
    </>
  );
};

export default OrderHead;
