"use client";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function OurOptions() {
  const cards = [
    {
      title: "Prémiové ponuky",
      image: "/images/cardFirst.jpg",
      description:
        "Exkluzívne nehnuteľnosti najvyššej triedy na lukratívnych miestach s luxusným vybavením, ktoré prekračujú očakávania.",
      features: ["24/7 Recepcia", "Súkromné záhrady", "Smart systémy"],
    },
    {
      title: "Nové projekty",
      image: "/images/cardSecond.jpg",
      description:
        "Moderné obytné priestory s najnovšími vymoženosťami navrhnuté pre súčasný životný štýl a udržateľné bývanie.",
      features: [
        "Energeticky úsporné",
        "Flexibilné pôdorysy",
        "Spoločné priestory",
      ],
    },
    {
      title: "Investičné nehnuteľnosti",
      image: "/images/cardThird.jpg",
      description:
        "Vysoko výnosné možnosti s dlhodobým potenciálom rastu starostlivo vybrané v rozvíjajúcich sa štvrtiach s vysokou návratnosťou investícií.",
      features: ["Garantovaný nájom", "Daňové výhody", "Analýza portfólia"],
    },
    {
      title: "Luxusné domy",
      image: "/images/cardFourth.jpg",
      description:
        "Sofistikované rezidencie s prémiovými prvkami, ktoré nanovo definujú luxusné bývanie s bezkonkurenčnou pozornosťou k detailom.",
      features: [
        "Architektom navrhnuté",
        "Panoramatické výhľady",
        "Prémiové materiály",
      ],
    },
  ];

  return (
    <div className="w-full bg-white py-16 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Nájdite svoj vysnívaný domov
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-slate-700">
            Objavte exkluzívne nehnuteľnosti prispôsobené vášmu životnému štýlu
            a preferenciám. Náš starostlivo vybraný výber predstavuje najlepšie
            možnosti na realitnom trhu, každá dôkladne hodnotená pre
            zabezpečenie výnimočnej kvality a hodnoty.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
          <div className="mb-10 lg:mb-0 lg:mr-12 lg:w-5/12">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-zinc-100">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                Prečo si vybrať naše nehnuteľnosti
              </h3>
              <p className="mb-6 text-slate-700">
                S desiatkami rokov skúseností na trhu s luxusnými
                nehnuteľnosťami rozumieme, že nájsť dokonalý domov presahuje
                metráž a lokalitu. Prioritizujeme kvalitu, remeselné spracovanie
                a dlhodobú hodnotu v každej nehnuteľnosti, ktorú ponúkame.
              </p>

              <h4 className="mb-3 text-xl font-semibold text-slate-800">
                Náš záväzok k dokonalosti
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
                    Prémiové lokality v najžiadanejších štvrtiach, strategicky
                    vybrané pre potenciál zhodnotenia a kvalitu života.
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
                    Personalizovaný servis s viac ako 20-ročnými skúsenosťami,
                    zabezpečujúci, že každý klient dostane individuálne
                    poradenstvo počas celého procesu.
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
                    Exkluzívny prístup k nehnuteľnostiam mimo trhu
                    prostredníctvom našej rozsiahlej siete developerov,
                    majiteľov a odborníkov z odvetvia.
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
                    Prispôsobené finančné možnosti zodpovedajúce vášmu rozpočtu,
                    s prístupom k výhodným sadzbám prostredníctvom našich
                    bankových partnerstiev.
                  </span>
                </li>
              </ul>

              <h4 className="mb-3 text-xl font-semibold text-slate-800">
                Náš prístup orientovaný na klienta
              </h4>
              <p className="mb-6 text-slate-700">
                Veríme v budovanie dlhodobých vzťahov s našimi klientmi. Od
                prvej konzultácie až po ukončenie a aj neskôr, zostávame oddaní
                vašej úplnej spokojnosti a dlhodobému šťastiu s vašou
                investíciou.
              </p>

              <Link
                href="/apartments"
                className="w-full rounded-md bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-800"
              >
                Zobraziť všetky nehnuteľnosti
              </Link>
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
