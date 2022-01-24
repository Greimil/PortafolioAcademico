import { NavBarGeneral } from "../navBar/navBarInicio";
import LiElement from "./liElement";

const Glosario = () => {
  return (
    <div>
      <NavBarGeneral
        visibilidad={{
          inicio: false,
          portafolio: false,
          diario: false,
          glosario: true,
        }}
      />
      <h1 className="H1Glosario">
        <u>GLOSARIO</u>
      </h1>

      <div className="divGlosario">
        <ul className="">
          <LiElement
            palabra={"Manuscrito:"}
            descripcion={"Un manuscrito se trata de un documento que contiene información escrita a mano sobre un soporte flexible y manejable, con materias como la tinta de una pluma, de un bolígrafo o simplemente el grafito de un lápiz.   "
            }
          />

          <LiElement
            palabra={"Decalogo:"}
            descripcion={
              "Conjunto de diez mandamientos que, según los judíos y los cristianos, dio Dios a Moisés en el monte Sinaí."
            }
          />

          <LiElement
            palabra={"indiosincracia:"}
            descripcion={
              "La idiosincrasia es el conjunto de ideas, comportamiento, actitudes particulares o propios de un individuo, grupo o colectivo humano, generalmente para con otro individuo o grupo humano. Comportamientos o formas de pensar y actuar que son características de una persona."
            }
          />
          
        </ul>
      </div>
    </div>
  );
};

export default Glosario;
