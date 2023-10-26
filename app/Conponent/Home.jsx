import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Style.css";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const Home = () => {
  // let border=useRef(null)
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger) 
    const tl=gsap.timeline();
    tl.to(".logo ,li ", {
      y: 20,
      duration: 0.3,
      stagger: 0.3,
      opacity:1,
    });
    tl.to('.t1 ',{
      x: -30,
      duration: 0.3,
      stagger: 0.3,
      opacity:1,
    })

    tl.to('.t2,.t3,.t4 ',{
      x: 20,
      duration: 0.3,
      stagger: 0.3,
      opacity:1,
    })
    tl.to('.emogy',{
      rotate:360,
      duration:1,
      repeat:-1,
      yoyo:true
    })
    tl.to('.btn-1 ',{
      y: -30,
      x:20,
      duration: 0.3,
      stagger: 0.3,
      opacity:1,
    })
    tl.to(".t5",{
      y:10,
      direction:5,
      repeat:-1,
      yoyo:true,
      opacity:1
    })
    tl.to(".image-1",{
      opacity:1,
      scale:1,
      duration:0.3,
    })
    
  }, []);
  
  const clickHandler = (e) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="flex main">
        <div className="box1">
          <div>
            <p className="opacity-0 text-sm t1 hover:text-lg ease-in duration-300 ">
              Hello,
            </p>
            <h4 className="opacity-0 flex justify-center items-center text-5xl font-extrabold h-opacity-0 text t2 hover:text-6xl ease-in duration-300">
              I'm <span className="text-xl py-10 emogy">💥</span> Salaman Ilyas <span className=" emogy text-xl py-10">💥</span>
            </h4>
            <h6 className="opacity-0 text-xl font-bold t3 hover:text-2xl ease-in duration-300">
              {" "}
              full stack web App{" "}
            </h6>
            <h6 className="opacity-0 text-xl font-bold hover:text-2xl ease-in duration-300 t4">
              & mobile app developer
            </h6>
            <button className="btn-1 mt-10 opacity-0 border-2 border-yellow-500 h-10 w-24  rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900  duration-300 hover:p-2 hover:h-11 hover:w-28 transition-all">
              Hire Me
            </button>
          </div>
        <h3 className=" absolute bottom-10 pl-96 t5 opacity-0 cursor-pointer" onClick={()=>{
          clickHandler('about')
          
        }} id="about">Scroll down ⬇ </h3>

        </div>
        <div className="box2">
          <img
            src="./images/1.png"
            className=" image-1 opacity-0 scale-0"
            alt=""
          />

        </div>
      </div>
    </>
  );
};

export default Home;
