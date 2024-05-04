"use client"

import React from "react";
import { ethers, parseEther } from "ethers";
import SessionBookingContract from "../../../contractABI.json";

const GetStarted = () => {
    const [walletConnected, setWalletConnected] = React.useState(false);

//   const handleBookSession = async () => {
//     try {
//       // Check if MetaMask is installed
//       if ((window as any).ethereum) {
//         // Connect to MetaMask
//         await (window as any).ethereum.request({
//           method: "eth_requestAccounts",
//         });

//         // Initialize ethers provider
//        const provider = new ethers.BrowserProvider((window as any).ethereum);

//         // Get signer
//         const signer = await provider.getSigner();

//         // Load contract
//         const contractAddress = "0xAe16663319349Becd775a26C433a7b2FacB3B07D";
//         const contract = new ethers.Contract(
//           contractAddress,
//           SessionBookingContract.abi,
//           signer
//         );

//         // Book session
//         const transaction = await contract.bookSession(
//           "Details of the session",
//           {
//             value: ethers.parseEther("100"),
//           }
//         );
//         await transaction.wait();
//         console.log("Session booked successfully");

//       } else {
//         console.error("MetaMask not detected");
//       }
//     } catch (error) {
//       console.error("Error booking session:", error);
//     }
//   };

const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if ((window as any).ethereum) {
        // Connect to MetaMask
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log("Wallet connected successfully");
        // Once wallet is connected, enable the button to book session
        setWalletConnected(true);
      } else {
        console.error("MetaMask not detected");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const handleBuySession = async () => {
    try {
      if (!walletConnected) {
        console.error("Wallet not connected. Please connect to MetaMask first.");
        return;
      }

      // Initialize ethers provider
       const provider = new ethers.BrowserProvider((window as any).ethereum);

      // Get signer
      const signer = await provider.getSigner();

      // Load contract
      const contractAddress = "0xAe16663319349Becd775a26C433a7b2FacB3B07D";
      const contract = new ethers.Contract(
        contractAddress,
        SessionBookingContract.abi,
        signer
      );

      // Book session
      const transaction = await contract.bookSession("Details of the session", {
        value: ethers.parseEther("100"),
      });
      await transaction.wait();
      console.log("Session booked successfully");
      console.log(transaction)
    } catch (error) {
      console.error("Error booking session:", error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center bg-black text-white"
      style={{ height: "40vh" }}
    >
      <h1 className="text-3xl font-bold mb-4 mt-16">Shoot your shot.</h1>
      <p className="text-center max-w-lg mb-8">What are you waiting for?</p>
      <div className="flex items-center mb-16">
      <button
          className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded-md"
          onClick={walletConnected ? handleBuySession : connectWallet}
        >
          {walletConnected ? "Buy" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
