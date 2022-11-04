import React from 'react'
import { useState } from 'react'
import ReactSwitch from 'react-switch'
import { useThemeContext } from '../context/ThemeContext'


const DarckMode = () => {
    const {contextTheme, setContextTheme} = useThemeContext()
    

    const [checked, setChecked]= useState(false)
    const hadleSwitch = (nextChecked)=>{
        setContextTheme((state) =>(state === 'Light'? 'Dark':'Light'))
        setChecked(nextChecked)
    }
  return (
    <div id={contextTheme}>
      <ReactSwitch onChange={hadleSwitch} checked={checked}
      handleDiameter={30} uncheckedIcon={false} checkedIcon={false}
      onColor="#ffcd05"/>
    </div>
  )
}

export default DarckMode
