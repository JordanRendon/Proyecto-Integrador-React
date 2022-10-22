import React from 'react'
import './Menu.css'
import logo from '../../assets/img/Menu-lgotipo-marca.png'

const Menu = () => {
  return (
    <header>

        <nav className='container-menu'>

            <section class="logo-marca logos">
                <img src={logo} alt="logo-codigo-c13"/>
            </section>
            <section className="menu">

                <ul>
                    <li><a href="#" id="selected">Inicio</a></li>
                    <li><a href="#">Noticias</a></li>
                    <li><a href="#">Carreras</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>

            </section>
            {/* <section class="logo-perfil logos">
                <a href="../login/index.html">
                    <img src="../img/Menu-logotipo-perfil.png" alt="logo-perfil"/>
                </a>
            </section> */}
        </nav>

    </header>

  )
}

export default Menu
