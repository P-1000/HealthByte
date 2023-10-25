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
import Funding from './pages/Funding';
import Dashboard from './pages/Dashboard';
import CreateCampaign from './pages/CreateCampaign';
import CampaignDetails from './pages/CampaignDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/newcampaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails/>} />
      </Routes>
    </>
  )
}

export default App
