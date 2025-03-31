import Image, { StaticImageData } from "next/image";
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
  setActiveItem: (id: boolean) => void;
  setIdActiveItem: (text: string) => void;
}

const ProjectDetail: React.FC<PropsProyectDetail> = ({
  itemId,
  item,
  title,
  description,
  url_code,
  url_page,
  skills,
  images,
  setActiveItem,
  setIdActiveItem,
}) => {
  const onClose = () => {
    setActiveItem(false);
    setIdActiveItem("");
  };

  return (
    <div
      className={`flex gap-y-8 ${styles.mainProjectDetail}  ${
        itemId.toString() === item
          ? styles.contentProjectDetail_visible
          : styles.contentProjectDetail_hidden
      }`}
    >
      <button
        type="button"
        className={`${styles.modalClose_btn}`}
        onClick={onClose}
      >
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.068 1.654 8 6.721 2.934 1.654 1.656 2.932 6.723 8l-5.067 5.067 1.278 1.278 5.067-5.067 5.067 5.067 1.278-1.278-5.067-5.067 5.067-5.067-1.278-1.278Z" />
        </svg>
      </button>
      <h3 className="text-2xl text-center">{title}</h3>
      <div className={`flex  gap-y-14 ${styles.projectDetail_summary}`}>
        <section className="w-1/3">
          <p className="">{description}</p>
          <div className="my-6">
            <p className="text-black">Tecnologías usadas: </p>
            <p>{skills}</p>
          </div>

          {itemId !== 2 && (
            <div className="flex justify-evenly">
              <a
                href={url_page}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button_close}`}
              >
                Demo
              </a>
              {itemId !== 1 && (
                <a
                  href={url_code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button_close}`}
                >
                  Código
                </a>
              )}
            </div>
          )}
        </section>
        <section className={`w-2/3  ${styles.projectDetail_gallery}`}>
          {images.map((image, key) => (
            <div
              className={`${styles.projectDetail_gallery_item}`}
              key={key + key}
            >
              <Image
                src={image}
                alt="imagen de proyecto"
                width={500}
                height={500}
                className={`${styles.projectDetail_img}`}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
