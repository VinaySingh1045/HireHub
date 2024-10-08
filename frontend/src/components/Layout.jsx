import React from 'react'
import Navbar from './shared/Navbar'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '@/app/store'
// import persistStore from 'redux-persist/es/persistStore'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import Footer from './shared/Footer'

const persist = persistStore(store)

const Layout = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist} >
          <Navbar />
          <Outlet />
          <Footer/>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default Layout
