import React from "react";
import Menu from "./components/Menu/Menu";
import './App.css'
import Inicio from "./components/Inicio/Inicio";
import Noticias from "./components/Noticias/Noticias";
import Carreras from "./components/Carreras/Carreras";
import Nosotros from "./components/Nosotros/Nosotros";
import Contacto from "./components/Contacto/Contacto";
import Carrusel from "./components/Carrusel/Carrusel";

function App() {
  return (
    <div>
    <Menu/>
    <Inicio/>
    <Carrusel/>
    <Noticias/>
    <Carreras/>
    <Nosotros/>
    <Contacto/>
    </div>
  );
}

export default App;
