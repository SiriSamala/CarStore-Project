import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewCars from './pages/NewCars'
import UsedCars from './pages/UsedCars'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'
import AdminLayout from './layout/AdminLayout'
import AdminUsedCars from './pages/Admin/AdminUsedCars'
import AdminSettings from './pages/Admin/AdminSettings'
import AdminNewCars from './pages/Admin/AdminNewCars'
import AdminOrders from './pages/Admin/AdminOrders'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/NotFound'

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


            <Route element={<AdminLayout />}>
              <Route path='/admin/usedcars' element={<AdminUsedCars />} />
              <Route path='/admin/newcars' element={<AdminNewCars />} />
              <Route path='/admin/settings' element={<AdminSettings />} />
              <Route path='/admin/orders' element={<AdminOrders />} />
              <Route path='/admin/users' element={<AdminUsers />} />
              <Route path='/admin/dashboard' element={<AdminDashboard />} />
            </Route>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App