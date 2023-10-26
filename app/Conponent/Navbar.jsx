"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import "./Style.css";

const Navbar = () => {
  

  const clickHandler = (e) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full navbar ">
      <nav className="flex items-center justify-between  p-6  px-16  ">
        <Link className="opacity-0 text-2xl font-bold logo" href="#">
          Salaman ilyas
        </Link>
        <div>
          <ul className="flex justify-between">
            <li
              className="mr-5 opacity-0 text-xl"
              id="li"
              onClick={(e) => {
                clickHandler("home");
              }}
            >
              <Link href={""}>Home</Link>
            </li>
            <li
              className="mr-5 opacity-0 text-xl"
              onClick={(e) => {
                clickHandler("about");
              }}
            >
              <Link href={""}>About</Link>
            </li>
            <li
              className="mr-5 opacity-0 text-xl"
              onClick={(e) => {
                clickHandler("skills");
              }}
            >
              <Link href={""}>Skills</Link>
            </li>
            <li
              className="mr-5 opacity-0 text-xl"
              onClick={(e) => {
                clickHandler("expreance");
              }}
            >
              <Link href={""}>Exprience</Link>
            </li>
            <li
              className="mr-5 opacity-0 text-xl"
              onClick={(e) => {
                clickHandler("projects");
              }}
            >
              <Link href={""}>Projects</Link>
            </li>
            <li
              className="mr-5 opacity-0 text-xl"
              onClick={(e) => {
                clickHandler("contacts");
              }}
            >
              <Link href={""}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
