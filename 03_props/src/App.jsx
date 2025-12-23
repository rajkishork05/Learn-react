import React from 'react'
import Card from './components/Card'

const App = (props) => {
  return (
    <>
    <div className='baap'>
    <Card user = "asmit" age = {20} />
    <Card user = "raj kishor" age = {21}  />
    
    </div>
    </>
  )
}

export default App
