import React from "react";
import Add from "./Add";

const MainAdd = ({add}) => {
  return (
    <div className="pr-4 pl-4 pt-20 pb-20 px-4 md:px-10 lg:px-20 xl:px-40">
      <h1 className="font-general text-center font-[600] text-4xl mb-12">Our best deals of the week</h1>
      <div className="font-general grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4  lg:grid-cols-3 xl:grid-cols-4 ">
        {add.map(data=><Add adsData={data}></Add>)}
      </div>
    </div>
  );
};

export default MainAdd;
