"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  MapPinIcon,
  ScaleIcon,
  BuildingOffice2Icon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { builder } from "../lib/sanityClient";
import { PortableText } from "@portabletext/react";

function ApartmentPage({ data }) {
  const router = useRouter();
  const images = [
    data.image ? builder.image(data.image).url() : null,
    data.planImage ? builder.image(data.planImage).url() : null,
  ].filter(Boolean);

  const getStatusText = () => {
    if (typeof data.status === "string") {
      const statusMap = {
        available: "Dostupný",
        reserved: "Rezervovaný",
        sold: "Predaný",
      };
      return (
        statusMap[data.status] ||
        data.status.charAt(0).toUpperCase() + data.status.slice(1)
      );
    }
    return "Neznámy";
  };

  const handleContactClick = () => {
    router.push(`/contact?property=${encodeURIComponent(data.title)}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="relative mb-10 bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-600">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {data.title}
            </h1>
          </div>

          <div className="mt-4 md:mt-0">
            <span
              className={`inline-flex items-center px-4 py-2 rounded-full font-semibold text-sm 
              ${
                data.status === "available"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : data.status === "reserved"
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                    : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full mr-2 
                ${
                  data.status === "available"
                    ? "bg-green-600"
                    : data.status === "reserved"
                      ? "bg-yellow-600"
                      : "bg-red-600"
                }`}
              ></span>
              {getStatusText()}
            </span>
          </div>
        </div>
      </div>

      <div className="mb-12">
        {images && images.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className={`${
                  index === 0 ? "col-span-1 md:col-span-2 row-span-2" : ""
                } rounded-xl relative overflow-hidden shadow-lg transition transform hover:scale-[1.02] hover:shadow-xl`}
                style={{ height: index === 0 ? "500px" : "500px" }}
              >
                <Image
                  src={imageUrl}
                  alt={`${data.title} - ${
                    index === 0 ? "Hlavný obrázok" : "Pôdorys"
                  }`}
                  fill
                  sizes="cover"
                  priority={true}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-200 h-[400px] flex items-center justify-center rounded-xl">
            <p className="text-gray-500">Žiadne dostupné obrázky</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm uppercase font-semibold opacity-80">
                  Cena
                </p>
                <p className="text-4xl font-bold">${data.price}</p>
              </div>
              <button
                className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg shadow-md flex items-center space-x-2 transition-all duration-200 hover:shadow-lg group"
                onClick={handleContactClick}
              >
                <PhoneIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span>Kontaktujte nás</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              Detaily nehnuteľnosti
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <HomeIcon className="h-8 w-8 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Izby</p>
                <p className="text-2xl font-bold text-gray-800">{data.rooms}</p>
              </div>
              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <BuildingOffice2Icon className="h-8 w-8 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Poschodie</p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.floor || "N/A"}
                </p>
              </div>
              <div className="flex flex-col items-center p-5 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
                <ScaleIcon className="h-8 w-8 text-blue-600 mb-3" />
                <p className="text-sm text-gray-500">Plocha</p>
                <p className="text-2xl font-bold text-gray-800">
                  {data.area} m²
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              O tejto nehnuteľnosti
            </h2>
            <div className="text-gray-700 leading-relaxed prose max-w-none">
              {typeof data.text === "string" ? (
                <p className="whitespace-pre-line">{data.text}</p>
              ) : data.text ? (
                <PortableText value={data.text} />
              ) : (
                <p>Pre tento byt nie je k dispozícii žiadny popis.</p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-5 text-gray-800 border-b pb-3">
              Súhrn nehnuteľnosti
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Typ:</span>
                <span className="font-medium">Byt</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Stav:</span>
                <span className="font-medium">{getStatusText()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Plocha:</span>
                <span className="font-medium">{data.area} m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Izby:</span>
                <span className="font-medium">{data.rooms}</span>
              </div>
              {data.floor && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Poschodie:</span>
                  <span className="font-medium">{data.floor}</span>
                </div>
              )}
              {data.orientation && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Orientácia:</span>
                  <span className="font-medium">{data.orientation}</span>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-4">Máte záujem?</h3>
            <p className="mb-6 text-gray-300">
              Kontaktujte náš tím pre viac informácií o tejto nehnuteľnosti
            </p>
            <button
              className="w-full bg-white text-gray-900 hover:bg-gray-100 py-3 px-4 rounded-lg font-medium transition duration-300 flex items-center justify-center space-x-2 shadow-lg"
              onClick={handleContactClick}
            >
              <PhoneIcon className="h-5 w-5" />
              <span>Kontaktujte nás</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApartmentPage;
