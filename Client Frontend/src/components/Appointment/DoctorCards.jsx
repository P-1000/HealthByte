import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TeamSection() {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchDoctors = async () => {
      const res = await fetch("http://localhost:3000/api/book/doctors");
      const data = await res.json();
      setDoctors(data);
    };
    fetchDoctors();
    console.log(doctors)
  }, []);

  const handleClick = (doctorId) => {
    navigate(`/doctor/${doctorId}`);
  };

  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl px-1 mx-4">
      <div className="container px-6 py-3 mx-auto">
        {/* <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2> */}

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {doctors && doctors.length > 0 ? (
            doctors.map((doctor) => (
              <div
              onClick={() => handleClick(doctor._id)}
                key={doctor.username}
                className="w-full max-w-xs text-center hover:scale-105 transition-all cursor-pointer"
              >
                <img
                  className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                  src={doctor.profilePic}
                  alt="avatar"
                />
                <div className="mt-2">
                  <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {doctor.name}
                  </h3>
                  <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                    {doctor.speciality}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors available.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
