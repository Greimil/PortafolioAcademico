import {NavBarGeneral} from "../navBar/navBarInicio"
import portadaImg from "../../Imgs/diario.jpeg";

export const Inicio = () => {
  return (
    <div className="inicio">
      <NavBarGeneral visibilidad= {{inicio: true,portafolio: false, diario: false, glosario: false}}  />
      <h1>Portafolio Academico</h1>
      <h2>Lengua Española y tecnica de expresion II </h2>
      <img className="img-portada" src={portadaImg} alt=""></img>
      <q>
        <strong>-Mis Sueños son mentiras que un dia dejaran de serlo</strong>{" "}
      </q>
        <br/>
        <h3>Greimil Nuñez</h3>
        <h3>Matricula: 2021-0897</h3>
        
    </div>
  );
};
