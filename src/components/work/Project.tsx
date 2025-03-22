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
  console.log("item::", item);

  const clickItem = (item: string) => {
    console.log("item-click::", item);

    setActiveItem(true);
    setIdActiveItem(item);
  };

  return (
    <div
      className={` ${styles.containerWork}  ${
        activeItem
          ? idActiveItem === item
            ? styles.containerWork_activeItem
            : styles.containerWork_inactiveItem
          : ""
      } `}
    >
      <div className={`w-full h-full ${styles.projectContainerImage}`}>
        <Image
          src={img}
          alt="imagen de proyecto"
          width={500}
          height={500}
          priority={true}
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
