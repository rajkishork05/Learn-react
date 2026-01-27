import React, { useEffect, useRef } from 'react'

const Focus = () => {

    const inputRef =  useRef(null)

    useEffect(() => {
    inputRef.current.focus()
    }, [])
    

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Write' />
    </div>
  )
}

export default Focus
