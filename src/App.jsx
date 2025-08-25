import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home"; 
import Offers from "./Offers"; 

export default function App() {
  return (
  <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alloffers" element={<Offers />} />

        </Routes>
        </>
  )
}

