import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { useContext } from 'react'
import { ThemeDataContext } from './Context/ThemeContext'
 
const App = () => {

  const [theme] = useContext(ThemeDataContext);

  return (
    <div style={{backgroundColor : theme==="light" ? "black" : "white" }} className='h-screen bg-black' >
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App
