import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import OwnerAbout from "../components/OwnerAbout";
import Design from "../components/Design";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <OwnerAbout />
      <Design />
      <Footer />
    </>
  );
}

export default Home;
