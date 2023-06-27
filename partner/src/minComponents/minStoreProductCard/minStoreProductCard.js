import React, { useEffect, useState } from 'react'
import MINRatingBox from '../minRatingBox/minRatingBox'
import './minStoreProductCard.css';
import Modal from 'react-modal';
import { API_URI } from '../../store/action/type';
import {v4 as uuidv4} from 'uuid';
import { getlisting_info } from '../../store/action/listingaction';
import { editProductES, getproduct_info, postMultipleProductInMongoAndElastic, saveProduct } from '../../store/action/productaction';


const MINStoreProductCard = ({setCModalIsOpen,storeStage, item,lMode,increasePCount}) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('sellerInfo')).wishlist);   //wishlist data

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const [loader1, setLoader1] = useState(false)

  const routeToProductDesc = ()=>{
    window.open(`/m2/${product.listing_id}/${product.sku_id}`);
  }

    const [product,setProduct] = useState(undefined);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [newPrice,setNewPrice] = useState("");
    
    const [dModalIsOpen,setDModalIsOpen] = useState(false);




    const customStyles = {
        content: {
          alignSelf: 'center',
          padding: '0px',
          margin: '15vh 0px',
          height: 'fit-content',
          alignSelf: 'center',
        },
        overlay: {zIndex: 1000}
      };

      const customStyles2 = {
        content: {
          alignSelf: 'center',
          margin: '30vh 4vw 0vh 4vw',
          width: '92vw',
          height: 'fit-content',
          padding: '3vh 8vw',
        },
        overlay: {zIndex: 1000,backgroundColor: 'rgb(0,0,0,0.5)'}
      };
    
    useEffect(()=>{
        const getProduct = async ()=> {
            const obj = {
                product_id: item.product_id,
                sku_id: item.sku_id,
                style_code: item.style_code,
                type: `productSKUStyle`
              }
              const json = await getproduct_info(obj);
              console.log(json);
              if(json.success)
              {
                setProduct(json.msz);
              }
          }
          getProduct();
    },[])


   async function handleEditProductES(type,active) {
    setLoader1(true);
    const obj = {
      type: type,
      product_id: product.product_id,
      price: newPrice,
      active: active
    } 

    const json = await editProductES(obj);
    if(json.success){
      if(type === "active"){
        product.active = active;
      } else if(type === "price"){
        product.price = newPrice;
      }
      setProduct(product);
    } else{
      window.alert("Something Went Wrong");
    }
    setLoader1(false);
   }

  return (
    product === undefined ? <></> :
    <div className="minSPC-Box" >
      <div className="minSPC-ImageBox">
        <img onClick={()=>{}} className="minSPC-Image" src={product===undefined? "":product.media_urls[0]} alt="logos"/>

      </div>
      <div onClick={()=>{}} className="minSPC-InfoBox">
        <p className="minSPC-InfoB">{product===undefined? "":product.brand}</p>
        <p className="minSPC-InfoT">{product===undefined? "":product.product_name}</p>
        <div className="minSPC-InfoP">
          <div className="minSPC-InfoPP">Rs.{product===undefined? "":product.price}</div>
          <s className="minSPC-InfoPM">Rs.{product===undefined? "":product.mrp}</s>
          <div className="minSPC-InfoPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
         </div>       
        <div className="minSPC-InfoRB">
          <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
          <div className="minSPC-InfoRBText">({product===undefined? "":product.rating_total})</div>
        </div>
        {/* <div onClick={()=>{
          if(storeStage===1){
            setCModalIsOpen(true);
          } else{
          setModalIsOpen(true)
          }
          }}  className='minSPC-Added'>Edit</div>  */}

          {loader1 ? <div className='minSPC-Loader1'></div> : null}
            {loader1 ? <></> : product.active ? <div onClick={()=>{setDModalIsOpen(true)}} className='minSPC-InfoBox-rfs'>Remove From Store</div> : <div onClick={()=>{handleEditProductES('active', true)}} className='minSPC-InfoBox-ats'>Add To Store</div>}
            {loader1 ? <></> : <div onClick={()=>{setModalIsOpen(true)}} className='minSPC-InfoBox-ep'>Edit Price</div>}
      </div>
      <Modal
        // className="minCreateModal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <>
         <div className='minSPC-Modal'>
            <div className='minSPC-ModalClose'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
                fontSize: '20px',
                color: 'black'
        }} class="fa-solid fa-xmark"></i>
            </div>
            <div className='minSPC-ModalPB'>
                <img className='minSPC-ModalPBImage' src={product===undefined? "":product.media_urls[0]}/>
                <div className='minSPC-ModalPBInfoBox'>
                    <p className='minSPC-ModalPBInfoBoxB'>{product===undefined? "":product.brand}</p>
                    <p className='minSPC-ModalPBInfoBoxT'>{product===undefined? "":product.product_name}</p>
                    <div className="minSPC-ModalPBInfoBoxP">
                    <div className="minSPC-ModalPBInfoBoxPP">Rs.{product===undefined? "":product.price}</div>
                    <s className="minSPC-ModalPBInfoBoxPM">Rs.{product===undefined? "":product.mrp}</s>
                    <div className="minSPC-ModalPBInfoBoxPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
                    </div>
                    <div className="minSPC-ModalPBInfoBoxRB">
                    <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
                    <div className="minSPC-ModalPBInfoBoxRBText">({product===undefined? "":product.rating_total})</div>
                    </div>
                </div>
            </div>
                <div className='minSPC-ModalPBEditBox'>
                    <p className='minSPC-ModalPBEditBoxT'>Selling Price</p>
                    <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minSPC-ModalPBEditBoxI'></input>
                </div>                

                <div onClick={()=>{handleEditProductES('price', false);setModalIsOpen(false);}} className='minSPC-ModalAddButton'>Edit Price</div>
         </div>
         </>
        </Modal>

        <Modal
        className="minSPC-removeModal"
        isOpen={dModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setDModalIsOpen(false)}}
        style={customStyles2}>
          <>
          <div className='minSPC-removeModalHead'>
          <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-cancel"></i>
          <p className='minSPC-removeModalHeadT1'>Remove From store</p>
          </div>

          <p className='minSPC-removeModalBodyT1'>Do you want to remove this product ${product.product_name} from your store?</p>

          <div className='minSPC-removeModalAction'>
            <p onClick={()=>{setDModalIsOpen(false)}} className='minSPC-removeModalActionN'>No</p>
            <p onClick={()=>{handleEditProductES('active', false)}} className='minSPC-removeModalActionY'>Yes</p>
          </div>
          </>
        </Modal>

    </div>
  )
}

export default MINStoreProductCard