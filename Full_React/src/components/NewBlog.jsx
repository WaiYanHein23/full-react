import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function NewBlog() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('')
  const [submit, setSubmit] = useState(false);
  const navigator=useNavigate();
  return (
    <div className='m-1 px-4 py-10'>
    <div className='bg-gray-200 shadow-sm p-1 py-5 rounded-xl my-10 mx-2 flex-row flex-initial'>
    <form onSubmit={(e)=>{
      e.preventDefault();
      setSubmit(true);
      const blog={title,body};
      fetch("http://localhost:3030/post",{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
      })
      setSubmit(false);
      navigator('/');
    }}>
    <h1>Add New Blog</h1>
      <label>Title:</label>
      <input type='text' name='name' required value={title} onChange={(e)=>setTitle(e.target.value)}></input>
      <label>Body</label>
      <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea><br></br><br/>
      {!submit && <button className='bg-red-500 flex items-center'>Add Blog</button>}
      {submit && <button disabled className='bg-red-500 flex items-center'>Adding... Blog</button>}
     
    </form>
    </div>
    </div>
  )
}

export default NewBlog