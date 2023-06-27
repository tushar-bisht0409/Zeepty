import React, { useEffect, useState } from 'react'
import './minAddProductCard.css';
import Modal from 'react-modal';
import {v4 as uuidv4} from 'uuid';
import MINRatingBox from '../../minRatingBox/minRatingBox';
import { API_URI } from '../../../store/action/type';
import { getproduct_info } from '../../../store/action/productaction';


const MINAddProductCard = ({item,selectedArray, setSelectedArray}) => {

  const [isSelected, setIsSelected] = useState(false);

  function isInSelectedArray (prod,sArray){
    let ind = sArray.findIndex(obj => obj.product_id === prod.product_id);
    if (ind === -1) {
      setIsSelected(false);
    } else {
      setSelectedStyleCode(sArray[ind].style_code);
      setIsSelected(true);
    }
  }

    const [products,setProducts] = useState([]);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [newPrice,setNewPrice] = useState("");
    const [newMrp,setNewMrp] = useState("");

    const [selectedStyleCode, setSelectedStyleCode] = useState(item.style_code);
    const [selectedImage, setSelectedImage] = useState(item.media_urls[0]);


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

      function handleSelection () {
        let ind = selectedArray.findIndex(obj => obj.product_id === item.product_id);
        if (ind === -1) {
          if(selectedArray.length<5){
          selectedArray.push({product_id: item.product_id,style_code: selectedStyleCode});
          setSelectedArray([...selectedArray]);
          setIsSelected(true);
          } else {
            window.alert("You Can Only Select 5 Products");
          }
        } else {
          selectedArray.splice(ind);
          setSelectedArray([...selectedArray]);
          setIsSelected(false);
        }
        
      }
 
    
    useEffect(()=>{


        const getProduct = async ()=> {
            const obj = {
                product_id: item.product_id,
                type: `color_variants`
              }
              const json = await getproduct_info(obj);
              if(json.success)
              {
                setProducts(json.msz);
                isInSelectedArray(item,selectedArray);
                setDraftImage(json.msz)
              }
          }
          getProduct();
    },[]);

    function setDraftImage(products) {
      let ind = selectedArray.findIndex(obj => obj.product_id === item.product_id);
      if (ind === -1) {
      } else {
        let ind2 = products.findIndex(obj => obj.style_code === selectedArray[ind].style_code);
        if(ind2 !== -1){
        setSelectedImage(products[ind2].media_urls[0]);
        }
      }
    }

    function getProductColor(pDetails) {
      let ind = pDetails.findIndex(obj => Object.keys(obj)[0] === 'color');
      if(ind === -1){
        return 'transparent';
      } else {
        return pDetails[ind].color.toLowerCase()
      }
    }

    function selectStyleCodeAndImage (sCode,sImage) {
      let ind = selectedArray.findIndex(obj => obj.product_id === item.product_id);
      if (ind === -1) {
      } else {
        selectedArray[ind].style_code = sCode;
        setSelectedArray([...selectedArray]);
      }
      setSelectedStyleCode(sCode);
      setSelectedImage(sImage);
    }

  return (
    
  <div className="minAPCBox" >
      <div className="minAPCImageBox">
        <img onClick={()=>{}} className="minAPCImage" src={item===undefined? "":selectedImage} alt="logos"/>
        {isSelected ?
          <div onClick={handleSelection} className="minAPCActive"><i class="fa-solid fa-check"></i></div>
        : <div onClick={handleSelection} className="minAPCInActive"></div>}
      </div>
      <div className='minAPCColorBox'>
        {products.map((pp)=>(
          <div onClick={()=>{selectStyleCodeAndImage(pp.style_code,pp.media_urls[0])}} className={selectedStyleCode === pp.style_code ? 'minAPCColor' : 'minAPCColorInactive' }>
            <div className='minAPCColorDot' style={{backgroundColor: getProductColor(pp.product_details)}}></div>
          </div>
        ))}
      </div>
      <div onClick={()=>{}} className="minAPCInfoBox">
        <p className="minAPCInfoB">{item===undefined? "":item.brand}</p>
        <p className="minAPCInfoT">{item===undefined? "":item.product_name}</p>
        <div className="minAPCInfoP">
          <div className="minAPCInfoPP">Rs.{item===undefined? "":item.price}</div>
          <s className="minAPCInfoPM">Rs.{item===undefined? "":item.mrp}</s>
          <div className="minAPCInfoPD">{item===undefined? "":Math.round((item.mrp - item.price)*100/item.mrp)}% Off</div>
         </div>       
        <div className="minAPCInfoRB">
          <MINRatingBox stars={item===undefined? 0:item.rating_count}></MINRatingBox>
          <div className="minAPCInfoRBText">({item===undefined? "":item.rating_total})</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <>
         <div className='minAPCModal'>
            <div className='minAPCModalClose'>
            <i onClick={()=>{setModalIsOpen(false);}} style={{
                fontSize: '20px',
                color: 'black'
        }} class="fa-solid fa-xmark"></i>
            </div>
            <div className='minAPCModalPB'>
                <img className='minAPCModalPBImage' src={item===undefined? "":item.media_urls[0]}/>
                <div className='minAPCModalPBInfoBox'>
                    <p className='minAPCModalPBInfoBoxB'>{item===undefined? "":item.brand}</p>
                    <p className='minAPCModalPBInfoBoxT'>{item===undefined? "":item.product_name}</p>
                    <div className="minAPCModalPBInfoBoxP">
                    <div className="minAPCModalPBInfoBoxPP">Rs.{item===undefined? "":item.price}</div>
                    <s className="minAPCModalPBInfoBoxPM">Rs.{item===undefined? "":item.mrp}</s>
                    <div className="minAPCModalPBInfoBoxPD">{item===undefined? "":Math.round((item.mrp - item.price)*100/item.mrp)}% Off</div>
                    </div>
                    <div className="minAPCModalPBInfoBoxRB">
                    <MINRatingBox stars={item===undefined? 0:item.ratingCount}></MINRatingBox>
                    <div className="minAPCModalPBInfoBoxRBText">({item===undefined? "":item.ratingTotal})</div>
                    </div>
                </div>
            </div>
            <div className='minAPCModalPBEditBox'>
                <div className='minAPCModalPBEditBoxL'>
                    <p className='minAPCModalPBEditBoxLT'>MRP</p>
                    <input value={newMrp} onChange={(val)=>{setNewMrp(val.target.value)}} type="number" className='minAPCModalPBEditBoxLI'></input>
                </div>

                <div className='minAPCModalPBEditBoxR'>
                    <p className='minAPCModalPBEditBoxRT'>Selling Price</p>
                    <input value={newPrice} onChange={(val)=>{setNewPrice(val.target.value)}} type="number" className='minAPCModalPBEditBoxRI'></input>
                </div>                
            </div>

         </div>
         </>
        </Modal>
    </div>
  )
}

export default MINAddProductCard