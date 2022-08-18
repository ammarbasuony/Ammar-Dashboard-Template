import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cookies from "js-cookie";

// Properties
import properties from "properties.json";

// Assets
import { barsIcon, closeIcon, logoutIcon } from "helpers/icons";

// Helpers
import pages from "helpers/sidebar-links";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const changePage = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    navigate(path);
  };

  const logout = (e) => {
    e.preventDefault();
    cookies.remove(properties.storage.cookie_name);
    navigate("/login");
  };

  return (
    <div
      className={`h-screen rounded-2xl lg:block transition-all fixed shadow-2xl lg:shadow-xl lg:relative lg:w-80 w-72 lg:left-0 z-50 ${
        isOpen ? "left-0" : "-left-72"
      }`}
    >
      <button
        className={`lg:hidden block absolute transition-all ${
          isOpen ? "right-3" : "-right-24"
        } top-3 px-4 py-2 text-white bg-primary rounded-full shadow-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-blue-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? closeIcon("", 23, 23) : barsIcon("", 23, 23)}
      </button>
      <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
        <div className="flex items-center justify-center pt-6 mb-8">
          <img
            src={require(`assets/${properties.appearence.logo}`)}
            alt="Timezones App"
            className="max-w-[180px] max-h-48"
          />
        </div>
        <nav className="mt-6">
          <div>
            {pages.map((page) => (
              <a
                key={page.name}
                className={`${
                  page.path === pathname
                    ? "text-primary bg-gradient-to-r from-white to-blue-100 dark:from-gray-700 dark:to-gray-800 border-r-4 border-primary"
                    : "text-gray-500 dark:text-gray-200 hover:text-secondary"
                } w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start`}
                href={page.path}
                onClick={(e) => changePage(e, page.path)}
              >
                <span className="text-left">{page.icon}</span>
                <span className="mx-4 text-sm font-normal">{page.name}</span>
              </a>
            ))}
            <a
              href="/"
              className="text-gray-500 dark:text-gray-200 hover:text-primary w-full font-thin uppercase flex items-center p-4 my-2 transition-colors duration-200 justify-start"
              onClick={(e) => logout(e)}
            >
              <span className="text-left">{logoutIcon()}</span>
              <span className="mx-4 text-sm font-normal">Logout</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
