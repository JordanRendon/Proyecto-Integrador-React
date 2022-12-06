import React, { useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Carrusel.css'
import { useThemeContext } from '../context/ThemeContext'

const Carrusel = () => { 
  const { contextTheme, setContextTheme } = useThemeContext()
  const [noticias, setNoticias] = useState([])

  const traerNoticias = async () => {
    const response = await fetch('https://c13-app-back.up.railway.app/api/novelties')
    console.log(response)
    const data = await response.json()
    console.log(data)
    setNoticias(data.novelties)
  }
  useEffect(() => {
    traerNoticias()
  }, [])

  return (
    <div className="container-carrusel" id={contextTheme}>
      <Fade indicators={true} duration={3000}>
        {noticias.map((noticia) => (
          <div className="each-slide">
            <div>
              <img className="image" src={noticia.img} />
            </div>
            <p>{noticia.title}</p>
            <p>{noticia.description}</p>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Carrusel
