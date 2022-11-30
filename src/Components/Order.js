import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../Context/MainContext';
import Loader from './Loader';

const Order = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }


  const [order, setOrder] = useState([]);
  const { user } = useContext(AuthContext);

  // getting data by react query
  const { refetch, isLoading } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch(`https://ola-car-server.vercel.app/userBookingData/${user?.email}`)
        .then((res) => res.json())
        .then((result) => setOrder(result)),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  // form data load handler
  const fromButton = (id) => {
    setIsOpen(true);
    fetch(`https://ola-car-server.vercel.app/userBookingDataByProductID/${id}`)
      .then((res) => res.json())
      .then((result) => setProducts(result[0]));
  };

  const fromOnSuB = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const payButtonHandler = (id) => {

    const UserPayment = {
      paymentStatus: 'Payed',
    };

    fetch(`https://ola-car-server.vercel.app/updateUserPaymentStatus/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(UserPayment),
    })
      .then((res) => res.json())
      .then((result) => {
        refetch();
        toast.success('Payment successfully');
      });
    setIsOpen(false);
  };

  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="top-section">
        <h1 className="text-2xl font-general font-[600] text-left pt-10">Your order list</h1>
        <p className="font-general font-[500] mb-3">
          Your all orders list. Click on pay to complete the order.
        </p>
      </div>
      {/* table part start from here */}
      <div className="table-main py-10">
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
              <tr>
                <th scope="col" class="py-3 px-6">
                  Product name
                </th>
                <th scope="col" class="py-3 px-6">
                  Seller name
                </th>
                <th scope="col" class="py-3 px-6">
                  Location
                </th>
                <th scope="col" class="py-3 px-6">
                  Price
                </th>
                <th scope="col" class="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {order.map((data) => (
                <tr class="bg-[#F6F7F9] border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {data.product}
                  </th>
                  <td class="py-4 px-6">{data.sellerEmail}</td>
                  <td class="py-4 px-6">{data.location}</td>
                  <td class="py-4 px-6">{data.price}</td>
                  <td class="py-4 px-6">
                    {data.paymentStatus === 'Payed' ? (
                      <button
                        type="button"
                        class="text-white bg-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Pied
                      </button>
                    ) : (
                      <button
                        onClick={() => fromButton(data.productID)}
                        type="button"
                        class="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Pay
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

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
                      <form class="space-y-6" action="#" onSubmit={fromOnSuB}>
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                          Belling Details
                        </h5>
                        <div>
                          <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            User email
                          </label>
                          <input
                            defaultValue={user.email}
                            readOnly
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com"
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
                            defaultValue={products?.product}
                            readOnly
                            type="text"
                            name="password"
                            id="password"
                            placeholder="tesla@gmail.com"
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
                            defaultValue={products?.price}
                            readOnly
                            type="text"
                            name="password"
                            id="password"
                            placeholder="tesla car"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Card number
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
                            CVC
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
                            Date
                          </label>
                          <input
                            type="date"
                            name="password"
                            id="password"
                            placeholder="223"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
                        </div>

                        <div className="button-group flex gap-2">
                          <button
                            onClick={() => payButtonHandler(products.productID)}
                            class="w-full text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Pay
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
          {/* modal section end here */}
        </div>
      </div>
      {/* table part start end here */}
    </div>
  );
};

export default Order;
