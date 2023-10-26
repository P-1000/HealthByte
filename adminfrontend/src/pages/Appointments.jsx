import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { AiOutlineClockCircle } from "react-icons/ai";

const Appointments = () => {

    const appointmentData = [
        {
            date: '2023-10-27',
            time: '09:00 AM',
            description: 'Meeting with Client A',
            name: 'Shiva',
            gender: 'Male',
            age: 20
        },
        {
            date: '2023-10-27',
            time: '02:00 PM',
            description: 'Team Project Review',
            name: 'Mani',
            gender: 'Male',
            age: 21
        },
        {
            date: '2023-10-28',
            time: '10:30 AM',
            description: 'Training Session',
            name: 'Pavan',
            gender: 'Male',
            age: 22
        },
        // Add more appointment entries as needed
    ];

    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const getUpcomingAppointments = (selectedDate) => {
        return appointmentData.filter((appointment) => appointment.date === selectedDate);
    };
    const upcomingAppointments = getUpcomingAppointments(
        `${date.getFullYear()}-${date.getMonth() + 1}-${selectedDate}`
    );

    const daysInMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        return lastDay;
    };

    const firstDayOfMonth = () => {
        const year = date.getFullYear();
        const month = date.getMonth();
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
    };

    const renderCalendar = () => {
        const days = [];
        const totalDays = daysInMonth();
        const startingDay = firstDayOfMonth();

        // Add empty cells for days before the 1st of the month
        for (let i = 0; i < startingDay; i++) {
            days.push(<div key={`empty-${i}`} className="empty-cell" />);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= totalDays; day++) {
            days.push(
                <div
                    key={day}
                    className={`flex items-center justify-center w-12 h-12 hover:bg-gray-100 cursor-pointer rounded-lg ${selectedDate === day ? 'bg-blue-200' : ''
                        }`}
                    onClick={() => handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="flex">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right w-full p-6">
                <h1 className="text-2xl font-bold">Upcoming Appointments 🕐</h1>
                <div className="flex flex-row-reverse justify-between w-full items-start">

                    <div className="calendar border p-10 rounded-2xl my-3 ">
                        <div className="calendar-header flex items-center justify-between mb-4">
                            <button className='bg-red-200 text-sm px-2 rounded-xl' onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>Previous</button>
                            <h2 className='text-lg'>{date.toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                            <button className='bg-green-200 px-2 rounded-xl' onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>Next</button>
                        </div>
                        <div className="calendar-grid grid grid-cols-7 gap-2">
                            <div className="flex items-center justify-center w-12 h-12">Sun</div>
                            <div className="flex items-center justify-center w-12 h-12">Mon</div>
                            <div className="flex items-center justify-center w-12 h-12">Tue</div>
                            <div className="flex items-center justify-center w-12 h-12">Wed</div>
                            <div className="flex items-center justify-center w-12 h-12">Thu</div>
                            <div className="flex items-center justify-center w-12 h-12">Fri</div>
                            <div className="flex items-center justify-center w-12 h-12">Sat</div>
                            {renderCalendar()}
                        </div>
                    </div>
                    <div className='w-[60%] flex flex-col items-center'>
                        <div className='mt-4 bg-blue-200 w-full p-4 px-12 m-2 rounded-lg flex items-center border border-blue-800 justify-center'>
                            <p className='text-lg '>📃 Appointments for {selectedDate} - {date.getMonth() + 1} - {date.getFullYear()}</p>
                        </div>
                        {selectedDate && upcomingAppointments.map((appointment, index) => (
                            <div className='border m-2 p-4 flex justify-between rounded-xl w-full '>
                                <div key={index} className=''>
                                    <h2 className='text-xl font-semibold'>{appointment.name}</h2>
                                    <p className='text'>Age: {appointment.age} &nbsp; | &nbsp; Gender: {appointment.gender}</p>
                                    <p className='text'>{appointment.description}</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                   <div className='bg-red-200 rounded-lg flex py-2 px-4 items-center'> <AiOutlineClockCircle className='text-xl' /> &nbsp;<p>{appointment.time}  </p> </div>
                                    <button className='mx-4 px-6 py-2 text-lg  bg-blue-400 hover:scale-110 transition-all rounded-xl '>Schedule</button>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
