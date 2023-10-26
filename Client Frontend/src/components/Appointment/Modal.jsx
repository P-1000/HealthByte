import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlotPrice, setSelectedSlotPrice] = useState(null);

  // Function to select a slot and its associated price
  const selectSlot = (slotKey, price) => {
    setSelectedSlot(slotKey);
    setSelectedSlotPrice(price);
  };

  // Function to generate available slots and their prices based on the selected date
  const generateSlots = () => {
    if (selectedDate === "2023-11-01") {
      return [
        {
          key: "day1",
          time: "10:00 AM - 11:00 AM",
          price: "$50",
        },
        {
          key: "day2",
          time: "2:00 PM - 3:00 PM",
          price: "$75",
        },
        // Add more slots for this date
      ];
    } else if (selectedDate === "2023-11-02") {
      return [
        {
          key: "day3",
          time: "9:00 AM - 10:00 AM",
          price: "$40",
        },
        {
          key: "day4",
          time: "3:30 PM - 4:30 PM",
          price: "$60",
        },
        // Add more slots for this date
      ];
    }
    // Add more date-specific slots as needed
  };


  // send data to backend
    const senddata = async (data) => {
        const res = await axios.post("http://localhost:3000/api/book/newapp", {data})
        console.log(res)
    }


  // Function to handle saving changes and console the necessary data
  const handleSaveChanges = () => {
    // Replace the placeholders with actual patient ID and doctor ID
    const patientId = "abc";
    const doctorId = "bca";
    
    console.log("Patient ID:", patientId);
    console.log("Doctor ID:", doctorId);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Slot:", selectedSlot);
    console.log("Selected Slot Price:", selectedSlotPrice);

    senddata({patientId, doctorId, selectedDate, selectedSlot, selectedSlotPrice})

    setShowModal(false);
    toast.success("Slot Booked")
    setSelectedSlot(null); 
    // You can perform other actions with the data as needed
  };

  return (
    <>
      <Toaster />
      <button
        className="bg-[#0d0d0d] border transition-all hover:px-10
          delay-100 duration-300 ease-in-out
          hover:bg-white hover:text-black text-white px-4 py-2 rounded-md"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Book Video Consultation
      </button>

      {showModal ? (
        <div className="fixed px-10 inset-0 flex items-center justify-center z-50">
          <div className="absolute bg-black opacity-25 inset-0"></div>
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="border-b border-blueGray-200">
                <div className="p-7 flex place-items-center justify-center">
                  <h3 className="text-3xl font-semibold">
                    Dr. Tony Chopper Appointment Details
                  </h3>
                </div>
              </div>
              <div className="p-6 flex gap-2 justify-around">
                <div>
                  <h1 className="text-xl font-semibold">Select a Date:</h1>
                  <select
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedSlot(null); // Deselect the slot when changing the date
                    }}
                    className="py-2 px-3 bg-gray-100/10 rounded cursor-pointer mb-4"
                  >
                    <option value="">Select a Date</option>
                    <option value="2023-11-01">November 1, 2023</option>
                    <option value="2023-11-02">November 2, 2023</option>
                  </select>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Available Slots:</h1>
                  <div className="w-full">
                    {selectedDate &&
                      generateSlots().map((slot) => (
                        <div
                          key={slot.key}
                          className={`py-3 px-2 bg-green-100/10 cursor-pointer `}
                          onClick={() => selectSlot(slot.key, slot.price)}
                        >
                          <p className="flex flex-wrap w-full">
                            <h1
                              className={`text-gray-900 flex flex-wrap border transition-all px-4 py-2 rounded-3xl font-semibold ${
                                selectedSlot === slot.key
                                  ? "bg-gray-900 text-white"
                                  : "hover:bg-gray-100"
                              } `}
                            >
                              {slot.time}
                            </h1>
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              {selectedSlot && (
                <div className="p-6 border-t border-blueGray-200 flex place-items-center gap-2">
                  <h1 className="text-xl font-semibold">Selected Slot Price:</h1>
                  <p className="text-2xl">{selectedSlotPrice}</p>
                </div>
              )}
              <div className="border-t border-blueGray-200 p-6 flex justify-end">
                <button
                  className="text-red-500 font-bold uppercase px-6 py-2 text-sm mr-1 mb-1 cursor-pointer hover:opacity-75"
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setSelectedSlot(null); // Deselect the slot when closing the modal
                  }}
                >
                  Close
                </button>
                <button
                  className="bg-gray-500 text-white font-bold uppercase px-6 py-3 text-sm rounded cursor-pointer hover:bg-emerald-600"
                  type="button"
                  onClick={handleSaveChanges}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
