import { Dialog, Transition } from "@headlessui/react";
import moment from "moment/moment";
import React, { Fragment, useContext, useState } from "react";
import toast from "react-hot-toast";
import { FaCarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/MainContext";

const Cards = ({ carData }) => {
  const [productData, setProductData] = useState([]);
  const { user } = useContext(AuthContext);
  const {
    _id,
    seller,
    model,
    image,
    carType,
    price,
    oldPrice,
    location,
    UsedTime,
    postTime,
    verifyStatus,
  } = carData;
  let [isOpen, setIsOpen] = useState(false);


  function closeModal() {
    setIsOpen(false);
  }

  // from data
  const booking = (e) => {
    e.preventDefault();
    const from = e.target;
    const buyerEmail = from.buyerEmail.value;
    const sellerEmail = from.sellerEmail.value;
    const product = from.product.value;
    const phone = from.phone.value;
    const price = from.price.value;
    const location = from.location.value;

    const bookingData = {
      productID: _id,
      buyerEmail: buyerEmail,
      sellerEmail: sellerEmail,
      product: product,
      phone: phone,
      price: price,
      location: location,
      paymentStatus: "Unpaid",
    };
    fetch(`https://ola-car-server.vercel.app/userBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success("your product has been booked");
        setIsOpen(false);
        console.warn(result);
        from.reset();
      });
  };

  function openModal(id) {
    fetch(`https://ola-car-server.vercel.app/singleProduct/${id}`)
      .then((res) => res.json())
      .then((result) => setProductData(result[0]));
    setIsOpen(true);
  }

  // report products
  const reportProduct = (id) => {
    const ReportTime = moment().format("lll");
    const reportBody = {
      productID: id,
      user: user?.email,
      productName: model,
      seller: seller,
      ReportTime: ReportTime,
    };
    fetch(`https://ola-car-server.vercel.app/report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reportBody),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.error("Thank you for your feedback");
        console.log(result);
      });
  };

  return (
    <div>
      <div className=" bg-white rounded-lg font-general hover:shadow-2xl card-main-body">
        <a href="/">
          <img className="rounded-t-lg w-full h-[12rem]" src={image} alt="" />
        </a>
        <div className="p-5">
          <a href="/">
            <h5 className="blog-title text-2xl font-[600] tracking-tight text-gray-900 dark:text-white mb-4">
              {model}
            </h5>
          </a>

          <div className="location flex mt-2 border-b pb-2 gap-1 items-center text-orange-500">
            <FaCarAlt />
            <p className="font-[500]">{carType}</p>
          </div>

          {verifyStatus ? (
            <div className="seller flex mt-2 text-blue-600 border-b pb-2 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="font-[500] ">{seller}</p>
            </div>
          ) : (
            <div className="seller flex mt-2 text-orange-500 border-b pb-2 gap-1">
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
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>

              <p className="font-[500] ">{seller}</p>
            </div>
          )}

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

            <p className="font-[500]">{location}</p>
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
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="font-[500]">{oldPrice}</p>
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
                d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
              />
            </svg>

            <p className="font-[500]">{UsedTime} days</p>
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
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p className="font-[500]">{postTime}</p>
          </div>
          <div className="price">
            <h1 className="font-general font-[600] text-4xl mt-2 mb-4 text-blue-700">
              ${price}
            </h1>
          </div>
          <Link
            onClick={() => reportProduct(_id)}
            className="report-item flex bg-red-600 rounded-full text-white text-[14px] max-w-max items-center px-3 py-1 gap-2 mb-4 font-general font-[500]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-4 h-4"
            >
              <path
                fill-rule="evenodd"
                d="M3 2.25a.75.75 0 01.75.75v.54l1.838-.46a9.75 9.75 0 016.725.738l.108.054a8.25 8.25 0 005.58.652l3.109-.732a.75.75 0 01.917.81 47.784 47.784 0 00.005 10.337.75.75 0 01-.574.812l-3.114.733a9.75 9.75 0 01-6.594-.77l-.108-.054a8.25 8.25 0 00-5.69-.625l-2.202.55V21a.75.75 0 01-1.5 0V3A.75.75 0 013 2.25z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Report item</p>
          </Link>
          <div className="button-group flex gap-2">
            <Link
              onClick={() => openModal(_id)}
              className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-center"
            >
              Book now
            </Link>
            <button className="w-full inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 justify-center">
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

          {/* modal prat start here */}

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <form class="space-y-6" action="#" onSubmit={booking}>
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                          Order Details
                        </h5>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Buyer email address
                          </label>
                          <input
                            type="email"
                            name="buyerEmail"
                            id="email"
                            value={user?.email}
                            readOnly
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            seller email address
                          </label>
                          <input
                            type="text"
                            name="sellerEmail"
                            id="password"
                            value={productData.seller}
                            readOnly
                            placeholder="seller name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Product
                          </label>
                          <input
                            type="text"
                            name="product"
                            id="password"
                            value={productData.model}
                            readOnly
                            placeholder="tesla car"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            name="price"
                            id="password"
                            value={productData.price}
                            readOnly
                            placeholder="tesla car"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Phone Number
                          </label>
                          <input
                            type="phone"
                            name="phone"
                            id="password"
                            placeholder="223"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Meeting location
                          </label>
                          <input
                            type="text"
                            name="location"
                            id="password"
                            placeholder="223"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>

                        <div className="button-group flex gap-2">
                          <button
                            type="submit"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Book the product
                          </button>
                          <button
                            onClick={closeModal}
                            type="submit"
                            class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default Cards;
