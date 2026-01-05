import React from 'react'

import { useState } from 'react'

const App = () => {

const [user, setUser] = useState("")
const [password, setPassword] = useState('');

const submitHandler = (e)=>{
  e.preventDefault();

  localStorage.setItem("name", user)

}
const person = localStorage.getItem("name")


//if we want to put an object in localstorage we use stringify method because LS ony accespt string and reversing it use JSON.parse 

const obj = {
  username: "kkaallii",
  password: "123567"
}
// localStorage.setItem("data", obj);  it will no go like this
localStorage.setItem("data", JSON.stringify(obj));
const data = JSON.parse(localStorage.getItem("data"));
// console.log(data)
console.log(data.username)
console.log(data.password)

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-950">
  <form onSubmit={submitHandler} className="w-[350px] p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6">
    
    <h2 className="text-center text-2xl font-semibold text-white tracking-wide">
      Welcome {person}
    </h2>

    <input
    value={user}
    onChange={(e)=> setUser(e.target.value)}
      type="text"
      placeholder="Username"
      className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 border border-white/20
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                 transition-all duration-300"
    />

    <input
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
      type="password"
      placeholder="Password"
      className="w-full px-4 py-3 rounded-xl bg-black/40 text-white placeholder-gray-400 border border-white/20
                 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                 transition-all duration-300"
    />

    <button
      className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600
                 text-white font-semibold tracking-wide
                 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.8)]
                 active:scale-95 transition-all duration-300"
    >
      Submit
    </button>

  </form>
</div>

  )
}

export default App
