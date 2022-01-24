import { NavBarGeneral } from "../navBar/navBarInicio";
import Aelement from "./aElement";

const Portafolio = () => {
  return (
    <div>
      <NavBarGeneral
        visibilidad={{
          inicio: false,
          portafolio: true,
          diario: false,
          glosario: false,
        }}
      />

      <h2 className="H2portafolio">
        Aqui podras encontrar todas las tareas realizadas durante el
        cuatrimestre
      </h2>
      <div className="Lista">
        <div className="InfoTareas">
          {" "}
          <strong>Tema</strong> <strong>Fecha de asignacion</strong>{" "}
          <strong>Fecha de entrega</strong> <strong>Enlace al trabajo</strong>{" "}
        </div>
            <Aelement titulo={"Morfologia de la palabra"} fechaEntrega={"26/1/2022"} fechaAsignacion={"23/1/2022"} href={"https://docs.google.com/document/d/1ksyk1kSv1yly9BgCaSePeFj1n9_GnFTk/edit?usp=sharing&ouid=113180752528374884050&rtpof=true&sd=true"} />
      </div>
    </div>
  );
};

export default Portafolio;
