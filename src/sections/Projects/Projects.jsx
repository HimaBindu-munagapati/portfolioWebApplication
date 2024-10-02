import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import project1 from "../../assets/Project-1.png";
import project2 from "../../assets/Project-2.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={project1}
          link="https://github.com/HimaBindu-munagapati/Host-a-Static-Website-on-S3"
          projectName={"Hosting Static Website"}
          projectDesc={"Hosted a Static Website on S3 and AWS"}
        />
        <ProjectCard
          src={project2}
          link="https://github.com/HimaBindu-munagapati/SampleJenkins"
          projectName={"Ansible Web App Deploy"}
          projectDesc={"Deployed a Web App using Ansible"}
        />
      </div>
    </section>
  );
}

export default Projects;
