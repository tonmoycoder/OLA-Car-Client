import React, { useState } from "react";
import { Link } from "react-router-dom";

const ButtonsGroup = () => {
  const [category, setCategory] = useState([]);
  fetch("https://ola-car-server.vercel.app/allCarCategory")
    .then((res) => res.json())
    .then((data) => setCategory(data));
  return (
    <div className="botton-group-main mt-20 flex justify-center flex-col items-center mb-20 sm:mt-20">
      <h1 className="font-general mb-6 font-[500] text-xl px-8 sm:px-0">
        Select your favorite card category
      </h1>
      <div className="grid grid-cols-2 gap-2 justify-items-center justify-center items-center sm:gap-3 sm:grid-cols-4">
        {category.map((data) => (
          <>
            <Link to={`/category/${data.model}`} className="main-div border-2 w-[7rem] rounded-md flex justify-center items-center hover:bg-blue-200 hover:border-blue-600">
              <img
                src={data.logo}
                alt=""
                srcset=""
                className="w-[3rem] p-2"
              />
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default ButtonsGroup;
