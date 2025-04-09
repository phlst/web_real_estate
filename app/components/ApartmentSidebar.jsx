"use client";
import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";

export function ApartmentSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-4 right-4 z-30 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <AdjustmentsVerticalIcon className="w-6 h-6" />
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative top-0 left-0 z-20 h-screen transition-transform duration-300 ease-in-out md:block w-full md:w-auto`}
      >
        <Suspense fallback={<SidebarSkeleton />}>
          <SidebarContent closeMobileMenu={() => setIsOpen(false)} />
        </Suspense>
      </div>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

function SidebarSkeleton() {
  return (
    <div className="w-full md:w-72 bg-white bg-opacity-95 md:bg-opacity-100 h-full shadow-lg overflow-y-auto">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="h-6 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
        <div className="h-4 w-3/4 bg-gray-200 rounded-md animate-pulse mt-1"></div>
      </div>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-10 w-full bg-gray-200 rounded-lg animate-pulse"
            ></div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="h-4 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4"></div>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"
            ></div>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 sticky bottom-0 bg-white shadow-md -mt-px">
        <div className="flex gap-3">
          <div className="h-10 flex-1 bg-gray-200 rounded-lg animate-pulse"></div>
          <div className="h-10 flex-1 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

function SidebarContent({ closeMobileMenu }) {
  const [buttons, setButtons] = useState([
    {
      index: 1,
      ringClassName: "ring-green-500",
      circleClassName: "bg-green-500",
      text: "Dostupné",
      filter: "all",
      isActive: true,
    },
    {
      index: 2,
      filter: "reserved",
      ringClassName: "ring-yellow-500",
      circleClassName: "bg-yellow-500",
      text: "Rezervované",
      isActive: false,
    },
    {
      index: 3,
      filter: "sold",
      ringClassName: "ring-red-500",
      circleClassName: "bg-red-500",
      text: "Predané",
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
    closeMobileMenu();
  };

  const handleSelectChange = (event, filterType) => {
    const value = event.target.value;
    params.set(filterType, value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    closeMobileMenu();
  };

  const handleRoomClick = (roomCount) => {
    const value = roomCount === 5 ? "all" : roomCount.toString();
    params.set("rooms", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    closeMobileMenu();
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
    closeMobileMenu();
  };

  const handleApply = () => {
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    closeMobileMenu();
  };

  return (
    <div className="w-full max-w-lg mx-auto md:mx-0 md:w-72 bg-white md:bg-white bg-opacity-95 md:bg-opacity-100 backdrop-blur-sm md:backdrop-blur-none h-full shadow-lg overflow-y-auto">
      <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
        <div>
          <h2 className="text-xl font-bold text-gray-800">Filtre</h2>
          <p className="text-sm text-gray-500 mt-1">
            Nájdite svoj vysnívaný byt
          </p>
        </div>
        <button
          onClick={closeMobileMenu}
          className="md:hidden text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Cenové rozpätie
        </h3>
        <select
          className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(event) => handleSelectChange(event, "price")}
        >
          <option value="off">Vypnuté</option>
          <option value="highest-to-lowest">Od najvyššej po najnižšiu</option>
          <option value="lowest-to-highest">Od najnižšej po najvyššiu</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Rozloha (m²)
        </h3>
        <select
          className="w-full p-2 shadow-md border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          onChange={(event) => handleSelectChange(event, "area")}
        >
          <option value="off">Vypnuté</option>
          <option value="highest-to-lowest">Od najväčšej po najmenšiu</option>
          <option value="lowest-to-highest">Od najmenšej po najväčšiu</option>
        </select>
      </div>

      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-800 uppercase mb-4">
          Dostupnosť
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
          Počet izieb
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
            Resetovať
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Použiť
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApartmentSidebar;
