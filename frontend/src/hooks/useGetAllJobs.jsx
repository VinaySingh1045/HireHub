import { setAllJobs } from '@/features/jobSlice'
import { JOB_API_END_POINT } from '@/utlis/constants'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'sonner'

const useGetAllJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        const fetchAllJobs = async () => {
            try {
                let res = await axios.get(`${JOB_API_END_POINT}/getAllJobs`,
                    {
                        withCredentials: true
                    }
                )
                console.log(res.data.data)
                if(res.data.success){
                    dispatch(setAllJobs(res.data.data))
                    // toast.success(res.data.success)
                }

            } catch (error) {
                console.log(error)
            }
        }
        fetchAllJobs();

    }, [])

}

export default useGetAllJobs
