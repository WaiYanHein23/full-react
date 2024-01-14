import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
function Home() {
    const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
      setTimeout(()=>{
        fetch("http://localhost:3030/post").then((res)=>
          // if(!res.ok){
          //   throw Error('Could Not Find')
          // }
        res.json()).then((res)=>setBlog(res),
      setLoading(false)).catch((err)=>
      setError(err.message),setLoading(false))
      },2000)
    },[])
  return (
    <div>
    {error && <h1>{error} </h1>}
    {loading && <h1>Loading....</h1>}
<BlogList blog={blog}/>
    </div>
  )
}

export default Home