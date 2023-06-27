import React, { useEffect, useRef,useMemo, useState,useCallback } from 'react'
import Modal from 'react-modal';
import './mlookCard.css'
import MModalProduct from './mmodalProduct/mmodalProduct';
import { getSellerInfo } from '../../store/actions/seller_action';


const MINLookCard = ({currIndex, setCurrIndex,item}) => {

    let singleTap = false;

    const videoRef = useRef(null);

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const [sellerInfo, setSellerInfo] = useState(undefined);

    async function getSeller () {
      let obj = {
        seller_id: 's1'
      }
      const json = await getSellerInfo(obj);
      if(json.success) {
        console.log("SIII: ",json);
        setSellerInfo(json.msz);
      }
    }

    // useEffect(() => {
    //   const options = {
    //     root: null,
    //     rootMargin: '0px',
    //     threshold: 1
    //   }

    //   const observer = new IntersectionObserver((entries) => {
    //     const entry = entries[0];
    //     if(entry.isIntersecting && entry.intersectionRatio === 1) {
    //       console.log(item.substring(65), "play ",entry.intersectionRatio)
    //       videoRef.current.play();
    //     } else{
    //       console.log(item.substring(65), "pause")
    //       videoRef.current.pause();
    //     }
    //   },options);
    //   observer.observe(videoRef.current);

    //   return () => {
    //     observer.disconnect();
    //   };
    // },[]);

    const [isVisible, setIsVisible] = useState(false);

    const cardRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current);
        }
      });
      observer.observe(cardRef.current);
      return () => {
        observer.unobserve(cardRef.current);
      };
    }, []);

    console.log("III: ",isVisible," : ",item)



    // Video Tap Feature
    const onTap = () => {
      if (!singleTap) {
        singleTap = true;
  
        setTimeout(() => {
          if (singleTap) {
            if(videoRef.current.paused){
            videoRef.current.play();
            } else{
              videoRef.current.pause();
            }
            singleTap = false;
          }
        }, 300);
      } else {
        console.log(item,": isLiked")
        singleTap = false;
      }
    };


    const handleLongPress = useCallback(
      (event) => {
        event.preventDefault();
      },
      []
    );

    const customStyles = {
      content: {
        alignSelf: 'center',
        padding: '0px',
        margin: '0px'
      },
    };

    function openModal(){
      videoRef.current.pause();
      setModalIsOpen(true);
    }

    function closeModal(){
      videoRef.current.play();
      setModalIsOpen(false);
    }

    const imgArr = ['https://m.media-amazon.com/images/I/71XMRODYKeL._UY679_.jpg','https://m.media-amazon.com/images/I/71mOwW8RciL._UX679_.jpg','https://m.media-amazon.com/images/S/aplus-media/sc/967227f6-a3b1-464d-8e3d-32f9e53d0a80.__CR0,340,2792,1727_PT0_SX970_V1___.jpg']

  return (
    <div ref={cardRef} className='minLC'>

     {isVisible ? <div className='minLCBox'>
        <video controlsList="nodownload" onContextMenu={handleLongPress} onClick={onTap} ref={videoRef} className='minLCVideo' autoPlay muted loop>
        <source src={item} type="video/mp4"></source>
        <source src={item} type="video/ogg"></source>
        Your browser does not support the video tag.
        </video>

        <div className='minLCRight'>
          <div className='minLCRightIB'>
            <i style={{color: 'white',fontSize: '7vw'}} class="fa-regular fa-heart" />
            <p className='minLCRightIBText'>30.5K</p>
          </div>
          <div className='minLCRightIB'>
            <i style={{color: 'white',fontSize: '7vw'}} class="fa-regular fa-comment" />
            <p className='minLCRightIBText'>30.5K</p>
          </div>
          <div className='minLCRightIB'>
          <i style={{color: 'white',fontSize: '7vw'}} class="fa-solid fa-share" />
            <p className='minLCRightIBText'>Share</p>
          </div>
          <div className='minLCRightIB'>
            <img className='minLCRightIBStore' src={imgArr[0]}/>
            <p className='minLCRightIBText'>Open Store</p>
          </div>
        </div>
        <div className='minLCBottom'>
          <div className='minLCBottomPD'>
            <img className='minLCBottomPDImage' src={'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}/>
          <p className='minLCBottomPDName'>
            Influencer Name
          </p>
          </div>
          <div className='minLCBottomIB'>
            {imgArr.map((img)=>(
              <img onClick={openModal} src={img} className='minLCBottomIBImage'/>
            ))}
            <div onClick={openModal} className='minLCBottomIBSN'>
              <i style={{color: 'orange', fontSize: '15px'}} class='fa-solid fa-shopping-bag'/>
              <p className='minLCBottomIBSNText'>Shop Now</p>
            </div>
            <div className='minLCBottomIBAW'>
              Add to wishlist
            </div>
          </div>
        </div>

        <Modal
        className="minLCModal"
        isOpen={modalIsOpen}
        onAfterOpen={()=>{
          getSeller();
        }}
        shouldCloseOnOverlayClick={true}
        onRequestClose={closeModal}
        style={customStyles}
        overlayClassName="minLCModalOverLay">
          <>
          <div className='minLCModalTB'>
            <div className='minLCModalTBMid'>
              <div className='minLCModalTBMidDiv'></div>
            </div>
          </div>
          <div className='minLCModalSB'>
          <div className='minLCModalSBL'>
            <img className='minLCModalSBLImage' src={sellerInfo===undefined?"":sellerInfo.profileImage}/>
            <p className='minLCModalSBLText'>{sellerInfo===undefined?"":sellerInfo.displayName}</p>
          </div>
          <div className='minLCModalSBR'>
          <i style={{color:'#554BDA',fontSize:'10px'}} class="fa-solid fa-store"></i>
          <p className='minLCModalSBRText'>View Store</p>
          </div>
          </div>
          <div className='minLCModalPB'>
            {imgArr.map((itm)=>(
              <MModalProduct item={itm}/>
            ))}
          </div>
          </>
        </Modal>


        </div> : <div className='minLCBox'></div>}
        </div>
    
  )
} 

export default MINLookCard