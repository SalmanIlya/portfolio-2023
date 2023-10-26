import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import "./Style.css";
const Contacts = () => {
  return (
    <div className="contact">
      <div className="skills_section text-center flex flex-col justify-center items-center">
        <h1 className="text-5xl font-extrabold pt-10 hover:text-6xl  transition-all duration-300">
          Contact me{" "}
        </h1>
        <div className="border-b-4 border-yellow-600 w-48 rounded-full mt-2  hover:w-56 transition-all duration-300 "></div>
      </div>
      <div className="  c-main-box px-40 pt-5">
        <div className=" c-box1 flex flex-col justify-center px-20 ">
          <div className="ml-5">
            <h1 className="text-2xl font-semibold">Just Say Hi</h1>
            <p>Tell us more about you and well contact you soon :) </p>
          </div>

          <input
            type="text"
            placeholder="Name"
            className=" text-xl outline-none  bg-transparent m-5 border-b-2 border-yellow-600"
          />
          <input
            type="text"
            placeholder="Emial"
            className=" text-xl outline-none  bg-transparent m-5 border-b-2 border-yellow-600"
          />
          <input
            type="text"
            placeholder="Subject"
            className=" text-xl outline-none  bg-transparent m-5 border-b-2 border-yellow-600"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={1}
            className=" text-xl outline-none  bg-transparent m-5 border-b-2 border-yellow-600"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-center items-center">
            <button className="   border-2 border-yellow-600 h-10 w-24  rounded-lg text-yellow-500 hover:bg-yellow-500 hover:text-gray-900  duration-300 hover:p-2 hover:h-11 hover:w-28 transition-all">
              Submit
            </button>
          </div>
        </div>
        <div className="c-box2 flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold text-center">
            Contact Information
          </h1>
          <h5 className="text-center">
            Mohalla Satyan Bazara kala Peshawar City Pakistan
          </h5>
          <h5 className="text-center">Salamanilyas101@gmail.com</h5>
          <h5 className="text-center">+92 325 553 9535</h5>
          <h1 className="text-2xl font-bold text-center">Follow me :</h1>
          <div className=" flex flex-row justify-center items-center">
            <AiFillGithub className="bg-black text-2xl rounded m-1" />
            <AiFillLinkedin className="bg-blue-700 text-2xl rounded m-1" />
            <AiFillYoutube className="bg-red-700 text-2xl rounded m-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
