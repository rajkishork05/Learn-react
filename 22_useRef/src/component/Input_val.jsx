import React, { useRef } from 'react'

const Input_val = () => {
    const inpRef = useRef("")

    const handler = ()=>{
        inpRef.current.value = "hello World"
    }

  return (
    <div>
        <input ref={inpRef} className='text-2xl px-5 py-2 rounded-2xl'  type="text" placeholder='write Something...' />
        <button onClick={handler} >submit</button>
        
    </div>
  )
}

export default Input_val
