import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCars from './pages/NewCars'
import UsedCars from './pages/UsedCars'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'

const App = () => {
  return (
    <>
    <div>
    <BrowserRouter>
    <Routes>
    <Route element={<WebLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/newcars' element={<NewCars />} />
      <Route path='/usedcars' element={<UsedCars />} />

    </Route>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  )
}

export default App