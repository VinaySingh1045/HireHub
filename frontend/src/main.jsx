import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import { Toaster } from './components/ui/sonner.jsx'
import Profile from './components/userProfile/Profile.jsx'
import JobsCard from './components/jobs/JobsCard.jsx'
import Jobs from './components/jobs/Jobs.jsx'
import Browse from './components/Browse.jsx'
import JobsDescription from './components/appliedjob/JobsDescription.jsx'
import Companies from './components/compaines/Companies.jsx'
import CreateCompanies from './components/compaines/CreateCompanies.jsx'
import UpdateCompany from './components/compaines/UpdateCompany.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/jobs",
        element: <Jobs/>
      },
      {
        path: "/jobs/description/:id",
        element: <JobsDescription/>
      },
      {
        path: "/browse",
        element: <Browse/>
      },

      // Admin interface

      {
        path: "/admin/companines",
        element: <Companies/>
      },
      {
        path: "/admin/companines/create",
        element: <CreateCompanies/>
      },
      {
        path: "/admin/companines/:id",
        element: <UpdateCompany/>
      },
    ]

  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
