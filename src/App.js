import { HashRouter, Routes, Route } from "react-router-dom";
import {Inicio} from "./components/inicio/inicio.js"
import Glosario from "./components/Glosario/glosario.js";
import Portafolio from "./components/portafolio/portafolio.js";
import Diario from "./components/diario/diario.js";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}  ></Route>
        <Route path="/portafolio" element={<Portafolio/>}   ></Route>
        <Route path="/diario" element={<Diario/>}  ></Route>
        <Route path="/glosario" element={<Glosario/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
