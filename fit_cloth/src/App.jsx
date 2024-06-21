import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import ServicesMen from "./components/ServicesMen";
import ServicesWomen from "./components/ServicesWomen";
import Login from "./components/Login";
function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicesMen" element={<ServicesMen />} />
          <Route path="/servicesWomen" element={<ServicesWomen />} />
          {/* <Route path="/login" element={<Login/>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
