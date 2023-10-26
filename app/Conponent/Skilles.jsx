import gsap from "gsap";
import React, { useEffect } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Skilles = () => {
  
  useEffect(()=>{
  
    gsap.registerPlugin(ScrollTrigger)
  let timel=gsap
  // ScrollT
    timel.to(".ts1",{
      y:-10,
      direction:1,
      delay:1,
      opacity:1,
      stagger:0.4,
      scrollTrigger:{
        trigger:".ts1",
        scroll:'body',
        
      }})
      timel.to(".text-s-2",{
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
    }}
  return (
    <div className="Skills">
      <div className="skills_section text-center flex flex-col justify-center items-center">
        <h1 className="ts1 text-5xl font-extrabold pt-10 hover:text-6xl  transition-all duration-300 opacity-0">
          Skills
        </h1>
        <div className=" ts1 opacity-0 border-b-4 border-yellow-600 w-24 rounded-lg-full mt-2  hover:w-32 transition-all duration-300 "></div>
      </div>
      <div>
        <div className="mx-20 text-2xl flex flex-row justify-between items-center flex-wrap mt-20">
          <h1 className="ts1 opacity-0 p-1 h-24 w-24 border-8 flex justify-center items-center rounded-lg border-yellow-500 hover:h-32 hover:w-32 hover:text-3xl hover:bg-white hover:text-yellow-500   transition-all duration-500 m-5">
            Html
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-24 border-8 flex justify-center items-center rounded-lg border-blue-400 hover:h-32 hover:w-32 hover:text-3xl hover:bg-white hover:text-blue-500   transition-all duration-500 m-5">
            CSS
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-yellow-500 hover:h-32 hover:w-auto hover:text-2xl hover:bg-white hover:text-yellow-500   transition-all duration-500 m-5 ">
            Javascript
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-24 border-8 flex justify-center items-center rounded-lg border-blue-400 hover:h-32 hover:w-32 hover:text-3xl hover:bg-white hover:text-blue-500   transition-all duration-500 m-5">
            React
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-blue-400 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-blue-500   transition-all duration-500 m-5">
            React-Native-Expo
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-24 border-8 flex justify-center items-center rounded-lg border-black hover:h-32 hover:w-32 hover:text-3xl hover:bg-white hover:text-black   transition-all duration-500 m-5">
            Next.js
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-blue-300 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-blue-400   transition-all duration-500 m-5">
            React-Native-Expo
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-purple-500 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-purple-500   transition-all duration-500 m-5">
          Bootstrap
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-24 border-8 flex justify-center items-center rounded-lg border-pink-500 hover:h-32 hover:w-32 hover:text-3xl hover:bg-white hover:text-pink-500   transition-all duration-500 m-5">
            Sass
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-green-700 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-green-700   transition-all duration-500 m-5">
            Node.js
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-green-700 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-green-700   transition-all duration-500 m-5">
            Express.js
          </h1>
          <h1 className="ts1 opacity-0 p-1 h-24 w-auto border-8 flex justify-center items-center rounded-lg border-green-700 hover:h-32 hover:w-auto hover:text-3xl hover:bg-white hover:text-green-700   transition-all duration-500 m-5">
            Mongodb
          </h1>
          <div></div>
        </div>
        <h3 className="    text-s-2   cursor-pointer text-center opacity-0 mt-28 " onClick={()=>{
          clickHandler('projects')
          
        }} id="about">Scroll down ⬇ </h3>
      </div>
   
        
      
    </div>
  );
};

export default Skilles;
