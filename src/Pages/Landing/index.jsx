import React from "react";
import Navbar from "../../Components/Navbar/index.jsx";
import ProfileCard from "../../Components/ProfileCard/index.jsx";
import { motion, AnimatePresence } from "framer-motion";
import IntroCard from "../../Components/IntroCard/index.jsx";
import ResumeCard from "../../Components/ResumeCard/index.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectsGrid from "../../Components/ProjectsGrid/index.jsx";
import ContactCard from "../../Components/ContactCard/index.jsx";
export default function Landing() {
  const location = useLocation();

  const animationVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0,
      transition: { duration: 1, delay:0.2},},
    exit: { opacity: 0, x: 100,
      transition: { duration: 0.2,},},
  };

  return (
    <>
      <Navbar />
      <div className="flex m-12 max-md:flex-col justify-center items-stretch h-full">
        <div className="flex-shrink-0">
          <ProfileCard />
        </div>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="" element={<IntroCard animationVariants={animationVariants} />} />
            <Route path="Resume" element={<ResumeCard animationVariants={animationVariants} />} />
            <Route path="Projects" element={<ProjectsGrid animationVariants={animationVariants} />} />
            <Route path="Contact" element={<ContactCard animationVariants={animationVariants} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}
