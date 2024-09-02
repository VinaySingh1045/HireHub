import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <>
      <footer className="bg-gray-800 text-gray-200 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* About Us */}
            <div className="w-full md:w-[30%] mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-sm leading-relaxed">
                We are dedicated to connecting employers and job seekers efficiently. Explore our services to find the right talent or your dream job.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="w-full md:w-[20%] mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li className="mb-2">
                  <a href="/" className="hover:underline">Home</a>
                </li>
                {
                  user && user.role === "jobSeeker" ? (
                    <li className="mb-2">
                      <a href="/jobs" className="hover:underline">Jobs</a>
                    </li>
                  ) : user && user.role === "employer" ? (
                    <li className="mb-2">
                      <a href="/admin/jobs" className="hover:underline">Jobs</a>
                    </li>
                  ) : (
                    <li className="mb-2">
                      <a href="#" className="hover:underline">Jobs</a>
                    </li>
                  )
                }
                <li className="mb-2">
                  <a href="#" className="hover:underline">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
              </ul>
            </div>
            
            {/* Contact Us */}
            <div className="w-full md:w-[30%]">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">
                <span className="font-semibold">Email: </span>
                <a href="mailto:info@hirehub.com" className="hover:underline">info@hirehub.com</a>
              </p>
              <p className="text-sm">
                <span className="font-semibold">Phone: </span>
                <a href="tel:+1234567890" className="hover:underline">+91 9512279656</a>
              </p>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/VinaySingh1045" aria-label="Github" className="hover:text-gray-400">
                    <i className="fab fa-github-f"><Github/></i>
                  </a>
                  <a href="https://x.com/VinaySingh_1045" aria-label="Twitter" className="hover:text-gray-400">
                    <i className="fab fa-twitter"><Twitter/></i>
                  </a>
                  <a href="https://www.linkedin.com/in/vinay-singh-13a50a238/" aria-label="LinkedIn" className="hover:text-gray-400">
                    <i className="fab fa-linkedin-in"><Linkedin/></i>
                  </a>
                  <a href="https://www.instagram.com/vinaysingh9886/" aria-label="Instagram" className="hover:text-gray-400">
                    <i className="fab fa-instagram"><Instagram/></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-center text-sm text-gray-500">
              &copy; {new Date().getFullYear()} HireHub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
