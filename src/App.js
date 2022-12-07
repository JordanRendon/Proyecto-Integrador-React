import React from 'react'
import Menu from './components/Menu/Menu'
import './App.css'
import Inicio from './components/Inicio/Inicio'
import Noticias from './components/Noticias/Noticias'
import Carreras from './components/Carreras/Carreras'
import Nosotros from './components/Nosotros/Nosotros'
import Contacto from './components/Contacto/Contacto'
import Registro from './components/Registro/Registro'
import { ThemeContextProvier } from './components/context/ThemeContext'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Welcome from './components/Welcome/Welcome'
import NotFound from './components/NotFound/NotFound'
import NewDetail from './components/NewsDetails/NewsDetail'

function App() {
  return (
    <ThemeContextProvier>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Proyecto-Integrador-React" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Noticias" element={<Noticias />} />
          <Route path='News/:id' element={<NewDetail/>} />
          <Route path="/Carreras" element={<Carreras />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/Registro' element={<Registro/>}/>
        </Routes>
      </div>
    </ThemeContextProvier>
  )
}

export default App
