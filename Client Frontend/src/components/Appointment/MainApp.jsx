import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import TeamSection from "./DoctorCards";

const MainApp = () => {
  // Dummy data for doctors
  const dummyData = [
    {
      id: 1,
      name: "Dr. John Doe",
      speciality: "General Physician",
      location: "New York, NY",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      speciality: "Cardiologist",
      location: "Los Angeles, CA",
    },
    // Add more dummy data as needed
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Filter the dummy data based on the search term
    const results = dummyData.filter((doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="bg-slate-100 w-full">
      <h1 className="pl-8 pb-3 mt-7 text-2xl font-bold">Make an appointment</h1>
      <div className="flex">
        <div className="w-3/12 bg-white h-[100vh] place-items-center m-2 mx-4 p-1 rounded-2xl">
          <div className="flex flex-col">
            <h1 className="px-3 mt-5 py-1">Search</h1>
            <div className="flex justify-between px-3">
              <input
                type="text"
                placeholder="Search Name"
                className="border relative border-black/20 rounded-md p-2 w-full px-2"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FiSearch
                className="absolute text-black/50 text-xl mt-3 left-[20rem] ml-3 cursor-pointer"
                onClick={handleSearch}
              />
            </div>
            <div>
              <h1 className="px-3 py-1 mt-8">District/State</h1>
              <div className="flex justify-between px-3">
                <input
                  type="text"
                  placeholder="Search Name"
                  className="border relative border-black/20 rounded-md p-2 w-full px-2"
                />
                <FiSearch
                  className="absolute text-black/50 text-xl mt-3 left-[20rem] ml-3 cursor-pointer"
                />
              </div>
            </div>
            {/* the speciality section */}
            <div className="border mt-6 mx-3 px-3 py-3 rounded-md">
              <h1 className="pb-2">Speciality</h1>
              <input
                type="text"
                placeholder="Search Speciality"
                className="border relative border-black/20 rounded-md p-2 w-full"
              />
              <div className="p-1">
                <div className="flex px-2 pt-2">
                  <input type="checkbox" className="mr-2" />
                  <h2>General Physician</h2>
                </div>
                <div className="flex px-2 pt-2">
                  <input type="checkbox" className="mr-2" />
                  <h2>Allergy</h2>
                </div>
                <div className="flex px-2 pt-2">
                  <input type="checkbox" className="mr-2" />
                  <h2>Cardiologist</h2>
                </div>
                <div className="flex px-2 pt-2">
                  <input type="checkbox" className="mr-2" />
                  <h2>Dentist</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12  p-2">
          <TeamSection  />
        </div>
      </div>
    </div>
  );
};

export default MainApp;
