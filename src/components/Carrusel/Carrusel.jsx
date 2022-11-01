import React, { useEffect, useState } from 'react'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Carrusel.css'

const Carrusel = () => {
  const [noticias, setNoticias] = useState([])

  const traerNoticias = async () => {
    const response = await fetch(
      'https://crudcrud.com/api/2c8e5d9c99144c19b7fe4476fd98b432/news'
    )
    const data = await response.json()
    setNoticias(data)
  }
  useEffect(() => {
    traerNoticias()
  }, [])

  return (
    <div className='container-carrusel'>
      <Fade indicators={true}
      duration={3000}
      >
        {noticias.map((noticia) => (
          <div className="each-slide">
            <div>
              <img className="image" src={noticia.image} />
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
