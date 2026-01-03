import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandler = (e) =>{
    e.preventDefault();
    console.log(title)
    setTitle("")
    
  }

  return (
    <div>
      <form className='m-5 flex flex-col gap-5' onSubmit={submitHandler} >
      <input className='border-2 w-80 text-3xl p-2 ' placeholder='Enter your name...' value={title} onChange={(e)=> setTitle(e.target.value)} type="text" />
      <button className='text-3xl bg-green-700 py-3 w-70' >Submit</button>
      </form>

    </div>
  )
}

export default App
