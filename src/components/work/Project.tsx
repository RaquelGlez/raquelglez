import Image, { StaticImageData } from "next/image";
import styles from "../../styles/work.module.css";
import { playfairDisplay } from "@/styles/fonts";

interface PropsProject {
  item: string;
  activeItem: boolean;
  setActiveItem: (id: boolean) => void;
  idActiveItem: string;
  setIdActiveItem: (text: string) => void;
  img: StaticImageData;
  title: string;
}

const Project: React.FC<PropsProject> = ({
  item,
  activeItem,
  setActiveItem,
  idActiveItem,
  setIdActiveItem,
  img,
  title,
}) => {
  const clickItem = (item: string) => {
    setActiveItem(true);
    setIdActiveItem(item);
  };

  return (
    <div
      className={`${styles.containerProject}  ${
        activeItem
          ? idActiveItem === item
            ? styles.containerProject_activeItem
            : styles.containerProject_inactiveItem
          : ""
      } `}
    >
      <div className={`w-full h-full ${styles.projectContainerImage}`}>
        <Image
          src={img}
          alt="imagen de proyecto"
          width={500}
          height={500}
          className={`${styles.projectImage}`}
        />

        <div className={`${styles.projectIntro}`}>
          <span className={`${playfairDisplay.className} uppercase `}>
            {title}
          </span>
          <button onClick={() => clickItem(item)}>Ver más →</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
