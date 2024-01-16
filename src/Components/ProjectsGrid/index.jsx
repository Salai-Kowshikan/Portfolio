import React from "react";
import { motion } from "framer-motion";

export default function ProjectsGrid({animationVariants}) {
  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={"resume"}
        className="text-white border-white border-2 rounded-md min-h-full flex-grow mx-2 p-4 flex flex-col justify-evenly"
      ></motion.div>
    </>
  );
}
