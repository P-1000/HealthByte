import React from "react";
import { IoMdSchool } from "react-icons/io";
import { SiTransportforlondon } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import {MdEventAvailable} from "react-icons/md";

const Doctor = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900 rounded-3xl px-1 mx-4">
        <div className="container px-6 py-3 mx-auto">
          <div className="w-[90vw]">
            {/* disney grad bro  */}
            <div
              className="relative hidden w-full  lg:block lf-9 mt-8 overflow-hidden rounded-lg divide-black"
              style={{ height: "28rem" }}
            >
              <div
                className="absolute z-10 w-full h-full"
                style={{
                  backgroundImage:
                    "linear-gradient(94deg, rgb(6, 11, 23) 18.95%, rgba(9, 18, 29) 30.3%, rgba(14, 22, 34, 1) 42.3%, rgba(22, 34, 34, 0.79) 58.3% , rgba(28, 34, 34, 0.79) 68.3%, rgba(38, 34, 34, 0.1) 100%)",
                }}
              />

              <div className="absolute z-30 flex items-center justify-around gap-10 ">
                <div className="font-semibold align-middle px-12 py-14">
                  <h1 className="text-2xl font-medium   text-white capitalize lg:text-4xl dark:text-white">
                    Dr. Tony Chopper
                  </h1>
                  <h1 className="text-xl font-normal  text-white/70 capitalize lg:text-sm my-2 dark:text-white">
                    Dermatologist | 10 years of experience
                  </h1>
                  <div className="flex gap-6 ">
                    <div className="flex gap-2 place-items-center py-4">
                      <IoMdSchool className="inline-block text-white/90 text-2xl" />
                      <h1 className="inline-block text-white/90 text-sm font-normal">
                        {" "}
                        MBBS , MD (Dermatology)
                      </h1>
                      {/* <button className="bg-[#0d0d0d] text-white px-4 py-2 rounded-md">
                      Book Appointment
                    </button> */}
                    </div>
                    <div className="flex gap-2 place-items-center ">
                      <FaLocationArrow className="inline-block text-white/90 text-lg" />
                      <h1 className="inline-block text-white/90 text-sm font-normal">
                        {" "}
                        Rainbow Hospital , Hyderabad
                      </h1>
                    </div>
                  </div>
                  <div className="w-6/12 py-1 mb-1">
                    <h1 className="inline-block text-white/90 text-sm font-normal">
                    With over 15 years of experience, Dr. Martinez has worked at renowned dermatology clinics and hospitals, including Dermatology Excellence Center and Glowing Skin Clinic. Her expertise covers a wide range of dermatological conditions, from acne and psoriasis to skin cancer screenings.
                    </h1>
                  </div>
                  <div className="flex gap-5 pb-5 mt-2">
                    <div>
                      <AiFillStar className="inline-block text-white/90 text-lg" />
                      <AiFillStar className="inline-block text-white/90 text-lg" />
                      <AiFillStar className="inline-block text-white/90 text-lg" />
                      <AiFillStar className="inline-block text-white/90 text-lg" />
                      <AiOutlineStar className="inline-block text-white/90 text-lg" />
                    </div>
                    <div>
                        <h1 className="inline-block text-white/90 text-sm font-normal">
                          <MdEventAvailable className="inline-block text-white/90 text-lg" />
                            {" "}Available Today.
                        </h1>
                    </div>
                  </div>
                  <div className="flex gap-2  mt-7">
                    <button
                      className="bg-[#0d0d0d] border transition-all hover:px-10
                    delay-100 duration-300 ease-in-out
                     hover:bg-white hover:text-black text-white px-4 py-2 rounded-md"
                    >
                      Book Video Consultation
                    </button>
                    <button className="bg-white border delay-100 duration-300 ease-in-out hover:px-8 text-black transition-all hover:bg-black hover:text-white  px-4 py-2 rounded-md">
                      Book Hospital Visit
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
              <img
                src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="backgrop poster"
                className="w-full h-full left-96 object-contain object-center rounded-lg absolute scale-125 translate-y-10"
                style={{ left: "310px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
