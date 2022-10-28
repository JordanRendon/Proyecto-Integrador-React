import React from 'react'
import './Inicio.css'
import cerebro from '../../assets/img/cerebro.png'
import numeralAzul from '../../assets/img/nuemeral-azul-claro.png'
import eslashAmarillo from '../../assets/img/Eslash-felcha-amatillo.png'

const Inicio = () => {
  return (
    <main className="section-cover" id='inicio'>

        <section className="cover">

            <ul className="slider">

                <li id="new1">

                    <section className="text">
                        <h1>&#60;&#60;EL CRIMEN NO PAGA TANTO COMO EL CODIGO&#62;&#62;</h1>
                        <h4>//Fredy Vega - Fundador Platzi</h4>
                    </section>
                    <section className="imagen-cover">
                        <img src={cerebro} alt=""/>
                    </section>
                    <section className="numeral-cover">
                        <img src={numeralAzul} alt=""/>
                    </section>
                    <section className="eslash-cover">
                        <img src={eslashAmarillo} alt=""/>
                    </section>

                </li>

                <li id="new2">
                {/* <section className="text">
                        <h1>&#60;&#60;SI SE PUEDE IMAGINAR, SE PUEDE PROGRAMAR&#62;&#62;</h1>
                    </section>
                    <section className="imagen-cover">
                        <img src={cerebro} alt=""/>
                    </section>
                    <section className="numeral-cover">
                        <img src={numeralAzul} alt=""/>
                    </section>
                    <section className="eslash-cover">
                        <img src={eslashAmarillo} alt=""/>
                    </section> */}
                </li>

                <li id="new3"></li>

            </ul>

        </section>

        <ul className="frames">
            <li><a href="#new1"></a></li>
            <li><a href="#new2"></a></li>
            <li><a href="#new3"></a></li>
        </ul>

        <button><a href="#">ver más</a></button>

    </main>
  )
}

export default Inicio
