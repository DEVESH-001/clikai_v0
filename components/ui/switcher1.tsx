"use client";
import React, { useState } from "react";

const Switcher1 = () => {
  const [isChecked, setIsChecked] = useState(false); // Toggle state
  const [isYearly, setIsYearly] = useState(false); // Button state

  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    setIsYearly(newCheckedState); // Sync with the toggle
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center mb-4">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
          <div
            className={`dot absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
              isChecked ? "translate-x-full bg-blue-600" : ""
            }`}
          ></div>
        </div>
      </label>

      <div className="flex items-center justify-center gap-3 mb-8">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-4 py-2 rounded-l-lg ${
            !isYearly
              ? "bg-blue-600 text-white font-bold hover:bg-blue-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-4 py-2 rounded-r-lg ${
            isYearly
              ? "bg-blue-600 text-white font-bold hover:bg-blue-600"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          Yearly{" "}
          <span className="text-green-600 text-sm font-bold">(Save 17%)</span>
        </button>
      </div>
    </>
  );
};

export default Switcher1;
