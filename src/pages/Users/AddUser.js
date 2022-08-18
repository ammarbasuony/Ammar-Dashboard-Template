import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Actions
import { saveUsersData } from "../../store/actions";

// Components
import Header from "../../components/Header";

// Assets
import { leftArrowIcon, spinnerIcon } from "../../helpers/icons";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.dataReducer);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (password.trim().length === 0)
      return toast.error("Password is required");

    e.preventDefault();
    setLoading(true);

    const user = {
      name,
      email,
      password,
    };
    
    // Add User API
    setLoading(false);

    // return if success is false
    user.id = Math.random() * 100; // Get From Add API Response
    user.createdAt = new Date(); // Get From Add API Response
    user.updatedAt = new Date(); // Get From Add API Response
    dispatch(saveUsersData([...users, user]));
    toast.success("User added successfully");
    navigate("/users");
  };

  return (
    <div>
      <Header title="Users" />

      <div className="pb-3">
        <div className="flex flex-row mb-1 sm:mb-0 items-center gap-4 w-full">
          <Link
            to="/users/"
            className="flex items-center justify-center gap-2 px-4 py-2 text-base font-semibold text-white bg-slate-500 rounded-lg shadow-md hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            {leftArrowIcon()} Back
          </Link>
          <h2 className="text-2xl leading-tight text-slate-600 font-medium">
            Add Users
          </h2>
        </div>

        <form
          className="my-4 mb-10 shadow-md rounded-lg"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="p-4 bg-gray-100 border-t-2 border-primary rounded-lg bg-opacity-5">
            <div className="max-w-sm mx-auto md:w-full md:mx-0">
              <div className="inline-flex items-center space-x-4">
                <h1 className="text-gray-600 font-medium">New User</h1>
              </div>
            </div>
          </div>
          <div className="space-y-6 bg-white rounded-lg">
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 font-medium">
                Personal info
              </h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className="relative">
                    <input
                      type="text"
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className="relative">
                    <input
                      type="email"
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr className="m-0" />
            <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
              <h2 className="max-w-sm mx-auto md:w-1/3 font-medium">
                Password
              </h2>
              <div className="max-w-sm mx-auto space-y-5 md:w-2/3">
                <div>
                  <div className="relative">
                    <input
                      type="password"
                      className="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
              <button
                type="submit"
                className="py-2 px-4 bg-primary hover:bg-secondary focus:ring-primary focus:ring-offset-primary-dimmed text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
              >
                {loading ? spinnerIcon() : "Add User"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
