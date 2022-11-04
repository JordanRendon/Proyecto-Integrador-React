import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { FacebookLogo, InstagramLogo, GoogleLogo, GithubLogo, EnvelopeSimple } from "phosphor-react";
import './Contacto.css'

const Contacto = () => {
  const {contextTheme, setContextTheme} = useThemeContext()

  return (
    <footer class="section-contact" id={contextTheme}>
      <section class="contact-net" id='contactos'>
        <section class="contact-circle">
          <section class="contact-linker" id='facebook'><a href="https://www.facebook.com/sonbatac13" target={'_blank'}><FacebookLogo className='Facebook-logo' /></a></section>
          <section class="contact-linker" id='instagram'><a href="https://www.instagram.com/codigo_c13/" target={'_blank'}><InstagramLogo className='Insta-logo' /></a></section>
          <section class="contact-linker" id='son-bata'> <a href="" target={'_blank'} id='son bata'> <GoogleLogo className='Pag-logo' /></a> </section>
          <section class="contact-linker" id='github'> <a href="https://github.com/codigoc13" target={'_blank'}> <GithubLogo className='Github' /></a></section>
        </section>

        <button className="linker-email">
          <a href="mailto:codigoc13@sonbata.org" target="_blank" rel="noopener"><EnvelopeSimple className='Contactanos'/>
          </a>
          <h1>Contactanos</h1>
        </button>
      </section>

      <section class="contact-creators">
        <h4>2022</h4>
        <h4>Santiago Padierna | Jordan Rendón | Alexander Garcia</h4>
      </section>
    </footer>
  )
}

export default Contacto
