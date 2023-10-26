import React from "react";
// import BsChevronRight from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import BrowseByCon from "../components/HealthCondition/BrowseByCon";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();



  return (
    <div className="pl-10 pt-5">
      <div>
        <h1 className=" pt-5 text-4xl font-mono font-bold">DashBoard</h1>
      </div>
      <div className=" flex gap-5  mt-8">
        <div className="bg-[#111820]/0 border border-black-20  shadow-md text-black/70 rounded-xl w-[400px] h-[300px] ">
          <div className="text-black  pt-3 text-2xl pl-5 mb-5">
            <h1>My Appoinments</h1>
          </div>
          <div className="border bg-blue-50 hover:scale-[1.05] cursor-pointer transition-all border-black/10 mt-3  mx-4 rounded-xl   flex justify-between pl-4 pr-4 py-2  text-base font-semibold">
            <div className=" p-1 felx flex-col  ">
              <h1 className="">Danny McLoan</h1>
              <h1 className=" mt-1 font-normal text-sm">12/12/2021</h1>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="  object-cover object-right  w-14 h-14 rounded-full"
              />
            </div>
          </div>
          <div className="border bg-blue-50 hover:scale-[1.05] cursor-pointer border-black/10 mt-3  mx-4 rounded-xl   flex justify-between pl-4 pr-4 py-2  text-base font-semibold">
            <div className=" p-1 felx flex-col  ">
              <h1 className="">Danny McLoan</h1>
              <h1 className=" mt-1 font-normal text-sm">12/12/2021</h1>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-14 object-cover   object-right h-14 rounded-full"
              />
            </div>
          </div>
          <div className=" flex text text-center justify-center  items-center p-5">
            Veiw all
          </div>
        </div>
        <div className="    gap-5 border rounded-2xl  shadow-md   px-5">
          <h1 className="   px-8 pt-4 font-normal text-2xl ">Essentials</h1>
          <div className="flex gap-6 mt-6">
            <div className=" flex flex-col gap-6 justify-evenly">
              <div className="hover:scale-[1.05] transition-all cursor-pointer shadow-md flex gap-4 w-72 h-20  rounded-xl  bg-green-100 justify-evenly items-center ">
                <img
                  className="w-9 h-9 "
                  src="https://images.apollo247.in/images/ui_revamp_orderviaprescription.svg?tr=w-120,q-80,f-webp,c-at_max"
                  alt="none"
                />
                <div className="-ml-3">
                  <h1 className="  text-lg font-semibold">Get Medicines</h1>
                  <h2 className=" text-xs">IN 15 MIN</h2>
                </div>
                <FaChevronRight className="  opacity-70" />
              </div>
              <div className="hover:scale-[1.05] transition-all cursor-pointer shadow-md flex gap-4 w-72 h-20  rounded-xl  bg-purple-100 justify-evenly items-center ">
                <img
                  className="w-9 h-9 "
                  src="https://images.apollo247.in/images/ui_revamp_hospitalVisit.svg?tr=w-120,q-80,f-webp,c-at_max"
                  alt="none"
                />
                <div className="-ml-3">
                  <h1 className="  text-lg font-semibold">Hospital Visit</h1>
                  <h2 className=" text-xs">PRE-BOOK</h2>
                </div>
                <FaChevronRight className="  opacity-70" />
              </div>
            </div>
            <div className="flex-col flex gap-6 justify-evenly">
              <div className="hover:scale-[1.05] transition-all cursor-pointer shadow-md flex gap-4 w-72 h-20  rounded-xl  bg-pink-100 justify-evenly items-center ">
                <img
                  className="w-9 h-9 "
                  src="https://images.apollo247.in/images/ui_revamp_labtest.svg?tr=w-120,q-80,f-webp,c-at_max"
                  alt="none"
                />
                <div className="-ml-3">
                  <h1 className="  text-lg font-semibold">Lab Tests</h1>
                  <h2 className=" text-xs">AT HOME</h2>
                </div>
                <FaChevronRight className="  opacity-70" />
              </div>

              <Link to="/doctor-appointment">
              <div
              className="hover:scale-[1.05] transition-all cursor-pointer shadow-md flex gap-4 w-72 h-20  rounded-xl  bg-orange-100 justify-evenly items-center ">
                <img
                  className="w-9 h-9 "
                  src="https://images.apollo247.in/images/ui_revamp_video_consult.svg?tr=w-120,q-80,f-webp,c-at_max"
                  alt="none"
                />
                <div className="-ml-3">
                  <h1 className="  text-lg font-semibold">Video Consult</h1>
                  <h2 className=" text-xs">IN 15 MIN</h2>
                </div>
                <FaChevronRight className="  opacity-70" />
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BrowseByCon />

      <div className="border mt-4 p-2 rounded-xl">
      {/* <h1 className="mt-12 ml-5 text-2xl ">
        Blogs : 
      </h1> */}
        {/* <BlogPost/> */}
      </div>
    </div>
  );
};

export default DashBoard;
