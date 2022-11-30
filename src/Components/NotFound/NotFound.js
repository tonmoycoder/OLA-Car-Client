import React from "react";
import { Link } from "react-router-dom";

const Buy = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 lg:px-40">
        <h1 className="font-general text-3xl font-[600] py-10">oops! something wrong</h1>
      <div className="main-section flex justify-center item-center w-full mb-6">
        <img src="/Images/404.svg" alt="404" srcset="" className="w-[25rem]" />
      </div>
      <Link
          to="../../"
          type="button"
          class="  text-white bg-orange-500 border hover:bg-transparent hover:text-orange-500 hover:border-orange-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         let's go back to home
        </Link>
    </div>
  );
};

export default Buy;
