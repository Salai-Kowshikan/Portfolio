import React from "react";

const ProjectCard = ({
  Title,
  image,
  description,
  websiteLink,
  githubLink,
}) => {
  return (
    <div className="rounded-lg bg-[#0a0a0a] flex flex-col p-4">
      <h2 className="text-center"> {Title} </h2>
      <img src={image} alt="image" className="w-full h-48 object-contain mb-4" />
      <div className="px-2 flex-grow">{description}</div>
      <hr className="my-4" />
      <div className="flex justify-around">
        {websiteLink != "" && (
          <a href={websiteLink} target="_blank" rel="noopener noreferrer">
            <img
              src="/Link.svg"
              alt="Link"
              className="h-12 w-12 object-cover"
            />
          </a>
        )}
        {githubLink != "" && <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src="/GitHub.svg"
            alt="Github"
            className="h-12 w-12 object-cover"
          />
        </a>}
      </div>
    </div>
  );
};

export default ProjectCard;
