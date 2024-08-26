import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {

  const { user } = useSelector(state => state.auth)

  return (
    <>
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-3">About Us</h3>
              <p className="text-sm leading-relaxed">
                We are dedicated to connecting employers and job seekers efficiently. Explore our services to find the right talent or your dream job.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-sm">
                <li className="mb-2"><a href="/"
                  className="hover:underline">Home</a></li>
                {
                  user && user.role === "jobSeeker" ? (
                    <li className="mb-2"><a href="/jobs" className="hover:underline">Jobs</a></li>
                  ) : user && user.role === "employer" ? (
                    <li className="mb-2"><a href="/admin/jobs" className="hover:underline">Jobs</a></li>
                  ) : (
                    <li className="mb-2"><a href="#" className="hover:underline">Jobs</a></li>
                  )
                }

                <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
              <p className="text-sm mb-2">
                Email: <a href="mailto:info@hirehub.com" className="hover:underline">info@hirehub.com</a>
              </p>
              <p className="text-sm">
                Phone: <a href="tel:+1234567890" className="hover:underline">+91 9512279656</a>
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-4">
            <p className="text-center text-sm text-gray-600">&copy; {new Date().getFullYear()} HireHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
