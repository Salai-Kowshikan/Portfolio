import React from "react";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
import IntroCard from "./Components/IntroCard";
import { Outlet } from "react-router-dom";
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="flex m-12 max-md:flex-col justify-center items-center h-[77svh]">
        <div className="md:w-[20svw]">
          <ProfileCard />
        </div>
        <div className="text-white flex-grow border-white border-2 rounded-md min-h-full mx-2 p-4 max-w-[65svw]">
          <Outlet />
        </div>
      </div>
    </>
  )
}