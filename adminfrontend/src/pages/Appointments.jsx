import React from 'react';
import Sidebar from '../components/Sidebar';

const Appointments = () => {
  return (
    <div className="flex">
        <div className="left">
            <Sidebar />
        </div>
        <div className="right p-6">
            <h1 className='text-2xl font-bold'>Upcoming Appointments 🕐</h1>
        </div>
    </div>
  )
}

export default Appointments