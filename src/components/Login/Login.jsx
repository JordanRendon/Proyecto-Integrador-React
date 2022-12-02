import React from 'react'
import Swal from 'sweetalert2'
import './Login.css'

const Login = () => {
  const mostrarModal = async () => {
    Swal.fire({
      title: 'Login',
      html: `<body background="../recursos/SharedScreenshot.jpg" class="fondo-imagen" no-repeat>

      <!-- <div class="logo-login">
          <img class="imagen" src="Recurso 6@3x.png" alt="">
          <h1>INICIAR SESION</h1>
          <form>
              <!-- este es para el usuario -->
      <!-- <label for="username">Nombre de usuario</label>
              <input type="text" placeholder="ingrese usuario">
              <!-- este es para la contraseña -->
      <!-- <label for="password">contraseña</label>
              <input type="password" placeholder="ingrese contraseña">
              <input type="submit" value="iniciar sesion" class="boton-inicio">
              <a href="#">¿Olvidó su nombre de usuario o contraseña? <br></a>
              <a href="#">crear cuenta</a>
          </form> -->
  
      </div> 
      <main class="section-login">
          <section class="container-login">
  
              <section class="image">
              </section>
  
              <section class="submit">
                  <h2 class="title">Entrar</h2>
                  <h3 class="subtitle">Te habíamos extrañado, por favor igresa a tu cuenta</h3>
                  <input class="user" type="text" placeholder="Nombre de usuario">
                  <input class="user" type="text" placeholder="Contraseña">
                  <button class="linker-page"><a href="#">Registrarce</a></button>
              </section>
          </section>
      </main>
  </body>
  `,
      confirmButtonText: 'Ingresar',
      focusConfirm: false,
    })


  }

  return (
    <div >
      <button className='btn-login' onClick={() => mostrarModal()} >Login</button>
    </div>
  )
}

export default Login
