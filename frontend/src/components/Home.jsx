import React, { useEffect, useState } from 'react'
import JobsCard from './jobs/JobsCard'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight, Search } from 'lucide-react'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import LatestJobCard from './jobs/LatestJobCard'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchJob } from '@/features/jobSlice'

const Home = () => {

  const [query, setQuery] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSearchJob = () => {
    dispatch(setSearchJob(query))
    navigate("/browse")
  }

  useGetAllJobs();
  return (
    <>
      <div className=' bg-[#f3f4f6]'>
      <section className="relative bg-hero bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white">
          {/* Dim overlay */}
          <div className="absolute inset-0 bg-black opacity-[0.7]"></div>

          <div className="relative z-10 px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your <span className='text-[#159788]'> Dream Job </span> Today!</h1>
            <p className="text-base md:text-lg mb-8">Connecting Talent with Opportunity: Your Gateway to Career Success</p>

            <div className="flex flex-col sm:flex-row items-center bg-white text-gray-700 rounded-xl shadow-lg overflow-hidden max-w-full sm:max-w-4xl w-full mr-6 ">
              <input
                type="text"
                placeholder="Type Job Title"
                onChange={(e) => setQuery(e.target.value)}
                className="px-6 py-4 w-full focus:outline-none"
              />

              <button onClick={handleSearchJob} className="bg-[#159788] text-white px-8 py-4 sm:py-2 w-full sm:w-auto hover:bg-[#0f172ae6] flex items-center justify-center gap-3"><Search />Search Job</button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-8 mt-10 space-y-6 sm:space-y-0">
              <div className="text-center">
                <div className='flex gap-4 justify-center'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="#159788">
                      <path d="M11.0065 21.0001H9.60546C6.02021 21.0001 4.22759 21.0001 3.11379 19.8652C2 18.7302 2 16.9035 2 13.2501C2 9.59674 2 7.77004 3.11379 6.63508C4.22759 5.50012 6.02021 5.50012 9.60546 5.50012H13.4082C16.9934 5.50012 18.7861 5.50012 19.8999 6.63508C20.7568 7.50831 20.9544 8.79102 21 11.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M20.0167 20.0233L21.9998 22M21.0528 17.5265C21.0528 15.5789 19.4739 14 17.5263 14C15.5786 14 13.9998 15.5789 13.9998 17.5265C13.9998 19.4742 15.5786 21.0531 17.5263 21.0531C19.4739 21.0531 21.0528 19.4742 21.0528 17.5265Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold">25,850</div>
                </div>
                <div className="text-gray-300 ml-14">Jobs</div>
              </div>
              <div className="text-center">
                <div className='flex gap-4 justify-center'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="#159788">
                      <path d="M20.7739 18C21.5232 18 22.1192 17.5285 22.6543 16.8691C23.7498 15.5194 21.9512 14.4408 21.2652 13.9126C20.5679 13.3756 19.7893 13.0714 18.9999 13M17.9999 11C19.3806 11 20.4999 9.88071 20.4999 8.5C20.4999 7.11929 19.3806 6 17.9999 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M3.2259 18C2.47659 18 1.88061 17.5285 1.34548 16.8691C0.250028 15.5194 2.04861 14.4408 2.73458 13.9126C3.43191 13.3756 4.21052 13.0714 4.99994 13M5.49994 11C4.11923 11 2.99994 9.88071 2.99994 8.5C2.99994 7.11929 4.11923 6 5.49994 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M8.08368 15.1112C7.0619 15.743 4.38286 17.0331 6.01458 18.6474C6.81166 19.436 7.6994 20 8.8155 20H15.1843C16.3004 20 17.1881 19.436 17.9852 18.6474C19.6169 17.0331 16.9379 15.743 15.9161 15.1112C13.52 13.6296 10.4797 13.6296 8.08368 15.1112Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15.4999 7.5C15.4999 9.433 13.9329 11 11.9999 11C10.0669 11 8.49988 9.433 8.49988 7.5C8.49988 5.567 10.0669 4 11.9999 4C13.9329 4 15.4999 5.567 15.4999 7.5Z" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold">10,250</div>
                </div>
                <div className="text-gray-300 ml-14">Candidates</div>
              </div>
              <div className="text-center">
                <div className='flex gap-4 justify-center'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" color="#000000" fill="#159788">
                      <path d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8M8 8C8 10.2091 9.79086 12 12 12C14.2091 12 16 10.2091 16 8M8 8H4M16 8H20M15 16H9M17 16H19C20.1046 16 21 16.8954 21 18V18.8C21 19.9201 21 20.4802 20.782 20.908C20.5903 21.2843 20.2843 21.5903 19.908 21.782C19.4802 22 18.9201 22 17.8 22H6.2C5.07989 22 4.51984 22 4.09202 21.782C3.71569 21.5903 3.40973 21.2843 3.21799 20.908C3 20.4802 3 19.9201 3 18.8V18C3 16.8954 3.89543 16 5 16H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold">12,150</div>
                </div>
                <div className="text-gray-300 ml-14">Employers</div>
              </div>
            </div>

          </div>
        </section>
        <div>
          <div className='font-bold text-5xl my-7 mx-auto text-center '>
            Latest Jobs <span className='text-[#159788]'>Available</span>

          </div>
          <div className='mx-7'>
            <LatestJobCard />
          </div>
        </div>
        <div className='text-center mx-auto'>
          <Link to={"/jobs"}>
            <Button className="py-8 rounded-lg my-4 mb-6 bg-[#159788]"><span className='flex items-center gap-3'>Explore Jobs <ArrowRight /></span></Button>
          </Link>
        </div>
        <div className="bg-white text-gray-800">
          <div className="max-w-7xl py-8 flex flex-col lg:flex-row items-center justify-between">
            {/* Left Section with Images */}
            <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/03/about-center.png"
                alt="Group"
                className="w-[70%] mx-auto lg:ml-20 rounded-lg shadow-lg"
              />
            </div>
            {/* Right Section with Text */}
            <div className="w-full lg:w-1/2 lg:pl-16 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                <span className="text-gray-400">Millions Of Jobs.</span><br />
                Find The One That’s <span className="text-[#159788]">Right For You</span>
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600">
                Search all the open positions on the web. Get your own personalized salary estimate.
                <div>The right job is out there.</div>
              </p>
              <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
                <Link to={"/browse"}>
                  <Button className="py-8 rounded-lg bg-[#159788]"><span className='flex items-center gap-3'>Search Jobs <ArrowRight /></span></Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
