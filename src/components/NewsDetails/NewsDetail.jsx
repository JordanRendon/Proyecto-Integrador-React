import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { useParams } from 'react-router-dom'
import './NewsDetail.css'

const NewDetail = () => {
const { contextTheme, setContextTheme } = useThemeContext()

  const { id } = useParams()
  const [newData, setNewData] = useState([])

  const fetchNewById = async (idNew) => {
    try {
      const response = await axios.get( `https://c13-app-back.up.railway.app/api/search/novelties/${idNew}`)
      setNewData(response.data.results)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchNewById(id)
  }, [])

  return (
    <div id={contextTheme} className="container-new">
      {newData.map((noticia) => (
        <div id={contextTheme} className="container-new-id" key={noticia.id}>
          <h1 id={contextTheme}>{noticia.title}</h1>
          <p id={contextTheme}>{noticia.description}</p>
          <p id={contextTheme}>{noticia.createdAt}</p>
          <h2 id={contextTheme}>{noticia.user.username}</h2>
        </div>
      ))}
    </div>
  )
}

export default NewDetail
