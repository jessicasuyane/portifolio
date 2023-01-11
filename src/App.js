import { useState } from "react";
import './App.css';
import Certidicados from "./componentes/Certificados";
import Contato from "./componentes/Contato";
import Habilidades from "./componentes/Habilidades";
import Home from "./componentes/Home";
import Sobre from "./componentes/Sobre";
import Topo from './componentes/Topo';

export default function App() {

  const [ehTemaEscuro, setTemaEscuro] = useState(false)

  const alterarTema = () => {
    setTemaEscuro(!ehTemaEscuro)
  }

  return (
    <div className="App">
      <Topo alterarTema={alterarTema} ehTemaEscuro={ehTemaEscuro} />
      <Home ehTemaEscuro={ehTemaEscuro} />
      <Sobre ehTemaEscuro={ehTemaEscuro} />
      <Habilidades ehTemaEscuro={ehTemaEscuro} />
      <Certidicados ehTemaEscuro={ehTemaEscuro} />
      <Contato ehTemaEscuro={ehTemaEscuro}/>
    </div>
   
    
  );
};
