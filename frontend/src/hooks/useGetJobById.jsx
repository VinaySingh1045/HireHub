import { setSingleJob } from '@/features/jobSlice';
import { JOB_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

const useGetJobById = (jobId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getJobById/${jobId}`, { withCredentials: true });
                // console.log(res.data.data);
                if (res.data.success) {
                    dispatch(setSingleJob(res.data.data));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob();
    }, [jobId, dispatch])

}

export default useGetJobById
