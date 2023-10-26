import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import MainApp from "./components/Appointment/MainApp";
import AppointmentMain from "./pages/AppointmentMain";
import Doctor from "./pages/Doctor";
import Ecommerce from "./pages/Ecommerce";
import Login from "./pages/Login";
import { useLocation } from "react-router-dom";
import ProfilePage from "./pages/Profile";
import Donate from "./pages/Donate";

function App() {
  const location = useLocation();

  return (
    <>
      {/* <Router> */}
        <div className="flex">
          {location.pathname === "/" ? <Login /> : <SideBar />}
          {/* <SideBar /> */}
          <Routes>
            <Route path="/home" element={<DashBoard />} />
            <Route path="/doctor-appointment" element={<AppointmentMain />} />
            <Route path="/doctor/:id" element={<Doctor />} />
            <Route path="/buy-medico" element={<Ecommerce />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/bloodbro" element={<Donate />} />
          </Routes>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
