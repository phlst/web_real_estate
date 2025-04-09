"use client";
import {
  easeInOut,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/solid";

function Header() {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: -100 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: easeInOut }}
      className="sticky top-0 z-100 w-full backdrop-blur-md bg-white shadow-sm"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="text-xl font-bold text-slate-900 mr-8">
            RealitySlovakia
          </div>

          <nav className="hidden sm:flex sm:space-x-8">
            <Link href="/" className="group relative px-1 py-2">
              <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                Domov
              </span>
              <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
            <Link href="/apartments" className="group relative px-1 py-2">
              <span className="text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-900">
                Hľadať
              </span>
              <span className="absolute bottom-2 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/contact" onClick={handleNavClick}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 text-sm font-medium text-white shadow-md transition-all hover:shadow-lg"
            >
              Predajte Váš Dom
            </motion.button>
          </Link>

          <motion.div className="sm:hidden" whileTap={{ scale: 0.9 }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={handleNavClick}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
            >
              Domov
            </Link>
            <Link
              href="/apartments"
              onClick={handleNavClick}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 rounded-md"
            >
              Hľadať
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Header;
