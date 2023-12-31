import React from "react";
import Navbar from "./Components/Navbar";
import ProfileCard from "./Components/ProfileCard";
export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex m-12 max-md:flex-col justify-center items-center">
        <div className="md:max-w-[30svw]">
          <ProfileCard />
        </div>
        <div className="text-white flex-grow border-white border-2 rounded-md">
          flex placeholder
        </div>
      </div>
    </>
  )
}