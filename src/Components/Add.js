import React from "react";
import { FaCar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Add = ({adsData}) => {
  return (
    <div>
      <div className=" bg-white rounded-lg font-general">
        <a href="/">
          <img
            className="rounded-t-lg w-full h-[11rem]"
            src={adsData.image}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
            {adsData.model}
            </h5>
          </a>
          <div className="location flex mt-2 border-b pb-2 gap-1 items-center text-orange-500">
            <FaCar/>
            <p className="font-[500]">{adsData.carType}</p>
          </div>
          <div className="location flex mt-2 text-gray-500 border-b pb-2 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>

            <p className="font-[500]">{adsData.location}</p>
          </div>
          <div className="seller flex mt-2 text-gray-500 border-b pb-2 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="font-[500] ">{adsData.seller}</p>
          </div>
          <div className="price">
            <h1 className="font-general font-[600] text-4xl mt-2 mb-4 text-blue-700">
            ${adsData.price}
            </h1>
          </div>
          <div className="button-group flex gap-2">
            <Link
              to={`/categorys`}
              className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-center"
            >
              View details
            </Link>
            <button
              className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
