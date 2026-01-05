import React from 'react'
import axios from "axios"
import { useState } from 'react'
const App = () => {

const [main, setMain] = useState([])
  // const handler = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   // console.log(response.json())    //it will show pending
  //   //so do this
  //   const data = await response.json();
  //   console.log(data);

  // }
  
  // by using axios
  // const handler = async()=>{
  //   const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1")
  //   console.log(response.data)
  // }


  //now some exercise  lorem picsum api 
  
  const handler = async()=>{
    console.log("hello")
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=5");
    console.log(response.data)
    setMain(response.data)
    console.log(main)
    console.log("bye")
  }
    
  

  return (
    <div>
            <button onClick={handler} className='bg-black text-3xl active:scale-95 font-extrabold text-white px-6 py-3 rounded-2xl m-10 capitalize cursor-pointer ' > get data </button>
            <div>
             {main.map(function(ele, idx){
              return <div key={idx} >
                hello hii {idx}
                <img className='w-10' src={ele.url} alt="" />
                <h1>{ele.author}</h1>
              </div>
             })}
            </div>
    </div>
  )
}

export default App
