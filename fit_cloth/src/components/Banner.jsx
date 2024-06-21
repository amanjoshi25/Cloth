import React from "react";
import banner from "../../public/tailor_website/header_image.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12">
        <div className="w-full md:w-1/2 mt-12 md:mt-64 ">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold">
              Have A Fresh Look{" "}
              <span className="text-pink-600">Everyday!!!</span>
            </h1>
            <p className="text-xl ">
              A compelling subtitle or tagline that encapsulates the essence of
              the store.
            </p>
            <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Book Now
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mt-12 md:mt-22">
            <img src={banner} className="w-75 h-75" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
