import React from 'react'
import {useParams} from "react-router-dom"
const Shop = () => {

    const params = useParams();
    console.log(params)


  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold">
        Shop {params.id}
</div>
  )
}

export default Shop
