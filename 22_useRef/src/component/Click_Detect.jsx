import React, { useEffect, useRef, useState } from 'react'

const Click_Detect = () => {
  
  const [open, setOpen] = useState(true)
  const modelRef = useRef(null)

  useEffect(() => {

    const handleClick=(e)=>{
      if(modelRef.current && !modelRef.current.contains(e.target)){
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClick);

    return()=>{
      document.removeEventListener("mousedown", handleClick)
    };

  }, [])
  if(!open) return null;

  return (
    <div className='fixed inset-0 bg-purple-500 flex justify-center items-center  ' >
      <div ref={modelRef} className='p-20 rounded-2xl bg-white ' >
        
          <h1>Model</h1>
          <h1>Click outsite the box</h1>
        
      </div>
    </div>
  )
}
export default Click_Detect
