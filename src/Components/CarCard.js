import { Timeline } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ carData }) => {
  const {
    model,
    totalCars,
    totalSellers,
    lowestPrice,
    heightPrice,
    Img,
  } = carData;
  return (
    <div>
      <div class=" bg-white rounded-lg ">
        <a href="/">
          <img className="rounded-t-lg" src={Img} alt="" />
        </a>
        <div class="p-5">
          <a href="/">
            <h5 class="text-2xl font-[600] tracking-tight text-gray-900 dark:text-white">
              {model}
            </h5>
            <p class="mb-1 font-[500] tracking-tight text-gray-500 dark:text-white mt-2">
              Total cars: <b className="text-black"> {totalCars}</b>
            </p>
            <p class="mb-3 font-[500] tracking-tight text-gray-500 dark:text-white">
              Total sellers: <b className="text-black"> {totalSellers}</b>
            </p>

            <Timeline>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>
                    Lowest price
                    <br />
                    {lowestPrice}
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Point />
                <Timeline.Content>
                  <Timeline.Title>
                    Hight price
                    <br />
                    {heightPrice}
                  </Timeline.Title>
                </Timeline.Content>
              </Timeline.Item>
              <Timeline.Item></Timeline.Item>
            </Timeline>
          </a>

          <div className="price"></div>
          <Link
            to={`/category/${model}`}
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            View details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
