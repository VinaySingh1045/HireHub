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
import Companies from './components/admin/compaines/Companies.jsx'
import CreateCompanies from './components/admin/compaines/CreateCompanies.jsx'
import UpdateCompany from './components/admin/compaines/UpdateCompany.jsx'
import AdminJobs from './components/admin/AdminJobs/AdminJobs.jsx'
import AddJobs from './components/admin/AdminJobs/AddJobs.jsx'
import UpdatePostJobs from './components/admin/AdminJobs/UpdatePostJobs.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import GetApplicants from './components/admin/applicants/GetApplicants.jsx'
import ProtectedRoute from './components/admin/ProtectedRoute.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import AppliedJobsTable from './components/appliedjob/AppliedJobsTable.jsx'
import AddJobsByCompanyId from './components/admin/AdminJobs/AddJobsByCompanyId.jsx'
import BlogDetails from './components/blogs/BlogDetails.jsx'
import Dashboard from './components/mainAdmin/Dashboard.jsx'
import GetPendingCompanines from './components/mainAdmin/companies/GetPendingCompanines.jsx'
import GetPendingJobs from './components/mainAdmin/jobs/GetPendingJobs.jsx'
import GetAllUsers from './components/mainAdmin/users/GetAllUsers.jsx'
import GetAllEmployer from './components/mainAdmin/users/GetAllEmployer.jsx'
import GetAllJobSeekerUsers from './components/mainAdmin/users/GetAllJobSeekerUsers.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <Home />
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
        element: <Jobs />
      },
      {
        path: "/jobs/description/:id",
        element: <JobsDescription />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/apply",
        element: <AppliedJobsTable />
      },
      {
        path: "/blog/details/:id",
        element: <BlogDetails />
      },

      // Admin(Employer) interface

      {
        path: "/admin/companines",
        element: <ProtectedRoute>
          <Companies />
        </ProtectedRoute>
      },
      {
        path: "/admin/companines/create",
        element:
          <ProtectedRoute>
            <CreateCompanies />
          </ProtectedRoute>
      },
      {
        path: "/admin/companines/:id",
        element:
          <ProtectedRoute>
            <UpdateCompany />
          </ProtectedRoute>
      },
      {
        path: "/admin/jobs/",
        element:
          <ProtectedRoute>
            <AdminJobs />
          </ProtectedRoute>
      },
      {
        path: "/admin/jobs/create",
        element:
          <ProtectedRoute>
            <AddJobs />
          </ProtectedRoute>
      },
      {
        path: "/admin/jobs/create/:id",
        element:
          <ProtectedRoute>
            <AddJobsByCompanyId />
          </ProtectedRoute>
      },
      {
        path: "/admin/jobs/:id",
        element:
          <ProtectedRoute>
            <UpdatePostJobs />
          </ProtectedRoute>
      },
      {
        path: "/admin/jobs/:id/getApplicants",
        element:
          <ProtectedRoute>
            <GetApplicants />
          </ProtectedRoute>
      },

      // Main Admin routes

      {
        path: "/mainAdmin/dashboard",
        element: <Dashboard/>
      },

      {
        path: "/mainAdmin/dashboard/getPendingCompanies",
        element: <GetPendingCompanines/>
      },

      {
        path: "/mainAdmin/dashboard/getPendingJobs",
        element: <GetPendingJobs/>
      },
      {
        path: "/mainAdmin/dashboard/getAllUsers",
        element: <GetAllUsers/>
      },
      {
        path: "/mainAdmin/dashboard/getAllEmployers",
        element: <GetAllEmployer/>
      },
      {
        path: "/mainAdmin/dashboard/getAllJobSeekerUsers",
        element: <GetAllJobSeekerUsers/>
      },

    ]

  },
])

const persist = persistStore(store)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist} >
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
    <Toaster />
  </StrictMode>,
)
