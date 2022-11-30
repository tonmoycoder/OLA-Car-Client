import axios from "axios";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/MainContext";

const Register = () => {
  const { userRegister, updateUserProfile, SetUserState } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const froms = location.state?.from?.pathname || "/";
  const registerFromSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const img = from.image.value;
    const password = from.password.value;
    const Cpassword = from.Cpassword.value;
    const account = from.account.value;
    const userData = {
      email: email,
      name: name,
      accountType: account,
      verifyStatus: false,
    };

    if (password !== Cpassword) {
      toast.error("Your Password and Confirm password dose not match");
    } else {
      userRegister(email, password)
        .then((res) => {
          UserProfile(name, img);
          console.log(res);
          toast.success("Your account has been created please login");
          navigate(froms, { replace: true });
          axios({
            url: `https://ola-car-server.vercel.app/userRegister`,
            method: "POST",
            data: userData,
          })
            .then((result) => console.warn(result))
            .catch((error) => console.log(error));

          fetch(`https://ola-car-server.vercel.app/userData/${email}`)
            .then((res) => res.json())
            .then((result) => {
              localStorage.setItem("AccountStatus", result[0].accountType);
              SetUserState(result[0].accountType);
            });

          from.reset();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const UserProfile = (name, image) => {
    const profile = {
      displayName: name,
      photoURL: image,
    };
    updateUserProfile(profile);
  };

  return (
    <div>
      <div className="register-main flex justify-center items-center mt-20 px-4 mb-20">
        <form className="w-[20rem] text-left" onSubmit={registerFromSubmit}>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="image"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="image link"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required=""
            />
          </div>
          <div class="mb-6">
            <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="Cpassword"
              name="Cpassword"
              class="bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="again password"
              required=""
            />
          </div>
          <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select account type
          </label>
          <select
            id="countries"
            name="account"
            class="mb-6 bg-[#F6F7F9]  border-black border-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select your account type</option>
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>

          <button
            type="submit"
            class="mb-2 text-white bg-blue-500 font-general hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:w-full"
          >
            Sign Up
          </button>
          <Link
            to="/login"
            className=" font-general font-medium hover:text-blue-600"
          >
            Already have an account? Login Now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
