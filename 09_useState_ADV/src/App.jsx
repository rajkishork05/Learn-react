import React, { useState } from 'react'

const App = () => {

  const [num, SetNum] = useState(0)

  const change = async()=>{
    await SetNum(num+1)
    await console.log(num);
  }

  return (
    <div>
      <div className=' bg-cyan-800 h-screen w-screen flex justify-center items-center flex-col gap-10 ' >
        <h1 className='bg-cyan-500 text-5xl py-3 px-5 rounded-3xl ' >{num}</h1>
        <button onClick={change} className='text-5xl font-semibold bg-cyan-400 py-4 px-7 rounded-3xl active:scale-95 cursor-pointer' >click me</button>
      </div>
    </div>
  )
}

export default App
