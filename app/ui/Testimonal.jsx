"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const testimonialsData = [
  {
    name: "Andrew Kovacs",
    text: "Buying a house through this real estate company was an exceptional experience. The team was professional, attentive, and guided me through every step of the process. The property options were top-notch, and I found my dream home much faster than I anticipated. I would highly recommend their services to anyone looking for a home.",
    img_url: "/images/andrew_kovacs.jpg",
  },
  {
    name: "Sarah Johnson",
    text: "I had an amazing experience with this real estate agency. They provided excellent customer service and were very knowledgeable about the market. They helped me find a beautiful home that fit all my needs. I couldn't be happier with my purchase!",
    img_url: "/images/sarah_johnson.jpg",
  },
  {
    name: "Michael Smith",
    text: "The team at this real estate company is fantastic! They made the home buying process seamless and stress-free. Their attention to detail and commitment to finding the perfect home for me was impressive. I highly recommend their services.",
    img_url: "/images/michael_smith.jpg",
  },
  {
    name: "Emily Davis",
    text: "From start to finish, my experience with this real estate company was excellent. They were always available to answer my questions and provided great advice throughout the process. I am thrilled with my new home and grateful for their help.",
    img_url: "/images/emily_davis.jpg",
  },
  {
    name: "Daniel Martinez",
    text: "I can't thank this real estate team enough for their hard work and dedication. They went above and beyond to ensure I found the perfect home. Their expertise and professionalism were evident in every interaction. I would highly recommend them to anyone in the market for a new home.",
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

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-12">
          What Our Clients Say
        </h2>

        <div className="relative overflow-hidden px-8 sm:px-12">
          <div className="relative max-w-3xl mx-auto border border-zinc-100">
            <div className="transition-opacity duration-500 ease-in-out bg-white rounded-xl shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:shrink-0 md:w-1/3 relative h-64 md:h-auto">
                  <div className="w-full h-full bg-indigo-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      {testimonialsData[currentIndex].img_url ? (
                        <div className="w-full h-full relative">
                          <Image
                            src={testimonialsData[currentIndex].img_url}
                            alt={testimonialsData[currentIndex].name}
                            fill={true}
                            sizes="cover"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-blue-700 flex items-center justify-center text-white text-2xl font-bold">
                          {testimonialsData[currentIndex].name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                      )}
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
              aria-label="Previous"
            >
              <ArrowLeftIcon className="w-5 h-5 text-gray-800" />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              onClick={goToNext}
              className="rounded-full w-12 h-12 bg-white shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-gray-50 transition-colors border border-gray-200"
              aria-label="Next"
            >
              <ArrowRightIcon className="w-5 h-5 text-gray-800" />
            </button>
          </div>
          {/* Dots indicator */}
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
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
