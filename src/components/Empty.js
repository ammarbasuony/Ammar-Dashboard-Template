import React from "react";

// Helpers
import { noDataIllustration } from "helpers/illustarions";

const Empty = () => {
  return (
    <div class="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-800 m-auto mt-5">
      <div class="w-full h-full text-center">
        <div class="flex h-full flex-col items-center">
          {noDataIllustration()}
          <p class="text-slate-500 dark:text-gray-200 text-xl font-medium mt-6 mb-4">
            No Data Available ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Empty;
