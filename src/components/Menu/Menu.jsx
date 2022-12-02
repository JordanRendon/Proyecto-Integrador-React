import React from 'react'
import './Menu.css'
import logoMenu from '../../assets/img/Menu-lgotipo-marca.png'
import { useThemeContext } from '../context/ThemeContext'
import DarckMode from '../ModeDarck/ModeDark'
import Login from '../Login/Login'
import { Link, Route, Routes } from 'react-router-dom'


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
                    <li>
                   <Link to='/Inicio'>Inicio</Link>
                    </li>
                    <li>
                        <Link to='/Noticias'>Noticias</Link>
                    </li>
                    <li>
                        <Link to='/Carreras'>Carreras</Link>
                    </li>
                    <li>
                        <Link to='/Nosotros'>Nosotros</Link>
                    </li>
                    <li>
                        <Link to='/Contacto'>Contacto</Link>
                    </li>
                </ul>

            </section>
            <section class="logo-perfil logos">
                {/* <a href="../login/index.html">
                    <img src={logoPerfil} alt="logo-perfil"/>
                </a> */}

                {/* <li>
                    <Link to='/Login'>Login</Link>
                </li> */}
                <Login/>

            </section>
            <DarckMode/>
        </nav>

    </header>

  )
}

export default Menu
