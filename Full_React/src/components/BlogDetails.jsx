import { data } from 'autoprefixer';
import React, { useEffect,useState } from 'react'
import {useLocation, useNavigate, useParams} from 'react-router-dom'
function BlogDetails() {
const{id}=useParams();
const [post, setPost] = useState([]);
const location=useLocation();
const navigator=useNavigate();
useEffect(()=>{
  setPost(location.state);
},[])
const handleDelete=()=>{
fetch("http://localhost:3030/post/"+id,{
  method:'DELETE'
})
navigator('/');
}
  return (
    <div>
    
    BlogDetails -{id}
    <h1 className='font-lg bg-red-300 mr-60 m-2 italic'>{post.title}</h1>
    <p className='shadow-md bg-gray-200'>{post.body}</p>
    <button className='bg-red-600 p-1 m-2 rounded-sm' onClick={handleDelete}>delete</button>
    </div>
  )
}

export default BlogDetails