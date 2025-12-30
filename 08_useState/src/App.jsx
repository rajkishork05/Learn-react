import React, { useState } from 'react'

const App = () => {

  const [a, Seta] = useState(0);
  const [username, setUsername] = useState("Raj kishor")
  // let a=20;
  // const change = ()=>{
  //   Seta(a+1);
  //   console.log("value:",a);
  // }
  const decrease =()=>{
    if(a===0){
      alert("cannot go less than 0")
    }else{
      Seta(a-1);
    }
  }
  return (
    <div className='bg-blue-900 h-screen w-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl mb-6 bg-mint-500 p-4 rounded-2xl ' >{username}</h1>
      <h1 className='text-6xl mb-6 bg-mint-500 p-4 rounded-2xl ' >{a}</h1>
      <div className='flex gap-6' >
      <button onClick={()=> Seta(a+1)} className='text-2xl font-bold bg-blue-400 border-blue-500 py-4 px-6 rounded-3xl hover:scale-110 transition-all cursor-pointer' >Increase</button>
      <button onClick={()=> Seta(0)} className='text-2xl font-bold bg-blue-400 border-blue-500 py-4 px-6 rounded-3xl hover:scale-110 transition-all cursor-pointer' >Reset</button>
      <button onClick={decrease} className='text-2xl font-bold bg-blue-400 border-blue-500 py-4 px-6 rounded-3xl hover:scale-110 transition-all cursor-pointer' >Decrease</button>
      <button onClick={()=> Seta(a+5)} className='text-2xl font-bold bg-blue-400 border-blue-500 py-4 px-6 rounded-3xl hover:scale-110 transition-all cursor-pointer' >Jump by 5</button>
      </div>
      <input value={username} onChange={(e)=> setUsername(e.target.value)} className='mt-5 text-4xl mb-6 bg-mint-500 p-4 rounded-2xl text-black border-4 focus:border-red-600' placeholder='Enter your name ' type="text" />

    </div>
  )
}

export default App
