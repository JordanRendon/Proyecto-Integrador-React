import React from 'react'
import './Menu.css'
import logoMenu from '../../assets/img/Menu-lgotipo-marca.png'
import logoPerfil from '../../assets/img/Menu-logotipo-perfil.png'
import { useThemeContext } from '../context/ThemeContext'
import DarckMode from '../ModeDarck/ModeDark'
import Login from '../Login/Login'

const Menu = () => {
  const {contextTheme, setContextTheme} = useThemeContext()
//   const {logo, setLogo} = useStates('logo-Dark')

//   const changeTheme =()=>{
//     setLogo(theme === 'Dark' ? 'logo-Light':'logo-Dark')
//   }

  return (
    <header id={contextTheme}>

        <nav className='container-menu'>

            <section class="logo-marca logos">
                <img src={logoMenu} alt="logo-codigo-c13"/>
            </section>
            <section className="menu">

                <ul>
                    <li><a href="#inicio" id="selected">Inicio</a></li>
                    <li><a href="#noticias">Noticias</a></li>
                    <li><a href="#carreras">Carreras</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contactos">Contactos</a></li>
                </ul>

            </section>
            <section class="logo-perfil logos">
                {/* <a href="../login/index.html">
                    <img src={logoPerfil} alt="logo-perfil"/>
                </a> */}
                <Login/>
            </section>
            <DarckMode/>
        </nav>

    </header>

  )
}

export default Menu
