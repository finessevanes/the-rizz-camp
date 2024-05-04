// Reviews.tsx

import React from "react";

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white" style={{ height: "60vh" }} >
      <h1 className="text-3xl font-bold mb-4 mt-16">Reviews</h1>
      <p className="text-center max-w-lg mb-8">
      &apos;Before The Rizz Camp, I had a hard time making eye contact with attractive women, and now I have the confidence to start conversations and make meaningful connections.&apos;
      </p>
      <div className="flex items-center mb-16">
        <div className="rounded-full overflow-hidden w-16 h-16 mr-4">
          <img src="gigachad.png" alt="Avatar" className="object-cover w-full h-full" />
        </div>
        <div>
          <p className="text-sm font-bold">Future You</p>
          <p className="text-sm text-gray-400">@rizzdaddy</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
