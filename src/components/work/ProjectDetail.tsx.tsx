import { StaticImageData } from "next/image";
import styles from "../../styles/work.module.css";

interface PropsProyectDetail {
  item: string;
  itemId: number;
  title: string;
  description: string;
  images: StaticImageData[];
  url_code: string;
  url_page: string;
  skills: string;
}

const ProjectDetail: React.FC<PropsProyectDetail> = ({
  itemId,
  title,
  description,
  url_code,
  url_page,
  skills,
  images,
}) => {
  return (
    <div className={`flex ${styles.mainProjectDetail}`}>
      <section className="w-1/2 bg-slate-400">
        <h3>detalle de proyecto</h3>
        <p>description</p>
        <p>skills</p>
        <a href="google.com">code</a>
        <a href="google.com">page</a>
      </section>
      <section className={`w-1/2 bg-teal-200 ${styles.projectDetail_gallery}`}>
        <span className={`${styles.projectDetail_img}`}>image1</span>
        <span className={`${styles.projectDetail_img}`}>image2</span>
        <span className={`${styles.projectDetail_img}`}>image3</span>
        <span className={`${styles.projectDetail_img}`}>image4</span>
      </section>
    </div>
  );
};

export default ProjectDetail;
