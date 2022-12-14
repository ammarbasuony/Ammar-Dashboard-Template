import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Properties
import properties from "../../properties.json";

// Assets
import {
  envelopeIcon,
  lockIcon,
  userIcon,
  spinnerIcon,
} from "../../helpers/icons";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password)
      return toast.error("Please fill all fields");

    if (password.trim().length === 0)
      return toast.error("Password is required");

    toast.success("Signup Successfully");
    navigate("/login");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 flex items-center justify-center h-screen">
      <div className="max-w-lg w-full">
        <div className="flex justify-center mb-6">
          <img
            src={require(`assets/${properties.appearence.logo}`)}
            alt="Timezones App"
            className="max-w-[200px] max-h-48"
          />
        </div>
        <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="self-center mb-6 font-bold text-xl text-gray-600 sm:text-2xl dark:text-white">
            Create a New Account
          </div>
          <div className="mt-8">
            <form onSubmit={(e) => handleSignup(e)}>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    {userIcon()}
                  </span>
                  <input
                    type="text"
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    {envelopeIcon()}
                  </span>
                  <input
                    type="text"
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex relative ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    {lockIcon()}
                  </span>
                  <input
                    type="password"
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full">
                <button
                  type="submit"
                  className="py-2 px-4 bg-primary hover:bg-secondary focus:ring-primary focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                  {loading ? spinnerIcon() : "Sign Up"}
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-6">
            <Link
              to="/login"
              className="inline-flex items-center font-medium text-xs text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
            >
              <span className="ml-2">You already have an account?</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
