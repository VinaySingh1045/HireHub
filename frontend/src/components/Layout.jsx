import React from 'react'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Outlet />
      </Provider>
    </div>
  )
}

export default Layout
