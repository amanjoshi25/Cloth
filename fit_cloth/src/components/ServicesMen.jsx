import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Design from "./Design";
import DesignMen from "./DesignMen";

function ServicesMen() {
 
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screeen">
          <DesignMen />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default ServicesMen;
