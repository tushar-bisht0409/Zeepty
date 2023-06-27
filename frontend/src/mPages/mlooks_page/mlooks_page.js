import React, { useEffect, useRef, useState, lazy, Suspense } from 'react'
// import MLookCard from '../../mComponents/minLookCard/minLookCard';
import './mlooks_page.css';

const MLookCard = lazy(() => import('../../mComponents/mlookCard/mlookCard'));


const MLooksPage = () => {
    const looks = [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  ];

    const [currIndex, setCurrIndex] =  useState(0);

    const lRef = useRef(null);

    // const element = document.getElementById("minLook");

    // useEffect(() => {
    //   function handleScroll() {
    //     if (lRef.current) {
    //       lRef.current.scrollTop = window.pageYOffset;
    //     }
    //   }
    //   window.addEventListener('scroll', handleScroll);
  
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

  return (
    <div ref={lRef} className='minLP'>
        {looks.map((lookData,index)=>(
          <Suspense fallback={<div>Loading...</div>}>
            <MLookCard currIndex={currIndex} setCurrIndex={setCurrIndex} item={lookData}/>
          </Suspense>
        ))}
        </div>
  )
}

export default MLooksPage