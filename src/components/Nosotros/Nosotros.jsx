import React, { useState } from 'react'
import './Nosotros.css'

const data = [
    {
    questio: '¿Quienes Somos?',
    answer: 'La corporación Son Bata nacio hace 18 años en la comuna 13 de la ciudad de Medellín, Colombia. Codigo Comuna 13 es una escuela para el desarrolo de capacidades digitales-TI- y la generación de conocimiento aplicativo a la economi digital y la construcción de un proyecto de vida legal y sostenible',
},
{
    questio: 'Misión',
    answer: 'Con la Misión de transformar  conflictos y manifestaciones violentas, en cultura viva que genera cambio, y a traves del arte demostramos que es posible soñar y hacer realidad los sueños ',
},
{
    questio: 'Visión',
    answer: 'La organizacio¿ón son bata sera reconocida en el año 2025 como una de las mejores nacionalmente con la recreación de la cultura,el arte, el deporte, la musica,y la educación para el sector y sus ciudadanos',
},
]
const Nosotros = () => {
    const [select, setSelect] = useState(null)

    const toggle = (i)=>{
        if(select === i){
            return setSelect(null)
        }
        setSelect(i)
    }
  return (
    <section class="section-aboutus" id='nosotros'>

        <section class="acordion-aboutus">
            {data.map((item, i)=>(
                <div className='item'>
                    <div className='title' onClick={()=>toggle(i)}>
                        <h2>{item.questio}</h2>
                        <span>{select === i ? '-':'+'}</span>
                    </div>
                    <div className={select === i ? 'content show':'content'}>{item.answer}</div>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Nosotros