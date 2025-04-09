import Image from "next/image";
import ShinyButton from "./ShinyButton";

function Hero() {
  return (
    <div className="relative ">
      <div className="relative h-screen overflow-hidden">
        <Image
          src="/images/hero_background.jpg"
          alt="Cover Image"
          className="object-cover"
          fill={true}
          priority
        />

        <div className="absolute inset-0 flex items-center px-6 sm:px-16 md:px-24">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
              Discover Your Dream Home with Real Estate
            </h1>
            <p className="mb-8 text-xl font-semibold max-w-150 text-white drop-shadow-md md:text-xl">
              Experience luxury living at its finest. Discover your dream home
              in our modern residential complex. Explore our available
              apartments and find the perfect place to call home. Enjoy
              top-notch amenities and a vibrant community designed for your
              lifestyle.
            </p>

            <ShinyButton />
          </div>
        </div>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 overflow-hidden leading-0 z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[70px] w-full"
          style={{ transform: "rotate(180deg)" }}
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Hero;
