import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/MainContext";
import AllBuyersTable from "./AllBuyersTable";
import BigLoader from "./BigLoader";

const AllBuyers = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [productLength, setProductLength] = useState([]);
  console.log(user?.email);

  const {
    data: categorys,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://ola-car-server.vercel.app/allSellers?accountType=Buyer`)
        .then((res) => res.json())
        .then((result) => {
          const length = result.length;
          setProductLength(length);
          setProducts(result);
        }),
  });

  if (isLoading) {
    return <BigLoader></BigLoader>;
  }
  const deleteID = (email) => {
    console.log(email);
    fetch(`https://ola-car-server.vercel.app/sellerDelete/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          toast.error("Data deleted");
          refetch();
        }
      });
  };
  return (
    <div className="px-4 h-screen md:px-10 lg:px-20 xl:px-40">
      <div className="top-section">
        <h1 className="text-2xl font-general font-[600] text-left pt-10">
          Total active buyer <span className="text-orange-500">{productLength}</span> 
        </h1>
        <p className="font-general font-[500] mb-3">
          Click to delete buyer
        </p>
      </div>
      {products.length === 0 ? (
        <div className="text-section w-full h-screen flex justify-center items-center mt-[-10%]">
          <h1 className="font-general text-4xl text center font-[500]">
            You have added no product yet.
          </h1>
        </div>
      ) : (
        <div className="table-main py-10">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                    name
                  </th>
                  <th scope="col" class="py-3 px-6">
                    id
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((data) => (
                  <AllBuyersTable
                    key={data._id}
                    products={data}
                    getID={deleteID}
                  ></AllBuyersTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllBuyers;
