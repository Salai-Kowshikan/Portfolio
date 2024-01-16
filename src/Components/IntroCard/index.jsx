import React from "react";
import { motion } from "framer-motion";

export default function IntroCard({animationVariants}) {

  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={"intro"}
        className="text-white border-white border-2 rounded-md min-h-full flex-grow mx-2 p-4 flex flex-col justify-evenly"
      >
        <h2>
          Hello, I'm <b className="text-textc">Salai Kowshikan</b>, a{" "}
          <b className="text-textc">Front-end Developer</b> and{" "}
          <b className="text-textc">ML Enthusiast</b> from India.
        </h2>
        <p>
          Currently, I am pursuing B.Tech in Information Technology at{" "}
          <b>College of Engineering, Guindy</b>. With a strong passion in coding
          and problem solving, I have been working on various projects and have
          been learning new and upcoming technologies. I have been to an
          extensive number of hackathons and competitions and have won a few of
          them.
        </p>
        <p>
          I have experience in working with <b className="text-textc">React </b>
          , <b className="text-textc">Node.js </b>,
          <b className="text-textc"> Express </b>,{" "}
          <b className="text-textc"> Python </b>,{" "}
          <b className="text-textc"> HTML </b>,
          <b className="text-textc"> CSS </b>,{" "}
          <b className="text-textc"> Tailwind </b>,{" "}
          <b className="text-textc"> JavaScript </b>,{" "}
          <b className="text-textc"> Git </b>,
          <b className="text-textc"> GitHub </b>,{" "}
          <b className="text-textc"> Render </b> and{" "}
          <b className="text-textc"> Netlify </b>.
        </p>
        <p>
          I am currently looking for an internship opportunity to work with a
          team of developers. Always open to contact through LinkedIn or mail.
        </p>
      </motion.div>
    </>
  );
}
