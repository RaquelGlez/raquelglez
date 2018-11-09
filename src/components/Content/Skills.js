import React from 'react';

// Assets
import './style.css';

const Skills = (props) => {
  //console.log(props);
  return (
    <div className="container skills py-4 my-4"> 
        <section className="content-title py-3">
            <h3>Habilidades</h3>
        </section>
        <section className="content-skills">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card bg text-center card-skill p-3">
                            <blockquote className="blockquote ">
                            <h3 className="name-skill">Tecnologias</h3>
                            <ul className="list-skill">
                                <li>HTML</li>
                                <li>CSS3</li>
                                <li></li>
                                <li></li>
                            
                            </ul>
                            {/* <p className="list-skill"></p> */}
                            </blockquote>
                        </div>
                        {/* <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide" alt="First slide"/> */}
                    </div>
                    <div className="carousel-item">
                        <div className="card bg text-center card-skill p-3">
                            <blockquote className="blockquote">
                            <h3 className="name-skill">Soft-skills</h3>
                            <p className="list-skill">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
                            </blockquote>
                        </div>                        
                        {/* <img class="d-block w-100" src=".../800x400?auto=yes&bg=666&fg=444&text=Second slide" alt="Second slide"/> */}
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
        
    </div>
  );
}

export default Skills;