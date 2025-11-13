import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Hikes from "./Hikes/DayHikes";
import YorkshireThreePeaks from "./Hikes/YorkshireThreePeaks";
import MalhamCoveAndJanetsFoss from "./Hikes/MalhamCoveAndJanetsFoss";
import BoltonAbbeyAndSimonsSeat from "./Hikes/BoltonAbbeyAndSimonsSeat";
import RoseberryToppingPage from "./Hikes/RoseberryToppingPage";
import IlkleyMoorPage from "./Hikes/IlkleyMoorPage"
import DalesWay from "./Hikes/Daleway";
import CoastToCoast from "./Hikes/CoastToCoast"
import Cleveland from "./Hikes/cleveland"
import WalkingTours from "./WalkingTours/walkingtours";
import Contact from "./ContactUs/contactus";
import Booking from "./Booking/BookingModel";






function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hikes" element={<Hikes />} />
        <Route path="/yorkshire-3-peaks" element={<YorkshireThreePeaks />} />
        <Route path="/malham-cove-janets-foss" element={<MalhamCoveAndJanetsFoss />} />
        <Route path="/bolton-abbey" element={<BoltonAbbeyAndSimonsSeat />} />
        <Route path="/roseberry-topping-captain-cooks-monument" element={<RoseberryToppingPage />} />
        <Route path="/ilkley-moor" element={<IlkleyMoorPage />} />
        <Route path="/daleway" element={<DalesWay />} />
        <Route path="/coast-to-coast" element={<CoastToCoast />} />
        <Route path="/cleveland" element={<Cleveland />} />
        <Route path="/Walking-Tours" element={<WalkingTours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />











      </Routes>
    </Router>
  );
}

export default App;
