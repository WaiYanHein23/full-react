import { useState } from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
import Navar from './components/Navar'
import Home from './components/Home'
import NewBlog from './components/NewBlog'
import BlogList from './components/BlogList'
import BlogDetails from './components/BlogDetails'
import NotFound from './components/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
      <Navar/>
        <Routes>
<Route path='/' element={<Home/>} />
<Route path='/newblog' element={<NewBlog/>} />
<Route path='/bloglist' element={<BlogList/>} />
<Route path='/blogs/:id' element={<BlogDetails/>} />
<Route path='*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
       </div>
    </>
  )
}

export default App
