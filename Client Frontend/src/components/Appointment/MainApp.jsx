import React from "react";
import { FiSearch } from "react-icons/fi";

const MainApp = () => {
  return (
    <div className="bg-slate-100 w-full">
      <h1 className="pl-10 pt-5 text-2xl  font-bold">Make an appointment</h1>
      <div className="flex">
        <div className="w-3/12 bg-white h-[100vh] place-items-center m-2 mx-10 rounded-md">
          <div className="flex flex-col">
            <h1 className="px-3 mt-5 py-1">Search</h1>
            <div className="flex justify-between px-3 ">
              <input
                type="text"
                placeholder="Search Name"
                className="border relative border-black/20 rounded-md p-2 w-full px-2 "
              />
              <FiSearch className=" absolute text-black/50 text-xl mt-3 left-96   ml-3" />
            </div>
            <div>
            <h1 className="px-3 py-1 mt-8">District/State</h1>
            <div className="flex justify-between px-3 ">
              <input
                type="text"
                placeholder="Search Name"
                className="border relative border-black/20 rounded-md p-2 w-full px-2"
              />
              <FiSearch className=" absolute text-black/50 text-xl mt-3 left-96   ml-3" />
            </div>
            </div>
          </div>
        </div>
        <div className="w-8/12">

        </div>
      </div>
    </div>
  );
};

export default MainApp;
