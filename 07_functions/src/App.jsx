import React from 'react'

const App = () => {

  const buttonclicked = ()=>{
    console.log("button clicked")
  }
  const typing = (val)=>{
    console.log(val)
  }

  return (
    <div>
      <button onClick={buttonclicked} >click me</button> <br />
      <input onChange={(user)=> typing(user.target.value) }  type="text" placeholder='type here' />
    </div>
  )
}

export default App
