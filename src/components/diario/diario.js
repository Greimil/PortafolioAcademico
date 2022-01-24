
import { NavBarGeneral } from "../navBar/navBarInicio"


const Diario = () => {

    return(
        <div>
            <NavBarGeneral visibilidad= {{inicio: false,portafolio: false, diario: true, glosario: false}} />
            <h1>Diario</h1>

        </div>
    )

}

export default Diario