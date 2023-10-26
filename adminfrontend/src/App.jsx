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
import Ecom from './pages/Ecom';
import ProductDetails from './pages/Product';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import MealPlan from './pages/MealPlan';
import Donate from './pages/Donate';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/newcampaign" element={<CreateCampaign />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/medico" element={<Ecom />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/medico/product/:id" element={<ProductDetails />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/meal" element={<MealPlan />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  )
}

export default App
