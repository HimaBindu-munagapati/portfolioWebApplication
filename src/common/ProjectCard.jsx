import React from "react";

function ProjectCard({ src, link, projectName, projectDesc }) {
  return (
    <a href={link} target="_blank">
      <img src={src} alt={`${projectName} logo`} />
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
    </a>
  );
}

export default ProjectCard;
