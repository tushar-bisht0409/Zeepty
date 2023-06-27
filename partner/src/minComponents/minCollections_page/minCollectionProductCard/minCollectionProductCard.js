import React, { useEffect, useState } from 'react'
import './minCollectionProductCard.css';
import Modal from 'react-modal';
import { editProductES, getproduct_info } from '../../../store/action/productaction';
import MINRatingBox from '../../minRatingBox/minRatingBox';
import { editSellerInfo } from '../../../store/action/seller_action';


const MINCollectionProductCard = ({item , collection}) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('sellerInfo')).wishlist);   //wishlist data

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const [loader1, setLoader1] = useState(false);

  const [isRemoved, setIsRemoved] = useState(false);

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
                product_id: "455319d2-d24c-4c8e-bb27-7ff6075ea7c0",//item.product_id,
                sku_id: "111",// item.sku_id,
                style_code: "123",//item.style_code,
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

   async function handleCollectionAction (temp) {
    const obj = {
      "type": "collectionProducts",
      "subType": temp.subType,
      "seller_id": localStorage.getItem('influencer_id'),
      "collection_id": collection.collection_id,
      "products": [{product_id: item.product_id, style_code: item.style_code}],
      // "collection": temp.collection   
  }

  const json = await editSellerInfo(obj);
  if(json.success) {
    if(temp.subType === "add"){
      setIsRemoved(false);
    } else{
      setIsRemoved(true);
      setDModalIsOpen(false);
    }
  } else {
    window.alert("Something went wrong!")
  }
   }

  return (
    product === undefined ? <></> :
    <div className="minCPC-Box" >
      <div className="minCPC-ImageBox">
        <img onClick={()=>{}} className="minCPC-Image" src={product===undefined? "":product.media_urls[0]} alt="logos"/>

      </div>
      <div onClick={()=>{}} className="minCPC-InfoBox">
        <p className="minCPC-InfoB">{product===undefined? "":product.brand}</p>
        <p className="minCPC-InfoT">{product===undefined? "":product.product_name}</p>
        <div className="minCPC-InfoP">
          <div className="minCPC-InfoPP">Rs.{product===undefined? "":product.price}</div>
          <s className="minCPC-InfoPM">Rs.{product===undefined? "":product.mrp}</s>
          <div className="minCPC-InfoPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
         </div>       
        <div className="minCPC-InfoRB">
          <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
          <div className="minCPC-InfoRBText">({product===undefined? "":product.rating_total})</div>
        </div>
        {/* <div onClick={()=>{
          if(storeStage===1){
            setCModalIsOpen(true);
          } else{
          setModalIsOpen(true)
          }
          }}  className='minCPC-Added'>Edit</div>  */}

          {loader1 ? <div className='minCPC-Loader1'></div> : null}
            {loader1 ? <></> : product.active ? isRemoved ? <div onClick={()=>{handleCollectionAction({subType: "add"})}} className='minCPC-InfoBox-rfsundo'>Undo Removed</div> : <div onClick={()=>{setDModalIsOpen(true)}} className='minCPC-InfoBox-rfs'>Remove</div> : <div onClick={()=>{handleEditProductES('active', true)}} className='minCPC-InfoBox-ats'>Add To Store</div>}
            {/* {loader1 ? <></> : <div onClick={()=>{setModalIsOpen(true)}} className='minCPC-InfoBox-ep'>Edit Price</div>} */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <>
         <div className='minCPC-Modal'>
            <div className='minCPC-ModalClose'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
                fontSize: '20px',
                color: 'black'
        }} class="fa-solid fa-xmark"></i>
            </div>
            <div className='minCPC-ModalPB'>
                <img className='minCPC-ModalPBImage' src={product===undefined? "":product.media_urls[0]}/>
                <div className='minCPC-ModalPBInfoBox'>
                    <p className='minCPC-ModalPBInfoBoxB'>{product===undefined? "":product.brand}</p>
                    <p className='minCPC-ModalPBInfoBoxT'>{product===undefined? "":product.product_name}</p>
                    <div className="minCPC-ModalPBInfoBoxP">
                    <div className="minCPC-ModalPBInfoBoxPP">Rs.{product===undefined? "":product.price}</div>
                    <s className="minCPC-ModalPBInfoBoxPM">Rs.{product===undefined? "":product.mrp}</s>
                    <div className="minCPC-ModalPBInfoBoxPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
                    </div>
                    <div className="minCPC-ModalPBInfoBoxRB">
                    <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
                    <div className="minCPC-ModalPBInfoBoxRBText">({product===undefined? "":product.rating_total})</div>
                    </div>
                </div>
            </div>
                <div className='minCPC-ModalPBEditBox'>
                    <p className='minCPC-ModalPBEditBoxT'>Selling Price</p>
                    <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minCPC-ModalPBEditBoxI'></input>
                </div>                

                <div onClick={()=>{handleEditProductES('price', false);setModalIsOpen(false);}} className='minCPC-ModalAddButton'>Edit Price</div>
         </div>
         </>
        </Modal>

        <Modal
        className="minCPC-removeModal"
        isOpen={dModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setDModalIsOpen(false)}}
        style={customStyles2}>
          <>
          <div className='minCPC-removeModalHead'>
          <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-cancel"></i>
          <p className='minCPC-removeModalHeadT1'>Remove From {collection.name} Collection</p>
          </div>

          <p className='minCPC-removeModalBodyT1'>Do you want to remove this product {product.product_name} from {collection.name} collection?</p>

          <div className='minCPC-removeModalAction'>
            <p onClick={()=>{setDModalIsOpen(false)}} className='minCPC-removeModalActionN'>No</p>
            <p onClick={()=>{handleCollectionAction({subType: "delete"})}} className='minCPC-removeModalActionY'>Yes</p>
          </div>
          </>
        </Modal>

    </div>
  )
}

export default MINCollectionProductCard