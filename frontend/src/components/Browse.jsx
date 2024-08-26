import React, { useEffect } from 'react'
import JobsCard from './jobs/JobsCard'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchJob } from '@/features/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { Button } from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Browse = () => {

  useGetAllJobs();
  const { allJobs } = useSelector(state => state.job)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      dispatch(setSearchJob(""))
    }
  }, [])


  return (
    <div>

      <div className='flex gap-10 items-center'>
        <Button onClick={() => navigate("/")} variant="outline" className="ml-7 w-fit flex justify-center items-center gap-2 text-gray-500 font-semibold border border-gray-300 hover:bg-gray-100">
          <ArrowLeft />
          <span>Back</span>
        </Button>
        <div className='text-2xl my-6 font-bold mx-6'>
          Search Results ({allJobs.length})
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-5'>
        {
          allJobs.length === 0
            ? <span className='text-xl flex items-center justify-center col-span-full'>No Jobs Available</span>
            : allJobs.map((job) => (
              <JobsCard key={job?._id} job={job} />
            ))
        }
      </div>

    </div>
  )
}

export default Browse
