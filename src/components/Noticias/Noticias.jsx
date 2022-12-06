import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useThemeContext } from '../context/ThemeContext'
import './Noticias.css'
import { Link } from 'react-router-dom'

const Noticias = () => {
  const {contextTheme, setContextTheme} = useThemeContext()

    const [noticias, setNoticias] = useState([])


     const fetchNoticias = async () => {
       const response = await axios.get('https://c13-app-back.up.railway.app/api/novelties')
       // const data = await response.json()
       setNoticias(response.data.novelties)
     }

     useEffect(() => {
       fetchNoticias()
     }, [])
  return (
    <section className="container-news" id={contextTheme}>
      {noticias.map((noticia) => (
        <div className="item-new" key={noticia.id} id={contextTheme}>
          <h3 id={contextTheme}>{noticia.title}</h3>
          <p id={contextTheme}>{noticia.description}</p>
          <Link id={contextTheme} className="linker-news" to={`/News/${noticia.id}`}>
            Ver Más
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Noticias
