import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../UI/ProjectCard";

export default function ProjectsGrid({animationVariants}) {

  const Projects = [
    {
    Title: "Seigei", image: "/Project_files/Seigei.png", description: "Frontend for the ML powered Indian Sign Language translator. One of the many projects backed by CEG Tech Forum, it is made with React and styled with Tailwind", websiteLink:"https://seigei.onrender.com/", githubLink:"https://github.com/Salai-Kowshikan/Seigei-react"
  },
  {
    Title: "Journey", image: "/Project_files/Journey.png", description: "A full stack website that serves as a hub for user written articles made with React and Tailwind, an API written in Express and Database powered by a cloud Postgres server. The github repository is private.", websiteLink:"https://journey-fopk.onrender.com/", githubLink:""
  },
  {
    Title: "Hangman", image: "/Project_files/Hangman.png", description: "A simple iteration of the popular word game Hangman, with a leaderboard system that keeps track of your score and is persistent across multiple instances of the game.", websiteLink:"", githubLink:"https://github.com/Salai-Kowshikan/Hangman"
  },
  ]

  return (
    <>
      <motion.div
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        key={"resume"}
        className="text-white border-white border-2 rounded-md flex-grow mx-2 p-4 grid grid-cols-1 md:grid-cols-2 gap-4 overflow-auto min-h-full max-h-[77vh]"
      >
        {Projects.map((project) => (
          <ProjectCard
            Title={project.Title}
            image={project.image}
            description={project.description}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink}
            key={project.Title}
          />
        ))}
      </motion.div>
    </>
  );
}
