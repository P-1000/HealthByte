import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { SideBar } from "./components/SideBar/SideBar.jsx";
import DashBoard from "./pages/DashBoard.jsx";
import MainApp from "./components/Appointment/MainApp";

function App() {
  return (
    <>
      <Router>
        <div className="flex">
          <SideBar />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/doctorapp" element={<MainApp />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
