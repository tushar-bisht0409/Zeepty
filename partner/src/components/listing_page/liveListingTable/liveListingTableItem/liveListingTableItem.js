import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import './liveListingTableItem.css'
import { useParams } from "react-router-dom";
import { editListingES } from "../../../../store/action/listingaction";
import { UPDATE_INACTIVE_INFO, UPDATE_OUTOFSTOCK_INFO, UPDATE_STOCK_INFO } from "../../../../store/action/type";
import Modal from 'react-modal';

function LiveListingTableItem({ item }) {

    const dispatch = useDispatch();

    const [newStock, setNewStock] = useState("");

    const [listing, setListing] = useState(undefined);

    const [isStockNew, setIsStockNew] = useState(false);

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
          active: true,
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
            window.alert("Something Went Wrong");
        }
        setLoader1(false);
    }



    return (
        listing === undefined ? <></> : <div className="lltitem">
            <div className="lltitem-info">
                <img src={item.media_urls[0]} className="lltitem-info-img" />
                <div className="lltitem-info-div">
                    <span className="lltitem-info-div-key">SKU ID: <span className="lltitem-info-div-value">{listing.sku_id}</span></span>
                    <span className="lltitem-info-div-key">Price: <span className="lltitem-info-div-value">Rs.{listing.price}</span></span>
                </div>
            </div>
            <div className="lltitem-size">{getSize(listing.product_size.size)}</div>
            <div className="lltitem-stock">
                {parseInt(listing.product_size.inventory) === 0 ? <div className="lltitem-stock-oos">Out of stock</div> :
                    parseInt(listing.product_size.inventory) <= 5 ? <div className="lltitem-stock-los">Low on stock</div> : null}
                <div className="lltitem-stock-div">
                    <input type="number" disabled={loader1} value={newStock} onChange={(e) => { handleNewStock(e.target.value) }} className="lltitem-stock-div-input" />
                    <div className="lltitem-stock-div-icon"><i style={{}} class="fa-solid fa-pencil"></i></div>
                </div>
                {loader1 ? <></> : isStockNew ? <div className="lltitem-stock-action">
                    <div onClick={() => { handleNewStock(listing.product_size.inventory) }} className="lltitem-stock-action-cancel">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div onClick={editStock} className="lltitem-stock-action-save">
                        <i class="fa-solid fa-check"></i>
                    </div>
                </div> : null}
            </div>

            <div className="lltitem-action">
                <div className="lltitem-action-edit">Edit</div>
                <div onClick={()=>{setIsOpen(true)}} className="lltitem-action-inactive">Make Inactive</div>
            </div>

            <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={()=>{setIsOpen(false)}}
        style={customStyles}
      >        
      <div className="lltitem-modal">

      <div className='lltitem-modal-icon'><i class="fa-solid fa-pause"></i></div>
      <h2 className='lltitem-modal-T1'>Make Inactive</h2>
      </div>

      <div className='lltitem-modal-T2'>Are You Sure Want to make this product inactive?</div>
      <div className="lltitem-modal-option">
        <p onClick={()=>{
          setIsOpen(false);
        }} className='lltitem-modal-option-no'>No</p>
        <p onClick={handlActiveStatus} className='lltitem-modal-option-yes'>Yes</p>
          
      </div>
      
    </Modal>

        </div>

    )
}


export default LiveListingTableItem;