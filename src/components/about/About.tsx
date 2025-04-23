"use client";
import Image from "next/image";
import styles from "../../styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={`flex justify-center ${styles.containerAbout}`}>
        <div
          className={`w-4/5 flex justify-center gap-x-4 ${styles.mainAbout}`}
        >
          <div className={`w-2/5 self-center text-xl`}>
            <h3 className="pb-3">Hola! Soy Raquel González</h3>
            <p>
              Me gusta aprender cosas nuevas constantemente. Busco aplicar la
              tecnología, mi experiencia y vivencias para idear, crear o mejorar
              productos y servicios que coadyuven a mejorar la calidad de vida
              de las personas y el entorno.
            </p>
            <p className="py-2">
              Me he desempeñado como frontend, empleando algunas tecnologías
              como:
            </p>
            <p>
              HTML, CSS, JS, REACT, NEXTJS, SASS, NODE, GIT, GITHUB, GITFLOW,
              REACT NATIVE, SWIFT, FIREBASE, entre otras.
            </p>
          </div>
          <div
            className={`flex justify-center items-center ${styles.main_image_about}`}
          >
            <Image
              src="/img/rql.png"
              alt="imagen de proyecto"
              width={550}
              height={550}
              className={` ${styles.image_about}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
