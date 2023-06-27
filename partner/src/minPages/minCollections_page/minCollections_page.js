import React, { useEffect, useState } from 'react'
import { editSellerInfo, getSellerInfo, saveSellerInfo } from '../../store/action/seller_action';
import './minCollections_page.css'
import Modal from 'react-modal';
import MINCollectionProductCard from '../../minComponents/minCollections_page/minCollectionProductCard/minCollectionProductCard';
import MINNewCollectionProductCard from '../../minComponents/minCollections_page/minNewCollectionProductCard/minNewCollectionProductCard';
import { v4 as uuidv4 } from 'uuid';
import errorOccurred from '../../assets/influencer/images/errorOccurred.png'
import nothingHere from '../../assets/influencer/images/nothingHere.png'
import { getproduct_info } from '../../store/action/productaction';
import MINFullScreenLoader from '../../minComponents/minFullScreen_loader/minFullScreen_loader';
import MINSnackbar from '../../minComponents/minSnackbar/minSnackbar';

const MINCollectionsPage = () => {

    const [userData, setUserData] = useState(undefined);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [sIndex, setSIndex] = useState(undefined);

    const [cName, setCName] = useState("");

    const [showProduct, setShowProduct] = useState(false);
    const [allProducts, setAllProducts] = useState([]);

    const [selectedArray, setSelectedArray] = useState([]);

    const [loader1, setLoader1] = useState(true);
    const [loader2, setLoader2] = useState(true);
    const [loader3, setLoader3] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isError2, setIsError2] = useState(false);
    const [loader4, setLoader4] = useState(false);
    const [isError3, setIsError3] = useState(false);

    const [dModal , setDModal] = useState(false);
    const [sModal,setSModal] = useState(false);


    const customStyles = {
        content: {
          padding: '0px',
          height: 'fit-content',
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


    async function getData(){
        let uID = localStorage.getItem('influencer_id');
        if(uID === null || uID === undefined){
            window.open('/creator/auth','_self');
        } else{
            const json = await getSellerInfo(uID);
            if(json.success === true && json.isNew === false) {
                setUserData(json.msz);
                setLoader1(false)
                if(json.msz.collections.length > 0){
                    setSIndex(0)
                }
            } else if(json.success === true && json.isNew === true){
                window.open('/minsaveinfo','_self');
            } else{
                setIsError(true);
            }
        }
    }
    
    useEffect(()=>{
        getData();
    },[]);


    async function handleCollectionAction () {
        setLoader3(true);
        const obj = {
          "type": "collections",
          "subType": "add",
          "seller_id": localStorage.getItem('influencer_id'),
          "collection": {
            name: cName,
            collection_id: uuidv4(),
            products: selectedArray
          }   
      }
    
      const json = await editSellerInfo(obj);
      if(json.success) {
        window.location.reload()
      } else {
        let sbObject = {message: "An Error Occurred, Couldn't Create Collection", backgroundColor: "red", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
      }
      setLoader3(false);
    }

    async function handleDeleteAction () {
        setLoader3(true);
        const obj = {
          "type": "collections",
          "subType": "delete",
          "seller_id": localStorage.getItem('influencer_id'),
          "collection_id": userData.collections[sIndex].collection_id, 
      }
    
      const json = await editSellerInfo(obj);
      if(json.success) {
        window.location.reload()
      } else {
        let sbObject = {message: "An Error Occurred, Couldn't Delete Collection", backgroundColor: "red", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
      }
      setLoader3(false);
    }

    async function handleGetSellerProducts() {
        setLoader2(true);
        const obj = {
            type: "unique_productStyle",
            seller_id: localStorage.getItem("influencer_id")
        }

        const json = await getproduct_info(obj);
        if(json.success) {
            setAllProducts(json.msz)
        } else if(json.success === false && json.err === null){
        } else{
            setIsError2(true);
        }
        setLoader2(false);
    }

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [snackbarObject, setSnackbarObject] = useState({message: "", backgroundColor: "#181818", color: "white", okColor: "white"})

    const showSnackbarMessage = (sObject) => {
        setSnackbarObject(sObject)
        setShowSnackbar(true);
        setTimeout(() => {
        setShowSnackbar(false);
        setSnackbarObject({message: "", backgroundColor: "#181818", color: "white", okColor: "white"});
        }, 5000);
    }

    async function handleGetSellerProductsForCollections() {
        setLoader4(true);
        allProducts.length = 0;
        const obj = {
            type: "unique_productStyle",
            seller_id: localStorage.getItem("influencer_id")
        }

        const json = await getproduct_info(obj);
        if(json.success) {
            for(let i = 0; i<json.msz.length; i++) {
                let ind = userData.collections[sIndex].products.findIndex((itm)=> itm.product_id === json.msz[i].product_id && itm.style_code === json.msz[i].style_code);
                if(ind === -1){
                    allProducts.push(json.msz[i]);
                }
            }
            setAllProducts([...allProducts]);
        } else if(json.success === false && json.err === null){
        } else{
            setIsError3(true);
        }
        setLoader4(false);
        console.log("LSDLSD: ",allProducts)
    }

    async function handleAddProductsToCollection() {
        setLoader3(true);
        const obj = {
          "type": "collectionProducts",
          "subType": "add",
          "collection_id": userData.collections[sIndex].collection_id,
          "seller_id": localStorage.getItem('influencer_id'),
          "products": selectedArray  
      }
    
      const json = await editSellerInfo(obj);
      if(json.success) {
        window.location.reload()
      } else {
        let sbObject = {message: "An Error Occurred, Couldn't Create Collection", backgroundColor: "red", color: "white", okColor: "white"}
        showSnackbarMessage(sbObject)
      }
      setLoader3(false);
    }

  return (
    
    <>
    <div className='minColl'>
        {loader3 ? <MINFullScreenLoader/> : null}
        <div onClick={()=>{window.history.back()}} className='minColl-topbar'>
            <i onClick={()=>{window.history.back()}} style={{fontSize: '14px',color: '#554BDA', cursor: 'pointer'}} class="fa-solid fa-arrow-left"></i>
            <p className='minColl-topbar-T1'>My Collections</p>
        </div>

        {sIndex === undefined ? null : <div className='minColl-tabbar'>
            {userData.collections.map((item,index)=>(
                <div onClick={()=>{setSIndex(index)}} className={userData.collections[sIndex].name === item.name ? "minColl-tabbar-active" : "minColl-tabbar-inactive"}>{item.name}</div>
            ))}
        </div> }

        {sIndex === undefined ? null : 
        <div className='minColl-action'>
            <div onClick={()=>{setDModal(true)}} className='minColl-action-delete'>Delete Collection</div>
            <div onClick={()=>{setSModal(true);handleGetSellerProductsForCollections()}} className='minColl-action-add'>+ Add Products</div>
            </div>}

        {isError ? <div className="minColl-error">
        <img onClick={()=>{window.location.reload()}} className="minColl-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="minColl-error-refresh">Refresh</div>
      </div> : loader1 ? <div className='minColl-loader1'></div> :
         sIndex === undefined ? <div className="minColl-nothing">
         <img onClick={()=>{window.location.reload()}} className="minColl-nothing-img" src={nothingHere}></img>
       </div> :<div className='minColl-body'>
            {userData.collections[sIndex].products.map((item)=>(
                <MINCollectionProductCard item={item} collection={userData.collections[sIndex]}/>
            ))}
        </div>}

        {modalIsOpen || sModal ? null : <div onClick={()=>{setShowProduct(false); setCName("");setSelectedArray([]);setModalIsOpen(true)}} className='minColl-add'>+ Create Collection</div>}
    </div>

    <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        overlayClassName="minCollModalOverLay"
        className="minCollModal"
        style={customStyles}>
            <>
            <div className='minCollModal-box'>
                <div onClick={()=>{setModalIsOpen(false)}} className='minCollModalClose'>
                <div className='minCollModalClose-div'>
                </div>
            </div>
            <div className='minCollModal-box-head'>
            <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-layer-group"></i>
              <div className='minCollModal-box-head-text'>New Collection</div>
            </div>

            {showProduct ? <input value={cName} onChange={(e)=>{setCName(e.target.value)}} className='minColModal-box-name-input2'/> : <div className='minCollModal-box-name'>
                <input value={cName} onChange={(e)=>{setCName(e.target.value)}} className='minCollModal-box-name-input'/>
                <div onClick={()=>{
                    if(cName.trim() !== ""){
                        let ind = userData.collections.findIndex((obj)=> obj.name === cName.trim());
                        if(ind === -1){
                            setShowProduct(true);
                            handleGetSellerProducts();
                        }
                }}} className='minCollModal-box-name-next'>Next</div>
            </div>}

            

            {showProduct ? <p className='minCollModal-box-hint'>Select at least 3 products to create a collection</p> : null}

            {showProduct ? isError2 ? <div className="minCollModal-box-error">
        <img onClick={()=>{handleGetSellerProducts()}} className="minCollModal-box-error-img" src={errorOccurred}></img>
        <div onClick={()=>{handleGetSellerProducts()}} className="minCollModal-box-error-refresh">Retry</div>
      </div> : loader2 ? <div className='minColl-loader2'></div> :
         allProducts.length === 0 ? <div className="minCollModal-box-nothing">
         <img onClick={()=>{window.location.reload()}} className="minCollModal-box-nothing-img" src={nothingHere}></img>
       </div> : <div className='minCollModal-box-body'>
                {allProducts.map((item)=>(
                    <MINNewCollectionProductCard item={item} selectedArray={selectedArray} setSelectedArray={setSelectedArray} />
                ))}
            </div> : null}

            {showProduct ? <div className='minCollModal-box-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p className='minCollModal-box-search-text'>Search more products</p>
            </div> : null}

            {selectedArray.length < 1 ? null : <div onClick={()=>{handleCollectionAction()}} className='minCollModal-box-create'>Create Collection</div>}
            {showSnackbar ? <MINSnackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
            </div>
            </>
        </Modal>

        <Modal
        className="minCollDelete"
        isOpen={dModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setDModal(false)}}
        style={customStyles2}>
          <>
          <div className='minCollDelete-Head'>
          <i style={{color: 'red', fontSize: '16px'}} class="fa-solid fa-trash"></i>
          <p className='minCollDelete-HeadT1'>Delete {userData === undefined ? "" : userData.collections[sIndex].name} Collection</p>
          </div>

          <p className='minCollDelete-BodyT1'>Do you want to delete the collection {userData === undefined ? "" : userData.collections[sIndex].name}?</p>

          <div className='minCollDelete-Action'>
            <p onClick={()=>{setDModal(false)}} className='minCollDelete-ActionN'>No</p>
            <p onClick={()=>{setDModal(false); handleDeleteAction()}} className='minCollDelete-ActionY'>Yes</p>
          </div>
          </>
        </Modal>

        <Modal
        isOpen={sModal}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setSModal(false)}}
        overlayClassName="minCollModalOverLay"
        className="minCollModal"
        style={customStyles}>
            <>
            <div className='minCollModal-box'>
                <div onClick={()=>{setSModal(false)}} className='minCollModalClose'>
                <div className='minCollModalClose-div'>
                </div>
            </div>
            <div className='minCollModal-box-head'>
            <i style={{color: '#554BDA', fontSize: '16px'}} class="fa-solid fa-layer-group"></i>
              <div className='minCollModal-box-head-text'>Select Products</div>
            </div>            

            {isError3 ? <div className="minCollModal-box-error">
        <img onClick={()=>{handleGetSellerProductsForCollections()}} className="minCollModal-box-error-img" src={errorOccurred}></img>
        <div onClick={()=>{handleGetSellerProductsForCollections()}} className="minCollModal-box-error-refresh">Retry</div>
      </div> : loader4 ? <div className='minColl-loader4'></div> :
         allProducts.length === 0 ? <div className="minCollModal-box-nothing">
         <img onClick={()=>{window.location.reload()}} className="minCollModal-box-nothing-img" src={nothingHere}></img>
       </div> : <div className='minCollModal-box-body'>
                {allProducts.map((item)=>(
                    <MINNewCollectionProductCard item={item} selectedArray={selectedArray} setSelectedArray={setSelectedArray} />
                ))}
            </div>}

            <div className='minCollModal-box-search'>
                <i class="fa-solid fa-magnifying-glass"></i>
                <p className='minCollModal-box-search-text'>Search more products</p>
            </div>

            <div onClick={()=>{handleAddProductsToCollection()}} className={selectedArray.length < 1 ? 'minCollModal-box-create-inactive' : 'minCollModal-box-create'}>Add Products</div>
            {showSnackbar ? <MINSnackbar msz={snackbarObject.message} backgroundColor={snackbarObject.backgroundColor} setShowSnackbar={setShowSnackbar}/> : null}
            </div>
            </>
        </Modal>
    
    </>
  )
}

export default MINCollectionsPage