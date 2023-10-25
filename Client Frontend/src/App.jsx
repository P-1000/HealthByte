
import { BrowserRouter as Router, Route, Routes ,  } from "react-router-dom";
import './App.css'
import {SideBar} from "./components/SideBar/SideBar.jsx";

function App() {

  return (
    <>
   <Router>
   <SideBar/>
   <Routes>
    {/* <Route path="/" element={} /> */}
    </Routes>
    </Router>
      
    </>
  )
}

export default App
