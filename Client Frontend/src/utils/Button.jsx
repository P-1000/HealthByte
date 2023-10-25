import React from "react";
import { Link } from "react-router-dom";
import don from "../assets/don.png";

const NavBar = (props) => {
  const { someProp } = props; // Destructure props

  return (
    <>
      <button className=" w-52 h-12 rounded-2xl p-4 flex items-center justify-around bg-red-100 ">
        <h1 className="text-xl">{someProp}</h1>
        <img src={don} alt="" className="w-7 h-7" />
      </button>
    </>
  );
};

export default NavBar;
