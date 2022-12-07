import React, { useState } from 'react'
import { useThemeContext } from '../context/ThemeContext'

import axios from 'axios'
import './Registro.css'

const Form = () => {
  const { contextTheme, setContextTheme } = useThemeContext()

  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUsername] = useState('')
  const [typeDocument, setTypeDocument] = useState('')
  const [address, setAddress] = useState('')
  const [numberDocument, setNumberDocument] = useState('')
  const [phoneNumber, setPhoneNumbers] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

 


  const sendNew = async (e) => {
    e.preventDefault()

    const dataNew = {
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      typeDocument: typeDocument,
      address: address,
      numberDocument: numberDocument,
      phoneNumber: phoneNumber,
      email: email,
      password: password,
      role:role
    }
    let headersList = {
      Accept: '*/*',
      'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
      'Content-Type': 'application/json',
    }

    let bodyContent = JSON.stringify(dataNew)

    let reqOptions = {
      url: 'https://c13-app-back.up.railway.app/api/novelties/',
      method: 'POST',
      headers: headersList,
      data: bodyContent,
    }

    let response = await axios.request(reqOptions)
    console.log(response.data)

    setfirstName('')
    setLastName('')
    setUsername('')
     setTypeDocument('')
    setNumberDocument('')
    setAddress('')
    setPhoneNumbers('')
    setEmail('')
    setPassword('')
    setRole('')
  }

  return (
    <div className="container-form" id={contextTheme}>
      <form onSubmit={sendNew} className="table-form">
        <h2 className="item-registro">Registro</h2>
        <input
          onChange={(e) => setfirstName(e.target.value)}
          type="text"
          placeholder="Ingrese su Nombre"
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Ingrese su apellido"
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Ingrese el nombre del usuario"
        />
        <input
          onChange={(e) => setTypeDocument(e.target.value)}
          type="text"
          placeholder="Ingrese tipo de documento: C.C, T.I, C.E"
        />
        <input
          onChange={(e) => setNumberDocument(e.target.value)}
          type="text"
          placeholder="Ingrese numero de documento"
        />
        <input
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Ingrese la dirección"
        />
        <input
          onChange={(e) => setPhoneNumbers(e.target.value)}
          type="text"
          placeholder="Ingrese numero de celular"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Ingrese el Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Ingrese la contraseña"
        />
        <input
          onChange={(e) => setRole(e.target.value)}
          type="text"
          placeholder="Ingrese su rol"
        />

        <input type="submit" value="Enviar" className="btn-enviar" />
      </form>
    </div>
  )
}

export default Form
