import React from "react";
import ownerpic from "../../public/tailor_website/about us_image.png";
function OwnerAbout() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-12">
        <div className="md:order-2 w-full md:w-1.8/3 mt-12 md:mt-32 space-x-5 ">
          <div className="space-y-8 ">
            <h1 className="text-4xl font-bold ">
              About <span className="text-pink-600">Sonu Gupta!!!</span>
            </h1>
            <p className="text-xl ">
              Nestled in the heart of Ayodhya stands as a beacon of
              craftsmanship and sartorial elegance. Since 2018, we have been
              dedicated to providing exceptional tailoring services to our
              clients.
            </p>
            <button className="btn glass btn-xs sm:btn-sm md:btn-md lg:btn-lg">
              Know More
            </button>
          </div>
        </div>
        <div className="md:s order-1 w-full md:w-1.2/3">
          <div className="mt-12 md:mt-22">
            <img
              src={ownerpic}
              className="w-74 h-74"
              alt=""
              
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default OwnerAbout;
