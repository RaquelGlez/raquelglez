import React from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <>
      <div
        className={`flex justify-center items-center md:mx-auto flex-col  md:w-full md:flex-row ${styles.containerContact}`}
      >
        <section className="w-3/4 md:w-2/5 md:m-10 m-16 p-6 flex flex-col justify-center">
          <h3>Contacto</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            ut distinctio magni totam ipsam error. Aspernatur aliquam labore,
            minus molestiae similique molestias culpa nostrum, a iure vero
            cupiditate assumenda dignissimos.
          </p>
        </section>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
