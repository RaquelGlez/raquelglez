import trt_ws from "../../public/img/trt_ws.png";
import trt_ws1 from "../../public/img/trt_ws2.png";
import trt_ws3 from "../../public/img/trt_ws3.png";
import trt_ws4 from "../../public/img/trt_ws4.png";
import cme from "../../public/img/cme.png";
import cme1 from "../../public/img/cme1.png";
import cme4 from "../../public/img/cme4.png";
import cme6 from "../../public/img/cme6.png";
import t_w from "../../public/img/t_w.png";
import t_w2 from "../../public/img/t_w2.png";
import t_w3 from "../../public/img/t_w3.png";
import notes_app from "../../public/img/notes_app.png";
import notes_app2 from "../../public/img/notes_app2.png";
import notes_app3 from "../../public/img/notes_app3.png";

export const projects = [
  {
    id: 1,
    img: trt_ws,
    images: [trt_ws1, trt_ws3, trt_ws4],
    title: "Toroto",
    url_code: "",
    url_page: "https://toroto.com",
    skills: "NEXTJS, SASS, MAPBOX, GraphQL, GIT, DOCKER",
    description:
      "Esta es la página oficial de Toroto. Lidere la implementación del rediseño, trabajando en la arquitectura del frontend incluyendo el desarrollo de componentes, implementación  de servicios, el idioma, responsive; así como el posterior mantenimiento.",
  },
  {
    id: 2,
    img: cme,
    images: [cme1, cme4, cme6],
    title: "Panel de monitoreo de carbono",
    url_code: "",
    url_page: "",
    skills: "NEXTJS, SASS, CODA, GIT",
    description:
      "Este es un proyecto desarrollado para Toroto. Consiste en un panel para gestionar las cuentas de clientes de Toroto interesadas en medir sus emisiones de CO2 en tres ámbitos, según su interes. El panel coadyuva a la administración de la recepción, manejo y respuesta a formularios y documentos asociados a los procesos de medición.",
  },
  {
    id: 3,
    img: t_w,
    images: [t_w, t_w2, t_w3],
    title: "the.weather",
    url_code: "https://github.com/RaquelGlez/the-weather-pwa",
    url_page: "https://raquelglez.github.io/the-weather-pwa/",
    skills: "REACT, SASS, ...",
    description:
      "the.weather es una pwa, muestra el clima de una ciudad, incluyendo detalles como la humedad, nubosidad y viento.",
  },
  {
    id: 4,
    img: notes_app,
    images: [notes_app, notes_app2, notes_app3],
    title: "NotesApp",
    url_code: "https://github.com/RaquelGlez/NotesApp",
    url_page: "https://raquelglez.github.io/NotesApp/#/NotesApp/auth/login",
    skills: "REACT, SASS, FIREBASE, BOOTSTRAP, ...",
    description:
      "NotesApp es un proyecto personal. Es una página web, en la que se pueden gestionar notas. Permite crear, editar y/o borrar notas.",
  },
];

export const about = {
  name: "Raquel González",
  //img: photograph,
  position: "Frontend Developer",
  aboutme:
    "Me gusta aprender cosas nuevas constantemente. Busco aplicar la tecnología, mi experiencia y vivencias para idear, crear o mejorar productos y servicios que coadyuven a mejorar la calidad de vida de las personas y el entorno.",
  descriptionSkills:
    "Me he desempeñado como frontend, empleando algunas tecnologías como:",
  skills:
    "HTML, CSS, JS, REACT, REACT NATIVE, SASS, NODE, FIREBASE, GIT, GITHUB, GITFLOW, SWIFT",
};

export const icons = {
  iconPage: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-link"
      viewBox="0 0 16 16"
    >
      <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
      <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
    </svg>
  ),
  iconLnk: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      className="bi bi-linkedin"
      viewBox="0 0 16 16"
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  ),
  iconGh: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      fill="currentColor"
      className="bi bi-github"
      viewBox="0 0 16 16"
    >
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
  ),
};
