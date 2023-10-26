import React from 'react';
import Sidebar from '../components/Sidebar';
import Calendercomp from '../components/Calendercomp';
import BlogPosts from '../components/BlogPosts';
import NewAppointments from '../components/NewAppointments';
import Profile from '../components/Profile';


const Dashboard = () => {
  return (
    <div className='flex'>
        <div className="left">
          <Sidebar />
        </div>
        <div className="right flex flex-col">
          <h1 className='text-gray-800 text-2xl font-bold px-3 py-6'>Welcome Back Doc!👋</h1>
          <div className="flex">
            <Calendercomp />
            <NewAppointments />
            <Profile/>
          </div>
          <BlogPosts />
        </div>
      </div>
  )
}

export default Dashboard