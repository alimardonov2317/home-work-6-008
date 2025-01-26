import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import WhatWeDo from './pages/whatwedo/WhatWeDo'
import Media from './pages/media/Media'
import Contact from './pages/contact/Contact'
import NotFound from './pages/notFound/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/whatwedo' element={< WhatWeDo />} />
        <Route path='/media' element={<Media />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
