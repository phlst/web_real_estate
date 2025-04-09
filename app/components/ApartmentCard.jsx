"use client";
import Image from "next/image";
import { builder } from "../lib/sanityClient";
import { useRouter } from "next/navigation";

function ApartmentCard({ title, rooms, status, price, area, image, id }) {
  const router = useRouter();

  const statusColors = {
    available: "bg-green-100 text-green-800",
    reserved: "bg-yellow-100 text-yellow-800",
    sold: "bg-red-100 text-red-800",
  };

  const statusTranslations = {
    available: "dostupný",
    reserved: "rezervovaný",
    sold: "predaný",
  };

  function handleOnClick() {
    router.push(`/apartments/${id}`);
  }

  const source = builder.image(image);

  return (
    <div
      onClick={handleOnClick}
      className="w-full border rounded-lg shadow-lg bg-white flex flex-col transform transition-transform hover:scale-105 cursor-pointer h-full"
    >
      <div className="relative h-48 sm:h-40 md:h-36 lg:h-48 w-full rounded-t-lg overflow-hidden">
        <Image
          src={source.url()}
          alt={title || "Byt"}
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          fill={true}
          priority
        />
      </div>
      <div className="flex flex-col flex-grow p-3 sm:p-4">
        <div className="flex flex-wrap justify-between items-center mb-2 gap-2">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 line-clamp-1">
            {title}
          </h3>
          <span
            className={`px-2 py-1 rounded text-xs sm:text-sm whitespace-nowrap ${statusColors[status]}`}
          >
            {statusTranslations[status] || status}
          </span>
        </div>
        <div className="text-gray-600 mb-4 flex-grow">
          <div className="grid grid-cols-2 gap-1 text-sm sm:text-base">
            <p className="font-medium">
              Izby: <span className="font-bold">{rooms}</span>
            </p>
            <p className="font-medium">
              Plocha: <span className="font-bold">{area} m²</span>
            </p>
            <p className="col-span-2 font-medium">
              Cena: <span className="font-bold">${price.toLocaleString()}</span>
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleOnClick();
          }}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
        >
          Zobraziť detaily
        </button>
      </div>
    </div>
  );
}

export default ApartmentCard;
