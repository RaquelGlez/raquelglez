import React from 'react';

// Assets
import './style.css';

const Contact = (props) => {
  //console.log(props);
  return (
    <div className="container Contact py-4 my-4">
        <section className="content-title">
            <h3>Contacto</h3>  
        </section>
        <section className="content-contact pt-4">
            <p>Estemos en contacto, igual me gustaria saber de ti</p>
            <div className="contact-icons">
              <a className="contact-link" href="mailto:gonzalez.c.raquel@gmail.com">
                <i className="far fa-envelope"></i>
              </a>
              <a className="contact-link" href="https://www.linkedin.com/in/raquelglezc">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="contact-link" href="https://github.com/RaquelGlez">
                <i className="fab fa-github"></i>
              </a>
            </div>          
        </section>
    </div>
  );
}

export default Contact;