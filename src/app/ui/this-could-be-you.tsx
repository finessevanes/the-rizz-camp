// HeroImage.tsx

import React from "react";

const ThisCouldBeYou = () => {
  return (
    <div className="flex h-1/2 text-black bg-white">
      <div className="flex-1 border-r border-black flex justify-center items-center">
        <div className="m-8 w-full lg:w-4/5 xl:w-2/3">
          <h1 className="text-3xl font-bold mt-16">Here’s how we can help</h1>
          <p className="mt-4">
          <span className="font-bold">1-on-1 Sessions:</span> Personal coaching to directly boost your communication and social understanding.
          </p>
          <p>
          <span className="font-bold">Interactive Workshops:</span> Hands-on practice in real-world interaction scenarios.
          </p>
          <p>
          <span className="font-bold">Community Support:</span> Connect with peers on the same path to improved social skills.
          </p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="this-could-be-you.png"
          alt="Your Alt Text"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ThisCouldBeYou;
