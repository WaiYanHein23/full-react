import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function BlogList({blog}) {
  const navigator=useNavigate();
  return (
    <div>{
        blog.map((data)=><div key={data.id} className='bg-gray-400'><h1 onClick={()=>navigator(`/blogs/${data.id}`,{state:data})}><li>{data.title}<p>{data.body}</p></li> </h1></div>)
    }
   
    </div>
  )
}

export default BlogList