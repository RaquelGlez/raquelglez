import React from 'react';

// Assets
import './style.css';

const Work = (props) => {
  //console.log(props);
  return (
    <div className="container work py-5">
        <section className="content-title py-3">
            <h3>Proyectos</h3>          
        </section>
        <section className="content-work mt-4">
            <div className="card-group">
                <div className="card ">
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
                <div className="card mx-1">
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>                    
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src=".../100px180/" alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>                   
                    </div>
                </div>
            </div>
          
        </section>
        
    </div>
  );
}

export default Work;