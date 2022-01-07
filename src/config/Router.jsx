import React from 'react'
import { Route, Routes } from 'react-router-dom'


import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../pages/detail/Detail'

const Router = props => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path='/:category/search/:keyword' element={<Catalog/>} />
      <Route path='/:category' element={<Catalog/>} />
      <Route path='/:category/:id' element={<Detail/>}/>
    </Routes>
  )
}



export default Router
