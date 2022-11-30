import React, { useState } from "react";
import { useQuery } from "react-query";
import CarCard from "./CarCard";
import QuryLoader from "./QuryLoader";

const CarCategores = () => {
  const [category, setCategory] = useState([]);
  const {data:categorys, refetch, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://ola-car-server.vercel.app/allCarCategory`)
        .then((res) => res.json())
        .then((result) => setCategory(result)),
  });

  if(isLoading){
    return <QuryLoader></QuryLoader>
  }

  return (
    <div className="main pl-4 pr-4 pb-20 px-4 md:px-8 lg:px-10 xl:px-40">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4  lg:grid-cols-3 xl:grid-cols-4 font-general">
        {category.map((data) => (
          <CarCard key={data._id} carData={data}></CarCard>
        ))}
      </div>
    </div>
  );
};

export default CarCategores;
