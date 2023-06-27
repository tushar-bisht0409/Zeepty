import React, { useEffect, useRef, useState } from 'react'
import MINLookCard from '../../minComponents/minLookCard/minLookCard';
import './minLooks_page.css'


const MINLooksPage = () => {
    const looks = [
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  ];

    const [currIndex, setCurrIndex] =  useState(0);

    const lRef = useRef(null);

    // const element = document.getElementById("minLook");

    useEffect(() => {
      function handleScroll() {
        if (lRef.current) {
          lRef.current.scrollTop = window.pageYOffset;
        }
      }
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div ref={lRef} onScroll={(event)=>{
      // let vHeight = window.innerHeight;
      // if(event.target.scrollTop % window.innerHeight === 0){
      // let ind = event.target.scrollTop/window.innerHeight;
      // let newY = (vHeight * ind) + vHeight;
      // lRef.current.scrollTo({
      //   top: newY,
      //   behavior: 'instant'
      // });
      // }
      }} className='minLP'>
        {looks.map((lookData,index)=>(
            <MINLookCard currIndex={currIndex} setCurrIndex={setCurrIndex} item={lookData}/>
        ))}
        </div>
  )
}

export default MINLooksPage