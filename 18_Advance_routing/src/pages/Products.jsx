import React from 'react'
import { Link, Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div className="flex gap-4">
  <Link to='/product/men' className="px-6 py-2 border bg-amber-800 border-gray-400 rounded-md hover:bg-black hover:text-white transition">
    Men
  </Link>
  <Link to='/product/women' className="px-6 py-2 border bg-amber-800 border-gray-400 rounded-md hover:bg-black hover:text-white transition">
    Women
  </Link>
  <Outlet/>
</div>
  )
}

export default Products
