import React, { useEffect, useRef, useState } from 'react'

const Message_scroll = () => {

  const [message, setMessage] = useState([])
  const inputRef = useRef(null)
  const chatRef = useRef(null)
  const sendHandler=()=>{

    const val = inputRef.current.value.trim()
    if(val === ""){
      return alert("write something")
    }
    // console.log(inputRef.current.value.trim())
    setMessage(prev => [...prev, val])
    // console.log(message)
    inputRef.current.value = "";
    
  }
  useEffect(() => {
   inputRef.current.focus()
   chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [message])
  

  return (
    <div className='w-75 bg-amber-200' >
      <div ref={chatRef} className='h-50 border-2 text-xl overflow-auto p-3 ' >
        {message.map((elem, idx)=>(
          <div className='bg-pink-600 m-1 w-fit px-3 py-1 rounded-2xl' key={idx} >{elem}</div>
        ))}
      </div>
      <div className='mt-5 border-2 p-3' >
      <input onKeyDown={(e)=> {if(e.key === "Enter") sendHandler()}} className='text-2xl border-2' ref={inputRef} type="text" placeholder='Write message' />
      <button  className=' bg-green-500 text-xl mt-3 px-4 py-2 rounded-2xl active:scale-95 cursor-pointer' onClick={sendHandler} >Send message</button>
      </div>
    </div>
  )
}

export default Message_scroll
