import React, { useEffect, useState } from 'react'
import MINBottomNavBar from '../../minComponents/minBottomNavBar/minBottomNavBar';
import { getSellerInfo, saveSellerInfo } from '../../store/action/seller_action';
import './minHome_page.css'
import Modal from 'react-modal';
import errorOccurred from '../../assets/influencer/images/errorOccurred.png'
import profile_logo from '../../images/profile_logo.png'
import MINProductCard from '../../minComponents/minProductCard/minProductCard';
import MINCreateStore from '../../minComponents/minCreateStore/minCreateStore';


const MINHomePage = () => {

    const [userData, setUserData] = useState(undefined);

    const [modalIsOpen,setModalIsOpen] = useState(false);
    const [modalIsOpen2,setModalIsOpen2] = useState(false);

    const [loader1, setLoader1] = useState(true);

    const [isError, setIsError] = useState(false);

    const [pImage, setPImage] = useState("");

    const [dName, setDName] = useState("");

    const [uName, setUName] = useState("");

    const [keyW, setKeyW] = useState("");

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

    function searchNow() {
      if(keyW !=""){
      window.open(`/minsearch/${keyW}`,'_self');
      }
    }

    const [fCategories, setFCategories] = useState(() => []);

    const customStyles = {
        content: {
          alignSelf: 'center',
          padding: '0px',
          margin: '0px'
        },
        overlay: {zIndex: 1000}
      };

      const customStyles2 ={
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        },
        content: {
          width: '70vw',
          height: '70vw',
          borderRadius: '10px',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          border: 'none',
          padding: '0',
          alignSelf: 'center'
        }
      };    

    async function getUserData(sID) {
        const json = await getSellerInfo(sID);
        if(json.success === true && json.isNew === false) {
            setUserData(json.msz);
            setDName(json.msz.display_name);
            setUName(json.msz.user_name);
            setPImage(json.msz.profile_url);
            setFCategories(json.msz.fav_categories);
        } else if(json.success === true && json.isNew === true){
            window.open('/minsaveinfo','_self');
        } else{
            setIsError(true);
            // window.alert("Something Went Wrong")
        }
        setLoader1(false)
    }
    

    async function getData(){
        let uID = localStorage.getItem('influencer_id');
        if(uID === null || uID === undefined){
            window.open('/creator/auth','_self');
        } else{
            getUserData(uID);
        }
    }
    useEffect(()=>{
        getData();
    },[]);


  return (
    <>
    <div className='minHBox'>
        <div className='minHTB'>
            <div className='minHTBTop'>
                <div onClick={()=>{window.open('/creator/profile','_self')}} className='minHTBTopL'>
                <img className='minHTBTopLI' src={userData === undefined ? profile_logo : userData['profile_image'] === "" || userData['profile_image'] === undefined ? profile_logo : userData['profile_image'] }/>
                <p className='minHTBTopLT1'>{userData === undefined ? "User" :userData['user_name']}</p>
                </div>
                <div onClick={()=>{window.open('/creator/notifications','_self')}} className='minHTBTopR'>
                <i style={{fontSize: '22px'}} class="fa-regular fa-bell"></i>
                </div>
            </div>
            <div className='minHTBBottom'>
                <div className='minHTBBottomSB'>
                    <input onKeyDown={(val)=>{
                  if(val.key === 'Enter') {
                  searchNow()}}}
                   value={keyW} onChange={(val)=>{setKeyW(val.target.value)}} className='minHTBBottomSBInput' type='search' placeholder='Search Here'/>
                    <div onClick={()=>{searchNow()}} className='minHTBBottomSBIcon'>
                    <i style={{fontSize: '16px'}} class="fa-solid fa-search"></i>
                    </div>
                </div>
            </div>
        </div>

        {isError ? <div className="minHP-error">
        <img onClick={()=>{window.location.reload()}} className="minHP-error-img" src={errorOccurred}></img>
        <div onClick={()=>{window.location.reload()}} className="minHP-error-refresh">Refresh</div>
      </div> : loader1 ? <div className="minHP-Loader1"></div> :<>
        <div className='minHPoster'>
            <div onClick={()=>{if(userData.store_url === "" ){setModalIsOpen(true)} else{}}} className='minHPosterButton'>
                {userData.store_url === "" ? "Create Store" : "Add Product"}
            </div>
        </div>
        </>}
    </div>
    <MINBottomNavBar bMode={"Home"}/>

    <Modal
        className="minCreateModal"
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen(false)}}
        style={customStyles}>
         <MINCreateStore setModalIsOpen={setModalIsOpen} setModalIsOpen2={setModalIsOpen2} />
        </Modal>

        <Modal
        className="minLSModal"
        isOpen={modalIsOpen2}
        shouldCloseOnOverlayClick={true}
        onRequestClose={()=>{setModalIsOpen2(false)}}
        style={customStyles2}>
            <div className='minLSModal-box'>
            <i style={{fontSize: '20vw', color: 'white'}} class="fa-solid fa-clock"></i>
            <p className='minLSModal-box-text'>Your store will be live soon</p>
            </div>
        </Modal>
    
    </>
  )
}

export default MINHomePage