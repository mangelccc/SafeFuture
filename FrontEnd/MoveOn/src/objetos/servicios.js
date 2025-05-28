import { faRobot, faPlane, faVideo, faGlobe, faFilePdf, faRandom, faUtensils, faPersonChalkboard } from "@fortawesome/free-solid-svg-icons";

const servicios = [
  { icono: faRobot, link:"/servicios/ramonia" , texto: "Ramón AI (Especialista en ayudarte)" },
  { icono: faVideo, link:"/servicios/videos" , texto: "Videos Interesantes" },
  { icono: faFilePdf, link:"/servicios/informacion", texto: "Información Emigrar Países" },
  { icono: faGlobe, link:"/servicios/mapa" , texto: "Mapamundi Ubicaciones Destacadas" },
  { icono: faPlane, link: "/servicios/vuelos" , texto: "Vuelos Hoy" },
  { icono: faPersonChalkboard, texto: "Rutinas personalizadas", link: "/rutina" },
];

export default servicios;
