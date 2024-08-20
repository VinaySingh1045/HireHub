import React from 'react'
import FilterJobs from './FilterJobs'
import JobsCard from './JobsCard'
import LatestJobCard from './LatestJobCard'
import { useSelector } from 'react-redux'

const Jobs = () => {

  const { allJobs } = useSelector((state) => state.job)

  return (
    <div className=" mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-7">
        <div className="w-full lg:w-1/4">
          <FilterJobs />
        </div>
        <div className="w-full lg:w-3/4">
          {
            allJobs.length === 0 ? <span>No Jobs Avaialbe</span> :
              allJobs.map((job) => (
                <JobsCard key={job?._id} job={job} />
              ))
          }
        </div>
      </div>
    </div>
  )
}

export default Jobs
