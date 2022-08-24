import React from "react";

// Icons
import { deleteFilledIcon } from "../helpers/icons";

const Modal = ({ isOpen, onClose, onDelete }) => {
  return (
    <>
      {isOpen && (
        <div className="w-screen h-screen bg-slate-900/50 fixed left-0 top-0 z-50 flex">
          <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 w-80 m-auto">
            <div className="w-full h-full text-center">
              <div className="flex h-full flex-col justify-between">
                {deleteFilledIcon("mt-4 w-12 h-12 m-auto text-primary", 40, 40)}
                <p className="text-gray-800 dark:text-gray-200 text-xl font-bold mt-4">
                  Remove Item
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-xs py-2 px-6">
                  Are you sure you want to delete this item ?
                </p>
                <div className="flex items-center justify-between gap-4 w-full mt-8">
                  <button
                    type="button"
                    className="py-2 px-4 bg-primary hover:bg-secondary focus:ring-primary focus:ring-offset-primary-dimmed text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                    onClick={() => onDelete()}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4 bg-white hover:bg-gray-100 focus:ring-primary focus:ring-offset-primary-dimmed text-primary w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                    onClick={() => onClose()}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
