import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function BookingModal({ isOpen, onClose }) {
  const [tab, setTab] = useState("fixed");
  const [groupSize, setGroupSize] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-xl w-[95%] md:w-[700px] p-8 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
        >
          <XMarkIcon className="w-6 h-6 text-gray-700" />
        </button>

        {/* Heading */}
       <h2 className="font-[Raleway] font-bold text-[30px] leading-[40px] text-[#926A39] mb-2">
  Book your hike
</h2>

        <p className="text-gray-600 mb-6">
          Select your preferred dates and group details, we’ll confirm your booking soon.
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setTab("fixed")}
            className={`px-5 py-2 rounded-md font-medium ${
              tab === "fixed"
                ? "bg-[#C65A2E] text-white"
                : "bg-[#FAD4C3] text-[#C65A2E]"
            }`}
          >
            Fixed Dates
          </button>
          <button
            onClick={() => setTab("flexible")}
            className={`px-5 py-2 rounded-md font-medium ${
              tab === "flexible"
                ? "bg-[#C65A2E] text-white"
                : "bg-[#FAD4C3] text-[#C65A2E]"
            }`}
          >
            Flexible Dates
          </button>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fixed Dates Form */}
          {tab === "fixed" && (
            <>
              <div>
                <label className="text-sm font-medium text-gray-700">Select Start Date</label>
                <input
                  type="date"
                  className="w-full mt-2 p-3 rounded-lg bg-[#FFF5F1] border border-[#FAD4C3] outline-none"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Select End Date</label>
                <input
                  type="date"
                  className="w-full mt-2 p-3 rounded-lg bg-[#FFF5F1] border border-[#FAD4C3] outline-none"
                />
              </div>
            </>
          )}

          {/* Flexible Dates Form */}
          {tab === "flexible" && (
            <>
              <div>
                <label className="text-sm font-medium text-gray-700">Select Month</label>
                <select className="w-full mt-2 p-3 rounded-lg bg-[#FFF5F1] border border-[#FAD4C3] outline-none">
                  <option>Select Tentative Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Select Month</label>
                <select className="w-full mt-2 p-3 rounded-lg bg-[#FFF5F1] border border-[#FAD4C3] outline-none">
                  <option>Select Tentative Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                </select>
              </div>
            </>
          )}

          {/* Common Fields */}
          <div>
            <label className="text-sm font-medium text-gray-700">Group Ability</label>
            <select className="w-full mt-2 p-3 rounded-lg bg-[#FFF5F1] border border-[#FAD4C3] outline-none">
              <option>Select Ability</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Experienced</option>
              <option>Mixed</option>
              <option>Not Known</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Group Size</label>
            <div className="flex items-center mt-2 gap-3">
              <button
                className="px-3 py-2 bg-gray-200 rounded-lg"
                onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
              >
                −
              </button>
              <span className="text-lg">{groupSize}</span>
              <button
                className="px-3 py-2 bg-[#FFF0E8] text-[#C65A2E] rounded-lg"
                onClick={() => setGroupSize(groupSize + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-10">
          <button className="bg-[#C65A2E] text-white px-8 py-3 rounded-md hover:bg-[#b04e27] transition">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
