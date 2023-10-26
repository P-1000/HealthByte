import React, { useEffect, useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { SiTransportforlondon } from "react-icons/si";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { MdEventAvailable } from "react-icons/md";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

const DoctorProfile = () => {

  const appointmentAvailability = {
    Sunday: {
      available: true,
      timeSlots: "9:00 AM - 4:30 Pm",
    },
    Monday: {
      available: true,
      timeSlots: "9:00 AM - 4:30 Pm",
    },
    Tuesday: {
      available: true,
      timeSlots: "9:00 AM - 4:30 Pm",
    },
    Wednesday: {
      available: true,
      timeSlots: "9:00 AM - 4:30 Pm",
    },
    Thursday: {
      available: true,
      timeSlots: "9:00 AM - 4:30 Pm",
    },
    Friday: {
      available: false,
      timeSlots: "",
    },
    Saturday: {
      available: false, // Example: The dermatologist doesn't work on Saturdays
      timeSlots: [],
    },
  };
  const { id } = useParams();

  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`http://localhost:3000/api/book/doctors/${id}`);
      const data = await res.json();
      setDoctor(data);
      console.log(data);
    }
    fetchDoctor();
  }, [id]);



  const [showOnlineAvailability, setShowOnlineAvailability] = useState(false);

  return (
    <div>
      <section className="  rounded-3xl px-1 mx-4">
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
                   {doctor.name}
                  </h1>
                  <h1 className="text-xl font-normal  text-white/70 capitalize lg:text-sm my-2 dark:text-white">
                   {doctor.speciality} | {doctor.experience} years of experience
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
               {doctor.bio}
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
                        <MdEventAvailable className="inline-block text-white/90 text-lg" />{" "}
                        Available Today.
                      </h1>
                    </div>
                  </div>
                  <div className="flex gap-2  mt-7">
                    {/* <button
                      className="bg-[#0d0d0d] border transition-all hover:px-10
                    delay-100 duration-300 ease-in-out
                     hover:bg-white hover:text-black text-white px-4 py-2 rounded-md"
                    >
                      Book Video Consultation
                    </button> */}
                    <Modal keyid={id}/>
                    <button className="bg-white border delay-100 duration-300 ease-in-out hover:px-8 text-black transition-all hover:bg-black hover:text-white  px-4 py-2 rounded-md">
                      Book Hospital Visit
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
              <img
                src={doctor.profilePic}
                alt="backgrop poster"
                className="w-full h-full left-96 object-contain object-center rounded-lg absolute scale-125 translate-y-10"
                style={{ left: "310px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" flex gap-6">
        <div className="p-2 px-6 mx-10 w-4/12 border rounded-md bg-white bg-opacity-70">
          <h1 className="px-2 text-md font-semibold">
            Appointment Availability:
          </h1>
          <div className="divide-y divide-gray-300">
            {Object.keys(appointmentAvailability).map((day) => (
              <div
                key={day}
                className={`py-3 px-2 ${
                  appointmentAvailability[day].available
                    ? "bg-green-100/10"
                    : "bg-red-100/10"
                } hover:bg-blue-100 cursor-pointer`}
              >
                <h2 className="text-xl font-semibold mb-2">{day}</h2>
                <p>
                  {appointmentAvailability[day].available ? (
                    <span className="text-green-500 font-semibold">
                      {appointmentAvailability[day].timeSlots
                        ? appointmentAvailability[day].timeSlots
                        : "Not Available"}
                    </span>
                  ) : (
                    <span className="text-red-500 font-semibold">
                      Not Available
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <button
              className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md"
              onClick={() => setShowOnlineAvailability(!showOnlineAvailability)}
            >
              Online Availability
            </button>
            {showOnlineAvailability && (
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold mb-2">
                  Online Availability
                </p>
                <p>Display online availability information here.</p>
              </div>
            )}
          </div>
        </div>

        {/* new section  */}
        <div className="w-8/12 mt-2">
          <div className="flex divide-x-2">
            <div>
              <h1 className="text-xl font-semibold border-b w-fit mb-3"> Services Offered:</h1>
              {/* <p className='w-[50%] px-1 py-2'>Dr. Martinez offers a comprehensive suite of dermatological services, including:</p> */}
              <div className="flex flex-wrap w-[28rem] gap-2">
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Acne Treatment
                </p>
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Botox and Dermal Fillers
                </p>
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Psoriasis Management
                </p>
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Eczema Care
                </p>
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Laser Skin Resurfacing
                </p>
                <p className="border rounded-full w-fit px-4 py-1 text-center">
                  Skin Cancer Screening
                </p>
              </div>
            </div>
            <div className="px-4">
              <h1 className="text-xl font-semibold border-b w-fit mb-3">
              Contact Information:
              </h1>
              <div className="mt-2 mx-1">
             <h3 className="font-light"> Email: dr.elizabethmartinez@example.com</h3>
              <h3 className="font-light"> Phone: +1 234 567 890</h3>
              <h3 className="font-light">Website : www.nexample.com</h3>
          
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DoctorProfile;
