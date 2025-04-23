import React from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/contact.module.css";
import { icons } from "@/utils/helperData";

const Contact = () => {
  return (
    <div className={`${styles.containerContact}`}>
      <div
        className={`flex justify-center items-center md:mx-auto flex-col md:w-9/12 w-full ${styles.mainContact}`}
      >
        <h3 className="font-semibold text-current md:mb-8 text-3xl ">
          CONTACTO
        </h3>
        <div
          className={`flex justify-center items-center md:mx-auto flex-col  md:w-full md:flex-row`}
        >
          <section
            className={`w-3/4 md:w-2/5 md:m-10 m-16 p-6 flex flex-col justify-center ${styles.sectionContact}`}
          >
            <p className="text-center">
              ¿Tienes en mente un proyecto web o mobile interesante? <br />
              ¿Buscas una colaboradora?
            </p>
            <br />
            <p className="text-center">
              ¡También quiero saber de ti! <br />
              Ponte en contacto conmigo por estas redes, o enviame un mensaje
              desde este formulario.
            </p>
            <div className="flex flex-row mt-10 justify-evenly h-9/12">
              <a
                className={`${styles.contactLink}`}
                target="_blank"
                href="https://www.linkedin.com/in/raquelglezc"
                rel="noopener noreferrer"
                aria-label="LinkedIn de raquel glez"
              >
                {icons.iconLnk}
              </a>
              <a
                className={`${styles.contactLink}`}
                target="_blank"
                href="https://github.com/RaquelGlez"
                rel="noopener noreferrer"
                aria-label="Github de raquel glez"
              >
                {icons.iconGh}
              </a>
            </div>
          </section>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
