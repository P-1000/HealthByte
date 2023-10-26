
import React from 'react';
import { BsDropletFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {GiDna2} from 'react-icons/gi'; 

function Navbar() {
  return (
    <nav className="bg-black p-4 m-3 shadow-2xl rounded-2xl ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl flex items-center">
            <GiDna2 className="text-5xl text-blue-400 mr-4"/>
            HealthByte
          </div>

          <ul className="flex space-x-4">
            <button className=" w-52 h-12 rounded-2xl p-4 flex items-center justify-around bg-red-100 ">
              <BsDropletFill className='text-2xl text-red-500' />
              <h1 className="text-xl">Donate Blood</h1>
            </button>
            <a href="/cart">

            <button className=" w-28 h-12 rounded-2xl p-4 flex items-center justify-around bg-green-100 ">
              <AiOutlineShoppingCart className='text-2xl text-green-500' />
              <h1 className="text-xl">Cart</h1>
            </button>
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
