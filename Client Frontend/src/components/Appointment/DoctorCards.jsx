import React from 'react';
import { useNavigate } from 'react-router-dom';

function TeamSection() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/doctor/1');
        }
  return (
    <section className="bg-white dark:bg-gray-900 rounded-2xl px-1 mx-4">
      <div className="container px-6 py-3 mx-auto">
        {/* <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h2> */}

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Genral Physician
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://img.freepik.com/free-photo/smiling-doctor-with-strethoscope-isolated-grey_651396-974.jpg?w=2000&t=st=1698250172~exp=1698250772~hmac=78224da26f27ff2de636c9b91e25267853d14e9af5460a2cc546bcd67553d04c" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Cardiologist
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?w=2000&t=st=1698250215~exp=1698250815~hmac=486b32c4c616748f0bf8699a6e1894f902b0cee2c3310a3ad9d0462cb27e6784" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Steve Ben</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Dentist
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://img.freepik.com/free-photo/smiling-touching-arms-crossed-room-hospital_1134-799.jpg?w=1800&t=st=1698250241~exp=1698250841~hmac=09c104d7251e31f40cc7f5ca8af80ec1609c3dec3c0669135d33874916018086" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Patterson Johnson</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Allergy Specialist 
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17814.jpg?w=2000&t=st=1698250618~exp=1698251218~hmac=cc84d2db474ca934850d7ecf9812ae541b7d7c496f9375a98eaa26191262ad5c" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Kyogirou Rengoku
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Pulmonologist
              </span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Tengen Uzui
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Neurologist
              </span>
            </div>
          </div>

          <div 
            onClick={handleClick}
          className="w-full max-w-xs text-center hover:scale-105 transition-all cursor-pointer">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=2864&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                Tony Chopper
              </h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">
                Pediatrician
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
