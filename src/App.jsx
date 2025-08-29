import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home"; 
import Offers from "./Offers"; 
import Terms from "./Terms"; 
import Policy from "./Policy"; 
import Signup from "./Signup"; 



export default function App() {
  return (
  <>
  
  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Alloffers" element={<Offers />} />
        <Route path="/Terms-And-Conditions" element={<Terms />} />
        <Route path="/Privecy-Policy" element={<Policy />} />
        <Route path="/Signup" element={<Signup />} />



        </Routes>
        </>
  )
}

