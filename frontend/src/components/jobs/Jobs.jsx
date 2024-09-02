import React, { useEffect, useState } from 'react';
import FilterJobs from './FilterJobs';
import JobsCard from './JobsCard';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { setSearchJob } from '@/features/jobSlice';

const Jobs = () => {
  useGetAllJobs();
  const { allJobs, filterJob, searchJob } = useSelector((state) => state.job);
  const [filterJobs, setFilterJobs] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let filteredJobs = allJobs;

    if (filterJob) {
      filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.description.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.location.toLowerCase().includes(filterJob.toLowerCase()) ||
          job.company.companyName.toLowerCase().includes(filterJob.toLowerCase())
        );
      });
    }

    setFilterJobs(filteredJobs);
  }, [allJobs, filterJob, searchJob]);

  useEffect(() => {
    return () => {
      dispatch(setSearchJob(''));
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col lg:flex-row mx-auto mt-8 px-4 sm:px-6 lg:px-8">
      {/* Left Filter Section */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg z-10 mb-4 lg:mb-4 lg:mt-[0px] ">
        <FilterJobs />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-3/4 lg:ml-6 lg:overflow-y-auto h-auto shadow-lg bg-white">
        {
          filterJobs.length === 0
            ? <span className='text-xl flex items-center justify-center py-10'>No Jobs Available</span>
            : filterJobs.map((job) => (
              <motion.div
                key={job?._id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <JobsCard job={job} />
              </motion.div>
            ))
        }
      </div>
    </div>
  );
};

export default Jobs;
