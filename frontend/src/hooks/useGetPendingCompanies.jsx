import { ADMIN_API_END_POINT } from '@/utlis/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGetPendingCompanies = () => {

    const [companies, setCompanies] = useState([]);

    // Fetch companies from API
    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                let res = await axios.get(`${ADMIN_API_END_POINT}/getPendingCompany`,
                    { withCredentials: true }
                )
                console.log(res.data.data)
                setCompanies(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();


    }, [])
    return { companies }

}

export default useGetPendingCompanies
