import React from "react";
import img from "../../public/tailor_website/customer1.png";
function Cards({ item }) {
  return (
    <>
      <div className="p-3">
        <div className="card w-92  bg-base-100 shadow-xl hover:scale-105 duration-200 dark:border">
          <figure className="objectfit">
            <img
              src={item.image}
              alt="Shoes"
              style={{
                width: "370px",
                height: "290px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.describtion}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs {item.price}</div>
              <div className="cursor-pointer px-2 py-1 badge boder-[2px] badge-outline hover:text-pink-600 duration-100">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
