import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { AuthContext } from "../Context/MainContext";
import BigLoader from "./BigLoader";
import ReportTable from "./ReportTable";

const Report = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [productLength, setProductLength] = useState([]);
  console.log(user?.email);

  // getting data by react query
  const {
    data: categorys,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`https://ola-car-server.vercel.app/allReport`)
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

  // getting delete id
  const deleteID = (id) => {
    console.log(id);
    fetch(`https://ola-car-server.vercel.app/reportDelete/${id}`, {
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
          Total user reports{" "}
          <span className="text-orange-500">{productLength}</span>
        </h1>
        <p className="font-general font-[500] mb-3">Click to delete buyer</p>
      </div>
      {products.length === 0 ? (
        <div className="text-section w-full h-screen flex justify-center items-center mt-[-10%]">
          <h1 className="font-general text-4xl text center font-[500]">
            No user report
          </h1>
        </div>
      ) : (
        <div className="table-main py-10">
          <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-[#F6F7F9] border-b border-gray-200">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Product
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Buyer
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Seller
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Product ID
                  </th>
                  <th scope="col" class="py-3 px-6">
                    report time
                  </th>
                  <th scope="col" class="py-3 px-6">
                    delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((data) => (
                  <ReportTable
                    key={data._id}
                    products={data}
                    getID={deleteID}
                  ></ReportTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
};

export default Report;
