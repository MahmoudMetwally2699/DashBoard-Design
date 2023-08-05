import { BrowserRouter, Routes, Route } from "react-router-dom";
// pages
import Home from "./UI/Utils/Dashboard/dashboard";
import About from "./Pages/About/About";
import Payments from "./Pages/Payments/Payments";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/payments" element={<Payments />} />
    </Routes>
  );
};

export default Router;
