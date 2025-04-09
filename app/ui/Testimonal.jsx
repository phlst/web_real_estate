"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const testimonialsData = [
  {
    name: "Andrej Kováč",
    text: "Kúpa domu prostredníctvom tejto realitnej spoločnosti bola výnimočnou skúsenosťou. Tím bol profesionálny, pozorný a sprevádzal ma každým krokom procesu. Možnosti nehnuteľností boli špičkové a našiel som svoj vysnívaný dom omnoho rýchlejšie, než som očakával. Vrelo by som odporučil ich služby každému, kto hľadá domov.",
    img_url: "/images/andrew_kovacs.jpg",
  },
  {
    name: "Silvia Jankovičová",
    text: "Mala som úžasnú skúsenosť s touto realitnou agentúrou. Poskytli mi vynikajúce zákaznícke služby a mali výborné znalosti o trhu. Pomohli mi nájsť krásny domov, ktorý vyhovoval všetkým mojim potrebám. Nemohla by som byť spokojnejšia so svojím nákupom!",
    img_url: "/images/sarah_johnson.jpg",
  },
  {
    name: "Michal Sýkora",
    text: "Tím v tejto realitnej spoločnosti je fantastický! Proces kúpy domu urobili bezproblémový a bez stresu. Ich pozornosť k detailom a záväzok nájsť pre mňa perfektný domov bol pôsobivý. Vrelo odporúčam ich služby.",
    img_url: "/images/michael_smith.jpg",
  },
  {
    name: "Eva Drobná",
    text: "Od začiatku až do konca bola moja skúsenosť s touto realitnou spoločnosťou výborná. Vždy boli k dispozícii odpovedať na moje otázky a poskytli skvelé rady počas celého procesu. Som nadšená z môjho nového domova a vďačná za ich pomoc.",
    img_url: "/images/emily_davis.jpg",
  },
  {
    name: "Daniel Martinec",
    text: "Nemôžem dostatočne poďakovať tomuto realitnému tímu za ich tvrdú prácu a odhodlanie. Vynaložili mimoriadne úsilie, aby som našiel dokonalý domov. Ich odbornosť a profesionalita boli zrejmé pri každej interakcii. Vrelo by som ich odporučil každému, kto hľadá nový domov.",
    img_url: "/images/daniel_martinez.jpg",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const preloadedImages = useMemo(() => {
    return testimonialsData.map((testimonial, index) => ({
      id: index,
      element: testimonial.img_url ? (
        <div key={index} className="w-full h-full relative">
          <Image
            src={testimonial.img_url}
            alt={testimonial.name}
            fill={true}
            sizes="(max-width: 768px) 100vw, 33vw"
            className="w-full h-full object-cover"
            priority={index === 0}
          />
        </div>
      ) : (
        <div
          key={index}
          className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl font-bold"
        >
          {testimonial.name}
        </div>
      ),
    }));
  }, []);

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          Čo hovoria naši klienti
        </h2>

        <div className="relative overflow-hidden px-8 sm:px-12">
          <div className="relative max-w-3xl mx-auto border border-zinc-100">
            <div className="transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3 relative h-64 md:h-auto">
                  <div className="w-full h-full bg-indigo-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {preloadedImages[currentIndex].element}
                    </div>
                  </div>
                </div>
                <div className="p-8 md:p-10 md:w-2/3">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <svg
                        className="h-10 w-10 text-blue-700 mb-4"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {testimonialsData[currentIndex].text}
                      </p>
                    </div>
                    <footer className="mt-4">
                      <p className="text-blue-700 font-semibold text-lg">
                        {testimonialsData[currentIndex].name}
                      </p>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={goToPrev}
              className="rounded-full w-12 h-12 bg-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Predchádzajúci"
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-800" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={goToNext}
              className="rounded-full w-12 h-12 bg-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Ďalší"
            >
              <ArrowRightIcon className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                  index === currentIndex
                    ? "bg-indigo-600"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Prejsť na referenciu ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
