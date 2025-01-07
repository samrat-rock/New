import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'

function Rou() {
  return (
    <>
      <Routes>
<Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default Rou
