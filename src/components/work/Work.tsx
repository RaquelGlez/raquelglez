"use client";
import { useState } from "react";
import styles from "../../styles/work.module.css";
import Project from "./Project";
import ProjectDetail from "./ProjectDetail.tsx";
import { projects } from "@/utils/helperData";

interface WorkProps {
  activeItem: boolean;
  setActiveItem: (id: boolean) => void;
  idActiveItem: string;
  setIdActiveItem: (text: string) => void;
}

const Work = () => {
  const [activeItem, setActiveItem] = useState(false);
  const [idActiveItem, setIdActiveItem] = useState("");

  return (
    <div className={`overflow-hidden ${styles.containerWorks}`}>
      <h2 className="font-semibold text-current md:mb-8 text-xl text-center">
        PROYECTOS
      </h2>
      <div
        className={`mx-auto  ${
          activeItem
            ? styles.containerProjects_details
            : styles.containerProjects
        }`}
      >
        {projects.map((project) => (
          <Project
            key={project.id + project.title}
            title={project.title}
            img={project.img}
            item={`${project.id}`}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            idActiveItem={idActiveItem}
            setIdActiveItem={setIdActiveItem}
          />
        ))}
      </div>
      <div className={`w-4/5 mx-auto ${styles.containerMoreDetails}`}>
        {projects.map((project) => (
          <ProjectDetail
            key={project.id + project.title}
            itemId={project.id}
            title={project.title}
            description={project.description}
            skills={project.skills}
            url_code={project.url_code}
            url_page={project.url_page}
            images={project.images}
            item={idActiveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
