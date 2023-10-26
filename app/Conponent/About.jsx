import React, { useEffect, useRef } from 'react'
import "./Style.css"
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const About = () => {
  const text=useRef(null)
  const text1=useRef(null)

  useEffect(()=>{
  
    gsap.registerPlugin(ScrollTrigger)
  let timel=gsap
  // ScrollT
    timel.to(".image-about-border,.img-a-1,.text-1,.text-border,.text-2,.btn-a-1,.btn-a-2",{
      y:-10,
      direction:1,
      delay:0.5,
      opacity:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:".image-about-border,.img-a-1,.text-1,.text-border,.text-2,.btn-a-1,.btn-a-2",
        scroll:'body',
        
      }})
      timel.to(".text-a-2",{
        y:10,
        direction:5,
        repeat:-1,
        yoyo:true,
        opacity:1
      })
     
      
     
  },[])
  const clickHandler = (e) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='About flex flex-col justify-center items-center text-white w-full
    
    '>
      <div className='flex  justify-between items-center w-full'>

      <div className=' w-full flex justify-center items-center h-full'>
        <div className='relative'>
        <div  className='h-80 w-72 hover:w-80 hover:h-96 transition-all duration-300   rounded-sm border-8 border-yellow-600 m-10 mt-20 opacity-0 image-about-border'></div>
        <img src="https://cdn.pixabay.com/photo/2017/11/23/13/30/businesswoman-2972842_640.jpg" className='h-80 w-72 hover:w-80 hover:h-96 transition-all duration-300  rounded-sm border-8 border-gray-700 absolute opacity-0  top-0 img-a-1' alt="" />
        <br />
        <br />
        
        </div>
        
      </div>
      <div className='w-full h-full  flex justify-center items-center'>
        <div >
          <div className='flex flex-col justify-center items-center '>
          <h3 className='text-center text-5xl  font-extrabold opacity-0 text-1 hover:text-6xl  transition-all duration-300  'ref={text}> About me </h3>
          <div className='border-b-4 text-border border-yellow-600 w-44  hover:w-52 transition-all duration-300   opacity-0 mt-2
          '></div>

          </div>
<br /> 
<p className='w-80 text-justify opacity-0 text-2  text-base hover:text-lg hover:w-96   transition-all duration-300  ' ref={text1}>I m' Salman ilyas from pakistan
i can make ecommers and other webside in react in frontend and node.js in backend and database is mysql and mongodb for styling i use bootstrap,talwind-css,Scss ,normal css and other technology for frontand i use react.js and normal javascript and other framworks forexamlpe lodash , emailjs and react-helmet-async etc i also use redux-toolkit for create store in react and for back-end i m using node.js with mysql

</p>
<button className=" mt-10  border-2 border-yellow-500 m-5 h-10 w-24  rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900  duration-300 hover:p-2 hover:h-11 hover:w-28 transition-all btn-a-1 opacity-0">
              Hire Me
            </button>
            <a href={'./images/salman.pdf'} download={'./images/salman.pdf'}>
            <button className=" mt-10  border-2 border-yellow-500 h-10 w-32 m-5  rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900  duration-300 hover:p-2 hover:h-11 hover:w-36 transition-all btn-a-2 opacity-0">
            Download CV
            </button>
            </a>
        </div>
        
      </div>
      </div>
      <h3 className="    text-a-2  cursor-pointer text-center opacity-0 " onClick={()=>{
          clickHandler('skills')
          
        }} id="about">Scroll down ⬇ </h3>
    
    </div>
  )
}

export default About