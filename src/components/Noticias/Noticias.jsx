import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import './Noticias.css'

const Noticias = () => {
  const {contextTheme, setContextTheme} = useThemeContext()

  return (
    <main class="section-news" id={contextTheme}>
        <nav class="container-news" id='noticias'>
            <section class="new1 style-news">
                <p>recuadro1</p>
            </section>
            <section class="new2 style-news">
                <p>recuadro2</p>
            </section>
            <section class="new3 style-news">
                <p>recuadro3</p>
            </section>
            <section class="new4 style-news">
                <p>recuadro4</p>
            </section>
            <section class="new5 style-news">
                <p>recuadro5</p>
            </section>
            <section class="new6 style-news">
                <p>recuadro6</p>
            </section>
            <section class="new7 style-news">
                <p>recuadro7</p>
            </section>
            <section class="new8 style-news">
                <p>recuadro8</p>
            </section>
            <section class="new9 style-news">
                <p>recuadro9</p>
            </section>
            <section class="new10 style-news">
                <p>recuadro10</p>
            </section>
        </nav>
        <a class="linker-news" href="#">Ver más</a>

    </main>
  )
}

export default Noticias
