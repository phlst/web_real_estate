"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, useTime, useTransform } from "framer-motion";
import Link from "next/link";

function ShinyButton() {
  const time = useTime();
  const rotate = useTransform(time, [0, 2000], [0, 200], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `linear-gradient(${r}deg, #ff7e5f, #feb47b, #ff6a00, #ffa500, #ff1493, #ff69b4)`;
  });

  return (
    <Link href="/apartments">
      <div className="relative group ">
        <button className="text-black rounded-2xl transition-all ease-in-out group-hover:scale-110 max-w-68 relative bg-white z-10 px-5 py-2">
          <span className="font-bold">Nájdite svoj nový domov</span>
          <ArrowRightIcon className="w-6 h-6 inline ml-2" />
        </button>
        <motion.div
          style={{ background: rotatingBg }}
          className="absolute max-w-68 transition-all ease-in-out group-hover:scale-110 -inset-1 rounded-2xl z-0"
        ></motion.div>
      </div>
    </Link>
  );
}

export default ShinyButton;
