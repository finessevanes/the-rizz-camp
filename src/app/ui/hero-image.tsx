// HeroImage.tsx

import React from "react";

const HeroImage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-4xl md:text-6xl lg:text-7xl">
        It's not because you're broke <br />
        It's not because you're ugly <br />
        It's not because you're short
      </h1>
      <p className="mt-4 text-center">
        It's about the skills you haven't learned yet. We’re here to help you
        develop the social skills you need for effective and confident
        communication with women.
      </p>
      <div className="flex mt-8">
        <button className="bg-white text-black py-2 px-4 rounded-md mr-4">
          More Info
        </button>
        <button className="bg-white text-black py-2 px-4 rounded-md">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
