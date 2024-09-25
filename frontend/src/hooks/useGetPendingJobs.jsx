import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetPendingJobs = () => {
    const [jobs, setJobs] = useState([]);

    // Fetch Jobs from API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                let res = await axios.get(`${ADMIN_API_END_POINT}/getPendingJob`,
                    { withCredentials: true }
                )
                // console.log(res.data.data)
                setJobs(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchJobs();
    }, [])
    return { jobs };
}

export default useGetPendingJobs
