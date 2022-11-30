import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const Details = () => {
  window.scrollTo(0, 0);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <div>
      <div className="course-main-part px-4 mt-20 mb-20 block lg:px-20 xl:px-40 lg:flex justify-center items-start lg:gap-10 ">
        <div className="course-left w-full lg:w-[50%]">
          <img
            className="rounded-md mb-10 w-[100%] lg:w-[100%] lg:mb-0 "
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/153dcc92668173.5e50f0e471f09.jpg"
            alt=""
            srcset=""
          />
        </div>

        {/* course name */}
        <div className="course-right w-[100%] lg:w-[50%]">
          <h1 className="text-3xl font-general font-[600] mb-4">Tesla model-s</h1>
          <p className="font-genera text-gray-500 flex gap-1 font-[500] border-2 border-orange-500 px-4 py-1 rounded-full max-w-max mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
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
            <p>Youta menasota</p>
          </p>
          <p className="font-genera text-black mb-5 flex gap-1 font-[600] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>Old Price</p>
          </p>
          <p className="font-genera text-black mb-5 flex gap-1 font-[600]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>

            <p>Current Price</p>
          </p>
          <p className="font-genera text-black mb-5 flex gap-1 font-[600]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <p>Uses time</p>
          </p>
          <p className="font-genera text-black mb-5 flex gap-1 font-[600]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-blue-600">
              <path
                fill-rule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Seller Name</p>
          </p>
          <p className="font-genera text-black mb-5 flex gap-1 font-[600]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <p>Time</p>
          </p>
          <h1 className="font-general text-6xl font-[600] text-orange-500 pb-10">222</h1>
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
                leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>
              {/* main body part of the modal start form here  */}
              {/* main body part of the modal end form here  */}
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95">
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <form class="space-y-6" action="#">
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                          Order Details
                        </h5>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            User Name
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Email address
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Product
                          </label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder=" car"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Price
                          </label>
                          <input
                            type="number"
                            name="password"
                            id="password"
                            placeholder="223"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Phone Number
                          </label>
                          <input
                            type="number"
                            name="password"
                            id="password"
                            placeholder="number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Meeting location
                          </label>
                          <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="location"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>

                        <div className="button-group flex gap-2">
                          <button
                            type="submit"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Book the product
                          </button>
                          <button
                            onClick={closeModal}
                            type="submit"
                            class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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

          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={openModal}>
            Bue it now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
