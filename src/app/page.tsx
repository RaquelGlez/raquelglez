"use client";
import styles from "../styles/home.module.css";
import { useState } from "react";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Work from "@/components/work/Work";
import { rubik } from "@/styles/fonts";
import Image from "next/image";

export default function Home() {
  const [activeBtn, setActiveBtn] = useState(false);

  return (
    <div className="relative">
      <nav
        className={`${styles.navbar} ${activeBtn ? `${styles.active}` : ""}`}
      >
        <div className={`${styles.navMain}`}>
          <button
            className={`${styles.menu_btn} ${
              activeBtn ? `${styles.active}` : ""
            }`}
            onClick={() => setActiveBtn(!activeBtn)}
            aria-label="close-open menu"
          >
            <div className={`${styles.menu_icon}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <a href="#about">Sobre mi</a>
          <a href="#work">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>

      <main className={` flex flex-col ${styles.mainContainer}`}>
        <Image
          src="/img/drop_water.png"
          alt="imagen de proyecto"
          fill
          priority
        />
        <section className={`${styles.intro}  ${rubik.className} `}>
          <h1 className={`text-center ${styles.animation1}`} id="title">
            Raquel González
          </h1>
          <h2 className={`text-center ${styles.animation2} `}>
            FrontEnd Developer
          </h2>
        </section>
      </main>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
