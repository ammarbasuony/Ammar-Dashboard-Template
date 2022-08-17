import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Components
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import UserItem from "./UserItem";
import Loading from "../../components/Loading";
import Empty from "../../components/Empty";

// Assets
import { plusIcon } from "../../helpers/icons";

const Users = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState(["item"]);
  const [allData, setAllData] = useState(["item"]);
  const [name, setName] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [noData, setNoData] = useState(false);

  const fetchData = async () => {
    console.log("fetchData");
  };

  const filterByName = (e) => {
    e.preventDefault();
    if (!name) {
      setData(allData.slice(0, 5));
      return setIsSearching(false);
    }

    const filteredData = allData.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setData(filteredData);
    setIsSearching(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header title="Users" />

      <div className="pb-3">
        <div className="lg:flex block flex-row mb-1 sm:mb-0 justify-between w-full">
          <Link
            to="/users/add"
            className="flex items-center justify-center gap-2 px-4 py-2 text-base font-semibold text-white bg-slate-500 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-primary-dimmed"
          >
            Add User {plusIcon()}
          </Link>
          <div className="text-end">
            <form
              className="flex flex-col lg:mt-0 mt-6 md:flex-row md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center"
              onSubmit={(e) => filterByName(e)}
            >
              <div className="relative">
                <input
                  type="text"
                  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-blue-200"
                type="submit"
              >
                Filter
              </button>
            </form>
          </div>
        </div>
        {isFetching ? (
          <Loading />
        ) : noData ? (
          <Empty />
        ) : (
          <div className="pt-4 overflow-x-auto scrollbar">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    >
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    >
                      Updated at
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-medium"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  <UserItem />
                </tbody>
              </table>
              {Boolean(data.length) && (
                <Pagination allData={allData} data={data} setData={setData} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
