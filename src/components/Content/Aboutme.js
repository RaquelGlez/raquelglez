import React from 'react';

// Assets
import foto from '../Images/raquel-glez.jpg';
import './style.css';

const About = (props) => {
  //console.log(props);
  return (
    <div className="Header container">
        <section className="row image-aboutme">
          <div className="name col-8 mt-3 d-flex align-items-center  justify-content-center flex-column">
            <h2 className="row">Raquel González</h2>
            <h5 className="row">Front-End Developer</h5>
          </div>
          <div className="col-4">
            <img src={foto} height="200" alt="fotografia" className="rounded mt-4 mr-4"/>
          </div>
        </section>
        <section className="content-aboutme mx-4">
          <p className="description pt-5 pb-4">Me gusta aprender cosas nuevas constantemente. 
                              <br></br>
                              Busco aplicar la tecnología, mi experiencia y
                              vivencias para idear, crear o mejorar productos y
                              servicios que coadyuven a mejorar la calidad de
                              vida de las personas y el entorno</p>
        </section>
    </div>
  );
}

export default About;