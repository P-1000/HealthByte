import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Test from './pages/Test';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Calendercomp from './components/Calendercomp';
import BlogPosts from './components/BlogPosts';
import NewAppointments from './components/NewAppointments';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Navbar />
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
      {/* <h1 className="text-black text-2xl">dsf</h1> */}
      <Routes>
        <Route path="/sdf" element={<Test />} />
      </Routes>
    </>
  )
}

export default App
