import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import MainApp from "./components/Appointment/MainApp";
import AppointmentMain from "./pages/AppointmentMain";
import Doctor from "./pages/Doctor";
import Ecommerce from "./pages/Ecommerce";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/doctor-appointment" element={<AppointmentMain/>} />
            <Route path="/doctor/:id" element={<Doctor/>} />
            <Route path="/buy-medico" element={<Ecommerce />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
