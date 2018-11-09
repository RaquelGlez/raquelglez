import React from 'react';

// Assets
import foto from '../Images/raquel-glez.jpg';
import './style.css';

const About = (props) => {
  //console.log(props);
  return (
    <div className="Header container">
        <section className="row image-aboutme">
          <div className="name col-8 mt-3 d-flex align-items-rigth  justify-content-center flex-column">
            <h2 className="row name">Raquel González</h2>
            <h5 className="row title pt-2">Front-End Developer & Ingeniera Química</h5>
          </div>
          <div className="col-4">
            <img src={foto} height="180" alt="fotografia" className="rounded-circle d-block mt-4 mr-4"/>
          </div>
        </section>
        <section className="content-aboutme mx-5">
          <p className="description py-5 px-5">
                              Me gusta aprender cosas nuevas constantemente. 
                              <br></br>
                              Busco aplicar la tecnología, mi experiencia y
                              vivencias para idear, crear o mejorar productos y
                              servicios que coadyuven a mejorar la calidad de
                              vida de las personas y el entorno
                              </p>
        </section>
    </div>
  );
}

export default About;