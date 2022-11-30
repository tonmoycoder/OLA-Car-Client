import { Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";
import CheckAdmin from "./ChechAdmin";
import CheckBuyer from "./CheckBuyer";
import CheckSeller from "./CheckSeller";

const Header = () => {
  const { userLogout, user, userState, loader } = useContext(AuthContext);
  console.log(user?.email);


  // admin state check
  const [isAdmin] = CheckAdmin(user?.email);

  // buyer sate check
  const [isBuyer] = CheckBuyer(user?.email);
  console.warn('is buyer' , isBuyer);

  const [isSeller] = CheckSeller(user?.email);
  console.warn("is seller", isSeller);


  const userLogoutButtonClicked = () => {
    userLogout();
  };

  if (loader) {
    const userSateFromLocalStorage = localStorage.getItem("AccountStatus");
    userState(userSateFromLocalStorage);
  }
  console.log(user);
  return (
    <div className=" bg-[#FAF7F5]">
      <div className="nav-main border-b font-general">
        <Navbar
          fluid={true}
          rounded={true}
          className="md:mx-20 lg:mx-20 xl:mx-40  bg-[#FAF7F5]"
        >
          <Link to="/" className="flex">
            <img
              src="/Images/ola.png"
              className="mr-3 h-6 sm:h-16"
              alt="car Logo"
            />
           
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="font-[500] ">
            <Link to="/" className="hover:text-blue-700 mt-2">
              Home
            </Link>
            <Link to="/blog" className="hover:text-blue-700 mt-2">
              Blog
            </Link>
            <Link to="/categorys" className="hover:text-blue-700 mt-2">
              Category
            </Link>
            {isAdmin && (
              <>
                <Link to="/allSellers" className="hover:text-blue-700 mt-2">
                  All Sellers
                </Link>
                <Link to="/allBuyers" className="hover:text-blue-700 mt-2">
                  All Buyers
                </Link>
                <Link to="/report" className="hover:text-blue-700 mt-2">
                  Report
                </Link>
              </>
            )}

            {isBuyer && (
              <>
                <Link to="/order" className="hover:text-blue-700 mt-2">
                  My orders
                </Link>
              </>
            )}

            {isSeller && (
              <>
                <Link to="/add" className="hover:text-blue-700 mt-2">
                  Add product
                </Link>
                <Link to="/products" className="hover:text-blue-700 mt-2">
                  My Products
                </Link>
              </>
            )}

            {user ? (
              <div className="flex gap-2 items-center">
                <Link
                  onClick={userLogoutButtonClicked}
                  className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
                >
                  Logout
                </Link>
                <Tooltip content={user?.email}>
                  <img
                    class="w-8 h-8 rounded-full"
                    src={user?.photoURL}
                    alt="Rounded avatar"
                  />
                </Tooltip>
              </div>
            ) : (
              <div className="button-group sm:flex justify-center items-center gap-2 ">
                <Link
                  to="/login"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
