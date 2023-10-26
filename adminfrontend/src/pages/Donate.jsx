import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import bag from '../assets/blood-bag.png';
import { BsArrowRight } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlinePlay, HiMail } from "react-icons/hi";

const Donate = () => {
    const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
    const donors = [
        {
            name: 'Bala Shiva',
            age: 20,
            group: 'A+',
            phone: 9876543210,
            email: ''
        },
        {
            name: 'Pavan',
            age: 22,
            group: 'B+',
            phone: 9876543210,
            email: ''
        },
        {
            name: 'Mani',
            age: 24,
            group: 'O+',
            phone: 9876543210,
            email: ''
        },
        {
            name: 'Sai',
            age: 25,
            group: 'AB+',
            phone: 9876543210,
            email: ''
        },
        {
            name: 'Adithya',
            age: 25,
            group: 'AB+',
            phone: 9876543210,
            email: ''
        }


    ];

    const filteredDonors = donors.filter(donor => {
        return selectedBloodGroup === '' || donor.group === selectedBloodGroup;
    });
    return (
        <div className="flex">
            <Sidebar />
            <div className='rigt p-6'>
                <div className="flex">

                    <div className='bg-red-200 rounded-2xl flex shadow-red-200 p-6 '>
                        <div className='flex flex-col  justify-center'>
                            <h1 className='text-3xl font-bold text-red-900'>Donate Blood<br /> Save Life</h1>
                            <HiOutlinePlay className="text-3xl text-red-600 bg-red-500/50 w-12 h-12 m-4 rounded-full p-2" />
                        </div>
                        <img src={bag} alt="blood bag" className="w-56" />
                    </div>

                    <div className='groups flex p-6 flex-1 w-[60%] bg-green-200 rounded-2xl ml-4'>
                        <div className=' p-4 m-4'>
                            <h1 className='text-3xl font-bold'>Pick up your blood group</h1>
                            <BsArrowRight className='text-3xl w-14 h-14 bg-green-400 rounded-full p-3 text-green-800 font-bold m-4' />
                        </div>
                        <div className="flex flex-wrap p-4">

                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'O+' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('O+')}>
                                <button className='text-2xl font-bold'>O+</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'O-' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('O-')}>
                                <button className='text-2xl font-bold'>O-</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'A+' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('A+')}>
                                <button className='text-2xl font-bold'>A+</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'A-' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('A-')}>
                                <button className='text-2xl font-bold'>A-</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'B+' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('B+')}>
                                <button className='text-2xl font-bold'>B+</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'B-' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('B-')}>
                                <button className='text-2xl font-bold'>B-</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'AB+' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('AB+')}>
                                <button className='text-2xl font-bold'>AB+</button>
                            </div>
                            <div className={`border p-4 m-4 w-20 flex items-center justify-center hover:bg-red-200 cursor-pointer hover:scale-110 transition-all rounded-xl ${selectedBloodGroup === 'AB-' ? 'bg-red-500' : 'bg-gray-100'
                                }`}
                                onClick={() => setSelectedBloodGroup('AB-')}>
                                <button className='text-2xl font-bold'>AB-</button>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl text-black font-bold p-6'>Available Donors 👉</h1>
                    <div>
                        {filteredDonors.map((donor) => (
                            <div className='flex items-center border my-2 rounded-xl justify-between w-[50%] hover:shadow-md  cursor-pointer transition-all p-2'>
                                <div className="flex">
                                    <span className='w-10 h-10 rounded-full bg-blue-400 m-2'></span>
                                    <div className='mx-2'>
                                        <h1 className='text-xl '>Name: {donor.name}</h1>
                                        <p className='inline'>Age: {donor.age}</p> &nbsp;| &nbsp;
                                        <p className='inline'>Group: {donor.group}</p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <BiPhoneCall className='text-3xl hover:scale-110 transition-all bg-red-200 w-12 h-12 p-3 rounded-lg text-red-600 m-2' />
                                    <HiMail className='text-3xl hover:scale-110 transition-all bg-blue-200 w-12 h-12 p-3 rounded-lg text-blue-600 m-2' />
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donate