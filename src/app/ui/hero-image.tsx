// HeroImage.tsx

import React from "react";

const HeroImage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen  bg-black text-white font-sans tracking-tight">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
        It's not because you're <span className="text-gray-400">broke</span>
        <br />
        It's not because you're <span className="text-gray-400">ugly</span>
        <br />
        It's not because you're <span className="text-gray-400">short</span>
      </h1>
      <p className="mt-8 text-center w-6/12">
        It's about the skills you haven't learned yet. We’re here to help you
        develop the social skills you need for effective and confident
        communication with women.
      </p>
      <div className="flex mt-32">
        <a href="#info">
          <button className="bg-black hover:bg-gray-900 border border-white text-white py-2 px-4 rounded-md mr-4">
            More Info
          </button>
        </a>
        <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md">
          Book a Call
        </button>
      </div>
      <p className="mt-4 text-center w-6/12 text-gray-400 text-sm">
      Try us out. Your first 15 minute call is on us. What do you have to lose?
      </p>
    </div>
  );
};

export default HeroImage;
