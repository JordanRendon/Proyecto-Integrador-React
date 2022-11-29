import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import './Carreras.css'

const data = [
  {
  url: 'https://res.cloudinary.com/dwuudheqw/image/upload/v1667579072/front_t54xhn.jpg',
  name: 'Frontend',
  description:'Html, Css,JavaScrip, Git, React',
  teacher: 'Steven Zuluaga'
},
{
  url: 'https://res.cloudinary.com/dwuudheqw/image/upload/v1667579415/backk1_dqyn9n.jpg',
  name: 'Backend',
  description:'Sql, JavaScrip, Git, Nodejs',
  teacher: 'Sergio Manrique'
},
{
  url: 'https://res.cloudinary.com/dwuudheqw/image/upload/v1667579371/backk_zsr08e.jpg',
  name: 'FullStack',
  description:'Html, Css,Sql,JavaScrip, Git, React, Nodejs',
  teacher: 'Steven Zuluaga - Sergio Manrique'
},
]

const Carreras = () => {
  const { contextTheme, setContextTheme } = useThemeContext()

  return (
    <main class="section-techniques" id={contextTheme}>
      <section class="container-techniques" id={contextTheme}>
        <h3 class="techniques-title">Nuestras carreras De Desarrollo web</h3>
      </section>
      <div className="container-carreras" id={contextTheme}>
        {data.map((carrera, index) => (
          <div key={index} className="item-carrera">
            <img src={carrera.url} alt="Imagen front" className="img-carrera" />
            <h2>{carrera.name}</h2>
            <p>{carrera.description}</p>
            <h2>{carrera.teacher}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Carreras
