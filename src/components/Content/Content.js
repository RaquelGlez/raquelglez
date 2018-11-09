import React from 'react';
import About from './Aboutme';
import Work from './Work';
import Skills from './Skills'
import Contact from './Contact';

// Assets
import './style.css';

const Content = (props) => {
  //console.log(props);
  return (

    <div className="row">
      <div className="col-3">
        <div className="menu my-5 d-flex align-items-center  justify-content-center flex-column">
          <a className="menu-link py-3 px-3" href="./Aboutme">
            <span>— <i className="fas fa-user-circle"></i> —</span>
            <h5 className="menu-name">Sobre mí</h5>
          </a>
          <a className="menu-link py-3 px-3">
            <span>— <i className="fas fa-briefcase"></i> —</span>
            <h5 className="menu-name">Proyectos</h5>
          </a>
          <a className="menu-link py-3 px-3">
            <span>— <i className="fas fa-user-cog"></i> —</span>
            <h5 className="menu-name">Habilidades</h5>
          </a>
          <a className="menu-link py-3 px-3">
            <span>— <i className="fas fa-envelope"></i> —</span>
            <h5 className="menu-name">Contacto</h5>
          </a>
        </div>
      </div>
      <div className="col-9">
        <div className="about mt-5"><About /></div>
        <div className="work my-5"><Work /></div>
        <div className="skills my-5"><Skills /></div>
        <div className="contact my-5"><Contact /></div>
      </div>
    </div>

  );
}

export default Content;