import React from 'react'
import JobsCard from './jobs/JobsCard'

const Browse = () => {

  const randomJobs = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div>
      <div className='text-2xl my-6 font-bold mx-6'>Search Results ({randomJobs.length})</div>
      {randomJobs.map((job, index) => (
        <div key={index}>
          <JobsCard />
        </div>
      ))}
    </div>
  )
}

export default Browse
