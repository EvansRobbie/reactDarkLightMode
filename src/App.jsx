// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import React, {useState} from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  
  const [darkMode, setDarkMode] = useState(true)

  function toggleDarkMode(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (

    <div className = "container">
    <Navbar toggleDarkMode ={toggleDarkMode} 
            darkMode = {darkMode}
    />
    <Main darkMode ={darkMode}/>
    
    </div>
  )
}

export default App
