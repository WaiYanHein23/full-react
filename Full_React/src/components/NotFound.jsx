import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigator=useNavigate();
  return (
    <div><p>404 Errors</p>
    <button className='bg-red-500 shadow-md' onClick={()=>navigator('/')}>Back Home</button>
    </div>
  )
}

export default NotFound