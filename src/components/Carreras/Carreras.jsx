import React from 'react'
import axios from 'axios'

import { useThemeContext } from '../context/ThemeContext'
import './Carreras.css'
import { useState } from 'react'
import { useEffect } from 'react'



const Carreras = () => {
  const { contextTheme, setContextTheme } = useThemeContext()

  const [carreras, setCarreras] = useState([])

  const fetchCarreras = async () => {
    const response = await axios.get(
      'https://c13-app-back.up.railway.app/api/careers'
    )
    // const data = await response.json()
    setCarreras(response.data.careers)
  }

  useEffect(() => {
    fetchCarreras()
  }, [])

  return (
    <main class="section-techniques" id={contextTheme}>
      <section class="container-techniques" id={contextTheme}>
        <h3 class="techniques-title">Nuestras carreras De Desarrollo web</h3>
      </section>
      <div className="container-carreras" id={contextTheme}>
        {carreras.map((carrera) => (
          <div key={carrera.id} className="item-carrera">
            <img src={carrera.img} alt="Imagen front" className="img-carrera" />
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
