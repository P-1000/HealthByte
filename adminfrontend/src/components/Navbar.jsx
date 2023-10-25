
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-black p-4 m-3 shadow-2xl rounded-2xl ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-2xl">
            HealtByte
          </div>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-white">Home</a></li>
            <li><a href="#about" className="text-white">About</a></li>
            <li><a href="#services" className="text-white">Services</a></li>
            <li><a href="#contact" className="text-white">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
