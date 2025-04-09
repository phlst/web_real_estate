"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";

function OurOptions() {
  const cards = [
    {
      title: "Premium Listings",
      image: "/images/cardFirst.jpg",
      description:
        "Exclusive high-end properties in prime locations with luxury finishes and amenities that exceed expectations.",
      features: ["24/7 Concierge", "Private Gardens", "Smart Home Systems"],
    },
    {
      title: "New Developments",
      image: "/images/cardSecond.jpg",
      description:
        "Modern living spaces with cutting-edge amenities designed for contemporary lifestyles and sustainable living.",
      features: ["Energy Efficient", "Flexible Layouts", "Community Spaces"],
    },
    {
      title: "Investment Properties",
      image: "/images/cardThird.jpg",
      description:
        "High-yield options with long-term growth potential carefully selected in emerging neighborhoods with strong ROI.",
      features: ["Rental Guarantee", "Tax Benefits", "Portfolio Analysis"],
    },
    {
      title: "Luxury Homes",
      image: "/images/cardFourth.jpg",
      description:
        "Sophisticated residences with premium features that redefine luxury living with unparalleled attention to detail.",
      features: ["Architect Designed", "Panoramic Views", "Premium Materials"],
    },
  ];

  return (
    <div className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Find Your Dream Home
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-700">
            Discover exclusive properties tailored to your lifestyle and
            preferences. Our curated selection represents the finest real estate
            opportunities available in today&apos;s market, each carefully
            evaluated to ensure exceptional quality and value.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="mb-10 lg:mb-0 lg:mr-12 lg:w-5/12">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-zinc-100">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Why Choose Our Properties
              </h3>
              <p className="mb-6 text-slate-700">
                With decades of experience in the luxury real estate market, we
                understand that finding the perfect home goes beyond square
                footage and location. We prioritize quality, craftsmanship, and
                long-term value in every property we offer.
              </p>

              <h4 className="mb-3 text-xl font-semibold text-slate-800">
                Our Commitment to Excellence
              </h4>
              <ul className="mb-6 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-emerald-100 p-1 text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>
                    Premium locations in the most desirable neighborhoods,
                    strategically selected for appreciation potential and
                    quality of life.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-emerald-100 p-1 text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>
                    Personalized service with over 20 years of experience,
                    ensuring each client receives tailored guidance throughout
                    the entire process.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-emerald-100 p-1 text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>
                    Exclusive access to off-market properties through our
                    extensive network of developers, owners, and industry
                    insiders.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 rounded-full bg-emerald-100 p-1 text-emerald-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>
                    Tailored financing options to match your budget, with access
                    to preferred rates through our banking partnerships.
                  </span>
                </li>
              </ul>

              <h4 className="mb-3 text-xl font-semibold text-slate-800">
                Our Client-First Approach
              </h4>
              <p className="mb-6 text-slate-700">
                We believe in building lasting relationships with our clients.
                From the initial consultation to closing and beyond, we remain
                dedicated to your complete satisfaction and long-term happiness
                with your investment.
              </p>

              <button className="w-full rounded-md bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800">
                View All Properties
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:w-7/12">
            {cards.map((card, index) => (
              <div key={index} className="flex justify-center">
                <TiltCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  features={card.features}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ title, image, description, features }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const element = ref.current;
    const rect = element.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="relative h-80 w-full max-w-[280px] cursor-pointer rounded-xl bg-gray-100 sm:h-96"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-3 overflow-hidden rounded-xl bg-white shadow-lg"
      >
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={title}
            fill={true}
            className="object-cover transition duration-300 ease-in-out"
            sizes="(max-width: 768px) 100vw, 280px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10"></div>
          <div
            style={{
              transform: "translateZ(50px)",
            }}
            className="absolute bottom-0 left-0 w-full p-4 text-white"
          >
            <h3 className="mb-1 text-xl font-bold">{title}</h3>
            {description && (
              <p className="mb-2 text-sm text-gray-200">{description}</p>
            )}
            {features && (
              <div className="mt-2">
                <ul className="flex flex-wrap gap-2">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="rounded-full bg-white/20 px-2 py-1 text-xs"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurOptions;
