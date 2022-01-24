import { Link } from "react-router-dom"
import DoneIcon from '@mui/icons-material/Done';

const NavBarGeneral = (props)=> {
    let {visibilidad} = props

    return(
        <nav >
            
            <Link to="/">Inicio {visibilidad.inicio? <DoneIcon className="IconDone"  /> : null}</Link> 
            <Link to="/portafolio">Portafolio {visibilidad.portafolio? <DoneIcon className="IconDone"/> : null}</Link> 
            <Link to="/diario">Diario Reflexivo {visibilidad.diario? <DoneIcon className="IconDone"/> : null}</Link> 
            <Link to="/glosario">Glosario {visibilidad.glosario? <DoneIcon className="IconDone"/> : null}</Link>  
               
        
        </nav>
    )
}








export {NavBarGeneral}