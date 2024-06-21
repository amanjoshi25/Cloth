import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import { Link } from "react-router-dom";
function DesignMen() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-16">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-4xl font-semibold md:text-4xl ">
            Services for <span className="text-pink-600">Men</span>
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
        <Link to="/">
          <div className="item-center justify-center text-center">
            <button className="mt-6 bg-pink-600 text-white px-4 py-3 rounded-md hover:bg-pink-800 duration-300">
              Back
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

export default DesignMen;
