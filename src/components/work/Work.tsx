"use client";
import { useState } from "react";
import styles from "../../styles/work.module.css";
import Project from "./Project";
import ProjectDetail from "./ProjectDetail.tsx";
import { projects } from "@/utils/helperData";

const Work = () => {
  const [activeItem, setActiveItem] = useState(false);
  const [idActiveItem, setIdActiveItem] = useState("");

  return (
    <div className={`overflow-hidden ${styles.containerSectionWorks}`}>
      <h2 className="font-semibold text-current mb-12 text-3xl text-center">
        PROYECTOS
      </h2>

      <div
        className={`mx-auto  ${
          activeItem ? styles.containerWorks_details : styles.containerWorks
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
      <div
        className={`shadow rounded-2xl ${
          activeItem ? styles.activeModal : styles.inactiveModal
        }`}
      >
        <div className={`${styles.contentModal}`}>
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
              setActiveItem={setActiveItem}
              setIdActiveItem={setIdActiveItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
