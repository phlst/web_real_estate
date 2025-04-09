"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export function ApartmentSidebar() {
  const [buttons, setButtons] = useState([
    {
      index: 1,
      ringClassName: "ring-green-500",
      circleClassName: "bg-green-500",
      text: "Available",
      filter: "all",
      isActive: true,
    },
    {
      index: 2,
      filter: "reserved",
      ringClassName: "ring-yellow-500",
      circleClassName: "bg-yellow-500",
      text: "Reserved",
      isActive: false,
    },
    {
      index: 3,
      filter: "sold",
      ringClassName: "ring-red-500",
      circleClassName: "bg-red-500",
      text: "Sold",
      isActive: false,
    },
  ]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();

  useEffect(() => {
    const availabilityParam = searchParams.get("availability");
    if (availabilityParam) {
      setButtons((prev) =>
        prev.map((button) => ({
          ...button,
          isActive: button.filter === availabilityParam,
        }))
      );
    }
  }, [searchParams]);

  const handleButtonClick = (index, text) => {
    setButtons((prev) =>
      prev.map((button) =>
        button.index === index
          ? { ...button, isActive: !button.isActive }
          : { ...button, isActive: false }
      )
    );

    params.set("availability", text);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleSelectChange = (event, filterType) => {
    const value = event.target.value;
    params.set(filterType, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleRoomClick = (roomCount) => {
    const value = roomCount === 5 ? "all" : roomCount.toString();
    params.set("rooms", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleReset = () => {
    setButtons((prev) =>
      prev.map((button) => ({ ...button, isActive: button.index === 1 }))
    );
    params.delete("availability");
    params.delete("price");
    params.delete("area");
    params.delete("rooms");
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleApply = () => {
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-72 bg-white h-auto shadow-lg rounded-r-xl overflow-y-auto">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <p className="text-sm text-gray-500 mt-1">Find your dream apartment</p>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Price Range
        </h3>
        <select
          className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(event) => handleSelectChange(event, "price")}
        >
          <option value="off">Off</option>
          <option value="highest-to-lowest">From highest to lowest</option>
          <option value="lowest-to-highest">From lowest to highest</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Area (m²)
        </h3>
        <select
          className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(event) => handleSelectChange(event, "area")}
        >
          <option value="off">Off</option>
          <option value="highest-to-lowest">From highest to lowest</option>
          <option value="lowest-to-highest">From lowest to highest</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Availability
        </h3>
        <div className="space-y-3">
          {buttons.map((button) => (
            <button
              onClick={() => handleButtonClick(button.index, button.filter)}
              key={button.index}
              className={`w-full py-2 px-3 flex items-center bg-gray-50 ${
                button.isActive ? button.ringClassName + " ring-2" : ""
              } text-left rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:${
                button.ringClassName
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${button.circleClassName} mr-2`}
              ></span>
              {button.text}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Number of Rooms
        </h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((roomCount) => (
            <button
              key={roomCount}
              onClick={() => handleRoomClick(roomCount)}
              className="h-10 w-10 rounded-full bg-gray-50 text-gray-700 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {roomCount === 5 ? "5+" : roomCount}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 py-4 sticky bottom-0 bg-white shadow-md -mt-px">
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentSidebar;
