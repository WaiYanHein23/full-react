import React from 'react'
import { NavLink } from 'react-router-dom'

function Navar() {
  return (
    <div className='bg-gray-300 flex justify-around'>
    <h1 className='text-red-600 mt-2 font-medium text-xl'>The Ddojo Blog</h1>
        <NavLink className='p-2 bg-blue-600 mb-4' to='/'>Home</NavLink>
        <NavLink className='p-2 bg-blue-600 mb-4' to='/newblog'>New Blog</NavLink>
    </div>
  )
}

export default Navar