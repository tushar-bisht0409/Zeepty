import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import './inactiveListingTableItem.css'
import { useParams } from "react-router-dom";
import { editListingES } from "../../../../store/action/listingaction";
import { UPDATE_INACTIVE_INFO, UPDATE_OUTOFSTOCK_INFO, UPDATE_STOCK_INFO } from "../../../../store/action/type";
import Modal from 'react-modal';

function InactiveListingTableItem({ item }) {

    const dispatch = useDispatch();

    const [newStock, setNewStock] = useState("");

    const [listing, setListing] = useState(undefined);

    const [isStockNew, setIsStockNew] = useState(true);

    const [loader1, setLoader1] = useState(false);

    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };


    function getSize(str) {
        return str.split("_").map((word) => {
            if (str.includes("_")) {
                return word.charAt(0).toUpperCase() + word.slice(1)
            } else {
                return str.toUpperCase()
            }
        }).join(" ")
    }

    useEffect(() => {
        setListing(item)
        setNewStock(item.product_size.inventory);
    }, [item])

    function handleNewStock(str) {
        setNewStock(str)
        if (parseInt(str) === parseInt(listing.product_size.inventory) || str.trim() === "") {
            setIsStockNew(false);
        } else {
            setIsStockNew(true);
        }
    }

    async function handlActiveStatus () {

        let newInfo = listing;
        newInfo.product_size.inventory = 0;

        let obj = {
          listing_id: listing.listing_id,
          sku_id: listing.sku_id,
          style_code: listing.style_code,
          type: "active",
          active: false,
          product_size: newInfo.product_size
        }
    
        const json = await editListingES(obj);
        if(json.success) {
            dispatch({
                type: UPDATE_INACTIVE_INFO,
                payload: {
                    listing: newInfo,
                }
            });
        } else {
          window.alert("Something Went Wrong");
        }
      }

    async function editStock() {
        setLoader1(true);
        let newSizeInfo = listing.product_size;
        if (newStock < 0) {
            newSizeInfo.inventory = 0;
        } else {
            newSizeInfo.inventory = newStock;
        }

        let obj = {
            listing_id: listing.listing_id,
            sku_id: listing.sku_id,
            style_code: listing.style_code,
            type: "inventory",
            product_size: newSizeInfo
        }

        const json = await editListingES(obj);

        if (json.success) {
            let newInfo = listing;
            newInfo.product_size.inventory = newStock;
            setListing(newInfo);
            setIsStockNew(false);
            dispatch({
                type: UPDATE_STOCK_INFO,
                payload: {
                    listing: newInfo,
                }
            });
        } else {
            // window.alert("Something Went Wrong");
        }
        setLoader1(false);
    }



    return (
        listing === undefined ? <></> : <div className="inatitem">
            <div className="inatitem-info">
                <img src={item.media_urls[0]} className="inatitem-info-img" />
                <div className="inatitem-info-div">
                    <span className="inatitem-info-div-key">SKU ID: <span className="inatitem-info-div-value">{listing.sku_id}</span></span>
                    <span className="inatitem-info-div-key">Price: <span className="inatitem-info-div-value">Rs.{listing.price}</span></span>
                </div>
            </div>
            <div className="inatitem-size">{getSize(listing.product_size.size)}</div>
            <div className="inatitem-stock">
                <div className="inatitem-stock-div">
                    <input type="number" disabled={loader1} value={newStock} onChange={(e) => { handleNewStock(e.target.value) }} className="inatitem-stock-div-input" />
                    <div className="inatitem-stock-div-icon"><i style={{}} class="fa-solid fa-pencil"></i></div>
                </div>
                <p className={isStockNew ? "natitem-stock-error-none" : "natitem-stock-error"}>Please input the stock</p>
                {/* {loader1 ? <></> : isStockNew ? <div className="inatitem-stock-action">
                    <div onClick={() => { handleNewStock(listing.product_size.inventory) }} className="inatitem-stock-action-cancel">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div onClick={editStock} className="inatitem-stock-action-save">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div> : null} */}
            </div>

            <div className="inatitem-action">
                <div className="inatitem-action-edit">Edit</div>
                <div onClick={()=>{if(parseInt(newStock) === 0 || newStock === ""){
                    setIsStockNew(false)
                } else {setIsOpen(true)}}} className="inatitem-action-inactive">Make Active</div>
            </div>

            <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setIsOpen(false)}}
        style={customStyles}
      >        
      <div className="inatitem-modal">
      <div className='inatitem-modal-icon'><i class="fa-solid fa-play"></i></div>
      <h2 className='inatitem-modal-T1'>Make Active</h2>
      </div>

      <div className='inatitem-modal-T2'>Are You Sure Want to make this product active?</div>
      <div className="inatitem-modal-option">
        <p onClick={()=>{
          setIsOpen(false);
        }} className='inatitem-modal-option-no'>No</p>
        <p onClick={handlActiveStatus} className='inatitem-modal-option-yes'>Yes</p>
      </div>
      
    </Modal>

        </div>

    )
}


export default InactiveListingTableItem;