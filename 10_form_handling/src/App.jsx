import React from 'react'

const App = () => {

  const submit = (e) =>{
    e.preventDefault();     //reload prevention form
    console.log("ho gya..")
  }
  

  return (
    <div className='h-screen w-screen bg-lime-400 flex items-center justify-center ' >
      <form onSubmit={submit} className='flex flex-col justify-center items-center border-2 bg-blue-400 w-100 h-70 gap-10  ' >
      <input className='border-2 rounded-3xl p-4 border-blue-950 text-3xl text-gray-600'  type="text" placeholder='Enter your name..' />
      <input className=' border-2 rounded-2xl p-2 border-blue-950 text-2xl text-gray-600' type='number' placeholder='Enter your age..' />
      
      <button className='text-2xl py-2 px-6 active:scale-95 cursor-pointer bg-green-600 text-white font-bold ' >Submit</button>
      </form>
    </div>
  )
}

export default App
