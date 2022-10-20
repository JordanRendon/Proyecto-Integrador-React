

import React from 'react'

const Menu = () => {
  return (
    <header>

        <nav class="container-menu">

            <section class="logo-marca logos">
                {/* <img src="../RECURSOS/Menu-lgotipo-marca.png" alt="logo-codigo-c13"> */}
            </section>
            <section class="menu">

                <ul>
                    <li><a href="#" id="selected">Inicio</a></li>
                    <li><a href="#">Noticias</a></li>
                    <li><a href="#">Carreras</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contactos</a></li>
                </ul>

            </section>
            <section class="logo-perfil logos">
                <a href="../login/index.html">
                    {/* <img src="../RECURSOS/Menu-logotipo-perfil.png" alt="logo-perfil"> */}
                </a>
            </section>
        </nav>

    </header>

  )
}

export default Menu
