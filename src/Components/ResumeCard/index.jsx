import React from "react";
import { motion } from "framer-motion";
import Skill from "../UI/Skill";

export default function ResumeCard({ animationVariants }) {
  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={"resume"}
        className="text-white border-white border-2 rounded-md min-h-full flex-grow mx-2 p-4 flex flex-col justify-evenly items-center"
      >
        <div className="w-[80%] flex flex-col gap-2 px-4">
          <h2> My proficiency levels: </h2>
          <Skill skill="Eating" level={20} />
          <Skill skill="Sleeping" level={30} />
          <Skill skill="Coding" level={80} />
          <Skill skill="Gaming" level={100} />
        </div>
        <div className="w-[80%] flex flex-col">
          <h2> You can have a look at my resume here: </h2>
          <a
            href="/resume.pdf"
            download
            className="self-center border-2 border-white hover:border-textc hover:text-textc px-4 py-2 rounded-md"
          >
            Download Resume
          </a>
        </div>
      </motion.div>
    </>
  );
}
