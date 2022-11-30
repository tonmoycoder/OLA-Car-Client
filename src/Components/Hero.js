import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Hero.css';

const Hero = () => {
  return (
    <div>
      <div className="hero-main w-screen">
        <div className="main-hero-part h-screen flex flex-col justify-between items-center">
          <div className="hero-top px-8 sm:px-56">
            <h1 className="font-general text-slate-200 font-[600] text-4xl pt-20 mb-5  sm:text-center">
              "Find the Perfect Vehicle for You at the Best Prices - Shop Now!"
            </h1>
            <p className="text-lg tracking-wide leading-7 sm:px-52 text-slate-300 font-[500] mt-3 sm:text-center">
              At ola-Car Buy Sell, we make it easy to find the ideal car for your needs. With our
              wide selection, competitive prices, and expert guidance, you can find the perfect
              vehicle for you and your budget. Whether you're looking for a new or used car, we have
              you covered. So don't wait - start browsing now and find the perfect car for your
              needs!
            </p>
          </div>
          <div className="hero-bottom mb-[10rem]">
            <Link
              to="/categorys"
              type="button"
              class="text-white bg-black hover:bg-black focus:outline-none focus:ring-4 focus:ring-black font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-black dark:hover:bg-black dark:focus:ring-black">
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
