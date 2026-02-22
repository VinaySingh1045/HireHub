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
        <PersistGate loading={
          <div className="h-screen flex items-center justify-center bg-[#f3f4f6]">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#159788] border-solid"></div>
          </div>
        } persistor={persist} >
          <Navbar />
          <Outlet />
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  )
}

export default Layout
