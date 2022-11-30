import React, { useState } from "react";
import "../Css/BottomSection.css";
import ButtonsGroup from "./ButtonsGroup";
import CarCategores from "./CarCategores";
import Hero from "./Hero";
import MainAdd from "./MainAdd";


const Home = () => {
  const [addData, setAddData] = useState([]);
  fetch("https://ola-car-server.vercel.app/getAllProductADS")
    .then((res) => res.json())
    .then((result) => setAddData(result));
  return (
    <div>
      <Hero></Hero>
      {addData.length > 0 ? <MainAdd add={addData}></MainAdd> : undefined}
      <ButtonsGroup></ButtonsGroup>
      <CarCategores></CarCategores>
      <div className="bottom-section w-screen">
        <div className="title-section text-amber-400 h-screen flex justify-center items-center flex-col px-8 sm:px-0">
          <h1 className=" text-4xl font-general text-amber-400 font-[500]">
            We offer 3 month free servicing and free delivery
          </h1>
          <p className="text-amber-400 text-2xl mt-5 font-[500]">
            we are the best service provider now. We value your time and money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
