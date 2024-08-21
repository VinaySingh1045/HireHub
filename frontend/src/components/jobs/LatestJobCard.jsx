import React from 'react'
import { useSelector } from 'react-redux'
import JobsCard from './JobsCard'

const LatestJobCard = () => {

    const { allJobs } = useSelector((state) => state.job)

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    allJobs.length === 0 ? <span className='text-xl text-center mx-auto '>No Jobs Available</span> :
                        allJobs.slice(0, 6).map((job) => (
                            <JobsCard key={job._id} job={job} />
                        ))
                }
            </div>

        </>
    )
}

export default LatestJobCard
