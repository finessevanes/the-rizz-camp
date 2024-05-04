"use client";
// HeroImage.tsx

import React from "react";
import { VerificationLevel, IDKitWidget } from "@worldcoin/idkit";
import type { ISuccessResult } from "@worldcoin/idkit";
import type { VerifyReply } from "../api/verify/route";

const HeroImage = () => {
  const onSuccess = (result: ISuccessResult) => {
    // This is where you should perform frontend actions once a user has been verified, such as redirecting to a new page
    window.alert(
      "Successfully verified with World ID! Your nullifier hash is: " +
        result.nullifier_hash
    );
  };

  const handleProof = async (result: ISuccessResult) => {
    console.log("Proof received from IDKit:\n", JSON.stringify(result)); // Log the proof from IDKit to the console for visibility
    const reqBody = {
      merkle_root: result.merkle_root,
      nullifier_hash: result.nullifier_hash,
      proof: result.proof,
      verification_level: result.verification_level,
      action: process.env.NEXT_PUBLIC_WLD_ACTION,
      signal: "",
    };
    console.log(
      "Sending proof to backend for verification:\n",
      JSON.stringify(reqBody)
    ); // Log the proof being sent to our backend for visibility
    const res: Response = await fetch("/api/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
    const data: VerifyReply = await res.json();
    if (res.status == 200) {
      console.log("Successful response from backend:\n", data); // Log the response from our backend for visibility
    } else {
      throw new Error(
        `Error code ${res.status} (${data.code}): ${data.detail}` ??
          "Unknown error."
      ); // Throw an error if verification fails
    }
  };

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
        <IDKitWidget
          action={process.env.NEXT_PUBLIC_WLD_ACTION!}
          app_id={process.env.NEXT_PUBLIC_WLD_APP_ID as `app_${string}`}
          onSuccess={onSuccess}
          handleVerify={handleProof}
          verification_level={VerificationLevel.Orb} // Change this to VerificationLevel.Device to accept Orb- and Device-verified users
        >
          {({ open }) => (
            <button
              className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md"
              onClick={open}
            >
              Book a Call
            </button>
          )}
        </IDKitWidget>
      </div>
      <p className="mt-4 text-center w-6/12 text-gray-400 text-sm">
        Try us out. Your first 15 minute call is on us. What do you have to
        lose?
      </p>
    </div>
  );
};

export default HeroImage;
