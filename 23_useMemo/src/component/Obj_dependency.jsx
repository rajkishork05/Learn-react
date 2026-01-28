import React, { useMemo, useState } from 'react'

const efunc = (obj) =>{
    console.log(obj)
}

const Obj_dependency = () => {

    const [count, setCount] = useState(0)

    const obj = {val : count}

    const result = useMemo(()=>{
        console.log("hello ",count )
        return efunc("hello")
    }, [obj])

  return (
    <div>
      <h1>{obj.val}</h1>
      <button onClick={()=> setCount(count+1)} > bada</button>
    </div>
  )
}

export default Obj_dependency
