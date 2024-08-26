import React, { useEffect, useState } from 'react'
import FilterJobs from './FilterJobs'
import JobsCard from './JobsCard'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Jobs = () => {
  const { allJobs, filterJob } = useSelector((state) => state.job)
  // console.log(filterJob)
  const [filterJobs, setFilterJobs] = useState([])

  useEffect(() => {
    let filteredJobs = allJobs

    if (filterJob) {
      filteredJobs = allJobs.filter((job) => {
        return job.title.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.description.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.location.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.company.companyName.toLowerCase().includes(filterJob.toLowerCase())
        // job.location.toLowerCase().includes(filterJob.toLowerCase()) 
      })
    }

    setFilterJobs(filteredJobs)
  }, [allJobs, filterJob])

  return (
    <div className="flex flex-col lg:flex-row mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Left Filter Section */}
      <div className="w-full lg:w-1/4 lg:fixed lg:top-0 lg:left-0 lg:h-screen overflow-y-auto bg-white shadow-lg z-10 mb-4 lg:mb-0 lg:mt-[88px]">
        <FilterJobs />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-3/4 lg:ml-[25%] h-screen lg:overflow-y-auto shadow-lg bg-white">
        {/* in this i am using  framer-motion(package hai) for animation which i am putting on div  */}
        {
          filterJobs.length === 0
            ? <span className='text-xl flex items-center justify-center'>No Jobs Available</span>
            : filterJobs.map((job) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <JobsCard key={job?._id} job={job} />
              </motion.div>
            ))
        }
      </div>
    </div>
  )
}

export default Jobs
