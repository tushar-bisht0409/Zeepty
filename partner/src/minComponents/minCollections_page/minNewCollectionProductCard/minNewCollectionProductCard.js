import React, { useEffect, useState } from 'react'
import './minNewCollectionProductCard.css';
import Modal from 'react-modal';
import { editProductES, getproduct_info } from '../../../store/action/productaction';
import MINRatingBox from '../../minRatingBox/minRatingBox';


const MINNewCollectionProductCard = ({ item, selectedArray, setSelectedArray}) => {

  const [list,setList] = useState(JSON.parse(localStorage.getItem('sellerInfo')).wishlist);   //wishlist data

  const [isWishlisted, setIsWishlisted] = useState(undefined);

  const [loader1, setLoader1] = useState(false);

  const [isSelected, setIsSelected] = useState(false);

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
          let ind = selectedArray.findIndex((obj) => obj. product_id === item.product_id && obj.style_code === item.style_code);
          if(ind === -1){
            setIsSelected(false)
          } else{
            setIsSelected(true);
          }
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

   function handleSelection() {
    let ind = selectedArray.findIndex((obj) => obj. product_id === item.product_id && obj.style_code === item.style_code);
    if(ind === -1){
      selectedArray.push({product_id: item.product_id, style_code: item.style_code});
      setIsSelected(true)
    } else{
      selectedArray.splice(ind,1);
      setIsSelected(false);
    }
    setSelectedArray([...selectedArray])
   }

  return (
    product === undefined ? <></> :
    <div className="minNCPC-Box" >
      <div onClick={handleSelection} className={isSelected ? 'minNCPC-Box-check' : 'minNCPC-Box-check-inactive'}>
        <i class="fa-solid fa-check"></i>
      </div>
      <div className="minNCPC-ImageBox">
        <img onClick={()=>{}} className="minNCPC-Image" src={product===undefined? "":product.media_urls[0]} alt="logos"/>
      </div>
      <div onClick={()=>{}} className="minNCPC-InfoBox">
        <p className="minNCPC-InfoB">{product===undefined? "":product.brand}</p>
        <p className="minNCPC-InfoT">{product===undefined? "":product.product_name}</p>
        <div className="minNCPC-InfoP">
          <div className="minNCPC-InfoPP">Rs.{product===undefined? "":product.price}</div>
          <s className="minNCPC-InfoPM">Rs.{product===undefined? "":product.mrp}</s>
          <div className="minNCPC-InfoPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
         </div>       
        <div className="minNCPC-InfoRB">
          <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
          <div className="minNCPC-InfoRBText">({product===undefined? "":product.rating_total})</div>
        </div>
        {/* <div onClick={()=>{
          if(storeStage===1){
            setCModalIsOpen(true);
          } else{
          setModalIsOpen(true)
          }
          }}  className='minNCPC-Added'>Edit</div>  */}

          {loader1 ? <div className='minNCPC-Loader1'></div> : null}
            {/* {loader1 ? <></> : product.active ? <div onClick={()=>{setDModalIsOpen(true)}} className='minNCPC-InfoBox-rfs'>Remove</div> : <div onClick={()=>{handleEditProductES('active', true)}} className='minNCPC-InfoBox-ats'>Add To Store</div>} */}
            {/* {loader1 ? <></> : <div onClick={()=>{setModalIsOpen(true)}} className='minNCPC-InfoBox-ep'>Edit Price</div>} */}
      </div>
      <Modal
        // className="minCreateModal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <>
         <div className='minNCPC-Modal'>
            <div className='minNCPC-ModalClose'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
                fontSize: '20px',
                color: 'black'
        }} class="fa-solid fa-xmark"></i>
            </div>
            <div className='minNCPC-ModalPB'>
                <img className='minNCPC-ModalPBImage' src={product===undefined? "":product.media_urls[0]}/>
                <div className='minNCPC-ModalPBInfoBox'>
                    <p className='minNCPC-ModalPBInfoBoxB'>{product===undefined? "":product.brand}</p>
                    <p className='minNCPC-ModalPBInfoBoxT'>{product===undefined? "":product.product_name}</p>
                    <div className="minNCPC-ModalPBInfoBoxP">
                    <div className="minNCPC-ModalPBInfoBoxPP">Rs.{product===undefined? "":product.price}</div>
                    <s className="minNCPC-ModalPBInfoBoxPM">Rs.{product===undefined? "":product.mrp}</s>
                    <div className="minNCPC-ModalPBInfoBoxPD">{product===undefined? "":Math.round((product.mrp - product.price)*100/product.mrp)}% Off</div>
                    </div>
                    <div className="minNCPC-ModalPBInfoBoxRB">
                    <MINRatingBox stars={product===undefined? 0:product.rating_count}></MINRatingBox>
                    <div className="minNCPC-ModalPBInfoBoxRBText">({product===undefined? "":product.rating_total})</div>
                    </div>
                </div>
            </div>
                <div className='minNCPC-ModalPBEditBox'>
                    <p className='minNCPC-ModalPBEditBoxT'>Selling Price</p>
                    <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minNCPC-ModalPBEditBoxI'></input>
                </div>                

                <div onClick={()=>{handleEditProductES('price', false);setModalIsOpen(false);}} className='minNCPC-ModalAddButton'>Edit Price</div>
         </div>
         </>
        </Modal>

        <Modal
        className="minNCPC-removeModal"
        isOpen={dModalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setDModalIsOpen(false)}}
        style={customStyles2}>
          <>
          <div className='minNCPC-removeModalHead'>
          <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-cancel"></i>
          <p className='minNCPC-removeModalHeadT1'>Remove From Collection</p>
          </div>

          <p className='minNCPC-removeModalBodyT1'>Do you want to remove this product ${product.product_name} from your store?</p>

          <div className='minNCPC-removeModalAction'>
            <p onClick={()=>{setDModalIsOpen(false)}} className='minNCPC-removeModalActionN'>No</p>
            <p onClick={()=>{handleEditProductES('active', false)}} className='minNCPC-removeModalActionY'>Yes</p>
          </div>
          </>
        </Modal>

    </div>
  )
}

export default MINNewCollectionProductCard